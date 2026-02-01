'use client';

import * as React from 'react';
import { Layout } from '@/components/layout/Layout';
import ProblemsIndex from '@/pages_old/ProblemsIndex';
import { ColorfulBackground } from '@/components/ColorfulBackground';
import { GlassCard, PageHeader, UniqueSection } from '@/components/GlassComponents';
import { AlertTriangle, Wrench, Shield, CheckCircle, Home, Droplets, Sun, CloudRain } from 'lucide-react';

export default function EnhancedProblems() {
  return (
    <ColorfulBackground pageType="problems">
      <Layout>
        <div className="container-custom py-20">
          <PageHeader 
            pageType="problems"
            title="Common Exterior Problems"
            subtitle="Identify and solve your property's exterior challenges with our expertise"
            icon={<AlertTriangle className="h-12 w-12 text-white" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <GlassCard pageType="problems" className="hover:shadow-indigo-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">Algae & Moss Growth</h3>
                <p className="text-indigo-700 leading-relaxed">
                  Harmful growth affecting appearance and structural integrity. Our soft washing removes safely.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard pageType="problems" className="hover:shadow-purple-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">UV Damage</h3>
                <p className="text-purple-700 leading-relaxed">
                  Fading and deterioration from sun exposure. Restoration services bring back original beauty.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard pageType="problems" className="hover:shadow-pink-500/30">
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <CloudRain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-800 mb-4">Weather Staining</h3>
                <p className="text-pink-700 leading-relaxed">
                  Rain and weather marks that discolor surfaces. Professional cleaning restores original appearance.
                </p>
              </div>
            </GlassCard>
          </div>
          
          <UniqueSection pageType="problems" title="Problem-Solving Approach">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-indigo-800 mb-2">Assessment</h4>
                    <p className="text-indigo-700">Detailed evaluation of your specific problem to determine the best solution approach.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-800 mb-2">Protection</h4>
                    <p className="text-purple-700">We safeguard surrounding areas and use eco-friendly solutions for all treatments.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-pink-800 mb-2">Resolution</h4>
                    <p className="text-pink-700">Professional treatment to eliminate the problem and prevent future occurrences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-rose-500 to-indigo-500 p-3 rounded-xl">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-rose-800 mb-2">Maintenance</h4>
                    <p className="text-rose-700">Ongoing care recommendations to keep your property looking its best.</p>
                  </div>
                </div>
              </div>
            </div>
          </UniqueSection>
          
          <div className="mt-16">
            <ProblemsIndex />
          </div>
        </div>
      </Layout>
    </ColorfulBackground>
  );
}