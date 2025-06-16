import Image from 'next/image';
import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';
import { notFound } from 'next/navigation';

type Props = {
  params: { serviceSlug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = SERVICES_DATA.find(s => s.slug === params.serviceSlug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Services`,
    description: service.description,
    keywords: [...(service.keywords || []), 'homeopathy', SITE_TITLE],
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: Props) {
  const { serviceSlug } = params;
  const service = SERVICES_DATA.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 rounded-xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="relative w-full aspect-video md:aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={service.dataAiHint || 'medical procedure'}
            />
          </div>
          <div>
            {service.icon && typeof service.icon !== 'string' && (
              <service.icon className="h-12 w-12 text-primary mb-4" />
            )}
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
            
            <div className="prose prose-lg max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: service.longDescription || "<p>Detailed information about this service is coming soon.</p>" }} />

            {service.keywords && service.keywords.length > 0 && (
               <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">Focus Areas:</h3>
                <ul className="space-y-2">
                  {service.keywords.map(keyword => (
                    <li key={keyword} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-muted-foreground">{keyword.charAt(0).toUpperCase() + keyword.slice(1)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button asChild size="lg" className="mt-10 shadow-md transition-transform hover:scale-105">
              <Link href="/book-appointment">Book This Service</Link>
            </Button>
          </div>
        </div>
      </article>

      <div className="mt-16 text-center bg-primary/5 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Explore Other Services</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {SERVICES_DATA.filter(s => s.slug !== serviceSlug).slice(0,3).map(otherService => (
            <Button key={otherService.slug} variant="outline" asChild>
              <Link href={`/services/${otherService.slug}`}>{otherService.title}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
