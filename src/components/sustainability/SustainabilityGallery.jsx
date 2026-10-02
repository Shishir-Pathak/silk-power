import React, { useEffect, useState } from 'react';

const Tile = ({ src, alt, title, subtitle }) => (
  <div className="relative h-44 sm:h-[170px] overflow-hidden group">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

    <p className="absolute left-5 bottom-3 text-white text-[10px] tracking-[0.14em] leading-snug uppercase">
      <span className="block">{title}</span>

      {subtitle && (
        <span className="block">{subtitle}</span>
      )}
    </p>
  </div>
);

const SustainabilityGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/sustainability/gallery/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load sustainability gallery');
        }

        return response.json();
      })
      .then((data) => {
        setGallery(data);
      })
      .catch((error) => {
        console.error('Sustainability gallery error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-8">
        <p className="text-center text-sm text-gray-500">
          Loading gallery...
        </p>
      </section>
    );
  }

  if (gallery.length === 0) {
    return null;
  }

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white">
      {gallery.map((item) => (
        <Tile
          key={item.id}
          src={item.image}
          alt={item.alt_text || item.title}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </section>
  );
};

export default SustainabilityGallery;