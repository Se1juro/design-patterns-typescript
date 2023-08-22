import { NotificationStrategy } from "./sendNotification.interface";

export class NotificationContext {
  private strategy: NotificationStrategy;
  constructor(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  sendNotification(message: string) {
    return this.strategy.sendNotification(message);
  }
}
