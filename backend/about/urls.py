from django.urls import path

from .views import (
    AboutCompanyAPIView,
    FoundingPrincipleListAPIView,
    CompanyMilestoneListAPIView,
    BoardMemberListAPIView,
)


urlpatterns = [
    path(
        "company/",
        AboutCompanyAPIView.as_view(),
        name="about-company",
    ),
    path(
        "principles/",
        FoundingPrincipleListAPIView.as_view(),
        name="about-principles",
    ),
    path(
        "history/",
        CompanyMilestoneListAPIView.as_view(),
        name="about-history",
    ),
    path(
        "board/",
        BoardMemberListAPIView.as_view(),
        name="about-board",
    ),
]