const footerLinks = {
  Marketplace: ['Browse Bikes', 'Sell Your Bike', 'How It Works', 'Certification'],
  Company: ['About Us', 'Contact', 'FAQ', 'Payment Info'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-heading font-black text-accent-foreground text-sm">M</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Moto<span className="text-accent">zone</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-body mb-4">
              Premium Bikes. Verified Trust.
            </p>
            <p className="text-muted-foreground text-xs font-body">
              India's trusted marketplace for pre-owned motorcycles.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © 2024 Motozone. All rights reserved.
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
