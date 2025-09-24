export interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

export interface SliderProps {
  images?: ImageItem[];
  className?: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface CarouselProps {
  images: Image[];
  heightClass?: string;
  customImageClass?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export interface SlidePosition {
  position: number;
  isActive: boolean;
  scale: number;
  opacity: number;
  zIndex: number;
  spacing: number;
}
