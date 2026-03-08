import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BikeCanvas = lazy(() => import('@/components/3d/BikeCanvas'));

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

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-5 gap-8 items-center min-h-[70vh]">
          {/* 3D Canvas - Left */}
          <div className="lg:col-span-3 h-[400px] lg:h-[550px] order-2 lg:order-1">
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <BikeCanvas />
            </Suspense>
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
            <div
              key={i}
              className="glass-card rounded-2xl p-5 text-center"
            >
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
