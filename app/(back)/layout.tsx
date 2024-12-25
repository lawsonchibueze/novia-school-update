import AppSidebar from "@/components/dashboard/sidebar/app-sidebar";
import SidebarHeaderMenu from "@/components/dashboard/sidebar/sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SidebarHeaderMenu />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
