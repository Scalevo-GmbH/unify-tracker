
import { useState, useCallback } from "react";
import { Notification, NotificationType } from "@/components/notifications/NotificationsDropdown";

// Sample notifications data
const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "New Campaign Results",
    description: "Your Google Ads campaign 'Summer Sale' has achieved 150% ROI in the past week.",
    timestamp: new Date(Date.now() - 25 * 60 * 1000), // 25 minutes ago
    type: "info",
    read: false
  },
  {
    id: "2",
    title: "Budget Alert",
    description: "Your Facebook Ads campaign 'Product Launch' is about to reach its budget limit.",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    type: "alert",
    read: false
  },
  {
    id: "3",
    title: "New Message",
    description: "Support team: We've processed your request for API access. Check your email for details.",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    type: "message",
    read: true
  },
  {
    id: "4",
    title: "Analytics Report",
    description: "Weekly performance report is now available. Click to view insights.",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    type: "info",
    read: true
  }
];

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const addNotification = useCallback((notification: Omit<Notification, "id" | "timestamp" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: String(Date.now()),
      timestamp: new Date(),
      read: false
    };
    
    setNotifications(prev => [newNotification, ...prev]);
  }, []);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  }, []);

  const dismissNotification = useCallback((id: string) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  }, []);

  return {
    notifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    dismissNotification
  };
};
