import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Truck, Upload, ShieldCheck, Banknote } from 'lucide-react';

const tabs = ['For Buyers', 'For Sellers'] as const;

const buyerSteps = [
  { icon: Search, title: 'Browse Certified Inventory', desc: 'Explore our curated selection of inspected, certified motorcycles with transparent pricing.', image: 'https://images.unsplash.com/photo-1558981420-c532902e58b4?w=800&fit=crop' },
  { icon: Calendar, title: 'Book a Viewing', desc: 'Schedule an appointment to see the bike in person or express your interest online.', image: 'https://images.unsplash.com/photo-1449426468159-d96dbf14ce9d?w=800&fit=crop' },
  { icon: Truck, title: 'Pay & Get Delivery', desc: 'Complete your payment securely and we deliver your dream ride to your doorstep.', image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&fit=crop' },
];

const sellerSteps = [
  { icon: Upload, title: 'Submit Your Bike Details', desc: 'Share your bike\'s details and upload photos through our simple submission form.', image: 'https://images.unsplash.com/photo-1487147326847-f327ebcc5287?w=800&fit=crop' },
  { icon: ShieldCheck, title: 'We Inspect & Make an Offer', desc: 'Our experts inspect your bike and present you with a fair offer within 48 hours.', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&fit=crop' },
  { icon: Banknote, title: 'Accept & Get Paid', desc: 'Accept the offer and receive payment directly to your bank account — no haggling.', image: 'https://images.unsplash.com/photo-1605809782559-fb93be3d7ba1?w=800&fit=crop' },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('For Buyers');
  const steps = activeTab === 'For Buyers' ? buyerSteps : sellerSteps;

  return (
    <section className="py-32 relative bg-secondary overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] rounded-full blur-[200px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Simple Process
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-10">How Motozone Works</h2>

          {/* Tab Switcher */}
          <div className="flex justify-center">
            <div className="glass-card rounded-full p-1.5 flex gap-1 bg-black/40 border border-white/10 backdrop-blur-xl">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 font-body relative ${activeTab === tab
                    ? 'text-white'
                    : 'text-secondary-foreground hover:text-white'
                    }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Narrative Flow Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-24 md:gap-32 w-full py-10"
          >
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-center w-full min-h-[400px] group ${isEven ? 'justify-start md:justify-end' : 'justify-start'
                    }`}
                >
                  {/* Floating Number Typography BG */}
                  <div className={`absolute top-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-heading font-bold text-white/[0.02] tracking-tighter select-none pointer-events-none z-0 ${isEven ? 'left-0 md:-left-10' : 'right-0 md:-right-10'
                    }`}>
                    0{i + 1}
                  </div>

                  {/* Image Container */}
                  <div className={`w-full md:w-[60%] lg:w-[65%] h-[350px] md:h-[500px] overflow-hidden rounded-3xl relative z-10 ${isEven ? 'md:absolute md:left-0' : 'md:absolute md:right-0'
                    }`}>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 filter grayscale group-hover:grayscale-0 transition-all [transition-duration:1.5s] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Container (Overlapping) */}
                  <div className={`w-full md:w-[50%] lg:w-[45%] relative z-20 mt-[-50px] md:mt-0 glass-card p-8 md:p-12 rounded-3xl border border-white/10 bg-background/80 md:bg-background/60 backdrop-blur-2xl shadow-2xl ${isEven ? 'md:mr-[-20px] lg:mr-0' : 'md:ml-[-20px] lg:ml-0'
                    }`}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    <p className="text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                      Step 0{i + 1}
                    </p>
                    <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-secondary-foreground text-lg font-body leading-relaxed md:pr-6">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;
