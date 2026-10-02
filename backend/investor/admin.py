from django.contrib import admin
from .models import InvestorStat, InvestorDocument, InvestorFAQ


@admin.register(InvestorStat)
class InvestorStatAdmin(admin.ModelAdmin):
    list_display = (
        'label',
        'value',
        'icon',
        'order',
        'is_active',
    )

    list_filter = (
        'icon',
        'is_active',
    )

    search_fields = (
        'label',
        'value',
    )

    list_editable = (
        'order',
        'is_active',
    )


@admin.register(InvestorDocument)
class InvestorDocumentAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'display_date',
        'published_date',
        'order',
        'is_active',
    )

    list_filter = (
        'is_active',
        'published_date',
    )

    search_fields = (
        'title',
    )

    list_editable = (
        'order',
        'is_active',
    )


@admin.register(InvestorFAQ)
class InvestorFAQAdmin(admin.ModelAdmin):
    list_display = (
        'question',
        'order',
        'is_active',
    )

    list_filter = (
        'is_active',
    )

    search_fields = (
        'question',
        'answer',
    )

    list_editable = (
        'order',
        'is_active',
    )