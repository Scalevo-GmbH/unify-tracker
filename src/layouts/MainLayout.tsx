
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
    <div className="app-container">
      <div className={`sidebar-container ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
        <MainSidebar className="hidden md:block" />
      </div>
      <div className="content-area">
        <div className="top-nav">
          <Navbar />
        </div>
        <div className={`content-area-inner ${!sidebarOpen && !isMobile ? 'border-top-left-radius-0' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
