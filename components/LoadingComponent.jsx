import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "next-themes";

const LoadingComponent = ({ onLoadingComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { theme } = useTheme();
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onLoadingComplete,
    });

    // Initial state
    gsap.set(textRef.current, { y: 50, opacity: 0 });

    // Animate loading text
    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    // Animate dots
    tl.to(".dot", {
      scale: 1.5,
      duration: 0.4,
      stagger: 0.1,
      repeat: 3,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Pause at the end
    tl.to({}, { duration: 2 });

    // Fade out
    gsap.to(containerRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      delay: 1,
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: onLoadingComplete,
    });

    return () => tl.kill();
  }, [onLoadingComplete]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black text-white dark:bg-white dark:text-black`}
    >
      <div ref={textRef} className="text-4xl font-bold">
        Welcome to Abu Bokor's Portfolio
        <span className="inline-flex ml-2">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`dot w-2 h-2 rounded-full mx-1 ${
                theme === "dark" ? "bg-black" : "bg-white"
              }`}
            ></span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default LoadingComponent;
