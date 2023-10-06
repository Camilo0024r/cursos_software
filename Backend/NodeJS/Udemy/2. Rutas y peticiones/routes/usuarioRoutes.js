import express from 'express'

//Otra forma de acceder a express pero por medio de un método, ósea en la anterior instanciamos con la clase express, y aquí estamos es usando el objeto para llamar a un método.
const router = express.Router();

router.get('/', function(req,res){
    res.json({msg: 'Hola Mundo en express'})
});

router.post('/',function(req,res){
    res.json({msg: 'Respuesta de Tipos Post'})
});

//Export default es una forma de exportar un valor, objeto, función o clase desde un módulo para que pueda ser importado fácilmente en otros módulos.
export default router
