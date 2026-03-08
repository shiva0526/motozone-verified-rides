import { useState } from 'react';
import { Upload, ShieldCheck, Banknote, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const steps = [
  { icon: Upload, title: 'Submit Details', desc: 'Share your bike info and photos.' },
  { icon: ShieldCheck, title: 'We Inspect & Offer', desc: 'Our experts assess and make a fair offer.' },
  { icon: Banknote, title: 'Get Paid', desc: 'Accept and receive instant payment.' },
];

const Sell = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: 'Submission received!', description: 'We\'ll get back to you within 48 hours.' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">
              Sell With Confidence
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Sell Your <span className="text-gradient-amber">Bike</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Get a fair offer within 48 hours. No haggling, no stress. We handle the paperwork, you get paid.
            </p>
          </div>

          {/* How It Works Mini */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.title} className="glass-card rounded-2xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold font-heading">
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mt-2 mb-4">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold mb-2">Submission Received!</h2>
                <p className="text-muted-foreground font-body mb-6">
                  Our team will review your bike details and get back to you within 48 hours with an offer.
                </p>
                <Button variant="amber" onClick={() => setSubmitted(false)}>Submit Another Bike</Button>
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Submit Your Bike</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body text-muted-foreground mb-1.5 block">Your Name</label>
                      <Input required placeholder="Rahul Sharma" className="bg-card border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-body text-muted-foreground mb-1.5 block">Phone Number</label>
                      <Input required type="tel" placeholder="+91 98765 43210" className="bg-card border-border" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body text-muted-foreground mb-1.5 block">Bike Brand & Model</label>
                      <Input required placeholder="e.g. Royal Enfield Classic 350" className="bg-card border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-body text-muted-foreground mb-1.5 block">Year of Purchase</label>
                      <Input required type="number" placeholder="2022" className="bg-card border-border" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body text-muted-foreground mb-1.5 block">Approximate KM Driven</label>
                      <Input required placeholder="e.g. 15000" className="bg-card border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-body text-muted-foreground mb-1.5 block">City</label>
                      <Input required placeholder="e.g. Mumbai" className="bg-card border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-body text-muted-foreground mb-1.5 block">Additional Notes</label>
                    <Textarea placeholder="Any modifications, damage, or other details..." className="bg-card border-border min-h-[100px]" />
                  </div>
                  <Button variant="amber" size="lg" type="submit" className="w-full">
                    Submit for Review
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sell;
