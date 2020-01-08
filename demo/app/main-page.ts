import { shareImage, shareText, shareUrl } from "nativescript-social-share";
import { fromFile } from "tns-core-modules/image-source";

export const doShareImage = () => {
  console.log("sjer");
  const image = fromFile("~/images/nativescript.jpg");
  shareImage(image);
};

export const doShareText = () => {
  shareText("I love NativeScript!");
};

export const doShareUrl = () => {
  shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
};
