from rest_framework import serializers
from .models import InvestorStat, InvestorDocument, InvestorFAQ


class InvestorStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorStat
        fields = [
            'id',
            'value',
            'label',
            'icon',
            'order',
        ]


class InvestorDocumentSerializer(serializers.ModelSerializer):
    document_url = serializers.SerializerMethodField()

    class Meta:
        model = InvestorDocument
        fields = [
            'id',
            'title',
            'published_date',
            'display_date',
            'document_url',
            'external_url',
            'order',
        ]

    def get_document_url(self, obj):
        if obj.document:
            request = self.context.get('request')

            if request:
                return request.build_absolute_uri(obj.document.url)

            return obj.document.url

        return obj.external_url or None


class InvestorFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorFAQ
        fields = [
            'id',
            'question',
            'answer',
            'order',
        ]