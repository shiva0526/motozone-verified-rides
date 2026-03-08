import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { bikes, formatPrice, conditionColor, brands, types, cities } from '@/data/bikes';

const Bikes = () => {
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = bikes.filter(b => {
      const q = search.toLowerCase();
      const matchesSearch = !q || `${b.brand} ${b.model}`.toLowerCase().includes(q);
      const matchesBrand = !selectedBrand || b.brand === selectedBrand;
      const matchesType = !selectedType || b.type === selectedType;
      const matchesCity = !selectedCity || b.city === selectedCity;
      return matchesSearch && matchesBrand && matchesType && matchesCity;
    });

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'year') result.sort((a, b) => b.year - a.year);

    return result;
  }, [search, selectedBrand, selectedType, selectedCity, sortBy]);

  const hasFilters = selectedBrand || selectedType || selectedCity;

  const clearFilters = () => {
    setSelectedBrand('');
    setSelectedType('');
    setSelectedCity('');
    setSearch('');
  };

  const FilterSelect = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) => (
    <div>
      <label className="text-xs font-body text-muted-foreground mb-1.5 block">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-card border border-border rounded-lg px-3 py-2 text-sm font-body text-foreground focus:ring-2 focus:ring-accent/50 outline-none"
      >
        <option value="">All {label}s</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <p className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">Marketplace</p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold">Browse Bikes</h1>
            <p className="text-muted-foreground font-body mt-2">
              {filtered.length} bike{filtered.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {/* Search & Sort Bar */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search bikes..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-card border border-border rounded-lg px-3 py-2 text-sm font-body text-foreground focus:ring-2 focus:ring-accent/50 outline-none"
              >
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="year">Newest Year</option>
              </select>
              <Button
                variant="ghost-light"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4 mr-1" /> Filters
              </Button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
              <div className="glass-card rounded-sm p-5 space-y-5 sticky top-24">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-sm">Filters</h3>
                  {hasFilters && (
                    <button onClick={clearFilters} className="text-accent text-xs font-body flex items-center gap-1">
                      <X className="w-3 h-3" /> Clear
                    </button>
                  )}
                </div>
                <FilterSelect label="Brand" value={selectedBrand} onChange={setSelectedBrand} options={brands} />
                <FilterSelect label="Type" value={selectedType} onChange={setSelectedType} options={types} />
                <FilterSelect label="City" value={selectedCity} onChange={setSelectedCity} options={cities} />
              </div>
            </aside>

            {/* Bike Grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground font-body text-lg">No bikes match your filters.</p>
                  <Button variant="ghost-light" size="sm" className="mt-4" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map(bike => (
                    <Link
                      key={bike.id}
                      to={`/bikes/${bike.slug}`}
                      className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(232,160,32,0.15)] transition-all duration-300"
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
                          <h3 className="font-heading font-bold text-lg">{bike.brand} {bike.model}</h3>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${conditionColor[bike.condition]}`}>
                            {bike.condition}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm font-body mb-3">
                          {bike.year} · {bike.type} · {bike.city}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="font-heading text-xl font-bold text-accent">{formatPrice(bike.price)}</p>
                          <span className="text-muted-foreground text-sm group-hover:text-accent transition-colors">View →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bikes;
