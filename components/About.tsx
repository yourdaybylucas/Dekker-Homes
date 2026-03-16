export default function About() {
  return (
    <section id="about" className="py-32 bg-linen border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/carpenter-portrait/800/1000" 
                alt="Nathan Dekker - Master Carpenter" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-charcoal/10 m-4 pointer-events-none"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-bronze mb-4">The Craftsman</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-charcoal mb-8">Nathan Dekker</h3>
            <div className="space-y-6 text-stone font-light leading-relaxed text-lg">
              <p>
                As a second-generation builder, I founded Dekker Homes and Renovations Inc. on a simple principle: <strong>personal accountability.</strong> When you hire us, you aren't handed off to a project manager. I am the owner, and I am your primary carpenter.
              </p>
              <p>
                I'm on-site every day with my toolbelt on, marrying traditional, time-tested building methods with refined, high-end finishes. Whether framing a major addition in Owen Sound, renovating a cottage in Sauble Beach, or installing a bespoke staircase in Wiarton, I treat every cut and joint as if it were going into my own home.
              </p>
              <p>
                I take immense pride in clear communication, clean job sites, and a friendly, collaborative approach. My name is on the business, but more importantly, my heart is in the work.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-charcoal/10 flex items-center gap-6">
              <div>
                <p className="font-serif text-3xl italic text-charcoal mb-1">Nathan Dekker</p>
                <p className="text-xs font-sans tracking-[0.1em] uppercase text-stone">Owner & Master Carpenter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
