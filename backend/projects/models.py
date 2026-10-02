from django.db import models
from django.utils.text import slugify


class Project(models.Model):
    STATUS_CHOICES = [
        ('Planning', 'Planning'),
        ('Under Construction', 'Under Construction'),
        ('Operational', 'Operational'),
        ('Completed', 'Completed'),
    ]

    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default='Under Construction'
    )

    description = models.TextField()

    location = models.CharField(max_length=255, blank=True)
    capacity = models.CharField(max_length=100, blank=True)

    featured_image = models.ImageField(
        upload_to='projects/',
        blank=True,
        null=True
    )

    featured_image_url = models.URLField(blank=True)

    image_caption = models.CharField(
        max_length=255,
        blank=True
    )

    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class ProjectSpecification(models.Model):
    COLUMN_CHOICES = [
        ('left', 'Left Column'),
        ('right', 'Right Column'),
    ]

    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name='specifications'
    )

    parameter = models.CharField(max_length=255)
    details = models.CharField(max_length=500)

    column = models.CharField(
        max_length=10,
        choices=COLUMN_CHOICES,
        default='left'
    )

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['column', 'order']

    def __str__(self):
        return f'{self.project.name} - {self.parameter}'


class ProjectGalleryImage(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name='gallery'
    )

    image = models.ImageField(
        upload_to='projects/gallery/',
        blank=True,
        null=True
    )

    image_url = models.URLField(blank=True)

    caption = models.CharField(
        max_length=255,
        blank=True
    )

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f'{self.project.name} - Gallery {self.order}'