import {Request, Response} from 'express';
import Course from "../models/course";
import CopiaSeguridad, { ICopiaSeguridad } from "../models/copias";

export const courses = async (req: Request, res: Response) => {
    const results = await Course.find({});
    return res.status(200).json(results);
}

// obtener todas las copias
export const getCopias = async ( req:Request, res:Response )=>{
    try{
        console.log("estoy dentro");
        const resultados = await CopiaSeguridad.find({});
        if (resultados == null){
            console.log("resultados", resultados)
             return res.status(404).json({message: "Resultados not found"});
        }
        else return res.status(200).json(resultados);

    }catch(err){
        res.status(400).json({
            ok: false,
            error: err
        })
    }
}

// poner una copia
export const newCopiaSeguridad= async (req:Request, res:Response) => {
    try{const resultado: ICopiaSeguridad = new CopiaSeguridad({
                 "fecha": req.body.fecha,
                 "direccion": req.body.direccion,
                 "estado": req.body.estado,
                 "usuario": req.body.usuario,
                 "error": req.body.error
             });
    const savedResultado = await resultado.save();
    res.status(200).json({
        ok: true,
        resultado: savedResultado
    })
    }catch(err){
        res.status(400).json({
            ok: false,
            error: err
        })
    }
}

//modificar una copia

export const updateCopiaSeguridad = async (req:Request, res:Response) => {
    try{
    const fecha: String = req.body.fecha;
    const direccion = req.body.direccion;
    const estado: String = req.body.estado;
    const usuario: String = req.body.usuario;
    const error: String = req.body.error;
    const id: String = req.params.id;

    const copiaUpdate = await CopiaSeguridad.findByIdAndUpdate(req.params.id, {$set: {"fecha": fecha, "direccion": direccion, "estado": estado, "usuario": usuario, "error": error }},{new:true});;
        console .log("data", copiaUpdate)
        res.status(200).json(copiaUpdate);
}catch(err){
    
    res.status(400).json({
        ok: false,
        error: err
    })
}
}

//Escoger una copia de Seguridad

export const getResultadoClinico =  async(req:Request, res:Response)=> {
    try{
    const resultadoClinic = await CopiaSeguridad.findById(req.params.id)
        let status: number = 200;
        if(resultadoClinic==null) status = 404;
        console.log(resultadoClinic);
        return res.status(status).json(resultadoClinic);
 
    }catch(err){
        res.status(400).json({
            ok: false,
            error: err
        })
    }
}

//Eliminar un Resultado Clinico

export const deleteCopiaSeguridad =  async(req:Request, res:Response)=> {
    try{
    const resultadoClinic = await CopiaSeguridad.findByIdAndDelete(req.params.id)
        let status: number = 200;
        if(resultadoClinic==null) status = 404;
        console.log(resultadoClinic);
       
        return res.status(status).json(resultadoClinic);
        
 
    }catch(err){
        console.log("error");
        res.status(400).json({
            ok: false,
            error: err
        })
    }
    }


