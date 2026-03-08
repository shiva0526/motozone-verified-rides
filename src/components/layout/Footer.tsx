import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const footerLinks = {
  Marketplace: [
    { label: 'Browse Bikes', href: '/bikes' },
    { label: 'Sell Your Bike', href: '/sell' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Certification', href: '/certification' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '#' },
    { label: 'Payment Info', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Motozone Premium" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm font-body mb-2">
              Multi Brand Pre-Owned Bikes
            </p>
            <p className="text-muted-foreground text-xs font-body">
              India's trusted marketplace for premium pre-owned motorcycles.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © 2024 Motozone Premium. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs font-body">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
