import { pool } from "../database/db.js";

class MateriaisService {

    async listarTodos() {
        const resultado = await pool.query(
            "SELECT * FROM materiais"
        )
        return resultado.rows;
    }

    async creats(nome, categoria, condicao) {
        const res = await pool.query("INSERT INTO informatica (nome, categoria, condicao) VALUES ($1, $2, $3);", [nome, categoria, condicao]);
        return res.rows[0];
    }
}

export const materiaisService = new MateriaisService()