import React, { useEffect, useRef, useState } from "react";
import {
  MousePointer2,
  PenTool,
  Sparkles,
  BarChart3,
  Code,
} from "lucide-react";

interface LoaderProps {
  isLoading: boolean;
}

const ICONS = [Code, PenTool, Sparkles, BarChart3, MousePointer2, PenTool];
const PARTICLE_ICONS = [MousePointer2, PenTool, Sparkles];

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [cubeRot, setCubeRot] = useState(0);
  const [particleIdx, setParticleIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const cubeRef = useRef<HTMLDivElement>(null);

  // Animate progress, cube rotation, and morphing particle
  useEffect(() => {
    if (!isLoading) {
      setProgress(0);
      return;
    }
    setProgress(0);
    let frame: number;
    let start = Date.now();
    const animate = () => {
      setProgress((prev) => {
        if (prev < 100) {
          frame = requestAnimationFrame(animate);
          return prev + Math.max(0.7, (100 - prev) * 0.018);
        } else {
          return 100;
        }
      });
      setCubeRot(((Date.now() - start) / 1000) * 30);
      setParticleIdx(
        Math.floor(((Date.now() - start) / 1200) % PARTICLE_ICONS.length)
      );
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isLoading]);

  // Parallax blobs
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!isLoading) return null;

  // Cube faces
  const faceIcons = ICONS.map((Icon, i) => (
    <div
      key={i}
      className={`absolute w-24 h-24 flex items-center justify-center bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-md`}
      style={{
        boxShadow: `0 0 32px 4px rgba(168,139,250,0.18)`,
        filter: `drop-shadow(0 0 12px #${
          ["3b82f6", "a78bfa", "ec4899"][i % 3]
        }88)`,
      }}
    >
      <Icon
        className="w-12 h-12 text-blue-400 drop-shadow-lg"
        style={{ filter: `drop-shadow(0 0 8px #a78bfa)` }}
      />
    </div>
  ));

  // 3D cube transform
  const cubeStyle = {
    transform: `rotateX(${cubeRot}deg) rotateY(${cubeRot * 0.8}deg)`,
    transition: hovered ? "box-shadow 0.2s" : undefined,
    boxShadow: hovered
      ? "0 0 0 12px #a78bfa44, 0 0 64px 8px #3b82f644"
      : undefined,
  };

  // Progress ring (SVG, traces cube edges)
  const ringLength = 6 * 40; // 6 edges, 40px each
  const ringProgress = (progress / 100) * ringLength;

  // Morphing particle icon
  const ParticleIcon = PARTICLE_ICONS[particleIdx];

  // Parallax for blobs
  const parallax = (factor: number) =>
    `translate(${(mouse.x - 0.5) * factor}px, ${(mouse.y - 0.5) * factor}px)`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900 overflow-hidden">
      {/* Parallax animated blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-30 animate-blob"
        style={{ transform: parallax(40) }}
      />
      <div
        className="absolute -bottom-24 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        style={{ transform: parallax(-30) }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300 rounded-full filter blur-2xl opacity-20 animate-blob animation-delay-4000"
        style={{ transform: parallax(20) }}
      />
      {/* 3D Cube with icons */}
      <div className="relative z-20 flex flex-col items-center justify-center select-none">
        <div
          ref={cubeRef}
          className="relative mx-auto my-8 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center cursor-pointer group"
          style={cubeStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Cube faces */}
          {/* Front */}
          <div style={{ transform: "rotateY(0deg) translateZ(48px)" }}>
            {faceIcons[0]}
          </div>
          {/* Back */}
          <div style={{ transform: "rotateY(180deg) translateZ(48px)" }}>
            {faceIcons[1]}
          </div>
          {/* Right */}
          <div style={{ transform: "rotateY(90deg) translateZ(48px)" }}>
            {faceIcons[2]}
          </div>
          {/* Left */}
          <div style={{ transform: "rotateY(-90deg) translateZ(48px)" }}>
            {faceIcons[3]}
          </div>
          {/* Top */}
          <div style={{ transform: "rotateX(90deg) translateZ(48px)" }}>
            {faceIcons[4]}
          </div>
          {/* Bottom */}
          <div style={{ transform: "rotateX(-90deg) translateZ(48px)" }}>
            {faceIcons[5]}
          </div>
          {/* Progress ring (SVG) */}
          <svg
            className="absolute left-1/2 top-1/2"
            style={{ transform: "translate(-50%,-50%)" }}
            width={120}
            height={120}
          >
            <polyline
              points="40,20 80,20 100,60 80,100 40,100 20,60 40,20"
              fill="none"
              stroke="#a78bfa"
              strokeWidth={6}
              strokeDasharray={ringLength}
              strokeDashoffset={ringLength - ringProgress}
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 12px #a78bfa)" }}
            />
          </svg>
          {/* Morphing particle in the center */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ParticleIcon className="w-10 h-10 text-purple-500 drop-shadow-lg transition-all duration-500" />
          </span>
        </div>
        {/* Pulsing text */}
        <div className="mt-8 text-2xl md:text-3xl font-bold gradient-text animate-pulse text-center select-none">
          Loading Innovation...
        </div>
      </div>
      {/* Ripple keyframes */}
      <style>{`
        .animate-ripple {
          animation: ripple 0.7s cubic-bezier(.4,0,.2,1);
        }
        @keyframes ripple {
          0% { opacity: 0.5; transform: scale(0.7); }
          80% { opacity: 0.2; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
