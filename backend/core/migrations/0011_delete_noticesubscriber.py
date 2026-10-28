from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0010_delete_sustainabilitygalleryitem_and_more"),
        ("notices", "0002_noticesubscriber"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.DeleteModel(
                    name="NoticeSubscriber",
                ),
            ],
        ),
    ]