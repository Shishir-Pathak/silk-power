from django.contrib import admin
from .models import Notice, NoticeAgenda, NoticeSubscriber

# Register your models here.

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

@admin.register(NoticeSubscriber)
class NoticeSubscriberAdmin(admin.ModelAdmin):
    list_display = (
        "email",
        "is_active",
        "subscribed_at",
    )

    list_filter = ("is_active",)
    search_fields = ("email",)
    readonly_fields = ("subscribed_at",)