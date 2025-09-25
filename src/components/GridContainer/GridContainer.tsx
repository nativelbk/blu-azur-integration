import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: string;
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "gap-8 md:gap-12",
  className = "",
}) => {
  const gridCols = {
    mobile: `grid-cols-${columns.mobile}`,
    tablet: `md:grid-cols-${columns.tablet}`,
    desktop: `lg:grid-cols-${columns.desktop}`,
  };

  return (
    <div
      className={`
      grid 
      ${gridCols.mobile} 
      ${gridCols.tablet} 
      ${gridCols.desktop}
      ${gap}
      justify-center
      items-center
      ${className}
    `}
    >
      {children}
    </div>
  );
};
