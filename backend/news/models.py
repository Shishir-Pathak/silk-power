from django.db import models
from django.utils.text import slugify


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

    def __str__(self):
        return f"{self.notice.title} - {self.order}"


class MediaArticle(models.Model):
    title = models.CharField(max_length=300)

    slug = models.SlugField(
        max_length=350,
        unique=True,
        blank=True
    )

    category = models.CharField(max_length=100)

    published_date = models.DateField()

    read_time = models.CharField(
        max_length=50,
        blank=True
    )

    featured = models.BooleanField(default=False)

    image = models.ImageField(
        upload_to='media/articles/',
        blank=True,
        null=True
    )

    image_url = models.URLField(
        blank=True
    )

    excerpt = models.TextField()

    author = models.CharField(
        max_length=255,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-published_date']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class ArticleParagraph(models.Model):
    article = models.ForeignKey(
        MediaArticle,
        on_delete=models.CASCADE,
        related_name='content'
    )

    text = models.TextField()

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.article.title} - paragraph {self.order}"


class ArticleHighlight(models.Model):
    article = models.ForeignKey(
        MediaArticle,
        on_delete=models.CASCADE,
        related_name='highlights'
    )

    text = models.CharField(max_length=500)

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.text


class GalleryImage(models.Model):
    title = models.CharField(max_length=255)

    category = models.CharField(
        max_length=100,
        blank=True
    )

    image = models.ImageField(
        upload_to='media/gallery/',
        blank=True,
        null=True
    )

    image_url = models.URLField(
        blank=True
    )

    caption = models.TextField(blank=True)

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class MediaVideo(models.Model):
    title = models.CharField(max_length=255)

    duration = models.CharField(
        max_length=20,
        blank=True
    )

    published_date = models.DateField(
        blank=True,
        null=True
    )

    thumbnail = models.ImageField(
        upload_to='media/videos/',
        blank=True,
        null=True
    )

    thumbnail_url = models.URLField(
        blank=True
    )

    video_url = models.URLField(
        blank=True
    )

    description = models.TextField(blank=True)

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title