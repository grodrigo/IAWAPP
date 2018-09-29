# IAW app

Proyecto que incluye node, loopback y postgresql.

## Installación:

**docker-compose up -d**

Esto va a crear tres containers, uno que corre el loopback, otro que corre postgres y otro que corre pgadmin.

Hay algunos usuarios creados, por ejemplo
user: admin pass: 1234, el script se corre por el server/boot de node

**Para correr algun comando dentro:**
docker exec -it iawapp_web_1 bash
e iniciaríamos una consola en el container.

**Otra posibilidad es hacer**
docker exec -it iawapp_web_1 sh -c command1 command2 command3

**pgadmin4** corre en localhost:85 (a no ser que se haya cambiado el puerto en el docker-compose. usuario: admin pass:1234.
*Para configurarlo*: botón derecho en server, create server, elegir un nombre, en la pestaña connection host: db port:5432 y database user y pass segun configuración de parameters.yml del docker. Las tablas se pueden ver en nombreServer/databases/nombreDB/Schemas/public/tables
 
- Tip: Hay una GUI interesante para docker llamada Portainer. 

----------

Folders:
- src: el codigo.
- config: enviroment variables del docker.
- pgdata: datos de la db persistida

----------

En las variables de docker de docker se encuentran:
*AUTOMIGRATE* para que realice la creación de las tablas (setear a "no" para que deje de "automigrar")
Hay un script que automigra la tabla seteada y se corre con $node server/create_table.js
*DEBUG* para setear el nivel de debug que se quiere sea informado al correr el docker-compose.

## TODO:
- Hay dos lugares hoy donde se crean usuarios al levantar el docker:
    Uno es en create-user.js se llama con el Dockerfile-web.
    El otro es por el createusers.js en el boot.
Se dejan como ejemplos de cómo correr scripts.
