import React from "react";

export type AnimationType =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "scale"
  | "fadeIn";

interface AnimatedTextProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
  animationType?: AnimationType;
  duration?: number;
  className?: string;
}

const animationConfig: Record<
  AnimationType,
  {
    base: string;
    visible: string;
    hidden: string;
  }
> = {
  fadeUp: {
    base: "transition-all ease-out",
    visible: "translate-y-0 opacity-100",
    hidden: "translate-y-10 opacity-0",
  },
  fadeLeft: {
    base: "transition-all ease-out",
    visible: "translate-x-0 opacity-100",
    hidden: "translate-x-8 opacity-0",
  },
  fadeRight: {
    base: "transition-all ease-out",
    visible: "translate-x-0 opacity-100",
    hidden: "-translate-x-8 opacity-0",
  },
  scale: {
    base: "transition-all ease-out",
    visible: "scale-100 opacity-100",
    hidden: "scale-90 opacity-0",
  },
  fadeIn: {
    base: "transition-all ease-out",
    visible: "opacity-100",
    hidden: "opacity-0",
  },
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  isVisible,
  delay = 0,
  animationType = "fadeUp",
  duration = 700,
  className = "",
}) => {
  const animation = animationConfig[animationType];

  return (
    <div
      className={`
        ${animation.base}
        ${isVisible ? animation.visible : animation.hidden}
        ${className}
      `}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};
