# NativeScript Social Share Plugin

A NativeScript plugin to use the native social sharing widget on Android and iOS. Currently this module supports image and text sharing.

![](screenshots/ios.png)
![](screenshots/android.png)

## Installation

Run the following command from the root of your project:

```
$ tns plugin add nativescript-social-share
```

This command automatically installs the necessary files, as well as stores nativescript-social-share as a dependency in your project's `package.json` file.


## Usage

To use the social share module you must first `require()` it. After you `require()` the module you have access to its APIs.

``` JavaScript
// ------------ JavaScript ------------------
var SocialShare = require("nativescript-social-share");

// ------------- TypeScript ------------------
import * as SocialShare from "nativescript-social-share";
```

## API

### shareImage(ImageSource image, [optional] String subject)

The `shareImage()` method expects an [`ImageSource`](http://docs.nativescript.org/ApiReference/image-source/ImageSource.html) object. The code below loads an image from the app and invokes the share widget with it:

``` JavaScript
// ------------ JavaScript ------------------
var SocialShare = require("nativescript-social-share");
var imageSourceModule = require("image-source");

var image = imageSourceModule.fromFile("~/path/to/myImage.jpg");
SocialShare.shareImage(image);

// ------------- TypeScript ------------------
import * as SocialShare from "nativescript-social-share";
import { ImageSource } from "image-source";

let image = ImageSource.fromFile("~/path/to/myImage.jpg");
SocialShare.shareImage(image);
```

You can optionally provide a second argument to configure the subject on Android:

``` JavaScript
SocialShare.shareImage(image, "How would you like to share this image?");
```

### shareText(String text, [optional] String subject)

The `shareText()` method expects a simple string:

``` js
SocialShare.shareText("I love NativeScript!");
```

Like `shareImage()`, you can optionally pass `shareText()` a second argument to configure the subject on Android:

``` js
SocialShare.shareText("I love NativeScript!", "How would you like to share this text?");
```

### shareUrl(String url, String text, [optional] String subject)

The `shareUrl()` method excepts a url and a string.

``` js
SocialShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript");
```

You can optionally pass `shareUrl()` a second argument to configure the subject on Android:

``` js
SocialShare.shareUrl("https://www.nativescript.org/", "Home of NativeScript", "How would you like to share this url?");
```

## Tutorials

Looking for some extra help getting social sharing working in your mobile application? Check out these resources:

* [Social Media Sharing in a Vanilla NativeScript Application](https://www.thepolyglotdeveloper.com/2016/03/implement-social-media-sharing-nativescript-app/)
* [Social Media Sharing in a NativeScript with Angular Application](https://www.thepolyglotdeveloper.com/2017/02/social-media-sharing-prompts-nativescript-angular-application/)
