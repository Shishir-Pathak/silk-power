from django.urls import path
from .views import ContactSubmissionAPIView
from .views import (
    ContactSubmissionAPIView,
    SiteSettingsAPIView,
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
    
]