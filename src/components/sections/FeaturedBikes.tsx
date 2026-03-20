import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bikes = [
  { id: 1, slug: 'royal-enfield-classic-350', brand: 'Royal Enfield', model: 'Classic 350', year: 2022, type: 'Road', price: 145000, condition: 'Excellent', city: 'Mumbai', certified: true, image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=450&fit=crop' },
  { id: 2, slug: 'HONDA CBR 1000 RR', brand: 'honda', model: 'CBR 1000 RR', year: 2023, type: 'Road', price: 215000, condition: 'Excellent', city: 'Delhi', certified: true, image: 'https://images.unsplash.com/photo-1716255002286-396d01eb4e38?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, slug: 'Yahama R15', brand: 'Yahama', model: 'R15', year: 2021, type: 'Road', price: 320000, condition: 'Good', city: 'Bangalore', certified: true, image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=450&fit=crop' },
  { id: 4, slug: 'royal enfield classic 350', brand: 'Royal Enfield', model: 'Classic 350', year: 2023, type: 'Road', price: 135000, condition: 'Excellent', city: 'Pune', certified: false, image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&h=450&fit=crop' },
  { id: 5, slug: 'Harley-Davidson', brand: 'Harley-Davidson', model: 'Street Rod', year: 2022, type: 'Road', price: 165000, condition: 'Good', city: 'Chennai', certified: true, image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, slug: 'triumph-street-twin', brand: 'Triumph', model: 'Street Twin', year: 2021, type: 'Road', price: 520000, condition: 'Excellent', city: 'Hyderabad', certified: true, image: 'https://images.unsplash.com/photo-1716231413790-8624b3f25286?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const formatPrice = (price: number) =>
  '₹ ' + price.toLocaleString('en-IN');

const conditionColor: Record<string, string> = {
  Excellent: 'bg-primary/20 text-primary border border-primary/30',
  Good: 'bg-accent/20 text-accent border border-accent/30',
  Fair: 'bg-muted border border-border text-muted-foreground',
};

const FeaturedBikes = () => {
  return (
    <section className="py-32 relative bg-background overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Curated Collection
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Featured Arrivals
            </h2>
            <p className="text-secondary-foreground text-lg font-body">
              Explore our latest selection of premium, certified motorcycles ready for the open road.
            </p>
          </div>
          <Button variant="outline" className="h-12 px-6 rounded-xl border-white/20 hover:bg-white/5 text-white font-medium transition-all duration-300">
            View All Inventory <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
          {bikes.map((bike, i) => {
            // Determine styles based on index for the Bento Box layout
            let wrapperClass = "glass-card rounded-3xl overflow-hidden group border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(30,58,138,0.2)] relative cursor-pointer flex";
            let imageWrapClass = "relative z-10";
            let contentWrapClass = "relative z-10 p-6 flex flex-col flex-grow";
            let titleClass = "text-xl mb-3";
            let showOverlay = false;

            if (i === 0) {
              // Large Feature 2x2
              wrapperClass += " flex-col lg:col-span-2 lg:row-span-2 md:col-span-2 min-h-[500px]";
              imageWrapClass = "absolute inset-0 z-0";
              contentWrapClass = "relative z-10 flex flex-col justify-end h-full p-8 lg:p-12 bg-gradient-to-t from-background via-background/60 to-transparent";
              titleClass = "text-3xl md:text-5xl mb-4";
              showOverlay = true;
            } else if (i === 4) {
              // Wide Feature 2x1
              wrapperClass += " flex-col md:flex-row lg:col-span-2 lg:row-span-1 min-h-[350px]";
              imageWrapClass = "relative w-full md:w-1/2 h-64 md:h-full z-10";
              contentWrapClass = "relative z-10 flex flex-col justify-center p-6 md:p-8 w-full md:w-1/2 border-l border-white/5";
              titleClass = "text-2xl mb-3";
            } else if (i === 5) {
              // Full Width Cinematic 3x1
              wrapperClass += " flex-col lg:col-span-3 lg:row-span-1 md:col-span-2 min-h-[400px]";
              imageWrapClass = "absolute inset-0 z-0";
              contentWrapClass = "relative z-10 flex flex-col justify-center items-center text-center h-full p-8 lg:p-16 bg-black/40 hover:bg-black/20 transition-colors duration-700";
              titleClass = "text-3xl md:text-5xl mb-4";
              showOverlay = true;
            } else {
              // Standard Cards 1x1
              wrapperClass += " flex-col lg:col-span-1 lg:row-span-1 min-h-[400px] hover:-translate-y-2";
              imageWrapClass = "relative aspect-[4/3] z-10";
            }

            return (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={wrapperClass}
              >
                {/* Image Section */}
                <div className={imageWrapClass}>
                  {showOverlay && <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />}
                  <img
                    src={bike.image}
                    alt={`${bike.brand} ${bike.model}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                  />
                  {bike.certified && (
                    <div className="absolute top-5 left-5 z-20 bg-black/60 backdrop-blur-md text-white border border-white/10 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Shield className="w-3.5 h-3.5 text-primary" /> Certified
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className={contentWrapClass}>
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <h3 className={`font-heading font-bold text-white group-hover:text-primary transition-colors duration-300 ${titleClass}`}>
                      {bike.brand} {bike.model}
                    </h3>
                    {!showOverlay && (
                      <span className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${conditionColor[bike.condition]} whitespace-nowrap`}>
                        {bike.condition}
                      </span>
                    )}
                  </div>

                  <p className={`text-secondary-foreground font-body flex items-center gap-2 flex-wrap ${showOverlay ? 'text-lg mb-8 opacity-80' : 'text-sm mb-6'}`}>
                    <span>{bike.year}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{bike.type}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{bike.city}</span>
                    {showOverlay && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block" />
                        <span className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border hidden sm:inline-block ${bike.condition === 'Excellent' ? 'border-primary/50 text-white bg-primary/20' : 'border-white/20 text-white bg-white/10'
                          }`}>
                          Condition: {bike.condition}
                        </span>
                      </>
                    )}
                  </p>

                  <div className={`flex items-end justify-between ${showOverlay ? 'pt-0' : 'pt-4 border-t border-white/5'} mt-auto`}>
                    <div>
                      {!showOverlay && <p className="text-secondary-foreground text-xs uppercase tracking-wider mb-1">Price</p>}
                      <p className={`font-heading font-bold text-white ${showOverlay ? 'text-3xl' : 'text-2xl'}`}>
                        {formatPrice(bike.price)}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${showOverlay ? 'bg-primary text-white hover:bg-primary/80 hover:scale-110' : 'bg-white/5 text-white/50 group-hover:bg-primary group-hover:text-white'}`}>
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;
