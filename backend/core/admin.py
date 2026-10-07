from django.contrib import admin
from .models import ContactSubmission, NoticeSubscriber
from .models import ContactSubmission, SiteSettings


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = (
        'reference_number',
        'first_name',
        'last_name',
        'email',
        'department',
        'status',
        'submitted_at',
    )

    list_filter = (
        'status',
        'department',
        'submitted_at',
    )

    search_fields = (
        'reference_number',
        'first_name',
        'last_name',
        'email',
        'subject',
        'message',
    )

    readonly_fields = (
        'reference_number',
        'submitted_at',
    )

    ordering = ('-submitted_at',)

@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = (
        'company_name',
        'updated_at',
    )


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