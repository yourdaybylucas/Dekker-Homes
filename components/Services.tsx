import { Hammer, Home, Wrench } from 'lucide-react';

export default function Services() {
  const highlights = [
    {
      icon: <Home className="w-8 h-8 text-bronze mb-6" strokeWidth={1} />,
      title: "Major Additions",
      description: "From structural work to $200K additions, we handle complex builds with precision."
    },
    {
      icon: <Hammer className="w-8 h-8 text-bronze mb-6" strokeWidth={1} />,
      title: "Custom Carpentry",
      description: "High-end custom staircases, fireplaces, and bespoke woodwork."
    },
    {
      icon: <Wrench className="w-8 h-8 text-bronze mb-6" strokeWidth={1} />,
      title: "Complete Renovations",
      description: "Full home and cottage renovations that breathe new life into your property."
    }
  ];

  const details = [
    {
      title: "Major Additions & Structural Work",
      description: "Expanding your footprint requires more than just framing. We manage the entire process of major additions, ensuring structural integrity, seamless integration with your existing home, and compliance with all local building codes in Grey & Bruce Counties. Whether it's a new wing, a second story, or a massive garage, we build it to last generations.",
      image: "/Dekkerhomes_1486.heic",
      alt: "House addition framing"
    },
    {
      title: "High-End Custom Carpentry",
      description: "The difference between a house and a home is in the details. Our custom carpentry services focus on the focal points of your living space. From sweeping, handcrafted staircases to intricate custom fireplace mantels and built-in cabinetry, we bring artisanal quality to every cut and joint.",
      image: "/Dekkerhomes_3228.heic",
      alt: "Custom wooden staircase"
    },
    {
      title: "Complete Home & Cottage Renovations",
      description: "Transform your existing space into your dream home or cottage. We specialize in comprehensive renovations that respect the character of your property while updating it for modern living. From gutting and rebuilding kitchens and bathrooms to full-scale interior transformations, our team and trusted subcontractors deliver excellence.",
      image: "/Dekkerhomes_4880.heic",
      alt: "Renovated kitchen interior"
    }
  ];

  return (
    <section id="services" className="py-32 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-bronze mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-charcoal mb-8">Uncompromising Quality</h3>
          <p className="text-lg text-stone font-light leading-relaxed">
            No project is too complex. We specialize in high-end capabilities, bringing decades of experience to every job site. From custom stairs to massive additions, we deliver excellence.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white p-12 rounded-none border border-charcoal/5 hover:border-bronze/30 transition-colors">
              {item.icon}
              <h4 className="text-2xl font-serif text-charcoal mb-4">{item.title}</h4>
              <p className="text-stone font-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-32 md:space-y-48">
          {details.map((detail, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={detail.image} 
                    alt={detail.alt} 
                    className="object-cover w-full h-full rounded-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-bronze font-serif text-xl italic">0{index + 1}</span>
                  <div className="h-px bg-bronze/30 w-12"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-charcoal mb-8">{detail.title}</h3>
                <p className="text-lg text-stone font-light leading-relaxed mb-10">
                  {detail.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-bronze hover:border-bronze transition-colors"
                >
                  Discuss this service
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
