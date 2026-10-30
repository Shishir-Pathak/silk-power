from django.db import models

# Create your models here.
class SustainabilityInitiative(models.Model):
    ICON_CHOICES = [
        ("environment", "Environmental"),
        ("water", "Water"),
        ("community", "Community"),
        ("energy", "Renewable Energy"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()

    icon = models.CharField(
        max_length=30,
        choices=ICON_CHOICES,
        default="environment"
    )

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = "core_sustainabilityinitiative"
        ordering = ["order"]

    def __str__(self):
        return self.title


class SustainabilityGalleryItem(models.Model):
    title = models.CharField(max_length=200)

    subtitle = models.CharField(
        max_length=200,
        blank=True
    )

    alt_text = models.CharField(
        max_length=200,
        blank=True
    )

    image = models.ImageField(
        upload_to="sustainability/",
        blank=True,
        null=True
    )

    image_url = models.URLField(blank=True)

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order"]
        db_table = "core_sustainabilitygalleryitem"


    def __str__(self):
        return self.title