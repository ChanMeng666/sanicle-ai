'use client';

import FullCalendar from '@fullcalendar/react';
import { Calendar, List } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState, useEffect, useRef, use } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import CalendarView, { CalendarRef } from './components/CalendarView';
import DeleteConfirmationDialog from './components/DeleteConfirmationDialog';
import EventDetailsDialog from './components/EventDetailsDialog';
import HeaderSection from './components/HeaderSection';
import ListView from './components/ListView';
import LoadingView from './components/LoadingView';
import UnauthorizedView from './components/UnauthorizedView';
import { fetchEvents, deleteEvent as deleteEventService } from './services';
import { Event, EventFilter } from './types';
import { filterEvents } from './utils';

export default function ManageEventsPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    },
  });
  const router = useRouter();
  const calendarRef = useRef<CalendarRef | null>(null);
  
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('calendar');
  const [filter, setFilter] = useState<EventFilter>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  // Load events
  const loadEvents = async () => {
    setLoading(true);
    const result = await fetchEvents();
    setEvents(result.events);
    setError(result.error);
    setLoading(false);
  };

  // Handle delete event
  const handleDeleteEvent = async () => {
    if (!selectedEvent) return;
    
    setDeleteLoading(true);
    setDeleteError(null);
    
    const result = await deleteEventService(selectedEvent.id);
    
    if (result.success) {
      setEvents(events.filter(event => event.id !== selectedEvent.id));
      setDeleteConfirmOpen(false);
      setSelectedEvent(null);
      setShowEventDetails(false);
    } else {
      setDeleteError(result.error);
    }
    
    setDeleteLoading(false);
  };

  // Handle view event details
  const handleViewEventDetails = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setShowEventDetails(true);
    }
  };

  // Navigate to create event page
  const handleCreateEvent = () => {
    router.push(`/hr-dashboard/${userId}/events/create`);
  };

  // Load events on component mount
  useEffect(() => {
    if (session?.user) {
      loadEvents();
    }
  }, [session]);

  // Ensure user is accessing their own dashboard
  useEffect(() => {
    if (session?.user && session.user.id !== userId) {
      router.replace(`/hr-dashboard/${session.user.id}/events/manage`);
    }
  }, [session, userId, router]);

  // Check if user has HR or admin permissions
  if (session?.user?.role !== 'hr' && session?.user?.role !== 'admin') {
    return <UnauthorizedView />;
  }

  if (status === 'loading') {
    return <LoadingView />;
  }

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
      <HeaderSection
        userId={userId}
        onCreateEvent={handleCreateEvent}
      />

      <Tabs defaultValue="calendar" className="space-y-3 sm:space-y-6">
        <TabsList className="w-full max-w-xs sm:max-w-md mx-auto grid grid-cols-2 p-0.5 sm:p-1 bg-muted/20 dark:bg-muted/10 rounded-lg shadow-sm">
          <TabsTrigger 
            value="calendar" 
            className="flex-1 py-1 sm:py-1.5 text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm dark:data-[state=active]:bg-muted/20 transition-all duration-200"
          >
            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Calendar View
          </TabsTrigger>
          <TabsTrigger 
            value="list" 
            className="flex-1 py-1 sm:py-1.5 text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm dark:data-[state=active]:bg-muted/20 transition-all duration-200"
          >
            <List className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            List View
          </TabsTrigger>
        </TabsList>
        
        <TabsContent 
          value="calendar" 
          className="border border-muted/50 dark:border-muted/30 rounded-lg p-2 sm:p-6 bg-card shadow-sm dark:shadow-primary/5 transition-all duration-200"
        >
          <CalendarView
            ref={calendarRef}
            events={events}
            filter={filter}
            onEventClick={handleViewEventDetails}
          />
        </TabsContent>
        
        <TabsContent 
          value="list"
          className="border border-muted/50 dark:border-muted/30 rounded-lg bg-card shadow-sm dark:shadow-primary/5 transition-all duration-200"
        >
          <ListView
            events={events}
            loading={loading}
            error={error}
            filter={filter}
            userId={userId}
            onCreateEvent={handleCreateEvent}
            onRetry={loadEvents}
            onViewDetails={(event) => {
              setSelectedEvent(event);
              setShowEventDetails(true);
            }}
            onDeleteClick={(event) => {
              setSelectedEvent(event);
              setDeleteConfirmOpen(true);
            }}
          />
        </TabsContent>
      </Tabs>
      
      {/* Event Details Dialog */}
      <EventDetailsDialog
        open={showEventDetails}
        onOpenChange={setShowEventDetails}
        event={selectedEvent}
        userId={userId}
        onDelete={() => {
          setShowEventDetails(false);
          setDeleteConfirmOpen(true);
        }}
      />
      
      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog 
        open={deleteConfirmOpen}
        onOpenChange={setDeleteConfirmOpen}
        onConfirm={handleDeleteEvent}
        loading={deleteLoading}
        error={deleteError}
      />
    </div>
  );
} 