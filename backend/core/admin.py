from django.contrib import admin
from .models import ContactSubmission, NoticeSubscriber
from .models import ContactSubmission, SiteSettings
from .models import (
    AboutCompany,
    FoundingPrinciple,
    CompanyMilestone,
    BoardMember,
    BusinessOverview,
    BusinessPillar,
    BusinessArea,
    SustainabilityInitiative,
    SustainabilityGalleryItem,
)


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

@admin.register(AboutCompany)
class AboutCompanyAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'commitment_label',
    )


@admin.register(FoundingPrinciple)
class FoundingPrincipleAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'icon',
        'order',
        'is_active',
    )

    list_filter = (
        'icon',
        'is_active',
    )

    search_fields = (
        'title',
        'description',
    )

    list_editable = (
        'order',
        'is_active',
    )


@admin.register(CompanyMilestone)
class CompanyMilestoneAdmin(admin.ModelAdmin):
    list_display = (
        'year',
        'month',
        'title',
        'order',
        'is_active',
    )

    list_filter = (
        'year',
        'is_active',
    )

    search_fields = (
        'title',
        'year',
        'month',
    )

    list_editable = (
        'order',
        'is_active',
    )


@admin.register(BoardMember)
class BoardMemberAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'role',
        'order',
        'is_active',
    )

    list_filter = (
        'role',
        'is_active',
    )

    search_fields = (
        'name',
        'role',
    )

    list_editable = (
        'order',
        'is_active',
    )

@admin.register(BusinessOverview)
class BusinessOverviewAdmin(admin.ModelAdmin):
    list_display = ("title",)


@admin.register(BusinessPillar)
class BusinessPillarAdmin(admin.ModelAdmin):
    list_display = ("title", "icon", "order", "is_active")
    list_editable = ("order", "is_active")
    ordering = ("order",)


@admin.register(BusinessArea)
class BusinessAreaAdmin(admin.ModelAdmin):
    list_display = ("title", "icon", "order", "is_active")
    list_editable = ("order", "is_active")
    ordering = ("order",)

@admin.register(SustainabilityInitiative)
class SustainabilityInitiativeAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "icon",
        "order",
        "is_active",
    )

    list_editable = (
        "order",
        "is_active",
    )

    ordering = ("order",)


@admin.register(SustainabilityGalleryItem)
class SustainabilityGalleryItemAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "subtitle",
        "order",
        "is_active",
    )

    list_editable = (
        "order",
        "is_active",
    )

    ordering = ("order",)

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