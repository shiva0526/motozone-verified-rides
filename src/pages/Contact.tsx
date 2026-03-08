import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', text: 'Andheri West, Mumbai, Maharashtra 400053' },
  { icon: Phone, title: 'Call Us', text: '+91 98765 43210' },
  { icon: Mail, title: 'Email Us', text: 'hello@motozone.in' },
  { icon: Clock, title: 'Working Hours', text: 'Mon–Sat, 10 AM – 7 PM' },
];

const Contact = () => {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({ title: 'Message sent!', description: 'We\'ll respond within 24 hours.' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">
              Get In Touch
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Contact <span className="text-gradient-amber">Us</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Have a question, suggestion, or just want to say hi? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map(item => (
                <div key={item.title} className="glass-card rounded-xl p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm mb-0.5">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            {sent ? (
              <div className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                <CheckCircle className="w-16 h-16 text-success mb-4" />
                <h2 className="font-heading text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-muted-foreground font-body mb-6">We'll get back to you within 24 hours.</p>
                <Button variant="amber" onClick={() => setSent(false)}>Send Another</Button>
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading text-xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-body text-muted-foreground mb-1.5 block">Name</label>
                      <Input required placeholder="Your name" className="bg-card border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-body text-muted-foreground mb-1.5 block">Email</label>
                      <Input required type="email" placeholder="you@email.com" className="bg-card border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-body text-muted-foreground mb-1.5 block">Subject</label>
                    <Input required placeholder="How can we help?" className="bg-card border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-body text-muted-foreground mb-1.5 block">Message</label>
                    <Textarea required placeholder="Tell us more..." className="bg-card border-border min-h-[120px]" />
                  </div>
                  <Button variant="amber" size="lg" type="submit" className="w-full">
                    Send Message
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

export default Contact;
