import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, MapPin, Calendar, Gauge, Zap, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { bikes, formatPrice, conditionColor } from '@/data/bikes';

const BikeDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const bike = bikes.find(b => b.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!bike) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Bike Not Found</h1>
          <p className="text-muted-foreground font-body mb-6">This bike doesn't exist or has been sold.</p>
          <Button variant="amber" onClick={() => navigate('/bikes')}>Browse All Bikes</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const specs = [
    { icon: Calendar, label: 'Year', value: bike.year.toString() },
    { icon: Gauge, label: 'Mileage', value: bike.mileage },
    { icon: Zap, label: 'Engine', value: bike.engine },
    { icon: Zap, label: 'Power', value: bike.power },
    { icon: MapPin, label: 'Location', value: bike.city },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link to="/bikes" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm font-body mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Bikes
          </Link>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Gallery */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card mb-3">
                <img
                  src={bike.gallery[activeImage]}
                  alt={`${bike.brand} ${bike.model}`}
                  className="w-full h-full object-cover"
                />
                {bike.certified && (
                  <div className="absolute top-4 left-4 bg-success/90 text-success-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" /> Motozone Certified
                  </div>
                )}
                {bike.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage(i => (i - 1 + bike.gallery.length) % bike.gallery.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveImage(i => (i + 1) % bike.gallery.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                {bike.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-1 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
                      i === activeImage ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${conditionColor[bike.condition]}`}>
                  {bike.condition}
                </span>
                <span className="text-muted-foreground text-sm font-body">{bike.type}</span>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                {bike.brand} {bike.model}
              </h1>

              <p className="font-heading text-3xl font-bold text-accent mb-6">
                {formatPrice(bike.price)}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {specs.map(spec => (
                  <div key={spec.label} className="glass-card rounded-xl p-4">
                    <spec.icon className="w-5 h-5 text-accent mb-2" />
                    <p className="text-muted-foreground text-xs font-body">{spec.label}</p>
                    <p className="font-heading font-bold text-sm">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-heading font-bold text-lg mb-3">About This Bike</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{bike.description}</p>
              </div>

              {/* CTA */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-heading font-bold mb-4">Interested in this bike?</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="amber" size="lg" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" /> Call Us
                  </Button>
                  <Button variant="ghost-light" size="lg" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BikeDetail;
