import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { auth } from "@/app/(auth)/auth";
import { db } from "@/lib/db";
import { event } from "@/db/schema";

// Event update validation schema
const EventUpdateSchema = z.object({
  title: z.string().min(1, "Title cannot be empty").optional(),
  description: z.string().optional(),
  eventType: z.string().min(1, "Event type cannot be empty").optional(),
  startDate: z.string().or(z.date()).optional(),
  endDate: z.string().or(z.date()).optional(),
  location: z.string().optional(),
  maxAttendees: z.number().int().positive().optional(),
  registrationLink: z.string().url("Invalid registration link").optional(),
  resourceMaterials: z.array(z.string()).optional(),
});

// GET - Retrieve a specific event by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    
    const [selectedEvent] = await db.select()
      .from(event)
      .where(eq(event.id, id));
    
    if (!selectedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    
    return NextResponse.json(selectedEvent);
  } catch (error) {
    console.error("Failed to fetch event:", error);
    return NextResponse.json(
      { error: "Failed to fetch event" },
      { status: 500 },
    );
  }
}

// PATCH - Update event information
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  // Only HR role or admin can update events
  if (!session || (session.user.role !== "hr" && session.user.role !== "admin")) {
    return NextResponse.json({ error: "Unauthorized, only HR or admin can update events" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    
    const validatedData = EventUpdateSchema.safeParse(body);
    
    if (!validatedData.success) {
      const errorMessage = validatedData.error.errors
        .map((error) => error.message)
        .join(", ");
        
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    
    const updateData = validatedData.data;
    
    // Create a properly typed update object
    const dbUpdateObject: {
      title?: string;
      description?: string;
      eventType?: string;
      startDate?: Date;
      endDate?: Date;
      location?: string;
      maxAttendees?: number;
      registrationLink?: string;
      resourceMaterials?: string[];
      updatedAt: Date;
    } = {
      updatedAt: new Date()
    };
    
    // Copy validated properties to our typed update object
    if (updateData.title !== undefined) dbUpdateObject.title = updateData.title;
    if (updateData.description !== undefined) dbUpdateObject.description = updateData.description;
    if (updateData.eventType !== undefined) dbUpdateObject.eventType = updateData.eventType;
    if (updateData.location !== undefined) dbUpdateObject.location = updateData.location;
    if (updateData.maxAttendees !== undefined) dbUpdateObject.maxAttendees = updateData.maxAttendees;
    if (updateData.registrationLink !== undefined) dbUpdateObject.registrationLink = updateData.registrationLink;
    if (updateData.resourceMaterials !== undefined) dbUpdateObject.resourceMaterials = updateData.resourceMaterials;
    
    // Convert date strings to Date objects
    if (updateData.startDate) {
      dbUpdateObject.startDate = typeof updateData.startDate === 'string' 
        ? new Date(updateData.startDate)
        : updateData.startDate;
    }
    
    if (updateData.endDate) {
      dbUpdateObject.endDate = typeof updateData.endDate === 'string'
        ? new Date(updateData.endDate)
        : updateData.endDate;
    }
    
    // Update event with properly typed object
    const updatedEvent = await db.update(event)
      .set(dbUpdateObject)
      .where(eq(event.id, id))
      .returning();
    
    if (updatedEvent.length === 0) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    
    return NextResponse.json(updatedEvent[0]);
  } catch (error) {
    console.error("Failed to update event:", error);
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 },
    );
  }
}

// DELETE - Delete a specific event
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  // Only HR role or admin can delete events
  if (!session || (session.user.role !== "hr" && session.user.role !== "admin")) {
    return NextResponse.json({ error: "Unauthorized, only HR or admin can delete events" }, { status: 403 });
  }

  try {
    const { id } = await params;
    
    // Delete event
    const deleted = await db.delete(event)
      .where(eq(event.id, id))
      .returning();
    
    if (deleted.length === 0) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Failed to delete event:", error);
    return NextResponse.json(
      { error: "Failed to delete event" },
      { status: 500 },
    );
  }
} 