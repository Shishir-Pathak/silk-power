from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0009_delete_businessarea_delete_businessoverview_and_more"),
        ("sustainability", "0001_initial"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.DeleteModel(
                    name="SustainabilityGalleryItem",
                ),
                migrations.DeleteModel(
                    name="SustainabilityInitiative",
                ),
            ],
        ),
    ]