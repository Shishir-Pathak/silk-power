from django.contrib import admin
from .models import (
    Notice,
    NoticeAgenda,
    MediaArticle,
    ArticleParagraph,
    ArticleHighlight,
    GalleryImage,
    MediaVideo,
)


class NoticeAgendaInline(admin.TabularInline):
    model = NoticeAgenda
    extra = 1


@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'category',
        'published_date',
        'status',
        'urgent',
    )

    list_filter = (
        'status',
        'urgent',
        'category',
        'published_date',
    )

    search_fields = (
        'title',
        'reference_number',
        'summary',
    )

    prepopulated_fields = {
        'slug': ('title',)
    }

    inlines = [NoticeAgendaInline]


class ArticleParagraphInline(admin.TabularInline):
    model = ArticleParagraph
    extra = 1


class ArticleHighlightInline(admin.TabularInline):
    model = ArticleHighlight
    extra = 1


@admin.register(MediaArticle)
class MediaArticleAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'category',
        'published_date',
        'featured',
        'author',
    )

    list_filter = (
        'featured',
        'category',
        'published_date',
    )

    search_fields = (
        'title',
        'excerpt',
        'author',
    )

    prepopulated_fields = {
        'slug': ('title',)
    }

    inlines = [
        ArticleParagraphInline,
        ArticleHighlightInline,
    ]


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'category',
        'order',
    )

    list_filter = ('category',)

    search_fields = (
        'title',
        'caption',
    )


@admin.register(MediaVideo)
class MediaVideoAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'published_date',
        'duration',
        'order',
    )

    search_fields = (
        'title',
        'description',
    )