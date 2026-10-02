from rest_framework import serializers
from .models import ContactSubmission
from .models import ContactSubmission, SiteSettings


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
        ]

    def get_logo_url(self, obj):
        if not obj.logo:
            return None

        request = self.context.get('request')

        if request:
            return request.build_absolute_uri(obj.logo.url)

        return obj.logo.url