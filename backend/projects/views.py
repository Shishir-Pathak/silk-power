from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Project
from .serializers import ProjectSerializer


class ProjectListAPIView(ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return Project.objects.filter(
            is_active=True
        ).prefetch_related(
            'specifications',
            'gallery'
        )


class ProjectDetailAPIView(RetrieveAPIView):
    serializer_class = ProjectSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return Project.objects.filter(
            is_active=True
        ).prefetch_related(
            'specifications',
            'gallery'
        )