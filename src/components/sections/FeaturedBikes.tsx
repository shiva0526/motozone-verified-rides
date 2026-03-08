import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bikes = [
  { id: 1, slug: 'royal-enfield-classic-350', brand: 'Royal Enfield', model: 'Classic 350', year: 2022, type: 'Road', price: 145000, condition: 'Excellent', city: 'Mumbai', certified: true, image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=450&fit=crop' },
  { id: 2, slug: 'ktm-duke-390', brand: 'KTM', model: 'Duke 390', year: 2023, type: 'Road', price: 215000, condition: 'Excellent', city: 'Delhi', certified: true, image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=450&fit=crop' },
  { id: 3, slug: 'honda-cb500x', brand: 'Honda', model: 'CB500X', year: 2021, type: 'Road', price: 320000, condition: 'Good', city: 'Bangalore', certified: true, image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=450&fit=crop' },
  { id: 4, slug: 'yamaha-mt15', brand: 'Yamaha', model: 'MT-15 V2', year: 2023, type: 'Road', price: 135000, condition: 'Excellent', city: 'Pune', certified: false, image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&h=450&fit=crop' },
  { id: 5, slug: 'bajaj-dominar-400', brand: 'Bajaj', model: 'Dominar 400', year: 2022, type: 'Road', price: 165000, condition: 'Good', city: 'Chennai', certified: true, image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&h=450&fit=crop' },
  { id: 6, slug: 'triumph-street-twin', brand: 'Triumph', model: 'Street Twin', year: 2021, type: 'Road', price: 520000, condition: 'Excellent', city: 'Hyderabad', certified: true, image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=600&h=450&fit=crop' },
];

const formatPrice = (price: number) =>
  '₹ ' + price.toLocaleString('en-IN');

const conditionColor: Record<string, string> = {
  Excellent: 'bg-success/20 text-success',
  Good: 'bg-accent/20 text-accent',
  Fair: 'bg-orange-500/20 text-orange-400',
};

const FeaturedBikes = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">
              Curated Collection
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Fresh Arrivals</h2>
          </div>
          <Button variant="ghost-light" size="sm" className="hidden md:flex">
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike, i) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-sm overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(227,24,55,0.15)] transition-all duration-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={bike.image}
                  alt={`${bike.brand} ${bike.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {bike.certified && (
                  <div className="absolute top-3 left-3 bg-success/90 text-success-foreground text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Certified
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-lg">
                    {bike.brand} {bike.model}
                  </h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${conditionColor[bike.condition]}`}>
                    {bike.condition}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm font-body mb-3">
                  {bike.year} · {bike.type} · {bike.city}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-heading text-xl font-bold text-accent">
                    {formatPrice(bike.price)}
                  </p>
                  <span className="text-muted-foreground text-sm group-hover:text-accent transition-colors">
                    View Bike →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Button variant="ghost-light">
            View All Bikes <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;
