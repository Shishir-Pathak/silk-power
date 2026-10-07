from rest_framework import serializers

from .models import (
    BusinessOverview,
    BusinessPillar,
    BusinessArea,
)


class BusinessOverviewSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = BusinessOverview
        fields = [
            "id",
            "title",
            "description",
            "core_business_label",
            "core_business_title",
            "core_business_description",
            "image",
        ]

    def get_image(self, obj):
        if obj.image:
            request = self.context.get("request")

            if request:
                return request.build_absolute_uri(obj.image.url)

            return obj.image.url

        return obj.image_url or None


class BusinessPillarSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessPillar
        fields = [
            "id",
            "title",
            "description",
            "icon",
            "order",
        ]


class BusinessAreaSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = BusinessArea
        fields = [
            "id",
            "title",
            "description",
            "image",
            "icon",
            "order",
        ]

    def get_image(self, obj):
        if obj.image:
            request = self.context.get("request")

            if request:
                return request.build_absolute_uri(obj.image.url)

            return obj.image.url

        return obj.image_url or None