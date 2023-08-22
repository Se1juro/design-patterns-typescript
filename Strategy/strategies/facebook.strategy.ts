import { NotificationStrategy } from "../sendNotification.interface";

export class FacebookStrategy implements NotificationStrategy {
  sendNotification(message: string): string {
    return message;
  }
}
