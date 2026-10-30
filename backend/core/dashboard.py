from django.shortcuts import render

from projects.models import Project
from notices.models import Notice
from media_app.models import MediaArticle, GalleryImage
from investor.models import InvestorDocument
from contact.models import ContactSubmission


def dashboard_view(request):
    recent_messages = ContactSubmission.objects.order_by("-submitted_at")[:6]

    context = {
        **__import__("django.contrib.admin", fromlist=["site"]).site.each_context(request),
        "title": "Management Dashboard",

        "total_projects": Project.objects.count(),
        "active_projects": Project.objects.filter(is_active=True).count(),

        "total_notices": Notice.objects.count(),
        "active_notices": Notice.objects.filter(status="Active").count(),

        "total_articles": MediaArticle.objects.count(),
        "total_gallery": GalleryImage.objects.count(),

        "total_documents": InvestorDocument.objects.count(),
        "active_documents": InvestorDocument.objects.filter(is_active=True).count(),

        "total_messages": ContactSubmission.objects.count(),
        "new_messages": ContactSubmission.objects.filter(status="New").count(),
        "in_progress_messages": ContactSubmission.objects.filter(status="In Progress").count(),
        "resolved_messages": ContactSubmission.objects.filter(status="Resolved").count(),

        "recent_messages": recent_messages,
    }

    return render(request, "admin/dashboard.html", context)
