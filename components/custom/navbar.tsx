import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { auth, signOut } from "@/app/(auth)/auth";

import { History } from "./history";
import { MenuIcon, SlashIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

// Function to determine dashboard path based on user role
const getDashboardPath = (user: any) => {
  if (!user?.id) return "/dashboard";
  
  const role = user.role?.toLowerCase();
  const userId = user.id;
  
  if (role === 'superadmin') {
    return `/super-admin/${userId}`;
  } else if (role === 'admin' || role === 'orgadmin') {
    return `/admin-dashboard/${userId}`;
  } else if (role === 'hr') {
    return `/hr-dashboard/${userId}`;
  } else if (role === 'manager') {
    return `/manager-dashboard/${userId}`;
  } else {
    return `/employee-dashboard/${userId}`;
  }
};

/**
 * Navbar component for application navigation
 * Enhanced for mobile responsiveness
 */
export const Navbar = async () => {
  let session = await auth();
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  
  // Log the pathname for debugging
  console.log("[Navbar] Current pathname:", pathname);
  
  // Explicitly detect login and register pages
  const isAuthPage = pathname === "/login" || 
                     pathname === "/register" || 
                     pathname.startsWith("/login/") || 
                     pathname.startsWith("/register/");
                     
  // Don't show navbar for register page
  if (pathname === "/register" || pathname.startsWith("/register/")) {
    return null;
  }
  
  // Don't show Sign In button on login page when user is not logged in
  const shouldShowSignIn = !isAuthPage && !session?.user;
  
  console.log("[Navbar] Should show sign in:", shouldShowSignIn);
  console.log("[Navbar] Is auth page:", isAuthPage);
  console.log("[Navbar] User session:", session?.user ? "Exists" : "None");

  // Get the correct dashboard path for this user
  const dashboardPath = session?.user ? getDashboardPath(session.user) : "/dashboard";
  
  // Determine where the logo should link to based on the current page
  let logoLinkPath = session?.user ? dashboardPath : "/";
  
  // If on terms or privacy pages, link directly to the register page
  if (pathname === "/terms" || pathname === "/privacy") {
    logoLinkPath = "/register";
    console.log("[Navbar] On terms/privacy page, setting logo link to:", logoLinkPath);
  }

  return (
    <header className="sticky top-0 w-full bg-background border-b z-50 shadow-sm">
      <div className="container mx-auto py-2 sm:py-3 px-3 sm:px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile menu - only visible on small screens */}
          <div className="block sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-1">
                  <MenuIcon size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col gap-4 py-4">
                  <Link href={logoLinkPath} className="flex items-center px-2">
                    <Image
                      src="/images/sanicle_logo.svg"
                      height={28}
                      width={100}
                      alt="Sanicle Logo"
                      className="h-7 w-auto"
                    />
                  </Link>
                  <div className="border-t pt-4">
                    <nav className="flex flex-col gap-2">
                      {session?.user && (
                        <Link
                          href={dashboardPath}
                          className="px-2 py-2 hover:bg-muted rounded-md transition-colors"
                        >
                          My Dashboard
                        </Link>
                      )}
                      <Link
                        href="/chat/new"
                        className="px-2 py-2 hover:bg-muted rounded-md transition-colors"
                      >
                        New Chat
                      </Link>
                      {session?.user && (
                        <form
                          action={async () => {
                            "use server";
                            
                            await signOut({
                              redirectTo: "/login",
                            });
                          }}
                        >
                          <button
                            type="submit"
                            className="w-full text-left px-2 py-2 hover:bg-muted rounded-md transition-colors"
                          >
                            Sign Out
                          </button>
                        </form>
                      )}
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* History button - only visible on larger screens */}
          <div className="hidden sm:block">
            <History user={session?.user} />
          </div>
          
          <div className="flex items-center gap-2">
            <Link href={logoLinkPath} className="flex items-center">
              <Image
                src="/images/sanicle_logo.svg"
                height={24}
                width={90}
                alt="Sanicle Logo"
                className="h-6 sm:h-7 w-auto"
              />
            </Link>
            <div className="text-zinc-500 hidden sm:block">
              <SlashIcon size={16} />
            </div>
            <div className="text-xs sm:text-sm text-primary dark:text-primary truncate w-24 md:w-fit hidden sm:block font-medium">
              FemTech Health Platform
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="py-1 sm:py-1.5 px-1.5 sm:px-2 h-fit font-normal flex items-center gap-1 sm:gap-2"
                  variant="secondary"
                >
                  {session.user.profileImageUrl ? (
                    <Image
                      src={session.user.profileImageUrl}
                      alt="Profile"
                      width={24}
                      height={24}
                      className="rounded-full h-5 w-5 sm:h-6 sm:w-6 object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="bg-primary text-white rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center text-xs font-medium">
                      {session.user.name.charAt(0)}
                    </div>
                  )}
                  <span className="hidden sm:block">{session.user?.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[180px]">
                <DropdownMenuItem>
                  <Link href={dashboardPath} className="w-full">
                    My Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-1 z-50">
                  <form
                    className="w-full"
                    action={async () => {
                      "use server";

                      await signOut({
                        redirectTo: "/login",
                      });
                    }}
                  >
                    <button
                      type="submit"
                      className="w-full text-left px-1 py-0.5 text-accent hover:text-accent/90"
                    >
                      Sign Out
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            shouldShowSignIn && (
              <Button className="py-1 sm:py-1.5 px-3 sm:px-5 h-fit text-sm sm:text-base font-medium text-white bg-primary hover:bg-primary/90 shadow-sm" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
};
