import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const pos = { x: -100, y: -100 };
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const target = e.target as HTMLElement;
      hovering = !!target.closest("a, button, .cursor-hover, [role='button']");
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${hovering ? 2.4 : 1})`;
        dotRef.current.style.opacity = hovering ? "0.55" : "1";
      }
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] w-1.5 h-1.5 rounded-full bg-primary"
      aria-hidden="true"
    />
  );
};
