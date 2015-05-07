var socialShare = require( "./node_modules/nativescript-social-share/social-share" );
var imageSource = require( "image-source" );

exports.shareImage = function() {
	var image = imageSource.fromFile( "~/images/nativescript.jpg" );
	socialShare.shareImage(image);
};
