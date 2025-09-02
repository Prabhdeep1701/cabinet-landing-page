import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const title = "Student Cabinet";
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<'typing' | 'logo' | 'done'>("typing");
  const [logoSrc, setLogoSrc] = useState<string>("/cabinet-logo.png");

  useEffect(() => {
    // Try to use cabinet-logo.png if present, otherwise fallback to favicon
    const img = new Image();
    img.onload = () => setLogoSrc("/cabinet-logo.png");
    img.onerror = () => setLogoSrc("/favicon.ico");
    img.src = "/cabinet-logo.png";

    let i = 0;
    const speed = 45; // ms per character (faster)
    const typeTimer = setInterval(() => {
      i += 1;
      setTyped(title.slice(0, i));
      if (i >= title.length) {
        clearInterval(typeTimer);
        // Move to white logo stage
        setTimeout(() => {
          setPhase('logo');
          // Show logo briefly, then go straight to app (no fade)
          setTimeout(() => {
            setPhase('done');
            onLoadingComplete();
          }, 450); // logo display duration
        }, 150); // small gap before logo
      }
    }, speed);

    return () => clearInterval(typeTimer);
  }, [onLoadingComplete]);

  if (phase === 'typing') {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black`}>
        <h1 className="font-heading text-white text-4xl md:text-6xl tracking-wide">
          <span className="[&::after]:content-[''] relative">
            {typed}
            <span className="inline-block w-0.5 h-8 md:h-10 ml-1 align-middle bg-white animate-pulse" />
          </span>
        </h1>
      </div>
    );
  }

  // Logo phase – white screen with pixel/blur reveal
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white`}>
      <img
        src={logoSrc}
        alt="Cabinet Logo"
        className="w-32 h-32 md:w-40 md:h-40 animate-[logoPunch_450ms_cubic-bezier(.2,.8,.2,1)_forwards]"
      />
      <style>
        {`@keyframes logoPunch { 0% { transform: scale(0.65); } 55% { transform: scale(1.25); } 75% { transform: scale(0.95); } 100% { transform: scale(1); } }`}
      </style>
    </div>
  );
};

export default LoadingScreen;