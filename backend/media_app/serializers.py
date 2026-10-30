from rest_framework import serializers
from .models import (
    MediaArticle,
    ArticleParagraph,
    ArticleHighlight,
    GalleryImage,
    MediaVideo,
)




class ArticleParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleParagraph
        fields = ['id', 'text', 'order']


class ArticleHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleHighlight
        fields = ['id', 'text', 'order']


class MediaArticleSerializer(serializers.ModelSerializer):
    content = ArticleParagraphSerializer(
        many=True,
        read_only=True
    )

    highlights = ArticleHighlightSerializer(
        many=True,
        read_only=True
    )

    image = serializers.SerializerMethodField()

    class Meta:
        model = MediaArticle
        fields = [
            'id',
            'slug',
            'title',
            'category',
            'published_date',
            'read_time',
            'featured',
            'image',
            'excerpt',
            'author',
            'content',
            'highlights',
        ]

    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')

            if request:
                return request.build_absolute_uri(obj.image.url)

            return obj.image.url

        return obj.image_url or None


class GalleryImageSerializer(serializers.ModelSerializer):
    src = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = [
            'id',
            'title',
            'category',
            'src',
            'caption',
            'order',
        ]

    def get_src(self, obj):
        if obj.image:
            request = self.context.get('request')

            if request:
                return request.build_absolute_uri(obj.image.url)

            return obj.image.url

        return obj.image_url or None


class MediaVideoSerializer(serializers.ModelSerializer):
    thumbnail = serializers.SerializerMethodField()

    class Meta:
        model = MediaVideo
        fields = [
            'id',
            'title',
            'duration',
            'published_date',
            'thumbnail',
            'video_url',
            'description',
            'order',
        ]

    def get_thumbnail(self, obj):
        if obj.thumbnail:
            request = self.context.get('request')

            if request:
                return request.build_absolute_uri(
                    obj.thumbnail.url
                )

            return obj.thumbnail.url

        return obj.thumbnail_url or None