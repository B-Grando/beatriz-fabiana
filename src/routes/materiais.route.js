import { Router } from "express";
import { materiaisService } from "../service/materiais.service.js";

export const construcaoRouter = Router()

construcaoRouter.get("/", async (req, res) => {
    const ferramentas = await materiaisService.listarTodos()
    return res.json(ferramentas)
})

construcaoRouter.post("/", async (req, res) => {
    const ferramenta = await materiaisService.creats()
    return res.json(ferramenta)
})

