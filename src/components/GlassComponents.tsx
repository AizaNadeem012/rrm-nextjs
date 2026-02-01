import * as React from 'react';

interface GlassCardProps {
  pageType: 'home' | 'services' | 'locations' | 'about' | 'contact' | 'faq' | 'areas' | 'problems' | 'surfaces';
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ pageType, children, className = '' }: GlassCardProps) {
  const getGlassStyle = () => {
    switch (pageType) {
      case 'home':
        return 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl shadow-red-500/20';
      case 'services':
        return 'bg-green-50/20 backdrop-blur-xl border border-green-100/30 shadow-2xl shadow-green-400/20';
      case 'locations':
        return 'bg-purple-50/20 backdrop-blur-xl border border-purple-100/30 shadow-2xl shadow-purple-400/20';
      case 'about':
        return 'bg-blue-50/20 backdrop-blur-xl border border-blue-100/30 shadow-2xl shadow-blue-500/20';
      case 'contact':
        return 'bg-pink-50/20 backdrop-blur-xl border border-pink-100/30 shadow-2xl shadow-pink-400/20';
      case 'faq':
        return 'bg-purple-50/20 backdrop-blur-xl border border-purple-100/30 shadow-2xl shadow-purple-400/20';
      case 'areas':
        return 'bg-red-50/20 backdrop-blur-xl border border-red-100/30 shadow-2xl shadow-red-400/20';
      case 'problems':
        return 'bg-indigo-50/20 backdrop-blur-xl border border-indigo-100/30 shadow-2xl shadow-indigo-400/20';
      case 'surfaces':
        return 'bg-red-50/20 backdrop-blur-xl border border-red-100/30 shadow-2xl shadow-red-400/20';
      default:
        return 'bg-white/20 backdrop-blur-xl border border-white/30';
    }
  };

  return (
    <div 
      className={`
        rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl
        ${getGlassStyle()}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface PageHeaderProps {
  pageType: 'home' | 'services' | 'locations' | 'about' | 'contact' | 'faq' | 'areas' | 'problems' | 'surfaces';
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function PageHeader({ pageType, title, subtitle, icon }: PageHeaderProps) {
  const getHeaderStyle = () => {
    switch (pageType) {
      case 'home':
        return 'text-white from-red-600 to-yellow-600';
      case 'services':
        return 'text-green-700 from-green-500 to-teal-500';
      case 'locations':
        return 'text-gray-800 from-purple-500 to-pink-500';
      case 'about':
        return 'text-blue-700 from-blue-500 to-indigo-500';
      case 'contact':
        return 'text-pink-700 from-pink-500 to-rose-500';
      case 'faq':
        return 'text-purple-700 from-purple-500 to-pink-500';
      case 'areas':
        return 'text-red-700 from-red-500 to-orange-500';
      case 'problems':
        return 'text-indigo-700 from-indigo-500 to-purple-500';
      case 'surfaces':
        return 'text-red-700 from-red-500 to-pink-500';
      default:
        return 'text-gray-800 from-gray-600 to-gray-800';
    }
  };

  const headerStyle = getHeaderStyle();

  return (
    <div className="text-center mb-16 animate-fade-in-up">
      <div className="flex items-center justify-center gap-4 mb-6">
        {icon && (
          <div className={`
            p-4 rounded-2xl backdrop-blur-lg
            bg-gradient-to-r ${headerStyle.split(' ')[2]} ${headerStyle.split(' ')[3]}
            shadow-lg
          `}>
            {icon}
          </div>
        )}
        <h1 className={`
          text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent
          bg-gradient-to-r ${headerStyle}
        `}>
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className={`
          text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed
          ${pageType === 'home' ? 'text-white/90' : 'text-gray-800'}
        `}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface UniqueSectionProps {
  pageType: 'home' | 'services' | 'locations' | 'about' | 'contact' | 'faq' | 'areas' | 'problems' | 'surfaces';
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function UniqueSection({ pageType, title, children, className = '' }: UniqueSectionProps) {
  const getSectionStyle = () => {
    const baseClasses = 'rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01]';
    
    switch (pageType) {
      case 'home':
        return `${baseClasses} bg-gradient-to-br from-red-500/10 to-yellow-500/10 border border-red-200/30`;
      case 'services':
        return `${baseClasses} bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-200/30`;
      case 'locations':
        return `${baseClasses} bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/30`;
      case 'about':
        return `${baseClasses} bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/30`;
      case 'contact':
        return `${baseClasses} bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-200/30`;
      case 'faq':
        return `${baseClasses} bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/30`;
      case 'areas':
        return `${baseClasses} bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-200/30`;
      case 'problems':
        return `${baseClasses} bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200/30`;
      case 'surfaces':
        return `${baseClasses} bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-200/30`;
      default:
        return `${baseClasses} bg-white/10 border border-white/20`;
    }
  };

  return (
    <section className={`mb-20 ${className}`}>
      <h2 className={`
        text-3xl md:text-4xl font-bold mb-8 text-center
        ${pageType === 'home' ? 'text-white' : 'text-gray-800'}
      `}>
        {title}
      </h2>
      <div className={getSectionStyle()}>
        {children}
      </div>
    </section>
  );
}