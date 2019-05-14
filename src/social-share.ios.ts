import { topmost } from "tns-core-modules/ui/frame";

function share(thingsToShare) {
  const activityController = UIActivityViewController.alloc()
      .initWithActivityItemsApplicationActivities(thingsToShare, null);

  const presentViewController = activityController.popoverPresentationController;
  if (presentViewController) {
    const page = topmost().currentPage;
    if (page && page.ios.navigationItem.rightBarButtonItems &&
      page.ios.navigationItem.rightBarButtonItems.count > 0) {
      presentViewController.barButtonItem = page.ios.navigationItem.rightBarButtonItems[0];
    } else {
      presentViewController.sourceView = page.ios.view;
    }
  }

  topmost().ios.controller
    .presentViewControllerAnimatedCompletion(activityController, true, null);
}

export function shareImage(image) {
  share([image]);
}

export function shareText(text) {
  share([text]);
}

export function shareUrl(url, text) {
  share([NSURL.URLWithString(url), text]);
}
