from rest_framework import generics

from .models import (
    SustainabilityInitiative,
    SustainabilityGalleryItem,
)

from .serializers import (
    SustainabilityInitiativeSerializer,
    SustainabilityGalleryItemSerializer,
)


class SustainabilityInitiativeListAPIView(generics.ListAPIView):
    serializer_class = SustainabilityInitiativeSerializer

    def get_queryset(self):
        return SustainabilityInitiative.objects.filter(is_active=True)


class SustainabilityGalleryListAPIView(generics.ListAPIView):
    serializer_class = SustainabilityGalleryItemSerializer

    def get_queryset(self):
        return SustainabilityGalleryItem.objects.filter(is_active=True)