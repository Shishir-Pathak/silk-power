from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("news", "0001_initial"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.RemoveField(
                    model_name="noticeagenda",
                    name="notice",
                ),
                migrations.DeleteModel(
                    name="Notice",
                ),
                migrations.DeleteModel(
                    name="NoticeAgenda",
                ),
            ],
        ),
    ]