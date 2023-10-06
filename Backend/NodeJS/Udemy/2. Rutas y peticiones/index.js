import express from 'express'

//Se coloca .js a los archivos a importar porque los creamos nosotros mismos, de ahí la diferencia con express que no lleva .js.
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()

//Get busca la ruta en especifico, pero USE lo que va a hacer es buscar todoas las que tenga un '/', en simples palabras use escanea las rutas que inicien con un '/'.
app.use('/', usuarioRoutes);

const port = 3000;

app.listen(port, () => {
   console.log(`El servidor esta funcionando en el puerto ${port}`);
});

