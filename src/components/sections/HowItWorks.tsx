import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Truck, Upload, ShieldCheck, Banknote } from 'lucide-react';

const tabs = ['For Buyers', 'For Sellers'] as const;

const buyerSteps = [
  { icon: Search, title: 'Browse Certified Inventory', desc: 'Explore our curated selection of inspected, certified motorcycles with transparent pricing.' },
  { icon: Calendar, title: 'Book a Viewing', desc: 'Schedule an appointment to see the bike in person or express your interest online.' },
  { icon: Truck, title: 'Pay & Get Delivery', desc: 'Complete your payment securely and we deliver your dream ride to your doorstep.' },
];

const sellerSteps = [
  { icon: Upload, title: 'Submit Your Bike Details', desc: 'Share your bike\'s details and upload photos through our simple submission form.' },
  { icon: ShieldCheck, title: 'We Inspect & Make an Offer', desc: 'Our experts inspect your bike and present you with a fair offer within 48 hours.' },
  { icon: Banknote, title: 'Accept & Get Paid', desc: 'Accept the offer and receive payment directly to your bank account — no haggling.' },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('For Buyers');
  const steps = activeTab === 'For Buyers' ? buyerSteps : sellerSteps;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">
            Simple Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">How It Works</h2>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="glass-card rounded-full p-1 flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 font-body ${
                  activeTab === tab
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="glass-card rounded-2xl p-6 text-center relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold font-heading">
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mt-2 mb-4">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;
