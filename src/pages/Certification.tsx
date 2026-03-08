import { Check, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const categories = [
  {
    title: 'Engine & Transmission',
    checks: [
      'Engine compression test',
      'Oil leak inspection',
      'Clutch operation & play',
      'Gearbox shift quality',
      'Throttle response',
      'Idle speed & stability',
    ],
  },
  {
    title: 'Brakes & Suspension',
    checks: [
      'Front & rear brake pad wear',
      'Brake disc/drum condition',
      'Brake fluid level & quality',
      'Front fork seal check',
      'Rear shock absorber test',
      'ABS system diagnostics (if applicable)',
    ],
  },
  {
    title: 'Electrical & Electronics',
    checks: [
      'Battery health & voltage test',
      'Headlight, tail light & indicators',
      'Horn & electrical switches',
      'Instrument cluster function',
      'Charging system output',
      'Wiring harness condition',
    ],
  },
  {
    title: 'Frame & Wheels',
    checks: [
      'Frame alignment & integrity',
      'Steering head bearing play',
      'Wheel bearing check',
      'Tyre tread depth & condition',
      'Spoke tension (if applicable)',
      'Chain/belt wear & tension',
    ],
  },
  {
    title: 'Exterior & Documents',
    checks: [
      'Paint quality & scratch assessment',
      'Seat condition',
      'Mirror & stand integrity',
      'RC & insurance verification',
      'Service history review',
      'Odometer authenticity check',
    ],
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-bold font-body mb-4">
              <Shield className="w-4 h-4" /> Motozone Certified
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient-amber">30-Point</span> Inspection
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Every motorcycle in our inventory undergoes a rigorous 30-point inspection by certified mechanics. We don't just sell bikes — we guarantee confidence.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <div key={cat.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg mb-4 text-accent">{cat.title}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {cat.checks.map((check) => (
                    <div key={check} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <p className="font-body text-sm">{check}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground font-body mb-4">
              Only bikes that pass our inspection earn the Motozone Certified badge.
            </p>
            <Link to="/bikes">
              <Button variant="amber" size="lg">
                Browse Certified Bikes <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Certification;
