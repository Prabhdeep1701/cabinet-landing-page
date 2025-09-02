import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-expect-error vanta has no types
import WAVES from 'vanta/dist/vanta.waves.min';

type VantaWavesProps = {
  className?: string;
  color?: number;
  backgroundColor?: number;
  shininess?: number;
  waveHeight?: number;
  waveSpeed?: number;
  zoom?: number;
};

const VantaWaves = ({
  className = '',
  color = 0x8b8b8b,
  backgroundColor = 0x000000,
  shininess = 76.0,
  waveHeight = 32.5,
  waveSpeed = 0.95,
  zoom = 0.88,
}: VantaWavesProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) return;
    vantaRef.current = WAVES({
      el: ref.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color,
      backgroundColor,
      shininess,
      waveHeight,
      waveSpeed,
      zoom,
    });

    const onResize = () => {
      try { vantaRef.current?.resize?.(); } catch {}
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      try { vantaRef.current?.destroy?.(); } catch {}
      vantaRef.current = null;
    };
  }, [color, backgroundColor, shininess, waveHeight, waveSpeed, zoom]);

  return <div ref={ref} className={`w-full h-full ${className}`} />;
};

export default VantaWaves;


