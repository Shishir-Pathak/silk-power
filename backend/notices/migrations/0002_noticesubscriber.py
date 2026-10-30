from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("notices", "0001_initial"),
        ("core", "0010_delete_sustainabilitygalleryitem_and_more"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.CreateModel(
                    name="NoticeSubscriber",
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
                            "email",
                            models.EmailField(max_length=254, unique=True),
                        ),
                        ("is_active", models.BooleanField(default=True)),
                        (
                            "subscribed_at",
                            models.DateTimeField(auto_now_add=True),
                        ),
                    ],
                    options={
                        "db_table": "core_noticesubscriber",
                        "ordering": ["-subscribed_at"],
                    },
                ),
            ],
        ),
    ]