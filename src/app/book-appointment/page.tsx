import { BookingForm } from '@/components/BookingForm';
import { MapComponent } from '@/components/MapComponent';
import type { Metadata } from 'next';
import { SITE_TITLE, DEFAULT_KEYWORDS, CLINIC_LOCATION_PRIMARY } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: `Schedule your homeopathic consultation with Dr. Monica at ${SITE_TITLE}. Online and in-person options available.`,
  keywords: ['book appointment homeopathy', 'schedule consultation naturopathy', ...DEFAULT_KEYWORDS],
};

export default function BookAppointmentPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const subject = typeof searchParams?.subject === 'string' ? searchParams.subject : undefined;
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Book Your Consultation
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Take the first step towards better health. Fill out the form below to request an appointment, or contact us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 bg-card p-6 sm:p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Appointment Request Form</h2>
          <BookingForm subject={subject} />
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card p-6 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <div>
                  <strong>Primary Clinic (USA):</strong><br />
                  {CLINIC_LOCATION_PRIMARY.address}<br/>
                  <em>(In-person by appointment only)</em>
                </div>
              </div>
               <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <div>
                  <strong>Online Consultations (India & USA):</strong><br />
                  Available via secure video call.
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span>+1 (555) 123-4567 (USA)</span> {/* Replace with actual number */}
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                 <span>+91 98XXX XXXXX (India)</span> {/* Replace with actual number */}
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                <a href="mailto:info@drmonicahomeopathy.com" className="hover:text-primary">info@drmonicahomeopathy.com</a> {/* Replace with actual email */}
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              We typically respond within 24-48 business hours. For urgent matters, please call.
            </p>
          </div>
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
