Setup der Entwicklungsumgebung
===================================

Um das Laravelprojekt zu starten, brauchst du `Nodejs <https://nodejs.org>`_, `PHP <https://php.net>`_ und `Composer <https://getcomposer.org>`_. (=> Siehe `Laravel Quickstart Guide <https://laravel.com/docs/9.x/installation>`_)

Nachdem du das Git-Repository gecloned hast, kannst du mit folgenden Befehlen die benötigten Abhängigkeiten installieren:::


$ npm install
$ composer install

Anschließend musst du eine `.env`-Datei anlegen. Kopiere die `.env.example`-Datei und passe folgendes an:

.. code-block:: env

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=root
    DB_PASSWORD=


wird zu:

.. code-block:: env

    DB_CONNECTION=sqlite
    DB_DATABASE="pfad/zur/database.sqlite"

Jetzt müssen wir die `database.sqlite` erstellen:

.. code-block:: bash
    :caption: Code Blocks can have captions.

    $ touch database/database.sqlite

Und das Laravel [Database Migration](https://laravel.com/docs/9.x/migrations) Skript ausführen:

.. code-block:: bash

    $ php artisan migrate


Abschließend müssen wir noch die `APP_KEY` Variable in der Env-Datei füllen:

.. code-block:: bash
        
    $ php artisan key:generate


Schlussendlich lässt sich die App starten in dem man in einem Terminal-Fenster `npm run start` und in einem anderen `php artisan serve` ausführt.

Die App ist dann unter `localhost:8000` erreichbar.