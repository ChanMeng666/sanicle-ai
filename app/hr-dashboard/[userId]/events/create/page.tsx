'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { FormValues, formSchema, SubmitStatus } from './types';
import { defaultFormValues, processFormData } from './utils';
import { createEvent } from './services';

import EventBasicInfo from './components/EventBasicInfo';
import EventSchedule from './components/EventSchedule';
import RegistrationDetails from './components/RegistrationDetails';
import ResourceMaterials from './components/ResourceMaterials';
import FormStatusMessage from './components/FormStatusMessage';
import UnauthorizedView from './components/UnauthorizedView';

export default function CreateEventPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/login');
    },
  });
  
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Process form data
      const eventData = processFormData(values, session?.user?.id);
      
      // Submit to API
      const result = await createEvent(eventData);

      if (!result.success) {
        throw new Error(result.error || 'Failed to create event');
      }

      setSubmitStatus('success');
      
      // Redirect after success
      setTimeout(() => {
        router.push(`/hr-dashboard/${userId}`);
      }, 1500);
      
    } catch (error) {
      console.error('Create event error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to create event, please try again');
    } finally {
      setSubmitting(false);
    }
  };

  // Check if user has HR or admin permissions
  if (session?.user?.role !== 'hr' && session?.user?.role !== 'admin') {
    return <UnauthorizedView />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href={`/hr-dashboard/${userId}?tab=resources`}>
          <Button variant="ghost" size="sm" className="group mb-4 pl-1 flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Dashboard</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-primary">Create New Event</h1>
        <p className="text-muted-foreground mt-1">Schedule and promote company-sponsored health events and workshops</p>
      </div>

      <Card className="shadow-sm border-muted">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle>Event Information</CardTitle>
          <CardDescription>Fill in the details of the event you want to create</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Event Information */}
              <EventBasicInfo control={form.control} />
              
              {/* Event Schedule */}
              <EventSchedule control={form.control} />
              
              {/* Registration Details */}
              <RegistrationDetails control={form.control} />
              
              {/* Resource Materials */}
              <ResourceMaterials control={form.control} />

              {/* Form Status Messages */}
              <FormStatusMessage status={submitStatus} errorMessage={errorMessage} />

              {/* Form Controls */}
              <div className="flex justify-end gap-4 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push(`/hr-dashboard/${userId}?tab=resources`)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <span className="loading loading-spinner loading-xs mr-2"></span>
                      Creating...
                    </>
                  ) : (
                    <>Create Event</>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
} 