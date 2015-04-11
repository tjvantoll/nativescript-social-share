var application = require("application");
var context = application.android.context;
var numberOfImagesCreated = 0;

module.exports = {
	shareImage: function(image, subject) {
		numberOfImagesCreated ++;
		subject = subject || "How would you like to share this image?";

		var intent = new android.content.Intent(android.content.Intent.ACTION_SEND);
		intent.setType("image/jpeg");

		var stream = new java.io.ByteArrayOutputStream();
		image.android.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, stream);
		var path = android.provider.MediaStore.Images.Media.insertImage(
			context.getContentResolver(), image.android, "TempFile" + numberOfImagesCreated, null);
		intent.putExtra(android.content.Intent.EXTRA_STREAM,
			android.net.Uri.parse(path));

		var shareIntent = android.content.Intent.createChooser(intent, subject);
		shareIntent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
		context.startActivity(shareIntent);
	}
};
