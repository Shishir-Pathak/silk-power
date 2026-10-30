from unfold.admin import ModelAdmin
from django.contrib import admin
from .models import (
    SustainabilityInitiative,
    SustainabilityGalleryItem,
)


@admin.register(SustainabilityInitiative)
class SustainabilityInitiativeAdmin(ModelAdmin):
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
class SustainabilityGalleryItemAdmin(ModelAdmin):
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