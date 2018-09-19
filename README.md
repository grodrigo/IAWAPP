# IAW app

Proyecto que incluye node, loopback y postgresql.

## Installación:

**docker-compose up -d**

Esto va a crear dos containers, uno que corre el loopback y otro que corre el postgres.

Hay algunos usuarios creados, por ejemplo
user: admin pass: 1234

**Para correr algun comando dentro:**
docker exec -it iawapp_web_1 sh
e iniciaríamos una consola en sh en el container.

**Otra posibilidad es hacer**
docker exec -it iawapp_web_1 sh -c command1 command2 command3

----------

Folders:
- src: el codigo.
- config: enviroment variables del docker.
- pgdata: datos de la db persistida

En las variables de docker de docker se encuentran:
*AUTOMIGRATE* para que realice la creación de las tablas (setear a "no" para que deje de "automigrar")
*DEBUG* para setear el nivel de debug que se quiere sea informado al correr el docker-compose.

## TODO:
- crear el modelo de usuarios
- completar los modelos y validarlos
- crear sample data automaticamente

### Notas
- Los modelos built-in (User, Role, etc) siguen estando en memoria, ya que no se pueden crear las tablas automáticamente sino se crean los modelos.

- La db de memoria se va guardando en src/mydata.json **quitar!!** cuando quede definida la db.

- ENV vars de docker AUTOMIGRATE: si esta en yes vuelve a migrar el schema y recrear la db. Si se quiere mantener cambiar a otro valor. Corre automigrate.js ya que está en boot del node.

- Hay dos lugares hoy donde se crean usuarios al levantar el docker:
    Uno es en create-user.js se llama con el Dockerfile-web.
    El otro es por el createusers.js en el boot.
Se dejan como ejemplose de cómo correr scripts.

----
- Son containers alpine, con lo que no se tiene bash sino sh.
- En vez de automigrate, tal vez habría que elegir una estrategia autoupdate, pero al iniciar el container no hay tablas. (repensar estrategias)
- El repo se podría generalizar para que cree un proyecto vacío y vaya pidiendo los datos a no ser que ya esté creado.
- Tip: Hay una GUI interesante para docker llamada Portainer.
