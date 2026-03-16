export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-linen/10 text-stone py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="font-serif text-2xl tracking-widest uppercase text-linen mb-6 block">
              Dekker
              <span className="block font-sans text-[0.6rem] tracking-[0.3em] text-stone mt-2">Homes & Renovations Inc</span>
            </a>
            <p className="text-sm font-light leading-relaxed max-w-sm">
              Generations of craftsmanship in Grey & Bruce Counties. Providing high-end custom carpentry and renovations in Wiarton, Owen Sound, Sauble Beach, and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-linen font-sans text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#home" className="hover:text-bronze transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-bronze transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-bronze transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-bronze transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-linen font-sans text-xs uppercase tracking-[0.2em] mb-8">Service Area</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>Wiarton</li>
              <li>Owen Sound</li>
              <li>Sauble Beach</li>
              <li>Grey County</li>
              <li>Bruce County</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-linen/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Dekker Homes and Renovations Inc. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Fully Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
}
