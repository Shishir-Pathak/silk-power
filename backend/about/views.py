from rest_framework.generics import RetrieveAPIView, ListAPIView

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