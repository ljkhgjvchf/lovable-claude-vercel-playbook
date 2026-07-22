// FAQ accordion block, genericized from src/components/FAQSection.tsx.
// Pattern: two-column layout, heading + badge on the left, shadcn/ui
// Accordion on the right. Source: Lovable's own output, refined by hand.
//
// Requires: framer-motion, shadcn/ui Accordion + Badge
// (@/components/ui/accordion, @/components/ui/badge)

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

type FAQ = { question: string; answer: string };

type FAQAccordionSectionProps = {
  badge: string;
  heading: string;
  headingAccent?: string;
  subtitle: string;
  faqs: FAQ[];
};

export const FAQAccordionSection = ({ badge, heading, headingAccent, subtitle, faqs }: FAQAccordionSectionProps) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <Badge variant="outline" className="border-primary/30 text-primary mb-6">
                {badge}
              </Badge>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
                {heading}
                {headingAccent && (
                  <>
                    <br />
                    <span className="text-muted-foreground">{headingAccent}</span>
                  </>
                )}
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-xl">{subtitle}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="px-6 border-none bg-card/50 rounded-2xl">
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
