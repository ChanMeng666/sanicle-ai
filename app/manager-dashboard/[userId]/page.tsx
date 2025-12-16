import { notFound } from "next/navigation";

import { DashboardHeader } from "@/components/custom/dashboard-header";
import { DashboardShell } from "@/components/custom/dashboard-shell";
import { StatCard } from "@/components/custom/stat-card";
import { ButtonLink } from "@/components/ui/button-link";
import { getUserById } from "@/db/queries";
import { TeamMetrics } from "./components/team-metrics";
import { TeamMembers } from "./components/team-members";
import { TeamActivities } from "./components/team-activities";

export const metadata = {
  title: "Manager Dashboard",
  description: "Manage your team, track performance, and view reports",
};

export default async function ManagerDashboardPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const user = await getUserById(userId);

  if (!user || user.role !== "manager") {
    notFound();
  }

  // In a real app, we would fetch team data and metrics here
  const teamMetrics = {
    teamSize: 12,
    activeProjects: 5,
    completedTasks: 48,
    pendingApprovals: 3,
  };

  return (
    <DashboardShell className="px-2 sm:px-4 py-2 sm:py-4">
      <DashboardHeader
        heading="Team Management Dashboard"
        text="Manage your team, track performance, and approve requests."
      >
        <ButtonLink
          href={`/manager-dashboard/${userId}/reports`}
          variant="outline"
          className="text-xs sm:text-sm h-8 sm:h-9 w-full sm:w-auto px-2 sm:px-4"
        >
          Team Reports
        </ButtonLink>
      </DashboardHeader>

      <div className="grid gap-2 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Team Size"
          value={teamMetrics.teamSize}
          description="Total team members"
          trend="up"
          trendValue="2%"
        />
        <StatCard
          title="Active Projects"
          value={teamMetrics.activeProjects}
          description="Currently in progress"
          trend="same"
          trendValue="0%"
        />
        <StatCard
          title="Completed Tasks"
          value={teamMetrics.completedTasks}
          description="Last 30 days"
          trend="up"
          trendValue="15%"
        />
        <StatCard
          title="Pending Approvals"
          value={teamMetrics.pendingApprovals}
          description="Awaiting your review"
          trend="down"
          trendValue="25%"
        />
      </div>

      <div className="grid gap-2 sm:gap-4 grid-cols-1 md:grid-cols-7">
        <div className="col-span-1 md:col-span-4">
          <TeamMetrics />
        </div>
        <div className="col-span-1 md:col-span-3">
          <TeamActivities userId={userId} />
        </div>
      </div>

      <TeamMembers managerId={userId} />
    </DashboardShell>
  );
} 