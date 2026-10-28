from rest_framework import serializers

from .models import Notice, NoticeAgenda

class NoticeAgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoticeAgenda
        fields = ['id', 'text', 'order']


class NoticeSerializer(serializers.ModelSerializer):
    agendas = NoticeAgendaSerializer(many=True, read_only=True)

    document_url = serializers.SerializerMethodField()
    file_size = serializers.SerializerMethodField()

    class Meta:
        model = Notice
        fields = [
            'id',
            'slug',
            'title',
            'category',
            'published_date',
            'reference_number',
            'status',
            'urgent',
            'summary',
            'meeting_time',
            'venue',
            'signatory',
            'officer',
            'book_closure_note',
            'document_url',
            'file_size',
            'agendas',
        ]

    def get_document_url(self, obj):
        if not obj.document:
            return None

        request = self.context.get('request')

        if request:
            return request.build_absolute_uri(obj.document.url)

        return obj.document.url

    def get_file_size(self, obj):
        if not obj.document:
            return None

        try:
            size = obj.document.size

            if size < 1024 * 1024:
                return f"{size / 1024:.0f} KB"

            return f"{size / (1024 * 1024):.1f} MB"

        except (FileNotFoundError, OSError):
            return None
