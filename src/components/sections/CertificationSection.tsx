import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const checkpoints = [
  'Engine performance & compression test',
  'Brake system & pad wear analysis',
  'Tyre tread depth & alignment check',
  'Complete electrical system diagnostics',
  'Frame integrity & structural inspection',
  'Cosmetic assessment & paint quality',
];

const CertificationSection = () => {
  return (
    <section className="py-20 relative overflow-hidden grain-overlay">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-primary/10" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">
              Quality Assurance
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The Motozone{' '}
              <span className="text-gradient-amber">30-Point</span> Inspection
            </h2>
            <p className="text-muted-foreground text-lg font-body mb-6 max-w-lg">
              Every motorcycle in our inventory undergoes a rigorous 30-point inspection by
              certified mechanics. We don't just sell bikes — we guarantee confidence.
            </p>
            <Button variant="amber" size="lg">
              See Full Process <ArrowRight className="ml-1" />
            </Button>
          </motion.div>

          {/* Right - Checklist */}
          <div className="flex flex-col gap-3">
            {checkpoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <p className="font-body text-sm font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
