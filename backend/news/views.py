from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import (
    MediaArticle,
    GalleryImage,
    MediaVideo,
)

from .serializers import (
    MediaArticleSerializer,
    GalleryImageSerializer,
    MediaVideoSerializer,
)


class MediaArticleListAPIView(ListAPIView):
    queryset = MediaArticle.objects.all()
    serializer_class = MediaArticleSerializer


class MediaArticleDetailAPIView(RetrieveAPIView):
    queryset = MediaArticle.objects.all()
    serializer_class = MediaArticleSerializer
    lookup_field = 'slug'


class GalleryImageListAPIView(ListAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer


class MediaVideoListAPIView(ListAPIView):
    queryset = MediaVideo.objects.all()
    serializer_class = MediaVideoSerializer