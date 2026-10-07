from django.contrib import admin

from .models import (
    AboutCompany,
    FoundingPrinciple,
    CompanyMilestone,
    BoardMember,
)


@admin.register(AboutCompany)
class AboutCompanyAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "commitment_label",
    )


@admin.register(FoundingPrinciple)
class FoundingPrincipleAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "icon",
        "order",
        "is_active",
    )

    list_filter = (
        "icon",
        "is_active",
    )

    search_fields = (
        "title",
        "description",
    )

    list_editable = (
        "order",
        "is_active",
    )


@admin.register(CompanyMilestone)
class CompanyMilestoneAdmin(admin.ModelAdmin):
    list_display = (
        "year",
        "month",
        "title",
        "order",
        "is_active",
    )

    list_filter = (
        "year",
        "is_active",
    )

    search_fields = (
        "title",
        "year",
        "month",
    )

    list_editable = (
        "order",
        "is_active",
    )


@admin.register(BoardMember)
class BoardMemberAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "role",
        "order",
        "is_active",
    )

    list_filter = (
        "role",
        "is_active",
    )

    search_fields = (
        "name",
        "role",
    )

    list_editable = (
        "order",
        "is_active",
    )