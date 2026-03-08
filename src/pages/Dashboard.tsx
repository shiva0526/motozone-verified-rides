import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Settings, LogOut, User, MapPin, Mail, Phone, ChevronRight, Shield, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { bikes, formatPrice, conditionColor } from '@/data/bikes';
import { useToast } from '@/hooks/use-toast';

// Mock saved bikes (first 3 from inventory)
const initialSaved = [bikes[0], bikes[1], bikes[5]];

const mockUser = {
  name: 'Rahul Sharma',
  email: 'rahul@email.com',
  phone: '+91 98765 43210',
  city: 'Mumbai',
  joinedDate: 'Jan 2024',
  avatar: 'RS',
};

type Tab = 'saved' | 'profile' | 'settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>('saved');
  const [savedBikes, setSavedBikes] = useState(initialSaved);
  const { toast } = useToast();

  const removeBike = (id: number) => {
    setSavedBikes(prev => prev.filter(b => b.id !== id));
    toast({ title: 'Bike removed', description: 'Removed from your saved list.' });
  };

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: 'saved', label: 'Saved Bikes', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-sm bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-xl">
                {mockUser.avatar}
              </div>
              <div>
                <h1 className="font-heading text-2xl font-bold text-foreground">{mockUser.name}</h1>
                <p className="text-muted-foreground font-body text-sm">Member since {mockUser.joinedDate}</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="ghost-light" size="sm">
                <LogOut className="w-4 h-4 mr-1" /> Log Out
              </Button>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Tabs */}
            <aside className="lg:w-56 flex-shrink-0">
              <div className="glass-card rounded-sm p-2 flex lg:flex-col gap-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-body font-medium transition-all duration-200 w-full text-left ${
                      activeTab === tab.id
                        ? 'bg-primary/15 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    {activeTab === tab.id && <ChevronRight className="w-3 h-3 ml-auto hidden lg:block" />}
                  </button>
                ))}
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Saved Bikes */}
              {activeTab === 'saved' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-xl font-bold text-foreground">
                      Saved Bikes <span className="text-muted-foreground font-normal text-base">({savedBikes.length})</span>
                    </h2>
                    <Link to="/bikes">
                      <Button variant="ghost-light" size="sm">Browse More</Button>
                    </Link>
                  </div>

                  {savedBikes.length === 0 ? (
                    <div className="glass-card rounded-sm p-12 text-center">
                      <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-heading font-bold text-lg mb-2">No saved bikes yet</h3>
                      <p className="text-muted-foreground font-body text-sm mb-6">
                        Start browsing and save bikes you love.
                      </p>
                      <Link to="/bikes">
                        <Button variant="amber">Browse Bikes</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {savedBikes.map(bike => (
                        <div
                          key={bike.id}
                          className="glass-card rounded-sm overflow-hidden flex flex-col sm:flex-row group hover:shadow-[0_0_30px_rgba(227,24,55,0.1)] transition-all duration-200"
                        >
                          <Link to={`/bikes/${bike.slug}`} className="sm:w-48 flex-shrink-0">
                            <div className="aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden">
                              <img
                                src={bike.image}
                                alt={`${bike.brand} ${bike.model}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                              />
                            </div>
                          </Link>
                          <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <Link to={`/bikes/${bike.slug}`} className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-heading font-bold">{bike.brand} {bike.model}</h3>
                                {bike.certified && (
                                  <Shield className="w-4 h-4 text-success" />
                                )}
                              </div>
                              <p className="text-muted-foreground text-sm font-body mb-2">
                                {bike.year} · {bike.type} · {bike.city}
                              </p>
                              <div className="flex items-center gap-3">
                                <span className="font-heading font-bold text-lg text-accent">{formatPrice(bike.price)}</span>
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${conditionColor[bike.condition]}`}>
                                  {bike.condition}
                                </span>
                              </div>
                            </Link>
                            <button
                              onClick={() => removeBike(bike.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors duration-200 self-start sm:self-center p-2"
                              title="Remove from saved"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Profile */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-6">Profile Information</h2>
                  <div className="glass-card rounded-sm p-8">
                    <div className="flex items-center gap-5 mb-8 pb-8 border-b border-border">
                      <div className="w-20 h-20 rounded-sm bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-3xl">
                        {mockUser.avatar}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl">{mockUser.name}</h3>
                        <p className="text-muted-foreground font-body text-sm">Member since {mockUser.joinedDate}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-body text-muted-foreground">Email</p>
                          <p className="font-body font-medium text-sm">{mockUser.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-body text-muted-foreground">Phone</p>
                          <p className="font-body font-medium text-sm">{mockUser.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-body text-muted-foreground">City</p>
                          <p className="font-body font-medium text-sm">{mockUser.city}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Heart className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-body text-muted-foreground">Saved Bikes</p>
                          <p className="font-body font-medium text-sm">{savedBikes.length} bikes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-6">Account Settings</h2>
                  <div className="glass-card rounded-sm p-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-body text-muted-foreground mb-1.5 block">Full Name</label>
                        <Input defaultValue={mockUser.name} className="bg-secondary border-border" />
                      </div>
                      <div>
                        <label className="text-sm font-body text-muted-foreground mb-1.5 block">Email</label>
                        <Input defaultValue={mockUser.email} type="email" className="bg-secondary border-border" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-body text-muted-foreground mb-1.5 block">Phone</label>
                        <Input defaultValue={mockUser.phone} type="tel" className="bg-secondary border-border" />
                      </div>
                      <div>
                        <label className="text-sm font-body text-muted-foreground mb-1.5 block">City</label>
                        <Input defaultValue={mockUser.city} className="bg-secondary border-border" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4 border-t border-border">
                      <Button variant="ghost-light" size="sm">Cancel</Button>
                      <Button variant="amber" size="sm"
                        onClick={() => toast({ title: 'Settings saved', description: 'Your profile has been updated.' })}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div className="glass-card rounded-sm p-6 mt-6 border-destructive/30">
                    <h3 className="font-heading font-bold text-destructive text-sm mb-2">Danger Zone</h3>
                    <p className="text-muted-foreground font-body text-sm mb-4">
                      Permanently delete your account and all data.
                    </p>
                    <Button variant="destructive" size="sm">Delete Account</Button>
                  </div>
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

export default Dashboard;
