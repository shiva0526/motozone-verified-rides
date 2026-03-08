import { Search, Calendar, Truck, Upload, ShieldCheck, Banknote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const buyerSteps = [
  { icon: Search, title: 'Browse Certified Inventory', desc: 'Explore our curated selection of inspected, certified motorcycles. Filter by brand, type, city, and budget. Every listing includes a detailed 30-point inspection report.' },
  { icon: Calendar, title: 'Book a Viewing', desc: 'Found a bike you love? Schedule a viewing at one of our centres. Our team will walk you through the bike\'s history, condition, and inspection results.' },
  { icon: Truck, title: 'Pay & Get Delivery', desc: 'Complete your payment securely through our platform. We handle all the paperwork — RC transfer, insurance, and more. Your bike is delivered to your doorstep.' },
];

const sellerSteps = [
  { icon: Upload, title: 'Submit Your Bike Details', desc: 'Fill out our simple form with your bike\'s details, upload a few photos, and submit. It takes less than 5 minutes. No listing fees, no hidden charges.' },
  { icon: ShieldCheck, title: 'We Inspect & Make an Offer', desc: 'Our certified mechanics will inspect your bike either at your location or our centre. Based on the inspection, we\'ll present a fair, market-based offer within 48 hours.' },
  { icon: Banknote, title: 'Accept & Get Paid', desc: 'Happy with the offer? Accept it and receive payment directly to your bank account. We handle all the transfer documentation. No haggling, no middlemen.' },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">
              Simple & Transparent
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              How <span className="text-gradient-amber">Motozone</span> Works
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Whether you're buying or selling, we make the process simple, transparent, and stress-free.
            </p>
          </div>

          {/* For Buyers */}
          <div className="mb-20">
            <h2 className="font-heading text-2xl font-bold mb-8 text-center">
              🏍️ For Buyers
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {buyerSteps.map((step, i) => (
                <div key={step.title} className="glass-card rounded-2xl p-6 relative">
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold font-heading">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 mt-2">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/bikes">
                <Button variant="amber" size="lg">
                  Browse Bikes <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* For Sellers */}
          <div>
            <h2 className="font-heading text-2xl font-bold mb-8 text-center">
              💰 For Sellers
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sellerSteps.map((step, i) => (
                <div key={step.title} className="glass-card rounded-2xl p-6 relative">
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold font-heading">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 mt-2">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/sell">
                <Button variant="amber" size="lg">
                  Sell Your Bike <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
