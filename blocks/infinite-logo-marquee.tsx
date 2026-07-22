// Infinite logo marquee block — genericized from src/components/CompanyLogosSection.tsx.
// SOURCE FLAG: this InfiniteSlider/BlurredInfiniteSlider pattern (mask-fade edges,
// hover-to-slow-down, duplicate-children-for-seamless-loop) is a recognizable
// UI-sniping block commonly published on sites like 21st.dev / originui.com —
// not something Lovable's default output produces from scratch. Confirm the
// exact source and its license before reusing commercially; this file keeps
// the same structure/prop names as the live site for traceability.
//
// Requires: framer-motion, react-use-measure, tailwind-merge/clsx (cn helper)

import { animate, motion, useMotionValue } from 'framer-motion';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { cn } from '@/lib/utils';

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;
    const size = direction === 'horizontal' ? width : height;
    if (size === 0) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;
    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((k) => k + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }
    return () => controls?.stop();
  }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export type BlurredInfiniteSliderProps = InfiniteSliderProps & {
  fadeWidth?: number;
  containerClassName?: string;
};

export function BlurredInfiniteSlider({
  children,
  fadeWidth = 80,
  containerClassName,
  ...sliderProps
}: BlurredInfiniteSliderProps) {
  const maskStyle: CSSProperties = {
    maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
  };

  return (
    <div className={cn('relative w-full', containerClassName)} style={maskStyle}>
      <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
    </div>
  );
}

// Example usage — swap `items` for your own logos/badges
type MarqueeItem = { name: string; logoSrc: string; height?: number };

export const LogoMarquee = ({ label, items }: { label: string; items: MarqueeItem[] }) => (
  <section className="bg-background overflow-hidden py-16 w-full border-b border-border">
    <div className="m-auto max-w-7xl px-6">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-border md:pr-6">
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
        <div className="w-full py-6 md:w-auto md:flex-1 mt-4 md:mt-0">
          <BlurredInfiniteSlider speedOnHover={20} speed={40} gap={40} fadeWidth={24}>
            {items.map((item) => (
              <div key={item.name} className="flex h-12 items-center">
                <img
                  className="mx-auto w-fit dark:brightness-0 dark:invert block"
                  src={item.logoSrc}
                  alt={`${item.name} logo`}
                  style={{ height: `${item.height ?? 32}px` }}
                  loading="lazy"
                />
              </div>
            ))}
          </BlurredInfiniteSlider>
        </div>
      </div>
    </div>
  </section>
);
