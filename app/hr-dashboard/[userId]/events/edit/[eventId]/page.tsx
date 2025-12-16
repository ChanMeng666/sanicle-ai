'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';

import { FormValues, formSchema, SubmitStatus } from './types';
import { defaultFormValues, processFormData, eventToFormValues } from './utils';
import { fetchEvent, updateEvent } from './services';

import BasicDetails from './components/BasicDetails';
import DateTimeFields from './components/DateTimeFields';
import LocationFields from './components/LocationFields';
import ResourceMaterials from './components/ResourceMaterials';
import StatusMessage from './components/StatusMessage';
import UnauthorizedView from './components/UnauthorizedView';
import ErrorView from './components/ErrorView';
import LoadingView from './components/LoadingView';

export default function EditEventPage({ params }: { params: Promise<{ userId: string; eventId: string }> }) {
  const { userId, eventId } = use(params);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/login');
    },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fetchError, setFetchError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  // Fetch event data and populate form
  useEffect(() => {
    const getEvent = async () => {
      setLoading(true);
      setFetchError(null);
      
      try {
        const result = await fetchEvent(eventId);
        
        if (result.error) {
          throw new Error(result.error);
        }
        
        if (result.event) {
          // Update form values
          form.reset(eventToFormValues(result.event));
        }
      } catch (error) {
        console.error('Error fetching event:', error);
        setFetchError(error instanceof Error ? error.message : 'Failed to fetch event information');
      } finally {
        setLoading(false);
      }
    };
    
    if (session?.user) {
      getEvent();
    }
  }, [session, eventId, form]);

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Process form data
      const eventData = processFormData(values);
      
      // Update event using API
      const result = await updateEvent(eventId, eventData);

      if (!result.success) {
        throw new Error(result.error || 'Failed to update event');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        router.push(`/hr-dashboard/${userId}/events/manage`);
      }, 1500);
    } catch (error) {
      console.error('Update event error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to update event, please try again');
    } finally {
      setSubmitting(false);
    }
  };

  // Check if user has HR or admin permissions
  if (session?.user?.role !== 'hr' && session?.user?.role !== 'admin') {
    return <UnauthorizedView />;
  }

  if (status === 'loading' || loading) {
    return <LoadingView />;
  }

  if (fetchError) {
    return <ErrorView errorMessage={fetchError} />;
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Edit Event</CardTitle>
          <CardDescription>Update event information</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Details */}
              <BasicDetails control={form.control} />
              
              {/* Date and Time Fields */}
              <DateTimeFields control={form.control} />
              
              {/* Location Fields */}
              <LocationFields control={form.control} />
              
              {/* Resource Materials */}
              <ResourceMaterials control={form.control} />

              {/* Status messages */}
              <StatusMessage status={submitStatus} errorMessage={errorMessage} />

              {/* Submit Button */}
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={submitting}
                >
                  {submitting ? (
                    <>Updating Event...</>
                  ) : (
                    <>Update Event</>
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