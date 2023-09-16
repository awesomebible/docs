---
title: Installation
description: awesomeBible Verse Installationsanleitung
---

## Für die Installation brauchst du:

- einen Server auf dem PHP läuft (7.4+),
- das [neueste Verse-Release](https://github.com/awesomeBible/verse/releases/latest).

## Setup
Nach dem herunterladen und entpacken des Releases, müssen noch ein paar Änderungen in der `ìndex.php`-Datei vornehmen:

Die `$baseURL` Variable muss zur Basis URL des Bildverzeichnesses abgeändert werden.
Optional können noch die Dateiendung und der [MIME-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) der Bilder, sowie der Pfad zur Cache-State Datei geändert werden.

```php
# index.php
$baseURL = "https://verse.awesomebible.de/img/";
$fileExtension = ".jpg";
$fileMimeType = "image/jpg";
$cacheRef = "cacheFile.txt";
$cachedImage = "cachedImage.jpg";
```

Die Bilder kann man nach Jahren sortiert [hier](/verse/versbilder/) finden.
