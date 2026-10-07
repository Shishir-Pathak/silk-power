from django.contrib import admin

from .models import (
    BusinessOverview,
    BusinessPillar,
    BusinessArea,
)


@admin.register(BusinessOverview)
class BusinessOverviewAdmin(admin.ModelAdmin):
    list_display = ("title",)


@admin.register(BusinessPillar)
class BusinessPillarAdmin(admin.ModelAdmin):
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


@admin.register(BusinessArea)
class BusinessAreaAdmin(admin.ModelAdmin):
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