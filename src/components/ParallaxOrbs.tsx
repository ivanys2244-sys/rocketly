"use client";

import { useEffect, useRef } from "react";

export default function ParallaxOrbs() {
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);
  const posRef = useRef([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    let rafId: number;
    let mx = 0;
    let my = 0;
    let isMouse = false;

    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
      isMouse = true;
    };

    const onLeave = () => {
      isMouse = false;
    };

    const tick = () => {
      const intensity = isMouse ? 1 : 0;
      const damp = 0.08;
      const positions = posRef.current;

      orbsRef.current.forEach((orb, i) => {
        if (!orb) return;
        const factor = 8 + i * 4;
        const targetX = mx * factor * intensity;
        const targetY = my * factor * intensity;
        const pos = positions[i];
        pos.x += (targetX - pos.x) * damp;
        pos.y += (targetY - pos.y) * damp;
        orb.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      });

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        ref={(el) => { orbsRef.current[0] = el; }}
        className="orb orb-cyan w-[400px] h-[400px] md:w-[800px] md:h-[800px] top-[-100px] md:top-[-200px] left-[-100px] md:left-[-200px]"
      />
      <div
        ref={(el) => { orbsRef.current[1] = el; }}
        className="orb orb-purple w-[300px] h-[300px] md:w-[600px] md:h-[600px] bottom-[20%] right-[-50px] md:right-[-100px]"
      />
      <div
        ref={(el) => { orbsRef.current[2] = el; }}
        className="orb orb-green w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-[50%] left-[10%]"
      />
    </div>
  );
}
