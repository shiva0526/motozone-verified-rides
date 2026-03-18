import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const checkpoints = [
  { text: 'Engine performance & compression test', delay: 0.1 },
  { text: 'Brake system & pad wear analysis', delay: 0.2 },
  { text: 'Tyre tread depth & alignment check', delay: 0.3 },
  { text: 'Complete electrical system diagnostics', delay: 0.4 },
  { text: 'Frame integrity & structural inspection', delay: 0.5 },
  { text: 'Cosmetic assessment & paint quality', delay: 0.6 },
];

const CertificationSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">

        {/* Cinematic Image Frame */}
        <div className="relative w-full h-[70vh] md:h-[85vh] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl">
          {/* Parallax Image */}
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 -top-[20%] -bottom-[20%] z-0"
          >
            <img
              src="https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1600&h=1200&fit=crop"
              alt="Motozone mechanic inspection"
              className="w-full h-full object-cover filter brightness-[0.4] saturate-50 group-hover:brightness-[0.6] group-hover:saturate-100 transition-all [transition-duration:2s] ease-out"
              loading="lazy"
            />
          </motion.div>

          {/* Overlays for readability and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/20 to-background z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />

          {/* Header Content Floating over Image */}
          <div className="absolute top-16 left-6 md:top-32 md:left-20 max-w-3xl z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary hidden md:block" />
                Quality Assurance
              </p>
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                The Motozone{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  30-Point
                </span>
                <br /> Inspection
              </h2>
              <p className="text-secondary-foreground text-lg md:text-xl font-body mb-10 max-w-xl leading-relaxed">
                Every motorcycle in our inventory undergoes a rigorous 30-point inspection by certified mechanics. We don't just sell bikes — we engineer absolute confidence.
              </p>
              <Button className="h-14 px-8 rounded-xl bg-white text-black hover:bg-gray-200 font-semibold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1">
                See Full Process <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Checkpoints Grid Overlapping the Image Bottom */}
        <div className="relative z-30 -mt-32 md:-mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 w-full max-w-[1300px] mx-auto">
          {checkpoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: point.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between gap-6 border border-white/10 bg-black/60 backdrop-blur-3xl hover:bg-black/80 transition-all duration-500 relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[160px]"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors duration-500">
                <Check className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-500" />
              </div>

              <p className="font-heading text-lg font-medium text-white/90 relative z-10 leading-snug">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationSection;
