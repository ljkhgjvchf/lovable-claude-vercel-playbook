// CTA section block, genericized from src/components/CTASection.tsx.
// Pattern: centered headline + pill CTA button, fades in on scroll into view.
// Source: Lovable's own output, refined by hand.
//
// Requires: framer-motion, shadcn/ui Button (@/components/ui/button)

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

type CTASectionProps = {
  heading: string;
  headingAccent?: string;
  subtitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
  trustLine?: string;
};

export const CTASection = ({ heading, headingAccent, subtitle, buttonLabel, onButtonClick, trustLine }: CTASectionProps) => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-8">
            {heading}
            {headingAccent && (
              <>
                <br />
                <span className="text-muted-foreground">{headingAccent}</span>
              </>
            )}
          </h2>

          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            {subtitle}
          </p>

          <Button
            onClick={onButtonClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-full transition-transform duration-300 hover:scale-105"
            size="lg"
          >
            {buttonLabel}
          </Button>

          {trustLine && (
            <p className="text-sm text-muted-foreground mt-6 font-light">{trustLine}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
