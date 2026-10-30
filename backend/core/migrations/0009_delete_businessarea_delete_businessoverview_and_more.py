from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0008_delete_aboutcompany_delete_boardmember_and_more"),
        ("business", "0001_initial"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.DeleteModel(
                    name="BusinessArea",
                ),
                migrations.DeleteModel(
                    name="BusinessOverview",
                ),
                migrations.DeleteModel(
                    name="BusinessPillar",
                ),
            ],
        ),
    ]