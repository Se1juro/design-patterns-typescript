import { NotificationContext } from "./context";
import { FacebookStrategy } from "./strategies/facebook.strategy";
import { WhatsappStrategy } from "./strategies/whatsapp.strategy";

const whatsappNotification = new WhatsappStrategy();
const facebookNotification = new FacebookStrategy();

const context = new NotificationContext(whatsappNotification);

console.log(context.sendNotification("Send notification via WhatsApp"));

const contextFacebook = new NotificationContext(facebookNotification);
console.log(contextFacebook.sendNotification("Send notification via facebook"));
