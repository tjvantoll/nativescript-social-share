var application = require('application');
var numberOfImagesCreated = 0;

/*
var social = require('social-share');
var share = new social('My Title');
share.Text('My Text is Cool');
share.Image('~/My.jpg');

OR

var share = require('social-share');
share.Text('Hello!!');
share('My name').Image('~/My.jpg');
*/

function sends (intent, name) {
	application.android.context.startActivity(android.content.Intent.createChooser(intent, name || 'Share'));
}

function share (name) {
	this.name = name;
}

share.prototype.init = function() {
	this.intent = new android.content.Intent(android.content.Intent.ACTION_SEND);
};

share.prototype.Image = function(image, subject) {
	this.init();
	this.intent.setType('image/jpeg');
	numberOfImagesCreated++;
	var stream = new java.io.ByteArrayOutputStream();
	image.android.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, stream);
	var path = android.provider.MediaStore.Images.Media.insertImage(
		context.getContentResolver(), image.android, 'TempFile' + numberOfImagesCreated, null);
	this.intent.putExtra(android.content.Intent.EXTRA_STREAM, android.net.Uri.parse(path));
	if(typeof subject === 'string')
		this.intent.putExtra(android.content.Intent.EXTRA_SUBJECT, subject);
	sends(this.intent, this.name);
};

share.prototype.Url =
share.prototype.Text = function (subject, text) {
	this.init();
	this.intent.setType('text/plain');
	if(typeof subject === 'string')
		this.intent.putExtra(android.content.Intent.EXTRA_SUBJECT, subject);
	if(typeof text === 'string')
		this.intent.putExtra(android.content.Intent.EXTRA_TEXT, text);

	sends(this.intent, this.name);
};

module.exports = share;
