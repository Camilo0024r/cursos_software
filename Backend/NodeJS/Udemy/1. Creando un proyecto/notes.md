# Conceptos
## Puertos
- Imagina que un puerto es como una entrada en una casa. En una casa, tienes diferentes entradas, como la puerta principal, la puerta trasera y quizás una entrada lateral. Cada una de estas entradas te lleva a un lugar diferente dentro de la casa.

- En el mundo de la tecnología y las computadoras, un puerto es similar a estas entradas de una casa, pero en lugar de casas, se utilizan para conectar diferentes programas o servicios en una computadora. Cada programa o servicio que necesita comunicarse a través de la red utiliza un puerto específico como su entrada.

- Por ejemplo, el correo electrónico puede utilizar el puerto 25, mientras que un sitio web utiliza el puerto 80 para mostrar páginas web. Cuando envías un correo electrónico o visitas un sitio web, estás utilizando esos puertos específicos para acceder a esos servicios.


# Estructura del package.json
- **Linea 17 carpeta (package.json**):  Las dependencias de desarrollo que encontrarás no van a instalarse al llegar al proyecto a producción, ya que tienen un solo uso y es ayudarnos solo al momento de desarrollo de un aplicación.

- **Linea 6 carpeta (package.json**): En los scripts tienes que entender que la funcionalidad de ellos es interactuar con las carpetas del proyecto.

- **Linea 7 carpeta (package.json**): Para mandar a ejecutar un script, npm run start, usando run porque es la forma de llamar a un script.

- **Linea 19 carpeta (package.json**): Importamos una dependencia para que al hacer cambios se reinicie el servidor y nos muestre el cambios sin necesidad de estar cargandolo.

- **Linea 8 carpeta (package.json**): Creamos un script diferente y le colocamos nodemon el tipo de ejecutable y el archivo a arrancar ósea el index.js.

# A tener en cuenta
- **Comas**: Ten cuidado con las comas, ya que JSON es muy estricto con esa sintaxis.

