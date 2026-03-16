"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "There's nothing he can't do. His talent, honesty and dedication made our major reno/addition so much easier. He was always thinking about what he could do to make it even better. His creativity is extraordinary and his custom work is unbelievable. If anyone is looking for a contractor, you can't go wrong with Nathan!",
      author: "Rose Mary",
      location: "Wiarton"
    },
    {
      id: 2,
      text: "Nathan transformed our cottage. The attention to detail on the custom staircase was beyond our expectations. Because he does the work himself, communication was flawless. He is a true craftsman.",
      author: "Sarah & Tom M.",
      location: "Sauble Beach"
    },
    {
      id: 3,
      text: "We hired Nathan for a major addition to our heritage home. Knowing the owner was the one swinging the hammer gave us incredible peace of mind. The new space blends seamlessly with the old.",
      author: "David L.",
      location: "Owen Sound"
    },
    {
      id: 4,
      text: "Honest, reliable, and incredibly skilled. The custom fireplace Nathan built is now the centerpiece of our living room. It's rare to find builders who care this much about the final product.",
      author: "The Henderson Family",
      location: "Wiarton"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-charcoal text-linen border-b border-linen/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-bronze mb-4">Words of Trust</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-light mb-16">Client Testimonials</h3>
        
        <div className="relative">
          <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed mb-12 italic">
            "{testimonials[currentTestimonial].text}"
          </p>
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-bronze font-medium">{testimonials[currentTestimonial].author}</p>
            <p className="text-stone text-xs tracking-widest uppercase mt-2">{testimonials[currentTestimonial].location}</p>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center gap-4 mt-16">
            <button 
              onClick={prevTestimonial}
              className="p-4 rounded-none border border-linen/20 text-linen hover:bg-linen hover:text-charcoal transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-4 rounded-none border border-linen/20 text-linen hover:bg-linen hover:text-charcoal transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
