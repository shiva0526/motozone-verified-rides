import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBike from '@/assets/hero-bike.png';

const stats = [
  { value: '500+', label: 'Bikes Sold' },
  { value: '30', label: 'Point Inspection' },
  { value: '48hr', label: 'Offer Turnaround' },
  { value: '4.8★', label: 'Buyer Rating' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Deep luxury ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%)' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[70vh]">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase"
            >
              The Next Generation of Riding
            </motion.p>

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] text-foreground tracking-tight">
              Experience <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Pure Power.
              </span>
            </h1>

            <p className="text-secondary-foreground text-lg md:text-xl max-w-md font-body leading-relaxed">
              Discover a curated collection of premium motorcycles. Engineered for speed, designed for luxury, verified for you.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                Explore Fleet <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-xl border-white/20 hover:bg-white/5 text-white font-medium text-lg transition-all duration-300">
                Book Test Ride
              </Button>
            </motion.div>
          </motion.div>

          {/* Bike Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 flex items-center justify-center order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 rounded-full blur-[100px] scale-90"
              style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }}
            />
            <motion.img
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src={heroBike}
              alt="Premium motorcycle"
              className="relative w-full max-w-[800px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-10"
            />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.06)' }}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-secondary-foreground text-sm font-body uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
