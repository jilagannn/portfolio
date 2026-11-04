export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
      hoverColor?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
      hoverColor?: string;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutWidth?: number;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  layout?: 'line' | 'wave' | 'arc' | 'orbit';
  bend?: number;
  focus?: number;
  magnify?: number;
  tiltX?: number;
  tiltY?: number;
  step?: boolean;
  muted?: number;
  labels?: 'none' | 'inline' | 'below' | 'hover';
  draggable?: boolean;
  scrollBoost?: number;
  intro?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
};

export interface LoopConfig {
  speed: number;
  dirSign: number;
  hoverValue: number | undefined;
  vertical: boolean;
  layout: string;
  bend: number;
  focus: number;
  magnify: number;
  tiltX: number;
  tiltY: number;
  step: boolean;
  draggable: boolean;
  scrollBoost: number;
  intro: boolean;
  scaleOnHover: boolean;
  labels: string;
  links: boolean;
};

export interface LoopLayout {
  copies: number;
  primary: number;
};

export interface LoopItem {
  el: HTMLElement;
  copy: number;
  index: number;
  content: HTMLElement | null;
  tip: HTMLElement | null;
  center: number;
  size: number;
  cross: number;
  t: string;
  o: string;
  v: string;
  z: string;
  s: string;
  p: string;
};

export interface Geometry {
  mode: string;
  shift: number;
  uMin: number;
  uMax: number;
  lead: number;
  focus: number;
  focusSigma: number;
  magnify: number;
  magSigma: number;
  amp: number;
  k: number;
  R: number;
  sign: number;
  limit: number;
  C: number;
  alpha: number;
  depth: number;
  pf: number;
  tilted: boolean;
  tiltX: number;
  tiltY: number;
  m: number[];
  persp: number;
};

export interface Drag {
  id: number;
  x: number;
  y: number;
  active: boolean;
  samples: [number, number][];
  scale: number;
  anchor: number;
  offset: number;
};

export interface Move {
  from: number;
  delta: number;
  t: number;
  dur: number;
};

export interface EngineState {
  offset: number;
  velocity: number;
  period: number;
  length: number;
  box: [number, number];
  items: LoopItem[];
  snaps: number[];
  pitch: number;
  crossMax: number;
  sizeMax: number;
  tipMax: number;
  geo: Geometry | null;
  layout: LoopLayout;
  hovered: boolean;
  focused: boolean;
  pointer: [number, number] | null;
  pointerInside: boolean;
  mag: number;
  magU: number;
  magReady: boolean;
  drag: Drag | null;
  glide: boolean;
  suppressUntil: number;
  pressedAt: number;
  move: Move | null;
  hold: number;
  seek: Move | null;
  scrollVel: number;
  scrollY: number;
  scrollT: number;
  visible: boolean;
  introStart: number;
  introDone: boolean;
  itemMode: boolean;
  active: LoopItem | null;
  raf: number;
  last: number;
  reduced: boolean;
  destroyed: boolean;
};
