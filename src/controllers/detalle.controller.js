import { pool } from '../database'

export const readAllDets= async(req, res)=>{
    try {
        const response = await pool.query('select * from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}
export const readDet = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from detalle where iddetalle = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const delDet= async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from detalle where iddetalle = $1', [id]);
        return res.status(200).json(
            `Detalle eliminado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const updateDet = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ creditos, horas, idcurso, idmatricula} = req.body;
        await pool.query('update detalle set creditos = $1, horas = $2,idcurso = $3, idmatricula = $4  where iddetalle = $5', [creditos, horas, idcurso, idmatricula,id]);
        return res.status(200).json(
            `Detalle modificado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createDet= async(req, res)=>{
    try {
        const{ creditos, horas, idcurso, idmatricula} = req.body;
        await pool.query('insert into detalle(creditos, horas, idcurso, idmatricula) values($1, $2, $3, $4)', [creditos, horas, idcurso, idmatricula]);
        return res.status(200).json(
            `El detalle se ha agregado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

