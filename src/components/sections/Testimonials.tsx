import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Rahul S.', city: 'Mumbai', rating: 5, text: 'Bought a Royal Enfield Classic 350 — the bike was exactly as described. The 30-point inspection report gave me total confidence. Highly recommended!' },
  { name: 'Priya M.', city: 'Bangalore', rating: 5, text: 'Sold my Honda CB500X through Motozone. Got a fair offer within 24 hours. The entire process was smooth and transparent. No haggling!' },
  { name: 'Arjun K.', city: 'Delhi', rating: 4, text: 'Great selection of certified bikes. The condition grading was accurate. Delivery was on time. Will definitely buy again from Motozone.' },
  { name: 'Sneha T.', city: 'Pune', rating: 5, text: 'First time buying a pre-owned bike and Motozone made it stress-free. The viewing appointment was easy to book and the team was very helpful.' },
  { name: 'Vikram D.', city: 'Chennai', rating: 5, text: 'The KTM Duke I purchased was in pristine condition. Could tell they really inspect every detail. Fair pricing too — no hidden costs.' },
  { name: 'Ananya R.', city: 'Hyderabad', rating: 4, text: 'Submitted my bike for sale online, got an offer in 2 days. The inspection team came to my location. Very professional experience overall.' },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">
            Trusted by Riders
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs font-body">{review.city}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
