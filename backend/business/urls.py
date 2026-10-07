from django.urls import path

from .views import (
    BusinessOverviewAPIView,
    BusinessPillarListAPIView,
    BusinessAreaListAPIView,
)


urlpatterns = [
    path(
        "overview/",
        BusinessOverviewAPIView.as_view(),
        name="business-overview",
    ),
    path(
        "pillars/",
        BusinessPillarListAPIView.as_view(),
        name="business-pillars",
    ),
    path(
        "areas/",
        BusinessAreaListAPIView.as_view(),
        name="business-areas",
    ),
]