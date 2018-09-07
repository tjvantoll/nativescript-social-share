import { shareImage, shareText, shareUrl } from "nativescript-social-share";
import { fromFile } from "tns-core-modules/image-source";

exports.shareImage = function() {
  const image = fromFile("~/images/nativescript.jpg");
  shareImage(image);
};
exports.shareText = function() {
  shareText("I love NativeScript!");
};
exports.shareUrl = function() {
  shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
};
