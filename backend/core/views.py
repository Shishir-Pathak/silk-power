from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from .models import ContactSubmission, SiteSettings
from .serializers import (
    ContactSubmissionSerializer,
    SiteSettingsSerializer,
)
from .models import ContactSubmission
from rest_framework.generics import RetrieveAPIView
from rest_framework.generics import ListAPIView

from .models import (
    AboutCompany,
    FoundingPrinciple,
    CompanyMilestone,
    BoardMember,
)

from .serializers import (
    AboutCompanySerializer,
    FoundingPrincipleSerializer,
    CompanyMilestoneSerializer,
    BoardMemberSerializer,
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

class AboutCompanyAPIView(RetrieveAPIView):
    serializer_class = AboutCompanySerializer

    def get_object(self):
        return AboutCompany.objects.first()


class FoundingPrincipleListAPIView(ListAPIView):
    serializer_class = FoundingPrincipleSerializer

    def get_queryset(self):
        return FoundingPrinciple.objects.filter(is_active=True)


class CompanyMilestoneListAPIView(ListAPIView):
    serializer_class = CompanyMilestoneSerializer

    def get_queryset(self):
        return CompanyMilestone.objects.filter(is_active=True)


class BoardMemberListAPIView(ListAPIView):
    serializer_class = BoardMemberSerializer

    def get_queryset(self):
        return BoardMember.objects.filter(is_active=True)

