Verse.js Setup
===================================
Füge das Verse.js Skript am Ende des Dokuments ein.
Dazu solltest du ein Script-Tag mit einem `Defer Attribut <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer>`_ benutzen.

Wir hosten *verse.js* auf einem CDN, damit man es einfach einbinden kann.

Die Quelle des Skript-Tags sollte auf `https://verse.cdn.awesomebible.de/browser.js` zeigen.

Da wo das Versbild erscheinen soll, füge ein Image-Tag mit der Klasse „awb-verse“ ein.

.. code-block:: html
    <img class="awb-verse"></img>

Das Endergebnis sieht dann so, oder so ähnlich aus:

.. image:: _static/images/versejs-example.png