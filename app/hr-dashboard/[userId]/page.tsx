'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import types
import { DashboardTab, Resource } from './types';

// Import services
import { fetchRecentResources } from './services';

// Import components
import LoadingView from './components/LoadingView';
import DashboardHeader from './components/DashboardHeader';
import OverviewTab from './components/tabs/OverviewTab';
import ResourcesTab from './components/tabs/ResourcesTab';

export default function HRDashboard({ params }: { params: { userId: string } }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/login');
    },
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get('tab');
  const [activeTab, setActiveTab] = useState<DashboardTab>(
    (tabParam as DashboardTab) || 'overview'
  );

  // Resource states
  const [recentResources, setRecentResources] = useState<Resource[]>([]);
  const [resourcesLoading, setResourcesLoading] = useState(true);
  const [resourcesError, setResourcesError] = useState<string | null>(null);

  // Redirect if user ID doesn't match session
  useEffect(() => {
    if (session?.user && session.user.id !== params.userId) {
      router.replace(`/hr-dashboard/${session.user.id}`);
    }
  }, [session, params.userId, router]);

  // Update active tab when URL parameter changes
  useEffect(() => {
    if (tabParam && ['overview', 'analytics', 'reports', 'notifications', 'resources'].includes(tabParam)) {
      setActiveTab(tabParam as DashboardTab);
    }
  }, [tabParam]);

  // Load resources for the resources tab
  useEffect(() => {
    if (session?.user && session.user.role === 'hr') {
      loadResources();
    }
  }, [session]);

  // Function to load resources
  const loadResources = async () => {
    setResourcesLoading(true);
    setResourcesError(null);
    
    const { resources, error } = await fetchRecentResources(5);
    
    if (error) {
      setResourcesError(error);
    } else {
      setRecentResources(resources);
    }
    
    setResourcesLoading(false);
  };

  // Loading state
  if (status === 'loading') {
    return <LoadingView />;
  }

  // No session
  if (!session?.user) return null;

  return (
    <div className="container mx-auto px-4 py-6">
      <DashboardHeader 
        userName={session.user.name || 'User'} 
        userId={params.userId} 
        profileImageUrl={session.user.profileImageUrl}
      />

      <Tabs defaultValue={activeTab} className="w-full" onValueChange={(value) => setActiveTab(value as DashboardTab)}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="resources">Resources Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-6">
          <div className="text-center py-10">
            <p className="text-muted-foreground">Analytics content will be displayed here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-6">
          <div className="text-center py-10">
            <p className="text-muted-foreground">Reports content will be displayed here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <div className="text-center py-10">
            <p className="text-muted-foreground">Notifications content will be displayed here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="resources" className="space-y-4">
          <ResourcesTab
            userId={params.userId}
            recentResources={recentResources}
            resourcesLoading={resourcesLoading}
            resourcesError={resourcesError}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
} 