function share(thingToShare) {
	var activityController = UIActivityViewController.alloc()
		.initWithActivityItemsApplicationActivities([thingToShare], null);
	UIApplication.sharedApplication().keyWindow.rootViewController
		.presentViewControllerAnimatedCompletion(activityController, true, null);
}

module.exports = {
	shareImage: function(image) {
		share(image);
	},
	shareText: function(text) {
		share(text);
	}
};
