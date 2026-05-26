"use client";

import { ElementType, useEffect, useRef, useState } from "react";

type RevealTextProps = {
  as?: ElementType;
  children: string;
  className?: string;
  id?: string;
};

export function RevealText({
  as: Component = "p",
  children,
  className,
  id,
}: RevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = children.split(" ");

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.38 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      id={id}
      className={`${className ?? ""} reveal-text ${isVisible ? "is-visible" : ""}`}
    >
      {words.map((word, index) => (
        <span
          aria-hidden="true"
          className="reveal-word"
          key={`${word}-${index}`}
          style={{ "--word-index": index } as React.CSSProperties}
        >
          {word}
        </span>
      ))}
      <span className="sr-only">{children}</span>
    </Component>
  );
}
