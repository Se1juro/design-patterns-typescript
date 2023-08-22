import { Publisher } from "./publisher.interface";
import { Subscriber } from "./subscriber.interface";
import { YoutubeChannel } from "./youtubeChannel.class";

export class UserSubscribe implements Subscriber {
  private publisher: YoutubeChannel | null = null;

  constructor(publisher: YoutubeChannel) {
    this.publisher = publisher;
  }
  update() {
    console.log("New videos has been uploaded");
    console.log(this.publisher?.getLastVideo());
  }
}
