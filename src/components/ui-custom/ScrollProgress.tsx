"use client";

import { useScrollProgress } from "@/hooks/useEffects";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
