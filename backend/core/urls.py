from django.urls import path
from .views import ContactSubmissionAPIView
from .views import (
    ContactSubmissionAPIView,
    SiteSettingsAPIView,
    BusinessOverviewAPIView,
    BusinessPillarListAPIView,
    BusinessAreaListAPIView,
)
from .views import (
    AboutCompanyAPIView,
    FoundingPrincipleListAPIView,
    CompanyMilestoneListAPIView,
    BoardMemberListAPIView,
)

urlpatterns = [
    path(
        'contact/',
        ContactSubmissionAPIView.as_view(),
        name='contact-submission'
    ),
    path(
    'site-settings/',
    SiteSettingsAPIView.as_view(),
    name='site-settings'
    ),
    path(
    'about/company/',
    AboutCompanyAPIView.as_view(),
    name='about-company',
),

path(
    'about/principles/',
    FoundingPrincipleListAPIView.as_view(),
    name='about-principles',
),

path(
    'about/history/',
    CompanyMilestoneListAPIView.as_view(),
    name='about-history',
),

path(
    'about/board/',
    BoardMemberListAPIView.as_view(),
    name='about-board',
),
path(
    "business/overview/",
    BusinessOverviewAPIView.as_view(),
    name="business-overview",
),

path(
    "business/pillars/",
    BusinessPillarListAPIView.as_view(),
    name="business-pillars",
),

path(
    "business/areas/",
    BusinessAreaListAPIView.as_view(),
    name="business-areas",
),
    
]