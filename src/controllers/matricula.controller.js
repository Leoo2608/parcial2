import { pool } from '../database'

export const readAllMats = async(req, res)=>{
    try {
        const response = await pool.query('select * from matricula');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}
export const readMat = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from producto where idmatricula = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const delMat= async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from matricula where idmatricula = $1', [id]);
        return res.status(200).json(
            `Matricula ${ id } eliminado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const updateMat = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ fecha, ciclo, idusuario, idescuela, idalumno} = req.body;
        await pool.query('update matricula set fecha = $1, ciclo = $2, idusuario = $3, idescuela = $4, idalumno = $5 where idmatricula = $6', [fecha, ciclo, idusuario, idescuela, idalumno, id]);
        return res.status(200).json(
            `Matricula modificada correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createMat= async(req, res)=>{
    try {
        const{ fecha, ciclo, idusuario, idescuela, idalumno} = req.body;
        await pool.query('insert into matricula(fecha, ciclo, idusuario, idescuela, idalumno) values($1, $2, $3, $4, $5)', [fecha, ciclo, idusuario, idescuela, idalumno]);
        return res.status(200).json(
            `La Matricula se ha agregado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

