from rest_framework import serializers
from .models import ContactSubmission
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


class ContactSubmissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactSubmission

        fields = [
            'id',
            'reference_number',
            'first_name',
            'last_name',
            'email',
            'phone',
            'department',
            'subject',
            'message',
            'agreed_to_terms',
            'submitted_at',
        ]

        read_only_fields = [
            'id',
            'reference_number',
            'submitted_at',
        ]

    def validate_agreed_to_terms(self, value):
        if not value:
            raise serializers.ValidationError(
                "You must accept the privacy policy."
            )

        return value

class SiteSettingsSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()

    class Meta:
        model = SiteSettings
        fields = [
            'company_name',
            'logo_url',
            "registered_office",
            "project_site",
        ]

    def get_logo_url(self, obj):
        if not obj.logo:
            return None

        request = self.context.get('request')

        if request:
            return request.build_absolute_uri(obj.logo.url)

        return obj.logo.url

class AboutCompanySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = AboutCompany
        fields = [
            'id',
            'title',
            'paragraph_one',
            'paragraph_two',
            'paragraph_three',
            'commitment_label',
            'commitment_line_one',
            'commitment_line_two',
            'commitment_line_three',
            'image',
        ]

    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')

            if request:
                return request.build_absolute_uri(obj.image.url)

            return obj.image.url

        return obj.image_url or None


class FoundingPrincipleSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoundingPrinciple
        fields = [
            'id',
            'title',
            'description',
            'icon',
            'order',
        ]


class CompanyMilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyMilestone
        fields = [
            'id',
            'year',
            'month',
            'date',
            'title',
            'order',
        ]


class BoardMemberSerializer(serializers.ModelSerializer):
    photo = serializers.SerializerMethodField()

    class Meta:
        model = BoardMember
        fields = [
            'id',
            'name',
            'role',
            'photo',
            'order',
        ]

    def get_photo(self, obj):
        if not obj.photo:
            return None

        request = self.context.get('request')

        if request:
            return request.build_absolute_uri(obj.photo.url)

        return obj.photo.url

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