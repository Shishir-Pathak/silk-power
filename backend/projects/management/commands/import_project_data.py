from django.core.management.base import BaseCommand

from projects.models import (
    Project,
    ProjectSpecification,
    ProjectGalleryImage,
)


class Command(BaseCommand):
    help = "Import existing Luja Khola project data from the React frontend"

    def handle(self, *args, **options):

        project, created = Project.objects.update_or_create(
            slug="luja-khola-hydropower-project",
            defaults={
                "name": "Luja Khola Hydropower Project",
                "status": "Under Construction",
                "description": (
                    "The 24.8 MW Luja Khola Hydropower Project is a "
                    "run-of-the-river scheme located in Solukhumbu District, "
                    "Koshi Province. The project will harness the clean and "
                    "renewable energy potential of the Luja Khola and supply "
                    "electricity to the national grid under a long-term Power "
                    "Purchase Agreement with the Nepal Electricity Authority. "
                    "The project is currently under construction and targeted "
                    "for commercial operation in February 2026."
                ),
                "location": "Solukhumbu District",
                "capacity": "24.824 MW",
                "featured_image_url": (
                    "https://images.unsplash.com/photo-1544256718-3bcf237f3974"
                    "?q=80&w=2070&auto=format&fit=crop"
                ),
                "image_caption": "Solukhumbu, Nepal",
                "is_active": True,
                "order": 1,
            },
        )

        specifications = [
            ("Type", "Run-of-the-River", "left", 1),
            ("Location", "Solukhumbu District", "left", 2),
            ("Installed Capacity", "24.824 MW", "left", 3),
            ("Design Discharge", "3.30 m³/s", "left", 4),
            ("Gross Head", "950 m", "left", 5),
            ("Net Head", "920 m", "left", 6),

            (
                "Offtaker",
                "Nepal Electricity Authority",
                "right",
                1,
            ),
            (
                "Development Mechanism",
                "BOOT (Build, Own, Operate, Transfer)",
                "right",
                2,
            ),
            (
                "Total Project Cost",
                "NPR 4,400 million (approx.)",
                "right",
                3,
            ),
            (
                "Transmission",
                "33 km, 132kV line to national grid",
                "right",
                4,
            ),
            (
                "Construction License",
                "Granted (January 2023)",
                "right",
                5,
            ),
            (
                "Generation License",
                "35 years (from January 2023)",
                "right",
                6,
            ),
            (
                "Target Commercial Operation Date",
                "2026",
                "right",
                7,
            ),
        ]

        project.specifications.all().delete()

        for parameter, details, column, order in specifications:
            ProjectSpecification.objects.create(
                project=project,
                parameter=parameter,
                details=details,
                column=column,
                order=order,
            )

        gallery_urls = [
            "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
        ]

        project.gallery.all().delete()

        for index, image_url in enumerate(gallery_urls, start=1):
            ProjectGalleryImage.objects.create(
                project=project,
                image_url=image_url,
                caption=f"Luja Khola Project Gallery {index}",
                order=index,
            )

        action = "Created" if created else "Updated"

        self.stdout.write(
            self.style.SUCCESS(
                f"{action} Luja Khola Hydropower Project successfully."
            )
        )

        self.stdout.write(
            self.style.SUCCESS(
                f"Imported {len(specifications)} specifications and "
                f"{len(gallery_urls)} gallery images."
            )
        )