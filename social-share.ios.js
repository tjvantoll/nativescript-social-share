var frameModule = require("ui/frame");

function share(thingToShare, index) {
	var activityController = UIActivityViewController.alloc()
		.initWithActivityItemsApplicationActivities([thingToShare], null);
	var presentViewController = activityController.popoverPresentationController;
	if (presentViewController) {
		var page = frameModule.topmost().currentPage;
		if (page && page.ios.navigationItem.rightBarButtonItems &&
			page.ios.navigationItem.rightBarButtonItems.count > 0) {
			presentViewController.barButtonItem = page.ios.navigationItem.rightBarButtonItems[0];
		} else {
			presentViewController.sourceView = page.ios.view;
		}
	}
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