import express from 'express'

const router = express.Router();


/**
 * Función render que se encarga de mostrar una vista, va a la ubicación y renderiza la vista que encuentre.
 * @param {auth/login}  - La ubicación de la vista a mostrar.
 * @param {autenticado:true} - Se le está pasando un valor hacia la vista.
 * @returns -  Devuelve  una vista con una variable llamada autenticado.
 */
router.get('/login', function(req,res){
    res.render('auth/login', {
        autenticado:true
    })
});

router.post('/',function(req,res){
    res.json({msg: 'Respuesta de Tipos Post'})
});

export default router
