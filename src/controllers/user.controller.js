import { pool } from '../database'
const helpers = require('../libs/helpers');

export const readAllUsers = async(req, res)=>{
    try {
        const response = await pool.query('select * from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createUser = async(req, res)=>{
    try {
        const{ username, password, idempleado, idrol} = req.body;
        const password2 = await helpers.encryptPassword(password);
        await pool.query('insert into usuario(username, password, estado, idempleado, idrol) values($1,$2, 1, $3, $4)', [username, password2, idempleado, idrol]);
        return res.status(200).json(
            `Usuario ${ username } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}