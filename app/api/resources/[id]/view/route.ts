import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { auth } from "@/app/(auth)/auth";
import { db } from "@/lib/db";
import { resourceFile } from "@/db/schema";

// POST - Increase resource view count
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  // Login required to record views
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Missing resource ID" }, { status: 400 });
  }

  try {
    // Get current resource
    const existingResource = await db
      .select()
      .from(resourceFile)
      .where(eq(resourceFile.id, id));

    if (existingResource.length === 0) {
      return NextResponse.json({ error: "Resource does not exist" }, { status: 404 });
    }

    // Update view count
    const updated = await db
      .update(resourceFile)
      .set({
        viewCount: existingResource[0].viewCount + 1,
        updatedAt: new Date(),
      })
      .where(eq(resourceFile.id, id))
      .returning();

    return NextResponse.json(updated[0]);
  } catch (error) {
    console.error("Failed to update resource view count:", error);
    return NextResponse.json(
      { error: "Failed to update resource view count" },
      { status: 500 }
    );
  }
} 