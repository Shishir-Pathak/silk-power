from django.core.management.base import BaseCommand

from core.models import (
    BusinessOverview,
    BusinessPillar,
    BusinessArea,
)


class Command(BaseCommand):
    help = "Import existing Our Business frontend content"

    def handle(self, *args, **options):
        # -------------------------------------------------
        # BUSINESS OVERVIEW
        # -------------------------------------------------
        BusinessOverview.objects.all().delete()

        BusinessOverview.objects.create(
            title="Building a Cleaner, Stronger Nepal",
            description=(
                "At Silk Power Limited, our business is centered on the "
                "development, construction, and operation of hydropower and "
                "renewable energy projects in Nepal. We harness the country's "
                "abundant water resources to generate clean, reliable, and "
                "affordable electricity — contributing to a more secure and "
                "sustainable energy future."
            ),
            core_business_label="Our Core Business",
            core_business_title="Hydropower Development and Generation",
            core_business_description=(
                "We focus on run-of-the-river hydropower projects that harness "
                "Nepal's natural rivers to produce clean energy with minimal "
                "environmental impact. Our flagship project, the 24.8 MW "
                "Luja Khola Hydropower Project, is currently under construction "
                "in Solukhumbu District and will supply electricity to the "
                "national grid under a long-term Power Purchase Agreement with "
                "the Nepal Electricity Authority."
            ),
            image_url=(
                "https://images.unsplash.com/"
                "photo-1544256718-3bcf237f3974"
                "?q=80&w=2070&auto=format&fit=crop"
            ),
        )

        # -------------------------------------------------
        # BUSINESS PILLARS
        # -------------------------------------------------
        BusinessPillar.objects.all().delete()

        pillars = [
            {
                "title": "Develop",
                "description": (
                    "Identify and develop viable hydropower and renewable "
                    "energy projects."
                ),
                "icon": "develop",
                "order": 1,
            },
            {
                "title": "Build",
                "description": (
                    "Execute projects with high standards of engineering, "
                    "safety, and environmental care."
                ),
                "icon": "build",
                "order": 2,
            },
            {
                "title": "Operate",
                "description": (
                    "Generate clean and reliable electricity for the "
                    "national grid."
                ),
                "icon": "operate",
                "order": 3,
            },
            {
                "title": "Create Value",
                "description": (
                    "Deliver long-term value for our shareholders, partners, "
                    "and local communities."
                ),
                "icon": "value",
                "order": 4,
            },
        ]

        for pillar in pillars:
            BusinessPillar.objects.create(**pillar)

        # -------------------------------------------------
        # BUSINESS AREAS
        # -------------------------------------------------
        BusinessArea.objects.all().delete()

        areas = [
            {
                "title": "Hydropower",
                "description": (
                    "Development, construction and operation of "
                    "run-of-the-river hydropower projects."
                ),
                "image_url": (
                    "https://images.unsplash.com/"
                    "photo-1464822759023-fed622ff2c3b"
                    "?q=80&w=2070&auto=format&fit=crop"
                ),
                "icon": "hydropower",
                "order": 1,
            },
            {
                "title": "Renewable Energy",
                "description": (
                    "Exploring opportunities in solar, wind, and other "
                    "clean energy solutions."
                ),
                "image_url": (
                    "https://images.unsplash.com/"
                    "photo-1508514177221-188b1cf16e9d"
                    "?q=80&w=2072&auto=format&fit=crop"
                ),
                "icon": "renewable",
                "order": 2,
            },
            {
                "title": "Power Infrastructure",
                "description": (
                    "Supporting transmission and grid connectivity for "
                    "reliable power supply."
                ),
                "image_url": (
                    "https://images.unsplash.com/"
                    "photo-1473341304170-971dccb5ac1e"
                    "?q=80&w=2070&auto=format&fit=crop"
                ),
                "icon": "infrastructure",
                "order": 3,
            },
            {
                "title": "Community & Shared Value",
                "description": (
                    "Creating local employment, investing in communities, "
                    "and supporting inclusive growth."
                ),
                "image_url": (
                    "https://images.unsplash.com/"
                    "photo-1517048676732-d65bc937f952"
                    "?q=80&w=2070&auto=format&fit=crop"
                ),
                "icon": "community",
                "order": 4,
            },
        ]

        for area in areas:
            BusinessArea.objects.create(**area)

        self.stdout.write(
            self.style.SUCCESS(
                "Imported 1 business overview, "
                "4 business pillars and 4 business areas."
            )
        )