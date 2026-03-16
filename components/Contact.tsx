"use client";

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-charcoal text-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-bronze mb-4">Inquiries</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-light text-linen mb-8">Let's discuss your vision.</h3>
              <p className="text-stone font-light leading-relaxed text-lg">
                We prefer to speak directly with our clients. Give us a call to discuss your project, or fill out the form and we'll get back to you promptly.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-linen/10">
              <a href="tel:+15551234567" className="flex items-start gap-6 group">
                <div className="p-4 border border-linen/20 rounded-none group-hover:border-bronze transition-colors">
                  <Phone className="w-5 h-5 text-bronze" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-stone uppercase tracking-[0.2em] mb-2">Call Us</p>
                  <p className="text-xl font-serif text-linen group-hover:text-bronze transition-colors">(555) 123-4567</p>
                </div>
              </a>

              <a href="mailto:nathan@dekkerhomes.com" className="flex items-start gap-6 group">
                <div className="p-4 border border-linen/20 rounded-none group-hover:border-bronze transition-colors">
                  <Mail className="w-5 h-5 text-bronze" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-stone uppercase tracking-[0.2em] mb-2">Email</p>
                  <p className="text-lg font-serif text-linen group-hover:text-bronze transition-colors">nathan@dekkerhomes.com</p>
                </div>
              </a>

              <div className="flex items-start gap-6">
                <div className="p-4 border border-linen/20 rounded-none">
                  <MapPin className="w-5 h-5 text-bronze" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-stone uppercase tracking-[0.2em] mb-2">Service Area</p>
                  <p className="text-lg font-serif text-linen">Wiarton, Grey & Bruce Counties</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 border border-linen/20 rounded-none">
                  <Clock className="w-5 h-5 text-bronze" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-stone uppercase tracking-[0.2em] mb-2">Hours</p>
                  <p className="text-lg font-serif text-linen">Mon - Fri: 7:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-linen p-10 md:p-16 text-charcoal rounded-none">
            <h3 className="text-3xl font-serif font-light mb-10">Request a Quote</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-sans tracking-[0.1em] uppercase text-stone mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-0 border-b border-charcoal/20 px-0 py-3 focus:ring-0 focus:border-bronze outline-none transition-colors font-serif text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-sans tracking-[0.1em] uppercase text-stone mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-transparent border-0 border-b border-charcoal/20 px-0 py-3 focus:ring-0 focus:border-bronze outline-none transition-colors font-serif text-lg"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-sans tracking-[0.1em] uppercase text-stone mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-0 border-b border-charcoal/20 px-0 py-3 focus:ring-0 focus:border-bronze outline-none transition-colors font-serif text-lg"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-xs font-sans tracking-[0.1em] uppercase text-stone mb-2">Project Location</label>
                <input 
                  type="text" 
                  id="location" 
                  className="w-full bg-transparent border-0 border-b border-charcoal/20 px-0 py-3 focus:ring-0 focus:border-bronze outline-none transition-colors font-serif text-lg"
                  placeholder="e.g., Wiarton, Sauble Beach"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-xs font-sans tracking-[0.1em] uppercase text-stone mb-2">Project Details</label>
                <textarea 
                  id="description" 
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-charcoal/20 px-0 py-3 focus:ring-0 focus:border-bronze outline-none transition-colors font-serif text-lg resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-charcoal hover:bg-bronze text-linen font-sans text-xs tracking-[0.2em] uppercase py-5 px-8 rounded-none transition-colors mt-4"
              >
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
