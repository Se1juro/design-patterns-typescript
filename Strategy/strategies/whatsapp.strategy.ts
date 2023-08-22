import { NotificationStrategy } from "../sendNotification.interface";

export class WhatsappStrategy implements NotificationStrategy {
  sendNotification(message: string): string {
    return message;
  }
}
