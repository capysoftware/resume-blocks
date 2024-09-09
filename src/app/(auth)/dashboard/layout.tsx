import Link from "next/link";
import {
  BriefcaseIcon,
  FilesIcon,
  GraduationCapIcon,
  Menu,
  User2Icon,
  WrenchIcon,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/logo";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Logo href="/" />
          </div>
          <div className="flex-1">
            <Navbar />
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <MobileNavbar />
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <main className="p-6 max-w-screen-xl mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <NavbarItem href="/dashboard/resume" icon={FilesIcon}>
        Resumes
      </NavbarItem>
      <NavbarItem href="/dashboard/personal-info" icon={User2Icon}>
        Personal Info
      </NavbarItem>
      <NavbarItem href="/dashboard/work-experience" icon={BriefcaseIcon}>
        Work Experience
      </NavbarItem>
      <NavbarItem href="/dashboard/education" icon={GraduationCapIcon}>
        Education
      </NavbarItem>
      <NavbarItem href="/dashboard/skills" icon={WrenchIcon}>
        Skills
      </NavbarItem>
    </nav>
  );
}

function MobileNavbar() {
  return (
    <nav className="grid gap-2 text-lg font-medium">
      <NavbarItem href="/dashboard/resume" icon={FilesIcon}>
        Resumes
      </NavbarItem>
      <NavbarItem href="/dashboard/personal-info" icon={User2Icon}>
        Personal Info
      </NavbarItem>
      <NavbarItem href="/dashboard/work-experience" icon={BriefcaseIcon}>
        Work Experience
      </NavbarItem>
      <NavbarItem href="/dashboard/education" icon={GraduationCapIcon}>
        Education
      </NavbarItem>
      <NavbarItem href="/dashboard/skills" icon={WrenchIcon}>
        Skills
      </NavbarItem>
    </nav>
  );
}

function NavbarItem({
  href,
  icon: Icon,
  children,
  className,
}: {
  href: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
        className
      )}
    >
      <Icon className="size-5" />
      {children}
    </Link>
  );
}
