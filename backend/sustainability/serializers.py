from rest_framework import serializers

from .models import (
    SustainabilityInitiative,
    SustainabilityGalleryItem,
)


class SustainabilityInitiativeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SustainabilityInitiative
        fields = [
            "id",
            "title",
            "description",
            "icon",
            "order",
        ]


class SustainabilityGalleryItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = SustainabilityGalleryItem
        fields = [
            "id",
            "title",
            "subtitle",
            "alt_text",
            "image",
            "order",
        ]

    def get_image(self, obj):
        if obj.image:
            request = self.context.get("request")

            if request:
                return request.build_absolute_uri(obj.image.url)

            return obj.image.url

        return obj.image_url or None