from rest_framework.generics import ListAPIView

from .models import InvestorStat, InvestorDocument, InvestorFAQ
from .serializers import (
    InvestorStatSerializer,
    InvestorDocumentSerializer,
    InvestorFAQSerializer,
)


class InvestorStatListAPIView(ListAPIView):
    serializer_class = InvestorStatSerializer

    def get_queryset(self):
        return InvestorStat.objects.filter(is_active=True)


class InvestorDocumentListAPIView(ListAPIView):
    serializer_class = InvestorDocumentSerializer

    def get_queryset(self):
        return InvestorDocument.objects.filter(is_active=True)


class InvestorFAQListAPIView(ListAPIView):
    serializer_class = InvestorFAQSerializer

    def get_queryset(self):
        return InvestorFAQ.objects.filter(is_active=True)