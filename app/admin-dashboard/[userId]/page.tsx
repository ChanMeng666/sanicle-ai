import { notFound } from "next/navigation";

import { DashboardHeader } from "@/components/custom/dashboard-header";
import { DashboardShell } from "@/components/custom/dashboard-shell";
import { EmptyState } from "@/components/custom/empty-state";
import { StatCard } from "@/components/custom/stat-card";
import { ButtonLink } from "@/components/ui/button-link";
import { getUserById } from "@/db/queries";

import { AdminMetrics } from "./components/admin-metrics";
import { OrganizationUsers } from "./components/organization-users";
import { RecentActivities } from "./components/recent-activities";

export const metadata = {
  title: "Organization Admin Dashboard",
  description: "Manage your organization, users, and settings",
};

export default async function AdminDashboardPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const user = await getUserById(userId);

  if (!user || !user.organization_id) {
    notFound();
  }

  // In a real app, we would fetch organization data and metrics here
  const organizationMetrics = {
    totalUsers: 48,
    activeUsers: 42,
    resourcesUploaded: 124,
    eventsCreated: 18,
  };

  return (
    <DashboardShell className="px-1 sm:px-4 py-2 sm:py-4 max-w-full overflow-hidden">
      <DashboardHeader
        heading="Admin Dashboard"
        text="Manage your organization, users, resources, and events."
      >
        <ButtonLink
          href={`/admin-dashboard/${userId}/settings`}
          variant="outline"
          className="text-xs sm:text-sm h-8 sm:h-9 w-full sm:w-auto px-2 sm:px-4"
        >
          Organization Settings
        </ButtonLink>
      </DashboardHeader>

      <div className="grid gap-2 sm:gap-4 grid-cols-2 lg:grid-cols-4 w-full overflow-x-auto">
        <StatCard
          title="Total Users"
          value={organizationMetrics.totalUsers}
          description="Active members in organization"
          trend="up"
          trendValue="8%"
        />
        <StatCard
          title="Active Users"
          value={organizationMetrics.activeUsers}
          description="Users active in last 30 days"
          trend="up"
          trendValue="5%"
        />
        <StatCard
          title="Resources"
          value={organizationMetrics.resourcesUploaded}
          description="Total resources uploaded"
          trend="up"
          trendValue="12%"
        />
        <StatCard
          title="Events"
          value={organizationMetrics.eventsCreated}
          description="Events created"
          trend="up"
          trendValue="3%"
        />
      </div>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-7 w-full">
        <div className="col-span-1 md:col-span-4 w-full overflow-x-auto">
          <AdminMetrics />
        </div>
        <div className="col-span-1 md:col-span-3 w-full overflow-x-auto">
          <RecentActivities userId={userId} />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <OrganizationUsers organizationId={user.organization_id} />
      </div>
    </DashboardShell>
  );
} 