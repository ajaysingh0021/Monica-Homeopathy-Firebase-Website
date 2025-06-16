import { TestimonialCard } from '@/components/TestimonialCard';
import { TESTIMONIALS_DATA } from '@/lib/data';
import type { Metadata } from 'next';
import { SITE_TITLE, DEFAULT_KEYWORDS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patient Testimonials',
  description: `Read heartfelt testimonials from patients who have benefited from Dr. Monica's homeopathic treatments at ${SITE_TITLE}.`,
  keywords: ['homeopathy testimonials', 'patient reviews', 'naturopathy success stories', ...DEFAULT_KEYWORDS],
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Words of Wellness
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Hear directly from our patients about their healing journeys with Dr. Monica and the positive impact of homeopathy on their lives.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS_DATA.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-16 text-center bg-accent/10 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Share Your Story</h2>
        <p className="text-muted-foreground mb-6">
          Have you had a positive experience with Dr. Monica? We'd love to hear from you! Your story can inspire others on their path to wellness.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
            <Link href="/book-appointment?subject=ShareMyStory">Contact Us to Share</Link>
        </Button>
      </div>
    </div>
  );
}
