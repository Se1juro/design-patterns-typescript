import { Subscriber } from "./subscriber.interface";

export interface Publisher {
  subscribe(subscriber: Subscriber);
  unsubscribe(subscriber: Subscriber);
  notify();
}
