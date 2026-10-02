from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from .models import ContactSubmission, SiteSettings
from .serializers import (
    ContactSubmissionSerializer,
    SiteSettingsSerializer,
)
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer
from rest_framework.generics import RetrieveAPIView


class ContactSubmissionAPIView(CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    permission_classes = [AllowAny]

class SiteSettingsAPIView(RetrieveAPIView):
    serializer_class = SiteSettingsSerializer

    def get_object(self):
        settings, _ = SiteSettings.objects.get_or_create(
            pk=1
        )
        return settings

