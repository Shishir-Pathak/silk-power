from rest_framework import serializers
from .models import ContactSubmission


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