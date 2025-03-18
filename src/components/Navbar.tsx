
import React, { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NotificationsDropdown } from "@/components/notifications/NotificationsDropdown";
import { useNotifications } from "@/hooks/use-notifications";
import { Toaster } from "@/components/ui/toaster";

export const Navbar: React.FC = () => {
  const { 
    notifications, 
    markAsRead, 
    markAllAsRead, 
    dismissNotification 
  } = useNotifications();

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100">
        <div className="container px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl ml-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Insert command"
                className="pl-9 h-10 text-sm bg-[#F9FAFB] border-0"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                ⌘K
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <NotificationsDropdown 
              notifications={notifications}
              onMarkAsRead={markAsRead}
              onMarkAllAsRead={markAllAsRead}
              onDismiss={dismissNotification}
            />
            
            {/* User Avatar */}
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#896BFF] to-[#5F3FFF] flex items-center justify-center text-white">
              <span className="text-sm font-medium">P</span>
            </div>
          </div>
        </div>
      </header>
      <Toaster />
    </>
  );
};

export default Navbar;
