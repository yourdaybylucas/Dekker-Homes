export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/seed/luxurywood/1920/1080?blur=1")',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-linen/80 mb-6">
          Serving Wiarton, Owen Sound & Sauble Beach
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-linen mb-8 leading-[1.1] tracking-tight">
          Nathan Dekker <br className="hidden md:block" />
          <span className="italic text-bronze">Master Carpenter</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-linen/90 max-w-2xl mx-auto font-light mb-12 tracking-wide">
          High-end custom carpentry and renovations across Grey and Bruce Counties.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-xs tracking-[0.2em] uppercase text-linen bg-bronze hover:bg-linen hover:text-charcoal transition-colors rounded-none"
          >
            Discuss Your Project
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-xs tracking-[0.2em] uppercase text-linen border border-linen/30 hover:bg-linen/10 transition-colors rounded-none backdrop-blur-sm"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
