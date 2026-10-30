from django.core.management.base import BaseCommand

from sustainability.models import (
    SustainabilityInitiative,
    SustainabilityGalleryItem,
)


class Command(BaseCommand):
    help = "Import existing Sustainability frontend content"

    def handle(self, *args, **options):
        # -------------------------------------------------
        # SUSTAINABILITY INITIATIVES
        # -------------------------------------------------
        SustainabilityInitiative.objects.all().delete()

        initiatives = [
            {
                "title": "Environmental Initiatives",
                "description": (
                    "We are committed to minimizing our environmental footprint "
                    "through responsible project design, compliance with national "
                    "regulations, and continuous monitoring of environmental impacts. "
                    "Our goal is to protect Nepal’s unique biodiversity for future "
                    "generations."
                ),
                "icon": "environment",
                "order": 1,
            },
            {
                "title": "Water Resource Management",
                "description": (
                    "We develop run-of-the-river projects that utilize water "
                    "responsibly while maintaining environmental flows. We work to "
                    "ensure the sustainable use of water resources, balancing clean "
                    "energy generation with the health of our rivers and ecosystems."
                ),
                "icon": "water",
                "order": 2,
            },
            {
                "title": "Community Benefits",
                "description": (
                    "We believe in shared progress. Our projects create local "
                    "employment, support infrastructure development, and contribute "
                    "to the social and economic well-being of project-affected "
                    "communities through inclusive and transparent engagement."
                ),
                "icon": "community",
                "order": 3,
            },
            {
                "title": "Renewable Energy Focus",
                "description": (
                    "Hydropower is at the core of a clean and resilient energy future "
                    "for Nepal. We are committed to expanding renewable energy "
                    "generation, supporting the country’s transition to a low-carbon "
                    "economy, and helping build a more energy-secure tomorrow."
                ),
                "icon": "energy",
                "order": 4,
            },
        ]

        for initiative in initiatives:
            SustainabilityInitiative.objects.create(**initiative)

        # -------------------------------------------------
        # SUSTAINABILITY GALLERY
        # -------------------------------------------------
        SustainabilityGalleryItem.objects.all().delete()

        gallery_items = [
            {
                "title": "HEALTHY RIVERS",
                "subtitle": "BRIGHTER TOMORROWS",
                "alt_text": "Healthy river",
                "image_url": (
                    "https://images.unsplash.com/"
                    "photo-1544256718-3bcf237f3974"
                    "?q=80&w=1200&auto=format&fit=crop"
                ),
                "order": 1,
            },
            {
                "title": "STRONGER",
                "subtitle": "COMMUNITIES",
                "alt_text": "Stronger communities",
                "image_url": (
                    "https://images.unsplash.com/"
                    "photo-1544735716-392fe2489ffa"
                    "?q=80&w=1200&auto=format&fit=crop"
                ),
                "order": 2,
            },
            {
                "title": "CLEAN ENERGY",
                "subtitle": "LASTING IMPACT",
                "alt_text": "Clean energy",
                "image_url": (
                    "https://images.unsplash.com/"
                    "photo-1473341304170-971dccb5ac1e"
                    "?q=80&w=1200&auto=format&fit=crop"
                ),
                "order": 3,
            },
            {
                "title": "A GREENER",
                "subtitle": "NEPAL",
                "alt_text": "A greener Nepal",
                "image_url": (
                    "https://images.unsplash.com/"
                    "photo-1517048676732-d65bc937f952"
                    "?q=80&w=1200&auto=format&fit=crop"
                ),
                "order": 4,
            },
        ]

        for item in gallery_items:
            SustainabilityGalleryItem.objects.create(**item)

        self.stdout.write(
            self.style.SUCCESS(
                "Imported 4 sustainability initiatives "
                "and 4 sustainability gallery items."
            )
        )