import { Router } from "express";
import {filtroAudienciasPaceController} from "../modules/FiltroAudienciasPace";
import { insertTarefasController } from "../modules/InsertTarefas";
import { getEspecieTarefaController } from "../modules/GetEspecieTarefa";
import { getSetorResponsavelTarefaController } from "../modules/GetSetorResponsavelTarefa";

//const sessao = request.session();

export const routerFiltroAudienciasPace = Router();

/**
 * @swagger
 * /samir/pace/filtroAudienciasPace:
 *   post:
 *     summary: get Information From Sapiens For Pace
 *     tags: [GetInformationFromSapien]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GetInformationsFromSapiens'
 *     responses:
 *       200:
 *         description: The user was successfully login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InformationsForCalcule'
 *                 
 *       500:
 *         description: Some server error
 *       400:
 *         description: The request error
 */


routerFiltroAudienciasPace.post("/pace/filtroAudienciasPace", async (req, res) => {
    return filtroAudienciasPaceController.handle(req, res);
});


routerFiltroAudienciasPace.post("/insertTarefas", async (req, res) => {
    return insertTarefasController.handle(req, res);
});

routerFiltroAudienciasPace.get("/getEspecieTarefa", async (req, res) => {
    return getEspecieTarefaController.handle(req, res);
});

routerFiltroAudienciasPace.get("/getSetorResponsavelTarefa", async (req, res) => {
    return getSetorResponsavelTarefaController.handle(req, res);
});

