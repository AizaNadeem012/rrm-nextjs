'use client';

import * as React from 'react';
import { Layout } from '@/components/layout/Layout';
import ServicesIndex from '@/pages_old/ServicesIndex';
import { ColorfulBackground } from '@/components/ColorfulBackground';
import { GlassCard, PageHeader, UniqueSection } from '@/components/GlassComponents';
import { Wrench, Zap, Home, Droplets } from 'lucide-react';

export default function EnhancedServices() {
  return (
    <ColorfulBackground pageType="services">
      <Layout>
        <div className="container-custom py-20">
          <PageHeader 
            pageType="services"
            title="Our Professional Services"
            subtitle="Expert cleaning solutions for every surface and challenge"
            icon={<Wrench className="h-12 w-12 text-white" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <GlassCard pageType="services" className="hover:shadow-pink-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-800 mb-4">Pressure Washing</h3>
                <p className="text-pink-700 leading-relaxed">
                  High-powered cleaning for driveways, patios, and hard surfaces with professional-grade equipment.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard pageType="services" className="hover:shadow-rose-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-rose-800 mb-4">Driveway Cleaning</h3>
                <p className="text-rose-700 leading-relaxed">
                  Specialized cleaning for all driveway types including block paving, concrete, and tarmac surfaces.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard pageType="services" className="hover:shadow-pink-400/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-700 mb-4">Soft Washing</h3>
                <p className="text-pink-600 leading-relaxed">
                  Gentle yet effective cleaning for delicate surfaces like roofs and painted areas.
                </p>
              </div>
            </GlassCard>
          </div>
          
          <UniqueSection pageType="services" title="Why Choose Our Services?">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl">
                    <Zap className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pink-800 mb-2">Professional Equipment</h4>
                    <p className="text-pink-700">State-of-the-art cleaning technology for superior results</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-xl">
                    <Droplets className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-rose-800 mb-2">Eco-Friendly Solutions</h4>
                    <p className="text-rose-700">Environmentally safe cleaning products and methods</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-xl">
                    <Home className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pink-800 mb-2">Fully Insured</h4>
                    <p className="text-pink-700">Complete coverage for your peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-xl">
                    <Wrench className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-rose-800 mb-2">Satisfaction Guaranteed</h4>
                    <p className="text-rose-700">We don't stop until you're completely satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </UniqueSection>
          
          <div className="mt-16">
            <ServicesIndex />
          </div>
        </div>
      </Layout>
    </ColorfulBackground>
  );
}