'use client';

import { format } from 'date-fns';
import { Calendar, List, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState, useEffect, use } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import EventDetailsSheet from './components/EventDetailsSheet';
import EventLegend from './components/EventLegend';
import ListCalendarView from './components/ListCalendarView';
import MonthCalendarView from './components/MonthCalendarView';
import * as api from './services/api';
import { Event, Registration, CalendarViewType } from './types';
import { generateCalendarDays, groupEventsByDate, goToPreviousMonth, goToNextMonth } from './utils/dateUtils';
import { isRegistered as checkIsRegistered } from './utils/eventUtils';
import DashboardLayout from "../../components/DashboardLayout";

/**
 * Employee Events Page
 * Enhanced for mobile responsiveness
 */
export default function EmployeeEventsPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/login');
    },
  });
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarView, setCalendarView] = useState<CalendarViewType>('month');

  // Load data
  useEffect(() => {
    if (session?.user) {
      fetchData();
    }
  }, [session]);

  // Fetch all data
  const fetchData = async () => {
    setLoading(true);
    
    // Get event data
    const eventsData = await api.fetchEvents();
    setEvents(eventsData.events);
    setError(eventsData.error);
    
    // Get user registrations
    if (userId) {
      const registrationsData = await api.fetchUserRegistrations(userId);
      setRegistrations(registrationsData);
    }
    
    setLoading(false);
  };

  // Register for an event
  const handleRegisterForEvent = async (eventId: string) => {
    if (!session?.user?.id) return;
    
    const success = await api.registerForEvent(eventId, session.user.id, (eventId) => {
      // Update selected event participant count
      if (selectedEvent?.id === eventId) {
        setSelectedEvent({
          ...selectedEvent,
          currentAttendees: (selectedEvent.currentAttendees || 0) + 1
        });
      }
    });
    
    if (success) {
      // Refresh registration data
      const registrationsData = await api.fetchUserRegistrations(userId);
      setRegistrations(registrationsData);
    }
  };

  // Cancel registration
  const handleCancelRegistration = async (eventId: string) => {
    const success = await api.cancelRegistration(eventId, (eventId) => {
      // Update selected event participant count
      if (selectedEvent?.id === eventId) {
        setSelectedEvent({
          ...selectedEvent,
          currentAttendees: Math.max(0, (selectedEvent.currentAttendees || 1) - 1)
        });
      }
    });

    if (success) {
      // Refresh registration data
      const registrationsData = await api.fetchUserRegistrations(userId);
      setRegistrations(registrationsData);
    }
  };

  // Open event details
  const openEventDetails = (event: Event) => {
    setSelectedEvent(event);
    setIsEventDetailsOpen(true);
  };

  // Check if user is registered for an event
  const isRegistered = (eventId: string) => {
    return checkIsRegistered(eventId, registrations);
  };

  // Calendar component data
  const calendarEvents = groupEventsByDate(events, currentDate);
  const calendarDays = generateCalendarDays(currentDate);

  return (
    <DashboardLayout
      userId={userId}
      title="Health Events Calendar"
      description="View, register and manage your health-related events"
    >
      <div className="flex flex-col space-y-3 sm:space-y-6">
        {/* Calendar view controls and filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between sm:items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10" onClick={() => setCurrentDate(goToPreviousMonth(currentDate))}>
              <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            <h3 className="text-base sm:text-lg font-medium w-32 sm:w-40 text-center">
              {format(currentDate, 'MMM yyyy')}
            </h3>
            <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10" onClick={() => setCurrentDate(goToNextMonth(currentDate))}>
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm h-8 sm:h-10" onClick={() => setCurrentDate(new Date())}>
              Today
            </Button>
          </div>

          <div className="flex items-center justify-between sm:justify-normal gap-2 sm:gap-4">
            <div className="flex items-center">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-32 sm:w-[160px] text-xs sm:text-sm h-8 sm:h-10">
                  <SelectValue placeholder="Filter events" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="webinar">Webinars</SelectItem>
                  <SelectItem value="workshop">Workshops</SelectItem>
                  <SelectItem value="seminar">Seminars</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="meeting">Meetings</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-1">
              <Button 
                variant="outline" 
                size="icon"
                className={`h-8 w-8 sm:h-10 sm:w-10 ${calendarView === 'month' ? 'bg-muted' : ''}`}
                onClick={() => setCalendarView('month')}
              >
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className={`h-8 w-8 sm:h-10 sm:w-10 ${calendarView === 'list' ? 'bg-muted' : ''}`}
                onClick={() => setCalendarView('list')}
              >
                <List className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Legend */}
        <EventLegend />

        {loading ? (
          <div className="flex items-center justify-center h-48 sm:h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary mx-auto mb-3 sm:mb-4"></div>
              <p className="text-xs sm:text-sm text-muted-foreground">Loading events...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-48 sm:h-64">
            <div className="text-center">
              <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-destructive mx-auto mb-3 sm:mb-4" />
              <p className="text-xs sm:text-sm text-destructive">{error}</p>
              <Button onClick={fetchData} variant="outline" className="mt-3 sm:mt-4 text-xs sm:text-sm h-8 sm:h-9">
                Try Again
              </Button>
            </div>
          </div>
        ) : (
          <Card className="shadow-sm w-full">
            <CardContent className="p-0 overflow-hidden">
              {calendarView === 'month' ? (
                <MonthCalendarView 
                  calendarDays={calendarDays}
                  calendarEvents={calendarEvents}
                  isRegistered={isRegistered}
                  openEventDetails={openEventDetails}
                  filter={filter}
                />
              ) : (
                <ListCalendarView 
                  calendarEvents={calendarEvents}
                  isRegistered={isRegistered}
                  openEventDetails={openEventDetails}
                  filter={filter}
                />
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Event details sheet */}
      <EventDetailsSheet 
        isOpen={isEventDetailsOpen}
        onOpenChange={setIsEventDetailsOpen}
        selectedEvent={selectedEvent}
        isRegistered={isRegistered}
        registerForEvent={handleRegisterForEvent}
        cancelRegistration={handleCancelRegistration}
      />
    </DashboardLayout>
  );
} 