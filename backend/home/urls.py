from django.urls import path
from .views import SiteSettingsAPIView

urlpatterns = [
    path(
        'site-settings/',
        SiteSettingsAPIView.as_view(),
        name='site-settings'
    ),
]