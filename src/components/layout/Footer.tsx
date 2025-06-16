import Link from 'next/link';
import { FOOTER_LINKS, SITE_TITLE } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg text-primary">{SITE_TITLE.split(' ')[0]}</span>
              <span className="font-semibold text-lg text-foreground">{SITE_TITLE.split(' ').slice(1).join(' ')}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Providing holistic homeopathic care for a healthier you.
            </p>
            {/* Optional: Add social links here if desired using FOOTER_LINKS.social */}
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div>
              <p className="font-medium text-foreground">Services</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/services/initial-homeopathic-consultation" className="text-muted-foreground hover:text-primary">Initial Consultation</Link></li>
                <li><Link href="/services/follow-up-sessions" className="text-muted-foreground hover:text-primary">Follow-Up Sessions</Link></li>
                <li><Link href="/services/acute-condition-care" className="text-muted-foreground hover:text-primary">Acute Care</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary">All Services</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Dr. Monica</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/book-appointment" className="text-muted-foreground hover:text-primary">Book Appointment</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground">Legal</p>
              <ul className="mt-4 space-y-2 text-sm">
                {FOOTER_LINKS.legal.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} {SITE_TITLE}. All rights reserved.
          </p>
          <p className="mt-1 text-center text-xs text-muted-foreground">
            {/* Disclaimer: The information provided on this website is for educational purposes only and not intended as a substitute for professional medical advice. */}
          </p>
        </div>
      </div>
    </footer>
  );
}
