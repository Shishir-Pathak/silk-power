from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework import generics
from .models import (
    ContactSubmission, 
    SiteSettings,
)
from .serializers import (
    ContactSubmissionSerializer,
    SiteSettingsSerializer,
)


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


