import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()

/**
 * Esta línea le dice a Express que debe usar Pug como el motor de plantillas para renderizar las vistas .
 * @param {view engine} param1 - Una cadena de texto.
 * @param {pug} param2 - Un número.
 * @returns no retorna nada explícitamente. En su lugar, se utiliza para configurar valores específicos en la aplicación Express, lo que afecta su comportamiento..
 */
app.set('view engine','pug')


/**
 * Las vistas se encontrarán en la carpeta './views'. Cuando renderices una vista en tu aplicación, Express buscará los archivos de plantillas Pug en esta ubicación.
 * @param {views} param1 - Es una clave que se utiliza para especificar la configuración relacionada con las vistas.
 * @param {./views} param2 - Este es el valor que se asigna a la clave 'views'. Indica la ruta (path) relativa desde la ubicación del archivo JavaScript donde se encuentra este código (app.js o similar) hasta la carpeta donde se encuentran tus archivos de plantillas Pug. 
 * @returns no retorna nada explícitamente. En su lugar, se utiliza para configurar valores específicos en la aplicación Express, lo que afecta su comportamiento..
 */
app.set('views', './views')


app.use('/auth', usuarioRoutes);

const port = 3000;

app.listen(port, () => {
   console.log(`El servidor esta funcionando en el puerto ${port}`);
});

