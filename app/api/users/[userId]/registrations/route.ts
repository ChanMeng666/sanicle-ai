import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";

import { auth } from "@/app/(auth)/auth";
import { eventRegistration } from "@/db/schema";
import { db } from "@/lib/db";

// GET - Retrieve all event registrations for a user
export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId } = await params;

  // Users can only get their own registrations, HR and admins can access any
  if (session.user.id !== userId &&
      session.user.role !== 'hr' &&
      session.user.role !== 'admin') {
    return NextResponse.json({ error: "You can only view your own event registrations" }, { status: 403 });
  }

  try {
    
    // Get all registrations for the user
    const registrations = await db.select()
      .from(eventRegistration)
      .where(eq(eventRegistration.userId, userId));
    
    return NextResponse.json(registrations);
  } catch (error) {
    console.error("Failed to fetch user registrations:", error);
    return NextResponse.json(
      { error: "Failed to fetch user registrations" },
      { status: 500 },
    );
  }
} 