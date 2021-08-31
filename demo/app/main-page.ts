import { shareImage, shareText, shareUrl } from "nativescript-social-share";
import { ImageSource } from '@nativescript/core/image-source';

export const doShareImage = () => {
  console.log("sjer");
  const image = ImageSource.fromFileSync("~/images/nativescript.jpg");
  shareImage(image);
};

export const doShareText = () => {
  shareText("I love NativeScript!");
};

export const doShareUrl = () => {
  shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
};
