var socialShare = require("nativescript-social-share");
var imageSource = require("image-source");

exports.shareImage = function() {
	var image = imageSource.fromFile("~/images/nativescript.jpg");
	socialShare.shareImage(image);
};
exports.shareText = function() {
	socialShare.shareText("I love NativeScript!");
};
exports.shareUrl = function() {
	socialShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
};
