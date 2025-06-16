import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, BookOpen, Users } from 'lucide-react';
import type { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About Dr. Monica | ${SITE_TITLE}`,
  description: `Learn more about Dr. Monica, her expertise in homeopathy, and her approach to natural healing. Serving patients in the US and India.`,
  keywords: ['Dr. Monica bio', 'homeopathic doctor', 'naturopath profile', 'about naturopath'],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Dr. Monica
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Your dedicated partner in natural and holistic healing.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <Image
              src="https://placehold.co/500x600.png"
              alt="Dr. Monica - Expert Homeopath"
              width={500}
              height={600}
              className="rounded-xl shadow-2xl object-cover aspect-[5/6] mx-auto"
              data-ai-hint="professional woman doctor"
            />
          </div>
          <div className="md:col-span-3 prose prose-lg max-w-none text-foreground">
            <p className="text-primary font-semibold text-xl mb-4">
              Meet Dr. Monica – A Passion for Healing, A Commitment to You.
            </p>
            <p>
              Dr. Monica is a highly qualified and experienced homeopathic practitioner with a profound dedication to helping individuals achieve lasting health and vitality. With over [X] years in practice, she has built a reputation for her compassionate care, insightful diagnoses, and effective, personalized treatment plans.
            </p>
            <p>
              Her journey into homeopathy began with [briefly mention inspiration or a personal story if appropriate, otherwise focus on professional aspects]. This passion drives her continuous learning and application of homeopathic principles to address a wide spectrum of health concerns, from acute illnesses to chronic conditions.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Philosophy & Approach</h3>
            <p>
              Dr. Monica believes in a truly holistic approach, viewing each patient as a unique individual with interconnected physical, mental, and emotional aspects. Her practice is centered on:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><span><strong>Patient-Centered Care:</strong> Listening attentively to your concerns and tailoring treatments to your specific needs and constitution.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><span><strong>Root Cause Resolution:</strong> Aiming to identify and address the underlying causes of illness, rather than merely suppressing symptoms.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" /><span><strong>Empowerment Through Education:</strong> Helping you understand your body and the principles of homeopathy, so you can actively participate in your healing journey.</span></li>
            </ul>
          </div>
        </div>

        <section className="mt-16 py-12 bg-secondary/30 rounded-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center px-6">
            <div>
              <Award className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="text-xl font-semibold">Years of Experience</h4>
              <p className="text-muted-foreground">[X]+ Years in Practice</p>
            </div>
            <div>
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="text-xl font-semibold">Qualifications</h4>
              <p className="text-muted-foreground">[List key qualifications, e.g., BHMS, MD (Hom), CCH]</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="text-xl font-semibold">Global Reach</h4>
              <p className="text-muted-foreground">Serving Patients in US & India</p>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Begin Your Journey to Wellness
          </h2>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-8">
            Dr. Monica is ready to guide you on your path to better health. Reach out today to schedule your consultation.
          </p>
          <Button asChild size="lg" className="shadow-lg transition-transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-appointment">Book an Appointment</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
