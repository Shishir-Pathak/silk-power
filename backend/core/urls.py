from django.urls import path
from .views import ContactSubmissionAPIView
from .views import (
    ContactSubmissionAPIView,
    SiteSettingsAPIView,
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
    
]