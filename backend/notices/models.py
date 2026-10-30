from django.db import models

# Create your models here.

class Notice(models.Model):
    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Archived', 'Archived'),
    ]

    title = models.CharField(max_length=300)
    slug = models.SlugField(max_length=350, unique=True, blank=True)

    category = models.CharField(max_length=100)
    published_date = models.DateField()

    reference_number = models.CharField(
        max_length=100,
        blank=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='Active'
    )

    urgent = models.BooleanField(default=False)

    summary = models.TextField()

    # Detail modal information
    meeting_time = models.CharField(
        max_length=255,
        blank=True
    )

    venue = models.CharField(
        max_length=500,
        blank=True
    )

    signatory = models.CharField(
        max_length=255,
        blank=True
    )

    officer = models.CharField(
        max_length=255,
        blank=True
    )

    book_closure_note = models.TextField(
        blank=True
    )

    # Actual PDF instead of hardcoded fileSize
    document = models.FileField(
        upload_to='notices/',
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-published_date']
        db_table = "news_notice"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class NoticeAgenda(models.Model):
    notice = models.ForeignKey(
        Notice,
        on_delete=models.CASCADE,
        related_name='agendas'
    )

    text = models.TextField()

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        db_table = "news_noticeagenda"

    def __str__(self):
        return f"{self.notice.title} - {self.order}"


class NoticeSubscriber(models.Model):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-subscribed_at"]
        db_table = "core_noticesubscriber"

    def __str__(self):
        return self.email