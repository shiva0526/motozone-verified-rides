import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBike from '@/assets/hero-bike.png';
import { useRef } from 'react';

const stats = [
  { value: '500+', label: 'Bikes Sold' },
  { value: '30', label: 'Point Inspection' },
  { value: '48hr', label: 'Offer Turnaround' },
  { value: '4.8★', label: 'Buyer Rating' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grain-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-5 gap-8 items-center min-h-[70vh]">
          {/* Bike Image - Left */}
          <div className="lg:col-span-3 flex items-center justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              {/* Glow behind bike */}
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] scale-75" />
              <img
                src={heroBike}
                alt="Premium motorcycle"
                className="relative w-full max-w-[600px] h-auto drop-shadow-[0_20px_60px_rgba(232,160,32,0.2)] animate-float"
              />
            </motion.div>
          </div>

          {/* Text Content - Right */}
          <div className="lg:col-span-2 flex flex-col gap-6 order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-accent font-body text-sm font-semibold tracking-widest uppercase"
            >
              India's Premium Pre-Owned Motorcycle Platform
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Find Your{' '}
              <span className="text-gradient-amber">Perfect</span>
              <br />
              Ride.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-muted-foreground text-lg max-w-md font-body"
            >
              Every bike inspected, certified, and priced fairly. Browse our curated
              inventory of road & mountain motorcycles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="amber" size="lg">
                Browse Bikes <ArrowRight className="ml-1" />
              </Button>
              <Button variant="ghost-light" size="lg">
                Sell Your Bike
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center">
              <p className="font-heading text-2xl md:text-3xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1 font-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
