export interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

export interface SliderProps {
  images?: ImageItem[];
  className?: string;
}

export interface SliderState {
  currentIndex: number;
  isAutoPlaying: boolean;
  isAnimating: boolean;
}
