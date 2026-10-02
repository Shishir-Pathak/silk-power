import React, { useEffect, useState } from 'react';

const GALLERY_API = 'http://127.0.0.1:8000/api/media/gallery/';
const VIDEOS_API = 'http://127.0.0.1:8000/api/media/videos/';

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [activeImage, setActiveImage] = useState(null);

  const [photoGallery, setPhotoGallery] = useState([]);
  const [mediaVideos, setMediaVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const [galleryResponse, videosResponse] = await Promise.all([
          fetch(GALLERY_API),
          fetch(VIDEOS_API),
        ]);

        if (!galleryResponse.ok || !videosResponse.ok) {
          throw new Error('Failed to load multimedia gallery.');
        }

        const [galleryData, videosData] = await Promise.all([
          galleryResponse.json(),
          videosResponse.json(),
        ]);

        const formattedVideos = videosData.map((video) => {
          let formattedDate = '';

          if (video.published_date) {
            const date = new Date(
              `${video.published_date}T00:00:00`
            );

            formattedDate = date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });
          }

          return {
            ...video,
            date: formattedDate,
          };
        });

        setPhotoGallery(galleryData);
        setMediaVideos(formattedVideos);
      } catch (err) {
        console.error('Media gallery API error:', err);
        setError('Unable to load multimedia content.');
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const handleVideoClick = (video) => {
    if (video.video_url) {
      window.open(
        video.video_url,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <section className="mb-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-olive uppercase block mb-1">
            Visual Storytelling
          </span>

          <h2 className="text-2xl sm:text-3xl font-serif text-brand-maroon">
            Multimedia Gallery
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Visual insights from our engineering progress, natural
            landscapes, and local stakeholders.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-gray-100 p-1 rounded-full shrink-0">
          <button
            onClick={() => setActiveTab('photos')}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'photos'
                ? 'bg-brand-maroon text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Photo Gallery ({photoGallery.length})
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'videos'
                ? 'bg-brand-maroon text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Video Resources ({mediaVideos.length})
          </button>
        </div>
      </div>

      {loading && (
        <div className="py-12 text-center text-sm text-gray-500">
          Loading multimedia...
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Photos Grid */}
      {!loading && !error && activeTab === 'photos' && (
        <>
          {photoGallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {photoGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className="group relative h-60 rounded-xl overflow-hidden cursor-pointer shadow-xs"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-white/20 text-white backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="text-sm font-semibold mb-1 group-hover:text-brand-green transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-gray-300 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center text-sm text-gray-500">
              No gallery images are currently available.
            </div>
          )}
        </>
      )}

      {/* Videos Grid */}
      {!loading && !error && activeTab === 'videos' && (
        <>
          {mediaVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mediaVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                  className={`bg-white rounded-xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between ${
                    video.video_url ? 'cursor-pointer' : ''
                  }`}
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-black">
                      {video.thumbnail ? (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-800" />
                      )}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-brand-maroon/90 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-maroon transition-transform shadow-lg">
                          <svg
                            className="w-5 h-5 ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {video.duration && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                          {video.duration}
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      {video.date && (
                        <span className="text-[10px] font-semibold text-gray-400 block mb-1 uppercase tracking-wider">
                          {video.date}
                        </span>
                      )}

                      <h4 className="text-sm font-serif font-bold text-gray-900 group-hover:text-brand-maroon transition-colors mb-2">
                        {video.title}
                      </h4>

                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <span className="text-xs font-semibold text-brand-olive flex items-center gap-1.5 group-hover:underline">
                      Watch Video

                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center text-sm text-gray-500">
              No videos are currently available.
            </div>
          )}
        </>
      )}

      {/* Lightbox Modal for Photo Gallery */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />

              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 bg-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-olive block mb-1">
                  {activeImage.category}
                </span>

                <h3 className="text-lg font-serif font-bold text-gray-900">
                  {activeImage.title}
                </h3>

                <p className="text-xs text-gray-600 mt-1">
                  {activeImage.caption}
                </p>
              </div>

              <button
                onClick={() => setActiveImage(null)}
                className="bg-brand-maroon text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#600000] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaGallery;