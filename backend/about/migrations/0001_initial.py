from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("core", "0007_noticesubscriber"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.CreateModel(
                    name="AboutCompany",
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
                                default="Who We Are",
                                max_length=200,
                            ),
                        ),
                        ("paragraph_one", models.TextField()),
                        ("paragraph_two", models.TextField()),
                        ("paragraph_three", models.TextField(blank=True)),
                        (
                            "commitment_label",
                            models.CharField(
                                default="Our Commitment",
                                max_length=100,
                            ),
                        ),
                        (
                            "commitment_line_one",
                            models.CharField(
                                default="BUILDING",
                                max_length=100,
                            ),
                        ),
                        (
                            "commitment_line_two",
                            models.CharField(
                                default="A SUSTAINABLE",
                                max_length=100,
                            ),
                        ),
                        (
                            "commitment_line_three",
                            models.CharField(
                                default="TOMORROW",
                                max_length=100,
                            ),
                        ),
                        (
                            "image",
                            models.ImageField(
                                blank=True,
                                null=True,
                                upload_to="about/",
                            ),
                        ),
                        ("image_url", models.URLField(blank=True)),
                    ],
                    options={
                        "verbose_name": "About Company",
                        "verbose_name_plural": "About Company",
                        "db_table": "core_aboutcompany",
                    },
                ),

                migrations.CreateModel(
                    name="BoardMember",
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
                        ("name", models.CharField(max_length=200)),
                        ("role", models.CharField(max_length=100)),
                        (
                            "photo",
                            models.ImageField(
                                blank=True,
                                null=True,
                                upload_to="about/board/",
                            ),
                        ),
                        ("order", models.PositiveIntegerField(default=0)),
                        ("is_active", models.BooleanField(default=True)),
                    ],
                    options={
                        "db_table": "core_boardmember",
                        "ordering": ["order"],
                    },
                ),

                migrations.CreateModel(
                    name="CompanyMilestone",
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
                        ("year", models.CharField(max_length=20)),
                        (
                            "month",
                            models.CharField(
                                blank=True,
                                max_length=50,
                            ),
                        ),
                        (
                            "date",
                            models.CharField(
                                blank=True,
                                max_length=50,
                            ),
                        ),
                        ("title", models.CharField(max_length=255)),
                        ("order", models.PositiveIntegerField(default=0)),
                        ("is_active", models.BooleanField(default=True)),
                    ],
                    options={
                        "db_table": "core_companymilestone",
                        "ordering": ["order"],
                    },
                ),

                migrations.CreateModel(
                    name="FoundingPrinciple",
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
                        ("title", models.CharField(max_length=255)),
                        ("description", models.TextField()),
                        (
                            "icon",
                            models.CharField(
                                choices=[
                                    ("shield", "Shield / Compliance"),
                                    ("security", "Security / Revenue"),
                                    ("community", "Community / People"),
                                    ("growth", "Growth / Long Term"),
                                ],
                                default="shield",
                                max_length=30,
                            ),
                        ),
                        ("order", models.PositiveIntegerField(default=0)),
                        ("is_active", models.BooleanField(default=True)),
                    ],
                    options={
                        "db_table": "core_foundingprinciple",
                        "ordering": ["order"],
                    },
                ),
            ],
        ),
    ]