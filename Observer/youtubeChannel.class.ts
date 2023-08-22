import { Publisher } from "./publisher.interface";
import { Subscriber } from "./subscriber.interface";

export class YoutubeChannel implements Publisher {
  private subscribers: Subscriber[] = [];
  private lastVideoTitle: string = "";

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber: Subscriber) {
    const indexToRemove: number = this.subscribers.indexOf(subscriber);
    this.subscribers.splice(indexToRemove, 1);
  }

  uploadNewVideo(titleVideo: string) {
    this.lastVideoTitle = titleVideo;
    this.notify();
    console.log(`Video ${titleVideo} uploaded`);
  }

  getLastVideo() {
    return this.lastVideoTitle;
  }

  getSubscribers() {
    return this.subscribers;
  }

  notify() {
    for (const userSubscriptor of this.subscribers) {
      userSubscriptor.update();
    }
  }
}
