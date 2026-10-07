from django.db import models

# Create your models here.
class AboutCompany(models.Model):
    title = models.CharField(max_length=200, default='Who We Are')

    paragraph_one = models.TextField()
    paragraph_two = models.TextField()
    paragraph_three = models.TextField(blank=True)

    commitment_label = models.CharField(
        max_length=100,
        default='Our Commitment'
    )

    commitment_line_one = models.CharField(
        max_length=100,
        default='BUILDING'
    )

    commitment_line_two = models.CharField(
        max_length=100,
        default='A SUSTAINABLE'
    )

    commitment_line_three = models.CharField(
        max_length=100,
        default='TOMORROW'
    )

    image = models.ImageField(
        upload_to='about/',
        blank=True,
        null=True
    )

    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = "core_aboutcompany"
        verbose_name = 'About Company'
        verbose_name_plural = 'About Company'


class FoundingPrinciple(models.Model):
    ICON_CHOICES = [
        ('shield', 'Shield / Compliance'),
        ('security', 'Security / Revenue'),
        ('community', 'Community / People'),
        ('growth', 'Growth / Long Term'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()

    icon = models.CharField(
        max_length=30,
        choices=ICON_CHOICES,
        default='shield'
    )

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = "core_foundingprinciple"
        ordering = ['order']

    def __str__(self):
        return self.title


class CompanyMilestone(models.Model):
    year = models.CharField(max_length=20)
    month = models.CharField(max_length=50, blank=True)
    date = models.CharField(max_length=50, blank=True)
    title = models.CharField(max_length=255)

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']
        db_table = "core_companymilestone"


    def __str__(self):
        return f'{self.year} - {self.title}'


class BoardMember(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=100)

    photo = models.ImageField(
        upload_to='about/board/',
        blank=True,
        null=True
    )

    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = "core_boardmember"
        ordering = ['order']

    def __str__(self):
        return f'{self.name} - {self.role}'
