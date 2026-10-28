
from django.db import models


class SiteSettings(models.Model):
    company_name = models.CharField(
        max_length=200,
        default="Silk Power Limited"
    )

    logo = models.ImageField(
        upload_to="site/",
        blank=True,
        null=True
    )

    updated_at = models.DateTimeField(auto_now=True)

    registered_office = models.CharField(
        max_length=255,
        default="Madhyapur Thimi Municipality, Ward No. 3, Bhaktapur, Nepal"
    )

    project_site = models.CharField(
        max_length=255,
        default="Khumbu-Pasang Lhamu Rural Municipality, Solukhumbu District, Nepal"
    )

    class Meta:
        db_table = "core_sitesettings"
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return self.company_name
