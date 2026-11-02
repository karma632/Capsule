"use client";

import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

type AnimationData = Record<string, unknown>;

export function CapsuleAnimation() {
  const [animationData, setAnimationData] = useState<AnimationData | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/capsule-animation.json")
      .then((response) => response.json() as Promise<AnimationData>)
      .then((data) => {
        if (active) setAnimationData(data);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  if (!animationData) return <div className="h-36 w-36 overflow-hidden lg:h-60 lg:w-60" aria-hidden="true" />;

  return (
    <div className="h-36 w-36 overflow-hidden lg:h-60 lg:w-60">
      <Lottie
        src={animationData}
        autoplay
        loop
        className="!h-36 !w-36 max-h-60 max-w-60 lg:!h-60 lg:!w-60"
        aria-label="Animated capsule hourglass"
      />
    </div>
  );
}
