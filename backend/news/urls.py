from django.urls import path

from .views import (
    MediaArticleListAPIView,
    MediaArticleDetailAPIView,
    GalleryImageListAPIView,
    MediaVideoListAPIView,
)

urlpatterns = [
    path('media/articles/',MediaArticleListAPIView.as_view(),name='media-article-list'),
    path('media/articles/<slug:slug>/',MediaArticleDetailAPIView.as_view(),name='media-article-detail'),
    path('media/gallery/',GalleryImageListAPIView.as_view(),name='media-gallery'),
    path('media/videos/',MediaVideoListAPIView.as_view(),name='media-videos'),
]