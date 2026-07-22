// Hero section block, genericized from src/components/HeroSection.tsx.
// Pattern: oversized thin-weight headline, framer-motion fade/slide-in,
// shadcn/ui Button. Source: Lovable's own output for this section, refined
// by hand, not sniped from an external block library.
//
// Requires: framer-motion, shadcn/ui Button (@/components/ui/button)

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

type HeroSectionProps = {
  headline: string;
  subheadline?: string;
  subtitle: string;
  ctaLabel: string;
  onCtaClick: () => void;
};

export const HeroSection = ({ headline, subheadline, subtitle, ctaLabel, onCtaClick }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 pt-20 relative overflow-hidden">
      <div className="flex-1 flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {headline}
            {subheadline && (
              <>
                <br />
                <span className="text-muted-foreground">{subheadline}</span>
              </>
            )}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Button
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-transform duration-300 hover:scale-105"
              size="lg"
            >
              {ctaLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
