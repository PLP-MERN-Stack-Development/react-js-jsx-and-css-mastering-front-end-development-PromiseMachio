import {
    Sidebar,
    SidebarProvider,
    SidebarHeader,
    SidebarFooter,
    SidebarMenuItem,
    SidebarSeparator,
    SidebarMenuButton,
    SidebarMenu,
    SidebarContent,
} from "./ui/sidebar";
import { useIsMobile } from "../hooks/use-mobile";

import { Home, FileText, Settings } from "lucide-react";

export default function NewSidebar(){
    return(
        <SidebarProvider>
            <Sidebar className="bg-grey border-r">
                <SidebarHeader>
                    <h2 className="text-lg font-bold text-red-700 tracking-wide">ALERT!</h2>
                </SidebarHeader>

                <SidebarSeparator className="my-2"/>

                <SidebarContent>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Home className="mr-2 h-4 w-4"/>
                                Dashboard</a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>


                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <FileText className="mr-2 h-4 w-4"/>
                                Reports</a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Settings className="mr-2 h-4 w-4"/>
                                Settings</a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarContent>
                <SidebarSeparator className="my-2"/>

                <SidebarFooter>
                    <p className="text-sm text-white-500 text-center">
                        &copy;{new Date().getFullYear()} MachioAlerts!
                    </p>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    );
}