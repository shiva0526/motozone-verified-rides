import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navLinks = [
  { label: 'Browse Bikes', href: '/bikes' },
  { label: 'Sell Your Bike', href: '/sell' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Certification', href: '/certification' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 relative z-10">
            <img src={logo} alt="Motozone Premium" className="h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-secondary-foreground hover:text-white text-sm font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login">
              <span className="text-secondary-foreground hover:text-white text-sm font-medium transition-colors duration-300 cursor-pointer">
                Login
              </span>
            </Link>
            <Link to="/login">
              <Button className="h-10 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 relative z-10"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 lg:hidden shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-secondary-foreground hover:text-white text-lg font-heading font-semibold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full h-12 rounded-xl border-white/20 hover:bg-white/5 text-white font-medium">Login</Button>
                </Link>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium shadow-[0_0_20px_rgba(59,130,246,0.2)]">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
