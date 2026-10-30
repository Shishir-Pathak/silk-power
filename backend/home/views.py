from rest_framework.generics import RetrieveAPIView
from .models import SiteSettings
from .serializers import SiteSettingsSerializer


class SiteSettingsAPIView(RetrieveAPIView):
    serializer_class = SiteSettingsSerializer

    def get_object(self):
        settings, _ = SiteSettings.objects.get_or_create(pk=1)
        return settings