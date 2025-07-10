import React, { useState, useEffect, useRef, ReactNode } from "react";

// Definisikan interface untuk props komponen
interface RevealOnScrollProps {
  children: ReactNode;
  offset?: string;
  threshold?: number;
  direction?: "up" | "down";
  // Tambahkan prop duration dan delay
  duration?: number; // Durasi animasi dalam ms (misal: 700)
  delay?: number; // Penundaan sebelum animasi dimulai dalam ms (misal: 0, 150, 300)
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  offset = "0px",
  threshold = 0.5,
  direction = "down",
  duration = 1000, // Default duration 700ms
  delay = 0, // Default delay 0ms
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: offset,
        threshold: threshold,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [offset, threshold, direction]); // Dependency array

  // Tentukan kelas animasi berdasarkan 'direction'
  const animationClasses =
    direction === "up"
      ? `${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`
      : `${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`;

  return (
    <div
      ref={elementRef}
      // Gabungkan duration dan delay langsung ke string kelas Tailwind
      className={`transform transition-all duration-${duration} ease-out delay-${delay} ${animationClasses} `}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
