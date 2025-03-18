
export type NotificationType = 'info' | 'alert' | 'message' | 'success';

export interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  type: NotificationType;
  read: boolean;
}
