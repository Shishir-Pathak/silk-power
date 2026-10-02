from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework import generics
from .models import (
    ContactSubmission, 
    SiteSettings,
    BusinessOverview,
    BusinessPillar,
    BusinessArea,
    SustainabilityInitiative,
    SustainabilityGalleryItem,
)
from .serializers import (
    ContactSubmissionSerializer,
    SiteSettingsSerializer,
    BusinessOverviewSerializer,
    BusinessPillarSerializer,
    BusinessAreaSerializer,
    SustainabilityInitiativeSerializer,
    SustainabilityGalleryItemSerializer,
)

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

class SustainabilityInitiativeListAPIView(generics.ListAPIView):
    serializer_class = SustainabilityInitiativeSerializer

    def get_queryset(self):
        return SustainabilityInitiative.objects.filter(
            is_active=True
        )


class SustainabilityGalleryListAPIView(generics.ListAPIView):
    serializer_class = SustainabilityGalleryItemSerializer

    def get_queryset(self):
        return SustainabilityGalleryItem.objects.filter(
            is_active=True
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

class BusinessOverviewAPIView(generics.RetrieveAPIView):
    serializer_class = BusinessOverviewSerializer

    def get_object(self):
        return BusinessOverview.objects.first()


class BusinessPillarListAPIView(generics.ListAPIView):
    serializer_class = BusinessPillarSerializer

    def get_queryset(self):
        return BusinessPillar.objects.filter(is_active=True)


class BusinessAreaListAPIView(generics.ListAPIView):
    serializer_class = BusinessAreaSerializer

    def get_queryset(self):
        return BusinessArea.objects.filter(is_active=True)

