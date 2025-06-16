import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { Testimonial } from '@/lib/types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden">
      <CardHeader className="bg-primary/10 p-4">
        <Quote className="h-8 w-8 text-primary/70" />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <blockquote className="italic text-foreground leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t mt-auto bg-secondary/20">
        <div>
          <p className="font-semibold text-primary">{testimonial.author}</p>
          {testimonial.location && (
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          )}
          {testimonial.date && (
            <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
