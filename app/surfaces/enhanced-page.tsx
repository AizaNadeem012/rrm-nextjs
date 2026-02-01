'use client';

import * as React from 'react';
import { Layout } from '@/components/layout/Layout';
import SurfacesIndex from '@/pages_old/SurfacesIndex';
import { ColorfulBackground } from '@/components/ColorfulBackground';
import { GlassCard, PageHeader, UniqueSection } from '@/components/GlassComponents';
import { Home, Droplets, Layers, Square, Wind, Sun, TreePine, Building2 } from 'lucide-react';

export default function EnhancedSurfaces() {
  return (
    <ColorfulBackground pageType="surfaces">
      <Layout>
        <div className="container-custom py-20">
          <PageHeader 
            pageType="surfaces"
            title="Surface Types We Clean"
            subtitle="Specialized cleaning solutions for every surface material and texture"
            icon={<Square className="h-12 w-12 text-white" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <GlassCard pageType="surfaces" className="hover:shadow-red-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-4">Block Paving</h3>
                <p className="text-red-700 text-sm">
                  Restore the original color and texture of your block paved surfaces with our specialized treatment.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard pageType="surfaces" className="hover:shadow-pink-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pink-800 mb-4">Concrete</h3>
                <p className="text-pink-700 text-sm">
                  Deep cleaning to remove oil stains, tire marks, and general grime from concrete surfaces.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard pageType="surfaces" className="hover:shadow-purple-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">Natural Stone</h3>
                <p className="text-purple-700 text-sm">
                  Gentle cleaning that preserves the natural beauty and integrity of stone surfaces.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard pageType="surfaces" className="hover:shadow-indigo-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Wind className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Tarmac</h3>
                <p className="text-indigo-700 text-sm">
                  Safe and effective cleaning that maintains the integrity of tarmac surfaces.
                </p>
              </div>
            </GlassCard>
          </div>
          
          <UniqueSection pageType="surfaces" title="Our Surface-Specific Approach">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-xl">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-800 mb-2">Material Assessment</h4>
                    <p className="text-red-700">We evaluate each surface type to determine the optimal cleaning method and pressure settings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-xl">
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pink-800 mb-2">Specialized Solutions</h4>
                    <p className="text-pink-700">Different surfaces require different cleaning solutions and techniques for best results.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-xl">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-800 mb-2">Protective Measures</h4>
                    <p className="text-purple-700">We protect adjacent areas and use eco-friendly products suitable for each surface.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-xl">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-indigo-800 mb-2">Quality Assurance</h4>
                    <p className="text-indigo-700">Final inspection ensures complete cleaning while preserving surface integrity.</p>
                  </div>
                </div>
              </div>
            </div>
          </UniqueSection>
          
          <UniqueSection pageType="surfaces" title="Surface Care Tips">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-red-800 mb-2">Regular Maintenance</h4>
                <p className="text-red-700 text-sm">Schedule regular cleaning to prevent buildup and maintain appearance.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-pink-800 mb-2">Proper Drainage</h4>
                <p className="text-pink-700 text-sm">Ensure proper water drainage to prevent moss and algae growth.</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-purple-800 mb-2">Seasonal Care</h4>
                <p className="text-purple-700 text-sm">Adjust cleaning frequency based on seasonal weather conditions.</p>
              </div>
            </div>
          </UniqueSection>
          
          <div className="mt-16">
            <SurfacesIndex />
          </div>
        </div>
      </Layout>
    </ColorfulBackground>
  );
}