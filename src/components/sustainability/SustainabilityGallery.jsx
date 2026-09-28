import React from 'react';

const IMG = {
  river: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1200&auto=format&fit=crop',
  village: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
  plant: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
  green: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
};

const Tile = ({ src, alt, lines }) => (
  <div className="relative h-44 sm:h-[170px] overflow-hidden group">
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
    <p className="absolute left-5 bottom-3 text-white text-[10px] tracking-[0.14em] leading-snug uppercase">
      {lines.map((l) => (
        <span key={l} className="block">{l}</span>
      ))}
    </p>
  </div>
);

const SustainabilityGallery = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white">
      <Tile src={IMG.river} alt="Healthy river" lines={['HEALTHY RIVERS', 'BRIGHTER TOMORROWS']} />
      <Tile src={IMG.village} alt="Stronger communities" lines={['STRONGER', 'COMMUNITIES']} />
      <Tile src={IMG.plant} alt="Clean energy" lines={['CLEAN ENERGY', 'LASTING IMPACT']} />
      <Tile src={IMG.green} alt="A greener Nepal" lines={['A GREENER', 'NEPAL']} />
    </section>
  );
};

export default SustainabilityGallery;