import { useEffect, useState } from "react";

interface LightPulse {
  id: number;
  type: 'horizontal' | 'vertical';
  position: number;
  duration: number;
  delay: number;
}

const DashedBackground = () => {
  const [pulses, setPulses] = useState<LightPulse[]>([]);

  useEffect(() => {
    const createPulse = () => {
      const newPulse: LightPulse = {
        id: Date.now() + Math.random(),
        type: Math.random() > 0.5 ? 'horizontal' : 'vertical',
        position: Math.floor(Math.random() * (Math.random() > 0.5 ? 5 : 6)),
        duration: 2 + Math.random() * 3,
        delay: 0,
      };
      
      setPulses(prev => [...prev, newPulse]);
      
      // Remove pulse after animation completes
      setTimeout(() => {
        setPulses(prev => prev.filter(p => p.id !== newPulse.id));
      }, newPulse.duration * 1000 + 100);
    };

    // Create initial pulses
    for (let i = 0; i < 3; i++) {
      setTimeout(createPulse, i * 800);
    }

    // Continuously create new pulses
    const interval = setInterval(createPulse, 1500 + Math.random() * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const verticalPositions = [0, 25, 50, 75, 100];
  const horizontalCount = 6;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid container matching content width */}
      <div className="h-full max-w-4xl mx-auto px-6 relative">
        {/* Evenly spaced vertical lines */}
        {verticalPositions.map((percent, index) => (
          <div
            key={`v-${percent}`}
            className="absolute top-0 h-full border-l border-dashed border-foreground/[0.08]"
            style={{ left: `calc(${percent}% - ${percent === 100 ? '1px' : '0px'})` }}
          >
            {/* Light pulses on vertical lines */}
            {pulses
              .filter(p => p.type === 'vertical' && p.position === index)
              .map(pulse => (
                <div
                  key={pulse.id}
                  className="absolute left-1/2 -translate-x-1/2 w-px h-12 rounded-full animate-pulse-vertical"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)',
                    boxShadow: '0 0 6px 1px rgba(255,255,255,0.1)',
                    animationDuration: `${pulse.duration}s`,
                  }}
                />
              ))}
          </div>
        ))}
      </div>
      
      {/* Horizontal dashed lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-20">
        {[...Array(horizontalCount)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="w-full border-t border-dashed border-foreground/[0.08] relative"
          >
            {/* Light pulses on horizontal lines */}
            {pulses
              .filter(p => p.type === 'horizontal' && p.position === i)
              .map(pulse => (
                <div
                  key={pulse.id}
                  className="absolute top-1/2 -translate-y-1/2 h-px w-20 rounded-full animate-pulse-horizontal"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)',
                    boxShadow: '0 0 6px 1px rgba(255,255,255,0.1)',
                    animationDuration: `${pulse.duration}s`,
                  }}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashedBackground;
