---
title: Installation
description: awesomeBible Verse Install Guide
---

## For the installation you need:

- a server running PHP (7.4+),
- the [latest verse release](https://github.com/awesomeBible/verse/releases/latest).

## Setup
After downloading and unpacking the release, you need to make some changes in the `ìndex.php` file:

The `$baseURL` variable must be changed to the base URL of the image directory.
Optionally the file extension and the [MIME-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) of the images, as well as the path to the cache state file can be changed.

``php
# index.php
$baseURL = "https://verse.awesomebible.de/img/";
$fileExtension = ".jpg";
$fileMimeType = "image/jpg";
$cacheRef = "cacheFile.txt";
$cachedImage = "cachedImage.jpg";
```

The images can be found sorted by year [here](/verse/versbilder/).