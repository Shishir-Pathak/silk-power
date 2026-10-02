from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny

from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer


class ContactSubmissionAPIView(CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    permission_classes = [AllowAny]