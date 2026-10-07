from django.db import models
import uuid


class ContactSubmission(models.Model):

    DEPARTMENT_CHOICES = [
        ('General Inquiries', 'General Inquiries'),
        ('Investor Relations', 'Investor Relations & Shares'),
        ('Media & Press', 'Media & Press Communications'),
        ('Local Community & CSR', 'Local Community & Solukhumbu CSR'),
        ('Tenders & Procurement', 'Procurement & Tenders'),
        ('Careers', 'Careers & Engineering Internships'),
    ]

    STATUS_CHOICES = [
        ('New', 'New'),
        ('In Progress', 'In Progress'),
        ('Resolved', 'Resolved'),
    ]

    reference_number = models.CharField(
        max_length=30,
        unique=True,
        editable=False
    )

    first_name = models.CharField(max_length=100)

    last_name = models.CharField(
        max_length=100,
        blank=True
    )

    email = models.EmailField()

    phone = models.CharField(
        max_length=30,
        blank=True
    )

    department = models.CharField(
        max_length=100,
        choices=DEPARTMENT_CHOICES,
        default='General Inquiries'
    )

    subject = models.CharField(
        max_length=255,
        blank=True
    )

    message = models.TextField()

    agreed_to_terms = models.BooleanField(default=False)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='New'
    )

    submitted_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.reference_number:
            self.reference_number = (
                f"SPL-{uuid.uuid4().hex[:8].upper()}"
            )

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.reference_number} - {self.first_name} {self.last_name}"


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
        verbose_name = "Site Settings"
        verbose_name_plural = "Site Settings"

    def __str__(self):
        return self.company_name

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
        ordering = ['order']

    def __str__(self):
        return f'{self.name} - {self.role}'

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

    def __str__(self):
        return self.title

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

    def __str__(self):
        return self.title

class NoticeSubscriber(models.Model):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-subscribed_at"]

    def __str__(self):
        return self.email

