
import React from "react";
import Navbar from "@/components/Navbar";
import MainSidebar from "@/components/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  isMobile: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  sidebarOpen, 
  isMobile 
}) => {
  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      <div className={`${sidebarOpen ? 'block' : 'hidden md:block'}`}>
        <MainSidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
