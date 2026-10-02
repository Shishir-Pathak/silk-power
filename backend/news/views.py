from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import (
    Notice,
    MediaArticle,
    GalleryImage,
    MediaVideo,
)

from .serializers import (
    NoticeSerializer,
    MediaArticleSerializer,
    GalleryImageSerializer,
    MediaVideoSerializer,
)


class NoticeListAPIView(ListAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer


class NoticeDetailAPIView(RetrieveAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
    lookup_field = 'slug'


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