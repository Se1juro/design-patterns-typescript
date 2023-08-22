import { Publisher } from "./publisher.interface";
import { Subscriber } from "./subscriber.interface";

export class YoutubeChannel implements Publisher {
  private subscribers: Subscriber[] = [];
  private lastVideoTitle: string = "";

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber: Subscriber) {
    // Delete Subscriber
  }

  uploadNewVideo(titleVideo: string) {
    this.lastVideoTitle = titleVideo;
    this.notify();
    console.log(`Video ${titleVideo} uploaded`);
  }

  getLastVideo() {
    return this.lastVideoTitle;
  }

  notify() {
    for (const userSubscriptor of this.subscribers) {
      userSubscriptor.update();
    }
  }
}
