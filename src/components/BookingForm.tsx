'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const bookingFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }).optional(),
  preferredDate: z.date({ required_error: "A preferred date is required." }),
  preferredTime: z.enum(["morning", "afternoon", "evening"], { required_error: "Please select a preferred time."}),
  consultationType: z.enum(["online-us", "online-india", "in-person"], { required_error: "Please select consultation type."}),
  message: z.string().max(500, { message: 'Message cannot exceed 500 characters.' }).optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

// This can be type-widened to React.HTMLAttributes<HTMLDivElement>
interface BookingFormProps extends React.HTMLAttributes<HTMLDivElement> {
  subject?: string; // Optional subject from query params
}


export function BookingForm({ subject, className, ...props }: BookingFormProps) {
  const { toast } = useToast();
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: subject ? `Regarding: ${subject}` : '',
      // preferredDate: undefined // Will be set by date picker
      // preferredTime: undefined // Will be set by radio
      // consultationType: undefined // Will be set by radio
    },
  });

  async function onSubmit(data: BookingFormValues) {
    // Here you would typically send the data to a backend API
    // For now, we'll just simulate a successful submission
    console.log(data);
    toast({
      title: 'Appointment Request Submitted!',
      description: 'We have received your request and will contact you shortly to confirm your appointment.',
      variant: 'default', // 'default' is a light teal in this theme
    });
    form.reset(); // Reset form after submission
  }

  return (
    <div className={cn("w-full", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Your Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setDate(new Date().getDate() -1)) // Disable past dates
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Preferred Time Slot</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="morning" />
                      </FormControl>
                      <FormLabel className="font-normal">Morning (9 AM - 12 PM)</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="afternoon" />
                      </FormControl>
                      <FormLabel className="font-normal">Afternoon (1 PM - 5 PM)</FormLabel>
                    </FormItem>
                     <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="evening" />
                      </FormControl>
                      <FormLabel className="font-normal">Evening (6 PM - 8 PM)</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="consultationType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Consultation Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="online-us" />
                      </FormControl>
                      <FormLabel className="font-normal">Online (US Patient)</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="online-india" />
                      </FormControl>
                      <FormLabel className="font-normal">Online (India Patient)</FormLabel>
                    </FormItem>
                     <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="in-person" />
                      </FormControl>
                      <FormLabel className="font-normal">In-Person (if available locally)</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message / Reason for Appointment (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe your health concern or reason for booking."
                    className="resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Max 500 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full sm:w-auto shadow-md transition-transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90">
            Request Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
}
