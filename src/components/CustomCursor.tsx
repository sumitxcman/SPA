import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'book' | 'pointer'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'view') {
        setCursorType('view');
      } else if (cursorAttr === 'book') {
        setCursorType('book');
      } else if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {cursorType === 'view' && (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96B] text-[#0B0B0B] font-serif text-xs font-semibold tracking-widest shadow-2xl scale-100 transition-all duration-200">
          VIEW
        </div>
      )}

      {cursorType === 'book' && (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF8F3] text-[#0B0B0B] font-sans text-xs font-bold tracking-widest shadow-2xl scale-105 transition-all duration-200">
          BOOK
        </div>
      )}

      {cursorType === 'pointer' && (
        <div className="h-9 w-9 rounded-full border border-[#C8A96B] bg-[#C8A96B]/20 backdrop-blur-xs scale-110 transition-all duration-150" />
      )}

      {cursorType === 'default' && (
        <div className="flex items-center justify-center h-6 w-6">
          <div className="h-2 w-2 rounded-full bg-[#C8A96B]" />
          <div className="absolute h-6 w-6 rounded-full border border-[#C8A96B]/40 animate-ping opacity-30" />
        </div>
      )}
    </div>
  );
};
