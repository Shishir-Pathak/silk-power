from django.db import models


class InvestorStat(models.Model):
    ICON_CHOICES = [
        ('capital', 'Capital'),
        ('share', 'Share Value'),
        ('rating', 'Credit Rating'),
        ('debt', 'Debt / Finance'),
    ]

    value = models.CharField(max_length=100)
    label = models.CharField(max_length=255)

    icon = models.CharField(
        max_length=30,
        choices=ICON_CHOICES,
        default='capital'
    )

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f'{self.label} - {self.value}'


class InvestorDocument(models.Model):
    title = models.CharField(max_length=255)

    published_date = models.DateField(
        blank=True,
        null=True
    )

    display_date = models.CharField(
        max_length=100,
        blank=True
    )

    document = models.FileField(
        upload_to='investor/documents/',
        blank=True,
        null=True
    )

    external_url = models.URLField(blank=True)

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-published_date']

    def __str__(self):
        return self.title


class InvestorFAQ(models.Model):
    question = models.CharField(max_length=500)
    answer = models.TextField()

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.question