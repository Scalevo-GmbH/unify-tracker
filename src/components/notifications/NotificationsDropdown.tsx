
import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Notification } from "@/types/notifications";
import { useTranslation } from "@/hooks/use-translation";

interface NotificationsDropdownProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onDismiss: (id: string) => void;
}

export const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onDismiss,
}) => {
  const { t } = useTranslation();
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Safe date formatter that handles invalid dates
  const formatDate = (date: Date | string | number) => {
    try {
      const dateObj = date instanceof Date ? date : new Date(date);
      // Check if the date is valid before formatting
      if (isNaN(dateObj.getTime())) {
        return "Invalid date";
      }
      
      // Format the date as a relative time
      const now = new Date();
      const diffMs = now.getTime() - dateObj.getTime();
      const diffMins = Math.floor(diffMs / (60 * 1000));
      const diffHours = Math.floor(diffMs / (60 * 60 * 1000));
      const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));
      
      if (diffMins < 1) return t('justNow');
      if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? t('minuteAgo') : t('minutesAgo')}`;
      if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? t('hourAgo') : t('hoursAgo')}`;
      if (diffDays < 7) return `${diffDays} ${diffDays === 1 ? t('dayAgo') : t('daysAgo')}`;
      
      // For older dates, use the standard date format
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(dateObj);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-destructive"></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[380px]">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>{t('notifications')}</span>
          {unreadCount > 0 && (
            <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5">
              {unreadCount} {t('new')}
            </span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {notifications.length > 0 ? (
          <>
            <ScrollArea className="h-[300px]">
              <DropdownMenuGroup className="p-2">
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className={`flex flex-col items-start gap-1 p-3 ${
                      !notification.read ? "bg-primary/5" : ""
                    }`}
                    onClick={() => onMarkAsRead(notification.id)}
                  >
                    <div className="flex w-full justify-between">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <button
                        className="text-xs text-muted-foreground hover:text-destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDismiss(notification.id);
                        }}
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDate(notification.timestamp)}
                    </p>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </ScrollArea>
            <DropdownMenuSeparator />
            <div className="flex items-center justify-between p-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={onMarkAllAsRead}
              >
                {t('markAllAsRead')}
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                {t('viewAll')}
              </Button>
            </div>
          </>
        ) : (
          <div className="py-6 text-center">
            <p className="text-sm text-muted-foreground">{t('noNotifications')}</p>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
