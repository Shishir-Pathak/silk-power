from rest_framework import generics

from .models import (
    BusinessOverview,
    BusinessPillar,
    BusinessArea,
)

from .serializers import (
    BusinessOverviewSerializer,
    BusinessPillarSerializer,
    BusinessAreaSerializer,
)


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