import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/(auth)/auth";

import { getUserById, updateUserRole } from "@/db/queries";

/**
 * GET /api/organizations/[organizationId]/users/[userId]
 * 
 * Retrieves a specific user's details
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ organizationId: string; userId: string }> }
) {
  try {
    const session = await auth();
    const { organizationId, userId } = await params;
    
    // Check authentication
    if (!session || !session.user) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Check authorization - user must be superadmin, belong to this organization as admin/HR,
    // or be requesting their own details
    const isAuthorized = 
      session.user.isSuperAdmin || 
      (session.user.organizationId === organizationId && 
        (session.user.role === 'admin' || session.user.role === 'hr')) ||
      session.user.id === userId;
        
    if (!isAuthorized) {
      return new NextResponse(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Get user details
    const user = await getUserById(userId);
    
    if (!user) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Check if the user belongs to the specified organization
    if (user.organization_id !== organizationId && !session.user.isSuperAdmin) {
      return new NextResponse(JSON.stringify({ error: "User not found in this organization" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Don't return sensitive information
    const { password, ...userWithoutPassword } = user;
    
    return NextResponse.json(userWithoutPassword);
    
  } catch (error) {
    console.error("Error fetching user:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

/**
 * PATCH /api/organizations/[organizationId]/users/[userId]
 * 
 * Updates a user's role
 * Only admin can update HR role, and superadmin can update anyone
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ organizationId: string; userId: string }> }
) {
  try {
    const session = await auth();
    const { organizationId, userId } = await params;
    
    // Check authentication
    if (!session || !session.user) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Check authorization - user must be superadmin or admin of this organization
    const isAuthorized = 
      session.user.isSuperAdmin || 
      (session.user.organizationId === organizationId && session.user.role === 'admin');
        
    if (!isAuthorized) {
      return new NextResponse(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Parse request body
    const data = await request.json();
    
    // Check if role is provided
    if (!data.role) {
      return new NextResponse(JSON.stringify({ error: "Role is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Get the target user
    const targetUser = await getUserById(userId);
    
    if (!targetUser) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Check if the user belongs to the specified organization
    if (targetUser.organization_id !== organizationId) {
      return new NextResponse(JSON.stringify({ error: "User not found in this organization" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // Organization admin can only update HR to employee or employee to HR
    if (session.user.role === 'admin' && !session.user.isSuperAdmin) {
      if (
        (targetUser.role === 'admin') || 
        (data.role === 'admin' || data.role === 'superadmin')
      ) {
        return new NextResponse(JSON.stringify({ error: "Cannot change to or from admin role" }), {
          status: 403,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    
    // Update the user's role
    const updatedUser = await updateUserRole({
      userId,
      role: data.role,
      organizationId
    });
    
    // Don't return sensitive information
    const { password, ...userWithoutPassword } = updatedUser;
    
    return NextResponse.json(userWithoutPassword);
    
  } catch (error) {
    console.error("Error updating user:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to update user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
} 