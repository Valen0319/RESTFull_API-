import { pool } from '../config/db.js';

export const getReview = async() => {

    try {
        let sentence = 'SELECT * FROM resenia';
        const [rows] = await pool.query(sentence);
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
}