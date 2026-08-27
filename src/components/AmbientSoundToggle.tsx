import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AmbientSoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 432 Hz Solfeggio / Meditative frequencies
      const frequencies = [108, 216, 432, 648];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle lfo modulation
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        oscillatorsRef.current.push(osc, lfo);
      });

      setIsPlaying(true);
    } catch (e) {
      console.warn('Audio Context initialization error', e);
    }
  };

  const stopDrone = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
      setTimeout(() => {
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        oscillatorsRef.current = [];
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleSound}
        data-cursor="pointer"
        className={`flex items-center space-x-2.5 px-4 py-2.5 border rounded-none text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-md shadow-xl ${
          isPlaying
            ? 'bg-[#C8A96B] text-[#0B0B0B] border-[#C8A96B] shadow-[0_0_20px_rgba(200,169,107,0.3)]'
            : 'bg-[#0B0B0B]/85 text-[#FAF8F3]/80 hover:text-[#C8A96B] border-[#C8A96B]/30 hover:border-[#C8A96B]'
        }`}
        aria-label="Toggle Spa Atmospheric Drone"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#0B0B0B]" />
            <span className="font-semibold text-[10px]">ATMOSPHERE: ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span className="text-[10px]">ATMOSPHERE: OFF</span>
          </>
        )}
      </button>
    </div>
  );
};
