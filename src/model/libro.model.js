import { pool } from '../config/db.js';

export const getBook = async() => {

    try {
        let sentence = 'SELECT * FROM libro';
        const [rows] = await pool.query(sentence);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}