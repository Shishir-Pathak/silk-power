from django.urls import path

from .views import (
    InvestorStatListAPIView,
    InvestorDocumentListAPIView,
    InvestorFAQListAPIView,
)


urlpatterns = [
    path(
        'investor/stats/',
        InvestorStatListAPIView.as_view(),
        name='investor-stats'
    ),

    path(
        'investor/documents/',
        InvestorDocumentListAPIView.as_view(),
        name='investor-documents'
    ),

    path(
        'investor/faqs/',
        InvestorFAQListAPIView.as_view(),
        name='investor-faqs'
    ),
]