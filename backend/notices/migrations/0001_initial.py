import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ("news", "0002_remove_noticeagenda_notice_delete_notice_and_more"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.CreateModel(
                    name="Notice",
                    fields=[
                        (
                            "id",
                            models.BigAutoField(
                                auto_created=True,
                                primary_key=True,
                                serialize=False,
                                verbose_name="ID",
                            ),
                        ),
                        ("title", models.CharField(max_length=300)),
                        (
                            "slug",
                            models.SlugField(
                                blank=True,
                                max_length=350,
                                unique=True,
                            ),
                        ),
                        ("category", models.CharField(max_length=100)),
                        ("published_date", models.DateField()),
                        (
                            "reference_number",
                            models.CharField(blank=True, max_length=100),
                        ),
                        (
                            "status",
                            models.CharField(
                                choices=[
                                    ("Active", "Active"),
                                    ("Archived", "Archived"),
                                ],
                                default="Active",
                                max_length=20,
                            ),
                        ),
                        ("urgent", models.BooleanField(default=False)),
                        ("summary", models.TextField()),
                        (
                            "meeting_time",
                            models.CharField(blank=True, max_length=255),
                        ),
                        (
                            "venue",
                            models.CharField(blank=True, max_length=500),
                        ),
                        (
                            "signatory",
                            models.CharField(blank=True, max_length=255),
                        ),
                        (
                            "officer",
                            models.CharField(blank=True, max_length=255),
                        ),
                        (
                            "book_closure_note",
                            models.TextField(blank=True),
                        ),
                        (
                            "document",
                            models.FileField(
                                blank=True,
                                null=True,
                                upload_to="notices/",
                            ),
                        ),
                        ("created_at", models.DateTimeField(auto_now_add=True)),
                        ("updated_at", models.DateTimeField(auto_now=True)),
                    ],
                    options={
                        "db_table": "news_notice",
                        "ordering": ["-published_date"],
                    },
                ),
                migrations.CreateModel(
                    name="NoticeAgenda",
                    fields=[
                        (
                            "id",
                            models.BigAutoField(
                                auto_created=True,
                                primary_key=True,
                                serialize=False,
                                verbose_name="ID",
                            ),
                        ),
                        ("text", models.TextField()),
                        ("order", models.PositiveIntegerField(default=0)),
                        (
                            "notice",
                            models.ForeignKey(
                                on_delete=django.db.models.deletion.CASCADE,
                                related_name="agendas",
                                to="notices.notice",
                            ),
                        ),
                    ],
                    options={
                        "db_table": "news_noticeagenda",
                        "ordering": ["order"],
                    },
                ),
            ],
        ),
    ]