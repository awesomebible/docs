Verse: Öffentliche API
===================================

Um die API zu benutzen, brauchst du erst einen API-Schlüssel. Diesen kannst du ganz einfach bei uns `hier <https://awesomebible.de/kontakt/>`_ anfragen.

Die Anfragen an die API sollten immer GET-Requests sein. Folgende Parameter sind möglich:

+------------------------+------------+
| Parameter   | Beschreibung |
+============+============+
| `key` (erforderlich) | Dein API-Key   |
+------------+------------+
| `location` (erforderlich) | Das Bibelbuch und der Vers für den du ein Bild anzeigen willst. |
+------------+------------+
| `output` | Welche Ausgabe du willst. |
+------------------------+-----------------------+

Standardmäßig gibt die API immer eine JSON Antwort, das kann aber mit dem Output Parameter angepasst werden.