from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("core", "0008_delete_aboutcompany_delete_boardmember_and_more"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.CreateModel(
                    name="BusinessArea",
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
                            "image",
                            models.ImageField(
                                blank=True,
                                null=True,
                                upload_to="business/areas/",
                            ),
                        ),
                        ("image_url", models.URLField(blank=True)),
                        (
                            "icon",
                            models.CharField(
                                choices=[
                                    ("hydropower", "Hydropower"),
                                    ("renewable", "Renewable Energy"),
                                    ("infrastructure", "Power Infrastructure"),
                                    ("community", "Community & Shared Value"),
                                ],
                                default="hydropower",
                                max_length=30,
                            ),
                        ),
                        ("order", models.PositiveIntegerField(default=0)),
                        ("is_active", models.BooleanField(default=True)),
                    ],
                    options={
                        "db_table": "core_businessarea",
                        "ordering": ["order"],
                    },
                ),

                migrations.CreateModel(
                    name="BusinessOverview",
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
                        (
                            "title",
                            models.CharField(
                                default="Building a Cleaner, Stronger Nepal",
                                max_length=255,
                            ),
                        ),
                        ("description", models.TextField()),
                        (
                            "core_business_label",
                            models.CharField(
                                default="Our Core Business",
                                max_length=100,
                            ),
                        ),
                        (
                            "core_business_title",
                            models.CharField(
                                default="Hydropower Development and Generation",
                                max_length=255,
                            ),
                        ),
                        ("core_business_description", models.TextField()),
                        (
                            "image",
                            models.ImageField(
                                blank=True,
                                null=True,
                                upload_to="business/",
                            ),
                        ),
                        ("image_url", models.URLField(blank=True)),
                    ],
                    options={
                        "verbose_name": "Business Overview",
                        "verbose_name_plural": "Business Overview",
                        "db_table": "core_businessoverview",
                    },
                ),

                migrations.CreateModel(
                    name="BusinessPillar",
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
                        ("title", models.CharField(max_length=100)),
                        ("description", models.TextField()),
                        (
                            "icon",
                            models.CharField(
                                choices=[
                                    ("develop", "Develop"),
                                    ("build", "Build"),
                                    ("operate", "Operate"),
                                    ("value", "Create Value"),
                                ],
                                default="develop",
                                max_length=30,
                            ),
                        ),
                        ("order", models.PositiveIntegerField(default=0)),
                        ("is_active", models.BooleanField(default=True)),
                    ],
                    options={
                        "db_table": "core_businesspillar",
                        "ordering": ["order"],
                    },
                ),
            ],
        ),
    ]