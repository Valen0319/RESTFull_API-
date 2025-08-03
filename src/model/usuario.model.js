import { pool } from '../config/db.js';

export const getUser = async() => {

    try {
        let sentence = 'SELECT * FROM usuario';
        const [rows] = await pool.query(sentence);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}