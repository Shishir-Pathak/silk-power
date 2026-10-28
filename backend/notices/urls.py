from django.urls import path

from .views import (
    NoticeListAPIView,
    NoticeDetailAPIView,
)


urlpatterns = [
    path(
        "",
        NoticeListAPIView.as_view(),
        name="notice-list",
    ),
    path(
        "<slug:slug>/",
        NoticeDetailAPIView.as_view(),
        name="notice-detail",
    ),
]