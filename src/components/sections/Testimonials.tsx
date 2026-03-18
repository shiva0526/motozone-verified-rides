import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Rahul S.', city: 'Mumbai', rating: 5, text: 'Bought a Royal Enfield Classic 350 — the bike was exactly as described. The 30-point inspection report gave me total confidence. Highly recommended!' },
  { name: 'Priya M.', city: 'Bangalore', rating: 5, text: 'Sold my Honda CB500X through Motozone. Got a fair offer within 24 hours. The entire process was smooth and transparent. No haggling!' },
  { name: 'Arjun K.', city: 'Delhi', rating: 4, text: 'Great selection of certified bikes. The condition grading was accurate. Delivery was on time. Will definitely buy again from Motozone.' },
  { name: 'Sneha T.', city: 'Pune', rating: 5, text: 'First time buying a pre-owned bike and Motozone made it stress-free. The viewing appointment was easy to book and the team was very helpful.' }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-secondary min-h-[600px] flex items-center">
      {/* Cinematic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
      />

      {/* Decorative Quote Mark */}
      <div className="absolute top-10 right-10 md:top-20 md:right-32 text-white/[0.03] select-none pointer-events-none">
        <Quote className="w-64 h-64 md:w-96 md:h-96" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Rider Stories
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            The Motozone Experience
          </h2>
        </div>

        <div className="relative h-[300px] md:h-[250px] w-full max-w-4xl mx-auto flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-5 h-5 md:w-6 md:h-6 ${j < reviews[activeIndex].rating ? 'text-primary fill-primary' : 'text-white/20'}`}
                  />
                ))}
              </div>

              <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-relaxed mb-10 max-w-3xl text-balance">
                "{reviews[activeIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-heading font-bold text-primary text-lg">
                  {reviews[activeIndex].name[0]}
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-white text-lg tracking-wide">{reviews[activeIndex].name}</p>
                  <p className="text-secondary-foreground text-sm font-body uppercase tracking-wider">{reviews[activeIndex].city}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Paginator */}
        <div className="mt-16 flex justify-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative p-2"
            >
              <div className={`h-1.5 rounded-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${i === activeIndex
                  ? 'w-12 bg-primary'
                  : 'w-4 bg-white/20 group-hover:bg-white/40'
                }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
