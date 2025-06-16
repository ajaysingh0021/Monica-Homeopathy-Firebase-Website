import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SERVICES_DATA, TESTIMONIALS_DATA } from '@/lib/data';
import { ArrowRight, CheckCircle2, Users, Leaf, Heart } from 'lucide-react';
import type { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Welcome to ${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  const featuredServices = SERVICES_DATA.slice(0, 3);
  const featuredTestimonial = TESTIMONIALS_DATA[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Embrace <span className="text-primary">Natural Healing</span> with Dr. Monica
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Discover personalized homeopathic solutions to restore your vitality and well-being. Expert care for families in the US and India.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="shadow-lg transition-transform hover:scale-105">
              <Link href="/book-appointment">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105">
              <Link href="/services">Explore Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Dr. Monica Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x700.png"
                alt="Dr. Monica - Homeopathic Doctor"
                width={600}
                height={700}
                className="rounded-xl shadow-2xl object-cover aspect-[6/7]"
                data-ai-hint="professional doctor"
              />
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Meet Dr. Monica</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Passionate about natural healing and dedicated to your well-being.
              </p>
              <p>
                Dr. Monica is a certified homeopathic practitioner with over 15 years of experience helping patients achieve optimal health through natural, individualized treatment plans. Her compassionate approach and deep understanding of homeopathic principles have successfully guided countless individuals and families towards resolving acute and chronic health issues.
              </p>
              <p>
                Specializing in thyroid treatment, allergy treatment, chronic diseases, pediatric care, women's health, Dr. Monica believes in empowering her patients with knowledge and supporting them on their journey to a healthier, more vibrant life. She serves a diverse clientele across the United States and India, offering both in-person and online consultations.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-primary" /><span>Personalized Treatment Plans</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-primary" /><span>Holistic Approach to Wellness</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-primary" /><span>Serving US & Indian Patients</span></li>
              </ul>
              <Button asChild className="mt-8 shadow-md transition-transform hover:scale-105">
                <Link href="/book-appointment">Consult Dr. Monica</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Homeopathic Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Tailored treatments to address your unique health needs and promote long-lasting wellness.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.slug} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="items-center">
                  {service.icon && typeof service.icon !== 'string' && <service.icon className="h-12 w-12 text-primary mb-4" />}
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center mb-4">{service.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full transition-colors hover:bg-primary/10">
                    <Link href={`/services/${service.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="link" className="text-primary hover:text-primary/80">
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Homeopathy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Why Choose Homeopathy?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              A gentle, effective, and holistic path to better health.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Natural & Safe</h3>
              <p className="text-muted-foreground">Utilizes highly diluted natural substances, making it safe for all ages, including children and pregnant women, with no harmful side effects.</p>
            </div>
            <div className="p-6 rounded-lg">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
              <p className="text-muted-foreground">Treats the person as a whole, considering physical, mental, and emotional aspects to address the root cause of illness, not just symptoms.</p>
            </div>
            <div className="p-6 rounded-lg">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Individualized Care</h3>
              <p className="text-muted-foreground">Recognizes that each person is unique, providing personalized remedies tailored to your specific symptoms and constitution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      {featuredTestimonial && (
        <section className="py-16 md:py-24 bg-accent/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">What Our Patients Say</h2>
            <Card className="max-w-2xl mx-auto shadow-xl p-6 sm:p-8">
              <CardContent>
                <blockquote className="text-lg italic text-foreground">
                  "{featuredTestimonial.quote}"
                </blockquote>
                <p className="mt-6 font-semibold text-primary">
                  - {featuredTestimonial.author}
                  {featuredTestimonial.location && (
                    <span className="block text-sm font-normal text-muted-foreground">{featuredTestimonial.location}</span>
                  )}
                </p>
              </CardContent>
            </Card>
            <Button asChild variant="link" size="lg" className="mt-8 text-primary hover:text-primary/80">
              <Link href="/testimonials">Read More Testimonials <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>
      )}

    </div>
  );
}
