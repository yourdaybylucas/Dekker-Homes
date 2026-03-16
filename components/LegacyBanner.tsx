import { ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function LegacyBanner() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-bronze mb-4" strokeWidth={1} />,
      title: "2nd Generation",
      description: "Building on a legacy of quality"
    },
    {
      icon: <MapPin className="w-8 h-8 text-bronze mb-4" strokeWidth={1} />,
      title: "35 Years in Wiarton",
      description: "Deep roots in Grey & Bruce Counties"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-bronze mb-4" strokeWidth={1} />,
      title: "Fully Licensed & Insured",
      description: "Peace of mind for every project"
    }
  ];

  return (
    <section className="bg-charcoal py-20 border-b border-linen/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-linen/10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center pt-8 md:pt-0 first:pt-0 px-6">
              {feature.icon}
              <h3 className="text-xl font-serif text-linen mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-stone font-light text-sm tracking-wide">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
