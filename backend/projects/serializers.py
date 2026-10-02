from rest_framework import serializers
from .models import Project, ProjectSpecification, ProjectGalleryImage


class ProjectSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectSpecification
        fields = [
            'id',
            'parameter',
            'details',
            'column',
            'order',
        ]


class ProjectGalleryImageSerializer(serializers.ModelSerializer):
    src = serializers.SerializerMethodField()

    class Meta:
        model = ProjectGalleryImage
        fields = [
            'id',
            'src',
            'caption',
            'order',
        ]

    def get_src(self, obj):
        if obj.image:
            request = self.context.get('request')

            if request:
                return request.build_absolute_uri(obj.image.url)

            return obj.image.url

        return obj.image_url or None


class ProjectSerializer(serializers.ModelSerializer):
    specifications = ProjectSpecificationSerializer(
        many=True,
        read_only=True
    )

    gallery = ProjectGalleryImageSerializer(
        many=True,
        read_only=True
    )

    featured_image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            'id',
            'name',
            'slug',
            'status',
            'description',
            'location',
            'capacity',
            'featured_image',
            'image_caption',
            'is_active',
            'order',
            'specifications',
            'gallery',
        ]

    def get_featured_image(self, obj):
        if obj.featured_image:
            request = self.context.get('request')

            if request:
                return request.build_absolute_uri(
                    obj.featured_image.url
                )

            return obj.featured_image.url

        return obj.featured_image_url or None