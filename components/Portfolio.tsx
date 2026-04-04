"use client";

export default function Portfolio() {
  const gallery = [
    { id: 1, url: "/Dekkerhomes_4746.heic", alt: "Custom timber staircase in log home" },
    { id: 2, url: "/Dekkerhomes_9084.JPEG", alt: "Large custom home exterior" },
    { id: 3, url: "/Dekkerhomes_9093.JPEG", alt: "Luxury master bathroom renovation" },
    { id: 4, url: "/Dekkerhomes_9091.JPEG", alt: "Bright sunroom interior" },
    { id: 5, url: "/Dekkerhomes_0103.heic", alt: "Custom woodwork and balcony detail" },
    { id: 6, url: "/Dekkerhomes_2699.heic", alt: "Finished cottage exterior" },
  ];

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-bronze mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-charcoal">Selected Works</h3>
          </div>
          <p className="text-stone font-light max-w-md md:text-right">
            A showcase of our recent projects across Grey & Bruce Counties. From intricate custom details to massive structural overhauls.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {gallery.map((image) => (
            <div key={image.id} className="group relative aspect-square overflow-hidden bg-linen rounded-none">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
