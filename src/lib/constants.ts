import type { NavItem, ClinicLocation } from '@/lib/types';
import { Home, Briefcase, MessageSquareText, CalendarDays, PencilLine, ShieldCheck, MapPin } from 'lucide-react';

export const SITE_TITLE = "Dr. Monica Homeopathy";
export const SITE_DESCRIPTION = "Expert homeopathic treatments and wellness guidance by Dr. Monica. Serving clients in the US and India.";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { 
    label: 'Services', 
    href: '/services', 
    icon: Briefcase,
    // children: [ // Example for dropdown, can be implemented later
    //   { label: 'Initial Consultation', href: '/services/initial-consultation' },
    //   { label: 'Follow-up Sessions', href: '/services/follow-up-sessions' },
    // ]
  },
  { label: 'Testimonials', href: '/testimonials', icon: MessageSquareText },
  { label: 'Book Appointment', href: '/book-appointment', icon: CalendarDays },
  { label: 'Blog', href: '/blog', icon: PencilLine },
  { 
    label: 'Location', 
    href: 'https://maps.app.goo.gl/uhbgt5FoZf3wHYfA9', 
    icon: MapPin, 
    target: '_blank', 
    rel: 'noopener noreferrer' 
  },
];

export const FOOTER_LINKS = {
  social: [
    { name: 'Facebook', href: 'https://facebook.com/drmonicahomeopathy', icon: ShieldCheck }, // Placeholder icon
    { name: 'Instagram', href: 'https://instagram.com/drmonicahomeopathy', icon: ShieldCheck }, // Placeholder icon
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy'},
    { name: 'Terms of Service', href: '/terms-of-service'},
  ]
};

export const CLINIC_LOCATION_PRIMARY: ClinicLocation = {
  name: "Dr. Monica Homeopathy Clinic (Primary)",
  address: "Whitefield, Bengaluru, India", // Replace with actual address
  lat: 12.983858132919039, // Clinic latitude
  lng: 77.74615099875868, // Clinic longitude
};

// Add another location if needed for India, or state that consultations are online for India
export const CLINIC_LOCATION_INDIA_ONLINE: ClinicLocation = {
  name: "Online Consultations (India)",
  address: "Serving patients across India via secure online video calls.",
  lat: 20.5937, // India general latitude
  lng: 78.9629, // India general longitude
};

export const DEFAULT_KEYWORDS = ['homeopathy', 'naturopathy', 'holistic health', 'wellness', 'Dr. Monica', 'natural treatment'];
