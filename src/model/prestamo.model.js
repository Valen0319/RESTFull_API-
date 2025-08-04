import { pool } from '../config/db.js';

export const getLoan = async() => {

    try {
        let sentence = 'SELECT * FROM prestamo';
        const [rows] = await pool.query(sentence);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}