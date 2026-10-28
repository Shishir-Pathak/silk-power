from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_delete_sitesettings'),
        ('contact', '0001_initial'),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[],
            state_operations=[
                migrations.DeleteModel(
                    name='ContactSubmission',
                ),
            ],
        ),
    ]