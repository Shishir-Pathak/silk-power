from rest_framework import serializers
from .models import SiteSettings


class SiteSettingsSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()

    class Meta:
        model = SiteSettings
        fields = [
            'company_name',
            'logo_url',
            'registered_office',
            'project_site',
        ]

    def get_logo_url(self, obj):
        if not obj.logo:
            return None

        request = self.context.get('request')

        if request:
            return request.build_absolute_uri(obj.logo.url)

        return obj.logo.url