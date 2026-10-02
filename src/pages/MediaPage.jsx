import React, { useState } from 'react';
import MediaHero from '../components/media/MediaHero';
import FeaturedNews from '../components/media/FeaturedNews';
import NewsGrid from '../components/media/NewsGrid';
import MediaGallery from '../components/media/MediaGallery';
import MediaKit from '../components/media/MediaKit';
import ArticleModal from '../components/media/ArticleModal';
import { mediaArticles } from '../components/media/mediaData';

const MediaPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featured = mediaArticles.find((a) => a.featured) || mediaArticles[0];
  const regularArticles = mediaArticles.filter((a) => a.id !== featured.id);

  return (
    <div className="bg-white">
      <MediaHero />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Spotlight Story */}
        <FeaturedNews 
          article={featured} 
          onSelectArticle={(art) => setSelectedArticle(art)} 
        />

        {/* Filterable News & Press Grid */}
        <NewsGrid 
          articles={regularArticles} 
          onSelectArticle={(art) => setSelectedArticle(art)} 
        />

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
