from django.core.management.base import BaseCommand

from investor.models import (
    InvestorStat,
    InvestorDocument,
    InvestorFAQ,
)


class Command(BaseCommand):
    help = "Import existing Investor Relations frontend data"

    def handle(self, *args, **options):

        # -------------------------
        # Investor Stats
        # -------------------------
        stats = [
            {
                "value": "NPR 1.15 Billion",
                "label": "Authorized Capital",
                "icon": "capital",
                "order": 1,
            },
            {
                "value": "NPR 100",
                "label": "Par Value per Share",
                "icon": "share",
                "order": 2,
            },
            {
                "value": "CARE-NP BB-",
                "label": "Credit Rating\n(CARE Ratings Nepal)",
                "icon": "rating",
                "order": 3,
            },
            {
                "value": "NPR 3,300M",
                "label": "Long-term Debt\n(As per latest disclosure)",
                "icon": "debt",
                "order": 4,
            },
        ]

        InvestorStat.objects.all().delete()

        for stat in stats:
            InvestorStat.objects.create(
                value=stat["value"],
                label=stat["label"],
                icon=stat["icon"],
                order=stat["order"],
                is_active=True,
            )

        # -------------------------
        # Investor Documents
        # -------------------------
        documents = [
            {
                "title": "Annual Report 2024",
                "display_date": "April 30, 2025",
                "order": 1,
            },
            {
                "title": "Financial Statements (Q4 FY 2080/81)",
                "display_date": "January 15, 2025",
                "order": 2,
            },
            {
                "title": "Notice of Annual General Meeting",
                "display_date": "August 28, 2025",
                "order": 3,
            },
            {
                "title": "Corporate Governance Report",
                "display_date": "April 30, 2025",
                "order": 4,
            },
            {
                "title": "Credit Rating Report (CARE-NP)",
                "display_date": "May 2024",
                "order": 5,
            },
        ]

        InvestorDocument.objects.all().delete()

        for document in documents:
            InvestorDocument.objects.create(
                title=document["title"],
                display_date=document["display_date"],
                order=document["order"],
                is_active=True,
            )

        # -------------------------
        # Investor FAQs
        # -------------------------
        faqs = [
            {
                "question": "What is the current shareholding structure of Silk Power Limited?",
                "answer": "The shareholding structure consists of 80% Promoter Group and 20% Public.",
                "order": 1,
            },
            {
                "question": "How can I invest in Silk Power Limited?",
                "answer": "Please contact our investor relations team for detailed information on investment opportunities.",
                "order": 2,
            },
            {
                "question": "What is the credit rating of the company?",
                "answer": "Silk Power Limited has a CARE-NP BB- credit rating from CARE Ratings Nepal.",
                "order": 3,
            },
            {
                "question": "Where is the project located?",
                "answer": "The Luja Khola Hydropower Project is located in Solukhumbu District, Nepal.",
                "order": 4,
            },
            {
                "question": "Who is the offtaker for the project?",
                "answer": "Nepal Electricity Authority (NEA) is the sole offtaker under a long-term PPA.",
                "order": 5,
            },
        ]

        InvestorFAQ.objects.all().delete()

        for faq in faqs:
            InvestorFAQ.objects.create(
                question=faq["question"],
                answer=faq["answer"],
                order=faq["order"],
                is_active=True,
            )

        self.stdout.write(
            self.style.SUCCESS(
                f"Imported {len(stats)} investor stats, "
                f"{len(documents)} documents and "
                f"{len(faqs)} FAQs."
            )
        )


