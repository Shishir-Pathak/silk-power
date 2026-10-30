from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0007_noticesubscriber"),
        ("about", "0001_initial"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.DeleteModel(
                    name="AboutCompany",
                ),
                migrations.DeleteModel(
                    name="BoardMember",
                ),
                migrations.DeleteModel(
                    name="CompanyMilestone",
                ),
                migrations.DeleteModel(
                    name="FoundingPrinciple",
                ),
            ],
        ),
    ]