var frameModule = require("ui/frame");
var utilsModule = require("utils/utils");

function share(thingsToShare, index) {
	var activityController = UIActivityViewController.alloc()
		.initWithActivityItemsApplicationActivities(thingsToShare, null);
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

	utilsModule.ios.getter(UIApplication, UIApplication.sharedApplication)
		.keyWindow
		.rootViewController
		.presentViewControllerAnimatedCompletion(activityController, true, null);
}

module.exports = {
	shareImage: function(image) {
		share([image]);
	},
	shareText: function(text) {
		share([text]);
	},
	shareUrl: function(url, text) {
		share([NSURL.URLWithString(url), text]);
	}
};
