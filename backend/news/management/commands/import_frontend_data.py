import json
import re
from datetime import datetime
from pathlib import Path

from django.core.management.base import BaseCommand
from django.utils.text import slugify

from news.models import (
    Notice,
    NoticeAgenda,
    MediaArticle,
    ArticleParagraph,
    ArticleHighlight,
    GalleryImage,
    MediaVideo,
)


class Command(BaseCommand):
    help = "Import existing notices and media data from the React frontend."

    def extract_array(self, text, variable_name):
        """
        Extract an exported JavaScript array and convert the simple
        object syntax used by the project's data files into JSON.
        """
        marker = f"export const {variable_name} ="
        start = text.find(marker)

        if start == -1:
            raise ValueError(f"Could not find {variable_name}")

        start = text.find("[", start)

        depth = 0
        in_string = False
        quote = None
        escaped = False
        end = None

        for i in range(start, len(text)):
            char = text[i]

            if in_string:
                if escaped:
                    escaped = False
                elif char == "\\":
                    escaped = True
                elif char == quote:
                    in_string = False
                continue

            if char in ("'", '"'):
                in_string = True
                quote = char
                continue

            if char == "[":
                depth += 1
            elif char == "]":
                depth -= 1

                if depth == 0:
                    end = i + 1
                    break

        if end is None:
            raise ValueError(f"Could not parse {variable_name}")

        js = text[start:end]

        # Quote unquoted JavaScript object keys.
        js = re.sub(
            r'([{,]\s*)([A-Za-z_$][\w$]*)(\s*:)',
            r'\1"\2"\3',
            js,
        )

        # Convert single-quoted JS strings to JSON-compatible strings.
        # The current project data uses simple string values.
        js = re.sub(
            r"'((?:\\.|[^'\\])*)'",
            lambda m: json.dumps(
                m.group(1)
                .replace("\\'", "'")
                .replace("\\\\", "\\")
            ),
            js,
        )

        # Remove trailing commas.
        js = re.sub(r",(\s*[}\]])", r"\1", js)

        return json.loads(js)

    def parse_date(self, value):
        if not value:
            return None

        formats = [
            "%b %d, %Y",
            "%B %d, %Y",
            "%B %Y",
        ]

        for date_format in formats:
            try:
                return datetime.strptime(
                    value.title(),
                    date_format
                ).date()
            except ValueError:
                continue

        raise ValueError(f"Unsupported date: {value}")

    def handle(self, *args, **options):
        frontend = Path(__file__).resolve().parents[4] / "src"

        notices_file = (
            frontend /
            "components/notices/noticesData.js"
        )

        media_file = (
            frontend /
            "components/media/mediaData.js"
        )

        if not notices_file.exists():
            self.stderr.write(
                self.style.ERROR(
                    f"Notices file not found: {notices_file}"
                )
            )
            return

        if not media_file.exists():
            self.stderr.write(
                self.style.ERROR(
                    f"Media file not found: {media_file}"
                )
            )
            return

        notices_text = notices_file.read_text(encoding="utf-8")
        media_text = media_file.read_text(encoding="utf-8")

        notices = self.extract_array(
            notices_text,
            "noticesData"
        )

        articles = self.extract_array(
            media_text,
            "mediaArticles"
        )

        gallery = self.extract_array(
            media_text,
            "photoGallery"
        )

        videos = self.extract_array(
            media_text,
            "mediaVideos"
        )

        # -------------------------
        # Notices
        # -------------------------

        for item in notices:
            details = item.get("details", {})

            notice, _ = Notice.objects.update_or_create(
                slug=item["id"],
                defaults={
                    "title": item["title"],
                    "category": item["category"],
                    "published_date": self.parse_date(
                        item["date"]
                    ),
                    "reference_number": item.get(
                        "refNo",
                        ""
                    ),
                    "status": item.get(
                        "status",
                        "Active"
                    ),
                    "urgent": item.get(
                        "urgent",
                        False
                    ),
                    "summary": item.get(
                        "summary",
                        ""
                    ),
                    "meeting_time": details.get(
                        "meetingTime",
                        ""
                    ),
                    "venue": details.get(
                        "venue",
                        ""
                    ),
                    "signatory": details.get(
                        "signatory",
                        ""
                    ),
                    "officer": details.get(
                        "officer",
                        ""
                    ),
                    "book_closure_note": details.get(
                        "bookClosureNote",
                        ""
                    ),
                }
            )

            notice.agendas.all().delete()

            for order, agenda in enumerate(
                details.get("agendas", []),
                start=1
            ):
                NoticeAgenda.objects.create(
                    notice=notice,
                    text=agenda,
                    order=order,
                )

        # -------------------------
        # Media articles
        # -------------------------

        for item in articles:
            article, _ = MediaArticle.objects.update_or_create(
                slug=item["id"],
                defaults={
                    "title": item["title"],
                    "category": item["category"],
                    "published_date": self.parse_date(
                        item["date"]
                    ),
                    "read_time": item.get(
                        "readTime",
                        ""
                    ),
                    "featured": item.get(
                        "featured",
                        False
                    ),
                    "image_url": item.get(
                        "image",
                        ""
                    ),
                    "excerpt": item.get(
                        "excerpt",
                        ""
                    ),
                    "author": item.get(
                        "author",
                        ""
                    ),
                }
            )

            article.content.all().delete()
            article.highlights.all().delete()

            for order, paragraph in enumerate(
                item.get("content", []),
                start=1
            ):
                ArticleParagraph.objects.create(
                    article=article,
                    text=paragraph,
                    order=order,
                )

            for order, highlight in enumerate(
                item.get("highlights", []),
                start=1
            ):
                ArticleHighlight.objects.create(
                    article=article,
                    text=highlight,
                    order=order,
                )

        # -------------------------
        # Gallery
        # -------------------------

        GalleryImage.objects.all().delete()

        for order, item in enumerate(gallery, start=1):
            GalleryImage.objects.create(
                title=item["title"],
                category=item.get("category", ""),
                image_url=item.get("src", ""),
                caption=item.get("caption", ""),
                order=order,
            )

        # -------------------------
        # Videos
        # -------------------------

        MediaVideo.objects.all().delete()

        for order, item in enumerate(videos, start=1):
            MediaVideo.objects.create(
                title=item["title"],
                duration=item.get("duration", ""),
                published_date=self.parse_date(
                    item.get("date")
                ),
                thumbnail_url=item.get(
                    "thumbnail",
                    ""
                ),
                description=item.get(
                    "description",
                    ""
                ),
                order=order,
            )

        self.stdout.write(
            self.style.SUCCESS(
                f"Import complete: "
                f"{len(notices)} notices, "
                f"{len(articles)} articles, "
                f"{len(gallery)} gallery images, "
                f"{len(videos)} videos."
            )
        )