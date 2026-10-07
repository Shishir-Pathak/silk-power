from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("core", "0009_delete_businessarea_delete_businessoverview_and_more"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.CreateModel(
                    name="SustainabilityGalleryItem",
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
                        ("title", models.CharField(max_length=200)),
                        ("subtitle", models.CharField(blank=True, max_length=200)),
                        ("alt_text", models.CharField(blank=True, max_length=200)),
                        (
                            "image",
                            models.ImageField(
                                blank=True,
                                null=True,
                                upload_to="sustainability/",
                            ),
                        ),
                        ("image_url", models.URLField(blank=True)),
                        ("order", models.PositiveIntegerField(default=0)),
                        ("is_active", models.BooleanField(default=True)),
                    ],
                    options={
                        "db_table": "core_sustainabilitygalleryitem",
                        "ordering": ["order"],
                    },
                ),
                migrations.CreateModel(
                    name="SustainabilityInitiative",
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
                        ("title", models.CharField(max_length=200)),
                        ("description", models.TextField()),
                        (
                            "icon",
                            models.CharField(
                                choices=[
                                    ("environment", "Environmental"),
                                    ("water", "Water"),
                                    ("community", "Community"),
                                    ("energy", "Renewable Energy"),
                                ],
                                default="environment",
                                max_length=30,
                            ),
                        ),
                        ("order", models.PositiveIntegerField(default=0)),
                        ("is_active", models.BooleanField(default=True)),
                    ],
                    options={
                        "db_table": "core_sustainabilityinitiative",
                        "ordering": ["order"],
                    },
                ),
            ],
        ),
    ]