import React from 'react';

interface ColorfulBackgroundProps {
  pageType: 'home' | 'services' | 'locations' | 'about' | 'contact' | 'faq' | 'areas' | 'problems' | 'surfaces';
  children: React.ReactNode;
}

export function ColorfulBackground({ pageType, children }: ColorfulBackgroundProps) {
  const getBackgroundStyle = () => {
    switch (pageType) {
      case 'home':
        return {
          background: `linear-gradient(135deg, 
            #ff6b6b 0%, 
            #4ecdc4 25%, 
            #45b7d1 50%, 
            #96ceb4 75%, 
            #feca57 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        };
      case 'services':
        return {
          background: `linear-gradient(135deg, 
            #a8e6cf 0%, 
            #dcedc1 25%, 
            #ffd3b6 50%, 
            #ffaaa5 75%, 
            #ff8b94 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 12s ease infinite'
        };
      case 'locations':
        return {
          background: `linear-gradient(135deg, 
            #ff9ff3 0%, 
            #f368e0 25%, 
            #ee5a24 50%, 
            #00d2d3 75%, 
            #1dd1a1 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 18s ease infinite'
        };
      case 'about':
        return {
          background: `linear-gradient(135deg, 
            #54a0ff 0%, 
            #5f27cd 25%, 
            #341f97 50%, 
            #222f3e 75%, 
            #48dbfb 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite'
        };
      case 'contact':
        return {
          background: `linear-gradient(135deg, 
            #ff9ff3 0%, 
            #f368e0 25%, 
            #ff6b6b 50%, 
            #ffa8a8 75%, 
            #ffde7d 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 10s ease infinite'
        };
      case 'faq':
        return {
          background: `linear-gradient(135deg, 
            #6d214f 0%, 
            #b33771 25%, 
            #fd7272 50%, 
            #ffbe76 75%, 
            #7ed6df 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 16s ease infinite'
        };
      case 'areas':
        return {
          background: `linear-gradient(135deg, 
            #eb4d4b 0%, 
            #6ab04c 25%, 
            #badc58 50%, 
            #f9ca24 75%, 
            #f0932b 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 14s ease infinite'
        };
      case 'problems':
        return {
          background: `linear-gradient(135deg, 
            #2c2c54 0%, 
            #40407a 25%, 
            #706fd3 50%, 
            #33d9b2 75%, 
            #218c74 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 22s ease infinite'
        };
      case 'surfaces':
        return {
          background: `linear-gradient(135deg, 
            #ff5252 0%, 
            #ff4081 25%, 
            #e040fb 50%, 
            #7c4dff 75%, 
            #536dfe 100%)`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 13s ease infinite'
        };
      default:
        return {
          background: `linear-gradient(135deg, 
            #667eea 0%, 
            #764ba2 100%)`
        };
    }
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={getBackgroundStyle()}
    >
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
      

    </div>
  );
}