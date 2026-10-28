from unfold.admin import ModelAdmin
from django.contrib import admin
from .models import (
    BusinessOverview,
    BusinessPillar,
    BusinessArea,
)


@admin.register(BusinessOverview)
class BusinessOverviewAdmin(ModelAdmin):
    list_display = ("title",)


@admin.register(BusinessPillar)
class BusinessPillarAdmin(ModelAdmin):
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
class BusinessAreaAdmin(ModelAdmin):
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