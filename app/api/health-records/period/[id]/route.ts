import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/app/(auth)/auth";
import { 
  getHealthRecordById, 
  updateHealthRecord, 
  deleteHealthRecord 
} from "@/db/queries";

// Get a single period record
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const recordId = id;
    console.log("GET /api/health-records/period/[id] - recordId:", recordId);
    
    const record = await getHealthRecordById(recordId);
    
    if (!record) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
    
    // Verify record belongs to current user
    if (record.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Format date
    let formattedDate;
    if (typeof record.date === 'string') {
      formattedDate = record.date;
    } else {
      const dateObj = new Date(record.date);
      formattedDate = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
    }
    
    // Format record
    const formattedRecord = {
      id: record.id,
      date: formattedDate,
      periodFlow: record.period_flow || 0,
      symptoms: record.symptoms ? 
        (typeof record.symptoms === 'string' ? JSON.parse(record.symptoms) : record.symptoms) 
        : [],
      mood: record.mood || "none",
      sleepHours: record.sleep_hours || 0,
      stressLevel: record.stress_level || 0,
      notes: record.notes
    };
    
    return NextResponse.json({ data: formattedRecord });
  } catch (error) {
    console.error("Error fetching period record:", error);
    return NextResponse.json({ error: "Failed to fetch period record" }, { status: 500 });
  }
}

// Update a single period record
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const recordId = id;
    const body = await req.json();
    
    console.log("PUT /api/health-records/period/[id] - recordId:", recordId);
    console.log("PUT /api/health-records/period/[id] - body:", body);
    
    // Get record to verify ownership
    const existingRecord = await getHealthRecordById(recordId);
    
    if (!existingRecord) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
    
    // Verify record belongs to current user
    if (existingRecord.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Update record
    await updateHealthRecord({
      id: recordId,
      periodFlow: body.periodFlow,
      symptoms: body.symptoms,
      mood: body.mood,
      sleepHours: body.sleepHours,
      stressLevel: body.stressLevel,
      notes: body.notes
    });
    
    // Get updated record
    const updatedRecord = await getHealthRecordById(recordId);
    
    // Format date
    let formattedDate;
    if (typeof updatedRecord.date === 'string') {
      formattedDate = updatedRecord.date;
    } else {
      const dateObj = new Date(updatedRecord.date);
      formattedDate = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
    }
    
    // Format record
    const formattedRecord = {
      id: updatedRecord.id,
      date: formattedDate,
      periodFlow: updatedRecord.period_flow || 0,
      symptoms: updatedRecord.symptoms ? 
        (typeof updatedRecord.symptoms === 'string' ? JSON.parse(updatedRecord.symptoms) : updatedRecord.symptoms) 
        : [],
      mood: updatedRecord.mood || "none",
      sleepHours: updatedRecord.sleep_hours || 0,
      stressLevel: updatedRecord.stress_level || 0,
      notes: updatedRecord.notes
    };
    
    return NextResponse.json({ success: true, data: formattedRecord });
  } catch (error) {
    console.error("Error updating period record:", error);
    return NextResponse.json({ error: "Failed to update period record" }, { status: 500 });
  }
}

// Delete a single period record
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const recordId = id;
    console.log("DELETE /api/health-records/period/[id] - recordId:", recordId);
    
    // Get record to verify ownership
    const existingRecord = await getHealthRecordById(recordId);
    
    if (!existingRecord) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
    
    // Verify record belongs to current user
    if (existingRecord.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Delete record
    await deleteHealthRecord(recordId);
    
    return NextResponse.json({ success: true, message: "Record deleted successfully" });
  } catch (error) {
    console.error("Error deleting period record:", error);
    return NextResponse.json({ error: "Failed to delete period record" }, { status: 500 });
  }
} 