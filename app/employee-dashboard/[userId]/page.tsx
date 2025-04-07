'use client';

import { useState, useEffect } from 'react';
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

export default function EmployeeDashboard({ params }: { params: { userId: string } }) {
  console.log("员工仪表盘页面加载，用户ID:", params.userId);
  
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("未认证用户，重定向到登录页");
      router.replace('/login');
    },
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get('tab');
  const [activeTab, setActiveTab] = useState<DashboardTab>(
    (tabParam as DashboardTab) || 'overview'
  );
  
  // 紧急修复：如果页面加载超过5秒但仍未完成认证，强制刷新
  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'loading') {
        console.log("会话加载超时，尝试刷新页面");
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
    console.log("会话状态:", status, "用户:", session?.user?.id);
    
    if (session?.user && session.user.id !== params.userId) {
      console.log("用户ID不匹配，重定向到正确的仪表盘");
      router.replace(`/employee-dashboard/${session.user.id}`);
    }
  }, [session, params.userId, router]);

  // Loading state
  if (status === 'loading') {
    console.log("仪表盘加载中...");
    return <LoadingView />;
  }

  // No session
  if (!session?.user) {
    console.log("无会话信息，返回null");
    return null;
  }

  console.log("仪表盘渲染，用户:", session.user.name, "ID:", session.user.id);

  return (
    <div className="container mx-auto px-4 py-6">
      <DashboardHeader 
        userName={session.user.name || 'User'} 
        userId={params.userId} 
        profileImageUrl={session.user.profileImageUrl}
      />
      
      <Tabs 
        defaultValue={activeTab} 
        value={activeTab} 
        className="w-full" 
        onValueChange={(value) => setActiveTab(value as DashboardTab)}
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cycle">Cycle</TabsTrigger>
          <TabsTrigger value="health">Health</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <OverviewTab userId={params.userId} userName={session.user.name || ''} />
        </TabsContent>
        
        <TabsContent value="cycle">
          <CycleTab userId={params.userId} />
        </TabsContent>
        
        <TabsContent value="health">
          <HealthTab userId={params.userId} />
        </TabsContent>
        
        <TabsContent value="appointments">
          <AppointmentsTab userId={params.userId} />
        </TabsContent>
        
        <TabsContent value="resources">
          <ResourcesTab userId={params.userId} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 