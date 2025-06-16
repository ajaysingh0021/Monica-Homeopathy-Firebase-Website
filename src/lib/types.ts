import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  children?: NavItem[];
  target?: string; // Added for target='_blank'
  rel?: string;    // Added for rel='noopener noreferrer'
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon?: LucideIcon | string; // string for potential custom SVG paths or image URLs
  keywords?: string[];
  dataAiHint?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  date?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  keywords?: string[];
  dataAiHint?: string;
  date: string;
}

export interface ClinicLocation {
  name: string;
  address: string;
  lat: number;
  lng: number;
}
