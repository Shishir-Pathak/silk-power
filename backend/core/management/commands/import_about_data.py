from django.core.management.base import BaseCommand

from core.models import (
    AboutCompany,
    FoundingPrinciple,
    CompanyMilestone,
    BoardMember,
)


class Command(BaseCommand):
    help = "Import existing About Us frontend data"

    def handle(self, *args, **options):

        # ---------------------------------
        # Who We Are
        # ---------------------------------
        AboutCompany.objects.all().delete()

        AboutCompany.objects.create(
            title="Who We Are",

            paragraph_one=(
                "Silk Power Limited is a Nepali hydropower and renewable "
                "energy company committed to harnessing the country's abundant "
                "water resources to generate clean, reliable, and affordable "
                "electricity."
            ),

            paragraph_two=(
                "Headquartered in Madhyapur Thimi, Bhaktapur, we are currently "
                "developing the 24.8 MW Luja Khola Hydropower Project in "
                "Solukhumbu — a run-of-the-river scheme that will deliver power "
                "to the national grid under a long-term agreement with the "
                "Nepal Electricity Authority."
            ),

            paragraph_three=(
                "Born from a promoter group with deep, multi-project experience "
                "in Nepal's power sector, we believe that Nepal's rivers, if "
                "developed responsibly, can power the nation's homes and "
                "industries for generations while creating lasting value for "
                "local communities and shareholders alike."
            ),

            commitment_label="Our Commitment",
            commitment_line_one="BUILDING",
            commitment_line_two="A SUSTAINABLE",
            commitment_line_three="TOMORROW",

            image_url=(
                "https://images.unsplash.com/photo-1544256718-3bcf237f3974"
                "?q=80&w=2070&auto=format&fit=crop"
            ),
        )

        # ---------------------------------
        # Founding Principles
        # ---------------------------------
        FoundingPrinciple.objects.all().delete()

        principles = [
            {
                "title": "Do it right, not just fast.",
                "description": (
                    "Every project moves forward only after full regulatory "
                    "review is properly completed."
                ),
                "icon": "shield",
                "order": 1,
            },
            {
                "title": "Secure the future before building it.",
                "description": (
                    "Long-term revenue certainty is locked in early."
                ),
                "icon": "security",
                "order": 2,
            },
            {
                "title": "Share the benefit locally.",
                "description": (
                    "A meaningful share of ownership is reserved for the "
                    "general public, project-affected residents, and employees."
                ),
                "icon": "community",
                "order": 3,
            },
            {
                "title": "Build for the long term.",
                "description": (
                    "We are structured to operate, reinvest, and grow for "
                    "decades, not to build and exit."
                ),
                "icon": "growth",
                "order": 4,
            },
        ]

        for principle in principles:
            FoundingPrinciple.objects.create(
                **principle,
                is_active=True,
            )

        # ---------------------------------
        # Our History
        # ---------------------------------
        CompanyMilestone.objects.all().delete()

        milestones = [
            {
                "year": "2019",
                "month": "September",
                "title": "Silk Power Private Limited registered",
                "date": "",
                "order": 1,
            },
            {
                "year": "2019",
                "month": "January",
                "title": "Power Purchase Agreement signed with NEA",
                "date": "",
                "order": 2,
            },
            {
                "year": "2019",
                "month": "August",
                "title": "Converted to Limited company status",
                "date": "2076/04/30",
                "order": 3,
            },
            {
                "year": "2023",
                "month": "January",
                "title": "Construction license granted",
                "date": "",
                "order": 4,
            },
            {
                "year": "2024",
                "month": "May",
                "title": "CARE-NP BB- credit rating reaffirmed",
                "date": "",
                "order": 5,
            },
            {
                "year": "2026",
                "month": "February",
                "title": "Target Commercial Operation Date (RCOD)",
                "date": "",
                "order": 6,
            },
        ]

        for milestone in milestones:
            CompanyMilestone.objects.create(
                **milestone,
                is_active=True,
            )

        # ---------------------------------
        # Board of Directors
        # ---------------------------------
        BoardMember.objects.all().delete()

        directors = [
            {
                "name": "Mr. Kumar Kharel",
                "role": "Chairman",
                "order": 1,
            },
            {
                "name": "Mr. Kunal Kayal",
                "role": "Director",
                "order": 2,
            },
            {
                "name": "Mr. Mukti Bodh Neupane",
                "role": "Director",
                "order": 3,
            },
        ]

        for director in directors:
            BoardMember.objects.create(
                **director,
                is_active=True,
            )

        self.stdout.write(
            self.style.SUCCESS(
                "Imported About Company, 4 founding principles, "
                "6 milestones and 3 board members."
            )
        )