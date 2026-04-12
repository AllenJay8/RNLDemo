import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { SidebarProvider } from "../contexts/SidebarContext";
import { HeaderProvider } from "../contexts/HeaderContext";

const LayoutContent = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <AppHeader />
            <AppSidebar />
            <main className="p-4 pt-16 sm:ml-64">
                <Outlet />
            </main>
        </div>
    );
};

const AppLayout = () => {
    return (
        <HeaderProvider>
            <SidebarProvider>
                <LayoutContent />
            </SidebarProvider>
        </HeaderProvider>
    );
};

export default AppLayout;