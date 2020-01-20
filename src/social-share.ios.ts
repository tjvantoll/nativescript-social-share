import { ios } from "tns-core-modules/utils/utils";
import { Frame } from "tns-core-modules/ui";

function share(thingsToShare) {
  const activityController = UIActivityViewController.alloc()
      .initWithActivityItemsApplicationActivities(thingsToShare, null);

  const presentViewController = activityController.popoverPresentationController;
  if (presentViewController) {
    const page = Frame.topmost().currentPage;
    if (page && page.ios.navigationItem.rightBarButtonItems &&
      page.ios.navigationItem.rightBarButtonItems.count > 0) {
      presentViewController.barButtonItem = page.ios.navigationItem.rightBarButtonItems[0];
    } else {
      presentViewController.sourceView = page.ios.view;
    }
  }

  const app = UIApplication.sharedApplication;
  const window = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows[0]);
  const rootController = window.rootViewController;

  (!rootController.presentedViewController ? rootController : ios.getVisibleViewController(rootController)) 
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
