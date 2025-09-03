import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-80">
        <path d="M12.429 2.378a.75.75 0 01.341.341l9.13 20.352a.75.75 0 01-1.071.936l-7.23-5.263-3.235 3.19a.75.75 0 01-1.282-.558V4.897a.75.75 0 01.936-1.071l7.23 5.263 3.235-3.19a.75.75 0 01.558-1.282h-11.66z" stroke="black" strokeWidth="0.5"/>
      </svg>
    </div>
  );
};

export default CustomCursor;
