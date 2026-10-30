from django.urls import path

from .views import (
    SustainabilityInitiativeListAPIView,
    SustainabilityGalleryListAPIView,
)


urlpatterns = [
    path(
        "initiatives/",
        SustainabilityInitiativeListAPIView.as_view(),
        name="sustainability-initiatives",
    ),
    path(
        "gallery/",
        SustainabilityGalleryListAPIView.as_view(),
        name="sustainability-gallery",
    ),
]