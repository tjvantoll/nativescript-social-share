var application = require("application");
var context = application.android.context;
var numberOfImagesCreated = 0;

/*
var social = require('social-share');
var share = new social('My Title');
share.Text('My Text is Cool');

OR
var share = require('social-share');
share.Text('Hello!!');
share('My name').Image('~/My.jpg');
*/

function share (name) {
	this.name = name;
	this.init();
}

share.prototype.init = function() {
	if(!this.intent)
		this.intent = new android.content.Intent(android.content.Intent.ACTION_SEND);
};

share.prototype.__send = function(intent) {
	context.startActivity(android.content.Intent.createChooser(intent, this.name || 'Share'));
};

share.prototype.Image = function(image, subject) {
	this.init();
	this.intent.setType("image/jpeg");
	numberOfImagesCreated ++;
	var stream = new java.io.ByteArrayOutputStream();
	image.android.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, stream);
	var path = android.provider.MediaStore.Images.Media.insertImage(
		context.getContentResolver(), image.android, "TempFile" + numberOfImagesCreated, null);
	this.intent.putExtra(android.content.Intent.EXTRA_STREAM, android.net.Uri.parse(path));
	if(typeof subject === 'string')
		this.intent.putExtra(android.content.Intent.EXTRA_SUBJECT, subject);
	this.__send(this.intent);
};

share.prototype.Url =
share.prototype.Text = function (subject, text) {
	this.init();
	this.intent.setType("text/plain");
	if(typeof subject === 'string')
		this.intent.putExtra(android.content.Intent.EXTRA_SUBJECT, subject);
	if(typeof text === 'string')
		this.intent.putExtra(android.content.Intent.EXTRA_TEXT, text);
	this.__send(this.intent);
};

module.exports = share;
