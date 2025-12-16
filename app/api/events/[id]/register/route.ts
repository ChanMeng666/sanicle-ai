import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";

import { auth } from "@/app/(auth)/auth";
import { event, eventRegistration } from "@/db/schema";
import { db } from "@/lib/db";

// POST - Register for an event
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const eventId = id;
    const userId = session.user.id;
    
    // Check if event exists and is not full
    const [selectedEvent] = await db.select()
      .from(event)
      .where(eq(event.id, eventId));
    
    if (!selectedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    
    // Check if registration is still open (event hasn't started)
    const now = new Date();
    if (selectedEvent.startDate < now) {
      return NextResponse.json({ error: "Event has already started or ended" }, { status: 400 });
    }
    
    // Check if max attendees limit has been reached
    if (selectedEvent.maxAttendees) {
      const registrations = await db.select()
        .from(eventRegistration)
        .where(eq(eventRegistration.eventId, eventId));
      
      if (registrations.length >= selectedEvent.maxAttendees) {
        return NextResponse.json({ error: "Event has reached maximum attendees" }, { status: 400 });
      }
    }
    
    // Check if user is already registered
    const existingRegistration = await db.select()
      .from(eventRegistration)
      .where(
        and(
          eq(eventRegistration.eventId, eventId),
          eq(eventRegistration.userId, userId)
        )
      );
    
    if (existingRegistration.length > 0) {
      return NextResponse.json({ error: "You are already registered for this event" }, { status: 400 });
    }
    
    // Create registration
    const registration = await db.insert(eventRegistration)
      .values({
        eventId,
        userId,
        registeredAt: now,
        attended: false,
      })
      .returning();
    
    return NextResponse.json({ 
      message: "Registration successful", 
      registration: registration[0] 
    });
  } catch (error) {
    console.error("Failed to register for event:", error);
    return NextResponse.json(
      { error: "Failed to register for event" },
      { status: 500 },
    );
  }
}

// DELETE - Cancel registration for an event
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const eventId = id;
    const userId = session.user.id;
    
    // Check if user is registered
    const deleted = await db.delete(eventRegistration)
      .where(
        and(
          eq(eventRegistration.eventId, eventId),
          eq(eventRegistration.userId, userId)
        )
      )
      .returning();
    
    if (deleted.length === 0) {
      return NextResponse.json({ error: "You are not registered for this event" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Registration cancelled successfully" });
  } catch (error) {
    console.error("Failed to cancel registration:", error);
    return NextResponse.json(
      { error: "Failed to cancel registration" },
      { status: 500 },
    );
  }
} 