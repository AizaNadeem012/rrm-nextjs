'use client';

import * as React from 'react';
import { Layout } from '@/components/layout/Layout';
import Contact from '@/pages_old/Contact';
import { ColorfulBackground } from '@/components/ColorfulBackground';
import { GlassCard, PageHeader, UniqueSection } from '@/components/GlassComponents';
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';

export default function EnhancedContact() {
  return (
    <ColorfulBackground pageType="contact">
      <Layout>
        <div className="container-custom py-20">
          <PageHeader 
            pageType="contact"
            title="Get In Touch"
            subtitle="Ready to transform your property? Contact us for a free quote"
            icon={<Phone className="h-12 w-12 text-white" />}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <GlassCard pageType="contact" className="hover:shadow-amber-500/30">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-800">Phone</h4>
                    <a href="tel:+447845463877" className="text-amber-700 hover:text-amber-900 transition-colors">
                      +44 7845 463877
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-800">Email</h4>
                    <a href="mailto:info@rrmcleaning.co.uk" className="text-orange-700 hover:text-orange-900 transition-colors">
                      info@rrmcleaning.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-700">Address</h4>
                    <p className="text-amber-600">
                      9 Noon Ct<br />
                      Newton-le-Willows, WA12 8QY
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard pageType="contact" className="hover:shadow-orange-500/30">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">Business Hours</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-orange-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="text-orange-800">Monday - Sunday</span>
                  </div>
                  <span className="font-bold text-orange-700">24/7</span>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl mt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span className="font-bold text-amber-800">Emergency Service Available</span>
                  </div>
                  <p className="text-amber-700 text-sm">
                    We understand that cleaning emergencies can happen anytime. Call us for urgent service!
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <UniqueSection pageType="contact" title="Why Choose R.R.M?">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-amber-800 mb-2">Direct Communication</h4>
                  <p className="text-amber-700">
                    Speak directly with our team - no call centers or automated systems
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-xl flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-orange-800 mb-2">Flexible Scheduling</h4>
                  <p className="text-orange-700">
                    Weekend and evening appointments available to fit your schedule
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-3 rounded-xl flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-amber-700 mb-2">Quick Response</h4>
                  <p className="text-amber-600">
                    Same-day responses to inquiries and competitive pricing quotes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-orange-400 to-amber-400 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-orange-700 mb-2">Local Expertise</h4>
                  <p className="text-orange-600">
                    Deep understanding of local weather effects and building materials
                  </p>
                </div>
              </div>
            </div>
          </UniqueSection>
          
          <div className="mt-16">
            <Contact />
          </div>
        </div>
      </Layout>
    </ColorfulBackground>
  );
}