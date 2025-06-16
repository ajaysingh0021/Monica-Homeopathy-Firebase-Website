import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES_DATA } from '@/lib/data';
import type { Metadata } from 'next';
import { SITE_TITLE, DEFAULT_KEYWORDS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Homeopathic Services',
  description: `Explore the range of homeopathic services offered by Dr. Monica at ${SITE_TITLE}. Personalized treatments for US and Indian patients.`,
  keywords: ['homeopathic services', 'naturopathic treatments', ...DEFAULT_KEYWORDS],
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our Homeopathic Services
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover comprehensive and personalized homeopathic care designed to address your unique health needs and promote long-term well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-16 text-center bg-primary/10 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Start Your Healing Journey?</h2>
        <p className="text-muted-foreground mb-6">
          If you're unsure which service is right for you, or if you have specific health concerns, please don't hesitate to reach out.
        </p>
        <a href="/book-appointment" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors">
          Book a Consultation
        </a>
      </div>
    </div>
  );
}
