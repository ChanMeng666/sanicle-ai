'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { 
  Calendar, 
  CalendarPlus, 
  Users,
  PieChart
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function EventsPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    },
  });
  const router = useRouter();

  // Check if user has HR or admin permissions
  if (session?.user?.role !== 'hr' && session?.user?.role !== 'admin') {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Unauthorized</CardTitle>
            <CardDescription>You do not have permission to access this page</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Only HR personnel or administrators can manage events.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Health Events Management</h1>
        <p className="text-muted-foreground mt-1">
          Create and manage company-sponsored health events
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Create New Event</CardTitle>
            <CardDescription>
              Create a new health event, seminar, or workshop
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <CalendarPlus className="h-16 w-16 text-primary mb-4" />
            <p className="mb-4">
              Create webinars, workshops, and other events for employees related to menstrual and menopause health.
            </p>
            <Button 
              className="w-full" 
              onClick={() => router.push(`/hr-dashboard/${userId}/events/create`)}
            >
              Create Event
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>View Event Calendar</CardTitle>
            <CardDescription>
              Manage events in calendar format
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Calendar className="h-16 w-16 text-primary mb-4" />
            <p className="mb-4">
              View all scheduled events in an interactive calendar. Easily manage existing events.
            </p>
            <Button 
              className="w-full" 
              onClick={() => router.push(`/hr-dashboard/${userId}/events/manage`)}
            >
              View Calendar
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Registration Statistics</CardTitle>
            <CardDescription>
              View event attendance statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <PieChart className="h-16 w-16 text-primary mb-4" />
            <p className="mb-4">
              View attendance statistics and registration data for all health events.
            </p>
            <Button 
              className="w-full" 
              onClick={() => router.push(`/hr-dashboard/${userId}/events/manage?tab=stats`)}
            >
              View Statistics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 