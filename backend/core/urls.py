from django.urls import path
from .views import ContactSubmissionAPIView

urlpatterns = [
    path(
        'contact/',
        ContactSubmissionAPIView.as_view(),
        name='contact-submission'
    ),
]