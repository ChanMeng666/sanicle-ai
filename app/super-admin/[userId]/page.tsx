import { notFound } from "next/navigation";

import { DashboardHeader } from "@/components/custom/dashboard-header";
import { DashboardShell } from "@/components/custom/dashboard-shell";
import { StatCard } from "@/components/custom/stat-card";
import { getUserById } from "@/db/queries";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Super Admin Dashboard",
  description: "Manage the entire platform, users, organizations, and system settings",
};

export default async function SuperAdminDashboardPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const user = await getUserById(userId);

  if (!user || !user.is_super_admin) {
    notFound();
  }

  // In a real app, we would fetch platform-wide metrics here
  const platformMetrics = {
    totalOrganizations: 45,
    totalUsers: 2450,
    activeUsers: 1845,
    totalEvents: 312,
  };

  return (
    <DashboardShell className="px-2 sm:px-4 py-2 sm:py-4">
      <DashboardHeader
        heading="Platform Administration"
        text="Manage the entire platform, organizations, users, and system settings."
      />

      <div className="grid gap-2 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Organizations"
          value={platformMetrics.totalOrganizations}
          description="Registered on platform"
          trend="up"
          trendValue="12%"
        />
        <StatCard
          title="Total Users"
          value={platformMetrics.totalUsers}
          description="Across all organizations"
          trend="up"
          trendValue="8%"
        />
        <StatCard
          title="Active Users"
          value={platformMetrics.activeUsers}
          description="Last 30 days"
          trend="up"
          trendValue="5%"
        />
        <StatCard
          title="Total Events"
          value={platformMetrics.totalEvents}
          description="Created across platform"
          trend="up"
          trendValue="15%"
        />
      </div>

      <div className="grid gap-2 sm:gap-4 grid-cols-1 md:grid-cols-7">
        <div className="col-span-1 md:col-span-4">
          <Card>
            <CardHeader className="px-3 sm:px-6 pt-3 sm:pt-6 pb-2 sm:pb-3">
              <CardTitle className="text-base sm:text-lg">Platform Statistics</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Monitor key metrics across the entire platform</CardDescription>
            </CardHeader>
            <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
              <div className="h-[200px] sm:h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                <p className="text-xs sm:text-sm text-muted-foreground">Platform statistics would appear here</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-3">
          <Card>
            <CardHeader className="px-3 sm:px-6 pt-3 sm:pt-6 pb-2 sm:pb-3">
              <CardTitle className="text-base sm:text-lg">System Events</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Recent system-wide events and alerts</CardDescription>
            </CardHeader>
            <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
              <div className="h-[200px] sm:h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
                <p className="text-xs sm:text-sm text-muted-foreground">Recent system events would appear here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mt-2 sm:mt-6">
        <CardHeader className="px-3 sm:px-6 pt-3 sm:pt-6 pb-2 sm:pb-3">
          <CardTitle className="text-base sm:text-lg">Organizations</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Manage all organizations on the platform</CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
          <div className="h-[200px] sm:h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
            <p className="text-xs sm:text-sm text-muted-foreground">Organizations list would appear here</p>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  );
} 