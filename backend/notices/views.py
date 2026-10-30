from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Notice
from .serializers import NoticeSerializer


class NoticeListAPIView(ListAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer


class NoticeDetailAPIView(RetrieveAPIView):
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
    lookup_field = "slug"