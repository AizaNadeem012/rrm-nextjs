'use client';

import * as React from 'react';
import { Layout } from '@/components/layout/Layout';
import LocationsIndex from '@/pages_old/LocationsIndex';
import { ColorfulBackground } from '@/components/ColorfulBackground';
import { GlassCard, PageHeader, UniqueSection } from '@/components/GlassComponents';
import { MapPin, Navigation, Clock, Star } from 'lucide-react';

export default function EnhancedLocations() {
  return (
    <ColorfulBackground pageType="locations">
      <Layout>
        <div className="container-custom py-20">
          <PageHeader 
            pageType="locations"
            title="Areas We Serve"
            subtitle="Professional cleaning services across the North West"
            icon={<MapPin className="h-12 w-12 text-white" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { name: 'Newton-le-Willows', color: 'from-orange-500 to-amber-500', icon: MapPin },
              { name: 'Warrington', color: 'from-amber-500 to-orange-500', icon: Navigation },
              { name: 'St Helens', color: 'from-orange-400 to-amber-400', icon: Star },
              { name: 'Liverpool', color: 'from-amber-600 to-orange-600', icon: Clock }
            ].map((location, index) => {
              const IconComponent = location.icon;
              return (
                <GlassCard 
                  key={index} 
                  pageType="locations" 
                  className="text-center hover:shadow-orange-500/30"
                >
                  <div className={`bg-gradient-to-r ${location.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{location.name}</h3>
                  <p className="text-orange-700 text-sm">Local expert service</p>
                </GlassCard>
              );
            })}
          </div>
          
          <UniqueSection pageType="locations" title="Why Choose Local Service?">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-5 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Quick Response</h3>
                <p className="text-orange-700 leading-relaxed">
                  Local presence means faster service and immediate attention to your cleaning needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-5 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Trusted Locally</h3>
                <p className="text-amber-700 leading-relaxed">
                  Known and trusted by neighbors and local businesses for quality workmanship
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-400 to-amber-400 p-5 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Navigation className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4">Local Knowledge</h3>
                <p className="text-orange-600 leading-relaxed">
                  Understanding of local building types, weather conditions, and specific cleaning challenges
                </p>
              </div>
            </div>
          </UniqueSection>
          
          <div className="mt-16">
            <LocationsIndex />
          </div>
        </div>
      </Layout>
    </ColorfulBackground>
  );
}