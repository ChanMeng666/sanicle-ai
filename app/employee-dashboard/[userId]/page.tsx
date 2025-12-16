'use client';

import { useState, useEffect, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import types
import { DashboardTab } from './types';

// Import components
import LoadingView from './components/LoadingView';
import DashboardHeader from './components/DashboardHeader';
import { OverviewTab } from '../components/OverviewTab';
import CycleTab from '../components/CycleTab';
import { HealthTab } from '../components/HealthTab';
import { AppointmentsTab } from '../components/AppointmentsTab';
import ResourcesTab from './components/ResourcesTab';
import { ChatWidgetWrapper } from '@/components/chat';

/**
 * Employee Dashboard Page
 * Enhanced for mobile responsiveness
 */
export default function EmployeeDashboard({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  console.log("Employee dashboard page loading, user ID:", userId);

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("Unauthenticated user, redirecting to login page");
      router.replace('/login');
    },
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<DashboardTab>(
    (tabParam as DashboardTab) || 'overview'
  );
  
  // Emergency fix: If page loads for more than 5 seconds but authentication is not complete, force refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'loading') {
        console.log("Session loading timeout, attempting to refresh page");
        window.location.reload();
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [status]);
  
  // Update active tab when URL parameter changes
  useEffect(() => {
    if (tabParam && ['overview', 'cycle', 'health', 'appointments', 'resources'].includes(tabParam)) {
      setActiveTab(tabParam as DashboardTab);
    }
  }, [tabParam]);

  // Redirect if user ID doesn't match session
  useEffect(() => {
    console.log("Session status:", status, "User:", session?.user?.id);
    
    if (session?.user && session.user.id !== userId) {
      console.log("User ID mismatch, redirecting to correct dashboard");
      router.replace(`/employee-dashboard/${session.user.id}`);
    }
  }, [session, userId, router]);

  // Loading state
  if (status === 'loading') {
    console.log("Dashboard loading...");
    return <LoadingView />;
  }

  // No session
  if (!session?.user) {
    console.log("No session information, returning null");
    return null;
  }

  console.log("Dashboard rendering, user:", session.user.name, "ID:", session.user.id);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-6 max-w-[100vw] overflow-hidden">
      <DashboardHeader
        userName={session.user.name || 'User'}
        userId={userId}
        profileImageUrl={session.user.profileImageUrl}
      />
      
      <Tabs 
        defaultValue={activeTab} 
        value={activeTab} 
        className="w-full" 
        onValueChange={(value) => setActiveTab(value as DashboardTab)}
      >
        <div className="relative w-full max-h-full overflow-hidden">
          <TabsList className="flex md:grid w-full md:grid-cols-5 overflow-x-auto overflow-y-hidden scrollbar-hide max-w-[100vw] mb-1 sm:mb-2">
            <TabsTrigger value="overview" className="text-xs sm:text-sm py-1.5 sm:py-2 whitespace-nowrap flex-shrink-0">Overview</TabsTrigger>
            <TabsTrigger value="cycle" className="text-xs sm:text-sm py-1.5 sm:py-2 whitespace-nowrap flex-shrink-0">Cycle</TabsTrigger>
            <TabsTrigger value="health" className="text-xs sm:text-sm py-1.5 sm:py-2 whitespace-nowrap flex-shrink-0">Health</TabsTrigger>
            <TabsTrigger value="appointments" className="text-xs sm:text-sm py-1.5 sm:py-2 whitespace-nowrap flex-shrink-0">Appointments</TabsTrigger>
            <TabsTrigger value="resources" className="text-xs sm:text-sm py-1.5 sm:py-2 whitespace-nowrap flex-shrink-0">Resources</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="overview">
          <OverviewTab userId={userId} userName={session.user.name || ''} />
        </TabsContent>

        <TabsContent value="cycle">
          <CycleTab userId={userId} />
        </TabsContent>

        <TabsContent value="health">
          <HealthTab userId={userId} />
        </TabsContent>

        <TabsContent value="appointments">
          <AppointmentsTab userId={userId} />
        </TabsContent>

        <TabsContent value="resources">
          <ResourcesTab userId={userId} />
        </TabsContent>
      </Tabs>
      
      <ChatWidgetWrapper />
    </div>
  );
} 