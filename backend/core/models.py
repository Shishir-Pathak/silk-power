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