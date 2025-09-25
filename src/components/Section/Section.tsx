import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface SectionProps {
  id?: string;
  children: (isVisible: boolean) => React.ReactNode;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
  overlayColor?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  backgroundImage,
  overlay = false,
  overlayColor = "bg-blue-600/70",
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  const sectionStyle = backgroundImage
    ? { backgroundImage: `url('${backgroundImage}')` }
    : {};

  return (
    <section
      ref={ref}
      id={id}
      className={`relative bg-cover bg-center ${className}`}
      style={sectionStyle}
    >
      {overlay && <div className={`absolute inset-0 ${overlayColor}`} />}
      <div className="relative">{children(isVisible)}</div>
    </section>
  );
};
