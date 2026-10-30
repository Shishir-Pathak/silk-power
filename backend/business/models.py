from django.db import models

# Create your models here.
class BusinessOverview(models.Model):
    title = models.CharField(
        max_length=255,
        default="Building a Cleaner, Stronger Nepal"
    )

    description = models.TextField()

    core_business_label = models.CharField(
        max_length=100,
        default="Our Core Business"
    )

    core_business_title = models.CharField(
        max_length=255,
        default="Hydropower Development and Generation"
    )

    core_business_description = models.TextField()

    image = models.ImageField(
        upload_to="business/",
        blank=True,
        null=True
    )

    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = "core_businessoverview"
        verbose_name = "Business Overview"
        verbose_name_plural = "Business Overview"


class BusinessPillar(models.Model):
    ICON_CHOICES = [
        ("develop", "Develop"),
        ("build", "Build"),
        ("operate", "Operate"),
        ("value", "Create Value"),
    ]

    title = models.CharField(max_length=100)
    description = models.TextField()

    icon = models.CharField(
        max_length=30,
        choices=ICON_CHOICES,
        default="develop"
    )

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order"]
        db_table = "core_businesspillar"


    def __str__(self):
        return self.title


class BusinessArea(models.Model):
    ICON_CHOICES = [
        ("hydropower", "Hydropower"),
        ("renewable", "Renewable Energy"),
        ("infrastructure", "Power Infrastructure"),
        ("community", "Community & Shared Value"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()

    image = models.ImageField(
        upload_to="business/areas/",
        blank=True,
        null=True
    )

    image_url = models.URLField(blank=True)

    icon = models.CharField(
        max_length=30,
        choices=ICON_CHOICES,
        default="hydropower"
    )

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order"]
        db_table = "core_businessarea"


    def __str__(self):
        return self.title