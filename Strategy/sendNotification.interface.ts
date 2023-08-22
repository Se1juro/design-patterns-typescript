export interface NotificationStrategy {
  sendNotification(message: string): string;
}
