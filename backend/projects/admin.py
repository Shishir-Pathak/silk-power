from django.contrib import admin
from .models import Project, ProjectSpecification, ProjectGalleryImage


class ProjectSpecificationInline(admin.TabularInline):
    model = ProjectSpecification
    extra = 1


class ProjectGalleryImageInline(admin.TabularInline):
    model = ProjectGalleryImage
    extra = 1


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'capacity',
        'location',
        'status',
        'is_active',
        'order',
    )

    list_filter = (
        'status',
        'is_active',
    )

    search_fields = (
        'name',
        'location',
        'description',
    )

    prepopulated_fields = {
        'slug': ('name',),
    }

    inlines = [
        ProjectSpecificationInline,
        ProjectGalleryImageInline,
    ]


@admin.register(ProjectSpecification)
class ProjectSpecificationAdmin(admin.ModelAdmin):
    list_display = (
        'project',
        'parameter',
        'details',
        'column',
        'order',
    )

    list_filter = (
        'project',
        'column',
    )


@admin.register(ProjectGalleryImage)
class ProjectGalleryImageAdmin(admin.ModelAdmin):
    list_display = (
        'project',
        'caption',
        'order',
    )

    list_filter = (
        'project',
    )