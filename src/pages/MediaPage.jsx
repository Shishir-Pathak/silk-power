import React, { useEffect, useState } from 'react';
import MediaHero from '../components/media/MediaHero';
import FeaturedNews from '../components/media/FeaturedNews';
import NewsGrid from '../components/media/NewsGrid';
import MediaGallery from '../components/media/MediaGallery';
import MediaKit from '../components/media/MediaKit';
import ArticleModal from '../components/media/ArticleModal';

const API_URL = 'http://127.0.0.1:8000/api/media/articles/';

const MediaPage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Failed to load media articles.');
        }

        const data = await response.json();

        const formattedArticles = data.map((article) => {
          const date = new Date(
            `${article.published_date}T00:00:00`
          );

          return {
            id: article.id,
            slug: article.slug,
            title: article.title,
            category: article.category,

            date: date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),

            readTime: article.read_time,
            featured: article.featured,
            image: article.image,
            excerpt: article.excerpt,
            author: article.author,

            content:
              article.content?.map((item) => item.text) || [],

            highlights:
              article.highlights?.map((item) => item.text) || [],
          };
        });

        setArticles(formattedArticles);
      } catch (err) {
        console.error(err);
        setError('Unable to load media articles.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const featured =
    articles.find((article) => article.featured) ||
    articles[0];

  const regularArticles = featured
    ? articles.filter((article) => article.id !== featured.id)
    : [];

  return (
    <div className="bg-white">
      <MediaHero />

      <div className="container mx-auto px-4 lg:px-8 py-16">

        {loading && (
          <div className="py-12 text-center text-sm text-gray-500">
            Loading media...
          </div>
        )}

        {error && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && featured && (
          <>
            {/* Spotlight Story */}
            <FeaturedNews
              article={featured}
              onSelectArticle={(art) =>
                setSelectedArticle(art)
              }
            />

            {/* Filterable News & Press Grid */}
            <NewsGrid
              articles={regularArticles}
              onSelectArticle={(art) =>
                setSelectedArticle(art)
              }
            />
          </>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="py-12 text-center text-sm text-gray-500">
            No media articles are currently available.
          </div>
        )}

        {/* Multimedia Showcase */}
        <MediaGallery />

        {/* Brand Assets & Media Kit */}
        <MediaKit />
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
};

export default MediaPage;