from django.contrib import admin
from .models import SiteSettings


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = (
        "company_name",
        "registered_office",
        "project_site",
        "updated_at",
    )

    readonly_fields = ("updated_at",)

    fieldsets = (
        ("Company Information", {
            "fields": ("company_name", "logo")
        }),
        ("Locations", {
            "fields": ("registered_office", "project_site")
        }),
        ("Metadata", {
            "fields": ("updated_at",)
        }),
    )

    def has_add_permission(self, request):
        # Keep only one SiteSettings record.
        return not SiteSettings.objects.exists()