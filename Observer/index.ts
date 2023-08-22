import { UserSubscribe } from "./userSubscribe.class";
import { YoutubeChannel } from "./youtubeChannel.class";

const channel = new YoutubeChannel();

const sub1 = new UserSubscribe(channel);
const sub2 = new UserSubscribe(channel);
const sub3 = new UserSubscribe(channel);

channel.subscribe(sub1);
channel.subscribe(sub2);
channel.subscribe(sub3);
console.log("🚀 ~ file: index.ts:13 ~ channel:", channel.getSubscribers());
channel.unsubscribe(sub1);
console.log("🚀 ~ file: index.ts:15 ~ channel:", channel.getSubscribers());

channel.uploadNewVideo("Testing");
