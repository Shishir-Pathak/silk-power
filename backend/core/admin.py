from django.contrib import admin
from .models import ContactSubmission


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