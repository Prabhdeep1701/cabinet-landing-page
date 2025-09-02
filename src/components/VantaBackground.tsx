import { useEffect, useRef } from 'react';
// @ts-expect-error vanta has no types
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import p5 from 'p5';

type VantaBackgroundProps = {
  className?: string;
  color?: number;
  backgroundColor?: number;
  elId?: string;
  spacing?: number;
  chaos?: number;
  scale?: number;
  scaleMobile?: number;
};

const VantaBackground = ({ className = '', color = 0xffffff, backgroundColor = 0x000000, elId = 'vanta-bg', spacing = 10.0, chaos = 1.8, scale = 1.0, scaleMobile = 1.0 }: VantaBackgroundProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<any>(null);
  const resizeTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const isMobile = typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false;
    const prefersReduced = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    // Performance-tuned values
    const effectiveScale = (isMobile ? scaleMobile : scale) * (dpr > 1.5 ? 0.75 : 1);
    const effectiveSpacing = Math.max(8, spacing + (dpr > 1.5 ? 2 : 0));
    const effectiveChaos = Math.max(0.6, prefersReduced ? Math.min(chaos, 1.0) : chaos - (dpr > 1.5 ? 0.4 : 0));
    const mouseEnabled = !prefersReduced && !isMobile;

    vantaRef.current = TOPOLOGY({
      el: ref.current,
      p5,
      mouseControls: mouseEnabled,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: Math.max(0.6, effectiveScale),
      scaleMobile: Math.max(0.6, effectiveScale),
      color,
      backgroundColor,
      // topology effect does not use spacing/chaos; keep calculated values unused safely
    });

    const onResize = () => {
      if (resizeTimer.current) window.clearTimeout(resizeTimer.current);
      resizeTimer.current = window.setTimeout(() => {
        try {
          vantaRef.current?.resize?.();
        } catch {}
      }, 120);
    };
    window.addEventListener('resize', onResize);
    const onVisibility = () => {
      if (document.hidden) return;
      onResize();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      if (vantaRef.current) {
        vantaRef.current.destroy?.();
        vantaRef.current = null;
      }
    };
  }, [color, backgroundColor, spacing, chaos, scale, scaleMobile]);

  return <div id={elId} ref={ref} className={`w-full h-full ${className}`} />;
};

export default VantaBackground;


