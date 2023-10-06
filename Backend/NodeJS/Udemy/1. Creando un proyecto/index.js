//Importamos express de la carpeta node_modules, obvias razones primero toca importar express

import express from 'express'

//Instaciamos la clase express para que la variable app contenga los métodos y propiedades para trabajar con express.
const app = express()


/**
 * Generar un ruta http://localhost:3000/ con un mensaje de bienvenida.
 * @param {req} - variable para gestionar las solicitudes.
 * @param {res} - variable que gestionar las respuestas.
 * @returns Devolvera un JSON que contiene el mensaje 'Hola Mundo en express'.
 */
app.get('/', function(req,res){
    res.json({msg: 'Hola Mundo en express'})
});


/**
 * Generar un ruta http://localhost:3000/nosotros con un mensaje de información de nosotros.
 * @param {req} - variable para gestionar las solicitudes.
 * @param {res} - variable que gestionar las respuestas.
 * @returns Devolvera un JSON que contiene el mensaje 'Información de nosotros'.
 */
app.get('/nosotros',function(req,res){
    res.json({msg: 'Información de nosotros'})
});


//Creamos una constante para almacenar un numero de puerto.
const port = 3000;

//Utilizamos el método app.listen() para iniciar el servidor. Este método se encarga de escuchar las solicitudes entrantes en el puerto especificado (en este caso, el puerto 3000).
app.listen(port, () => {
   console.log(`El servidor esta funcionando en el puerto ${port}`);
});
