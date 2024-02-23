import { Router } from "express";
import { createTarefaLoteController } from "../modules/CreateTarefaLote";
import { getUsuarioResponsavelController } from "../modules/GetUsuarioResponsavelTarefa";
import { getEspecieTarefaController } from "../modules/GetEspecieTarefa";
import { getSetorResponsavelTarefaController } from "../modules/GetSetorResponsavelTarefa";

//const sessao = request.session();

export const routerInsertSapiensForPeDePano = Router();

/**
 * @swagger
 * /samir/getInformationFromSapienForSamir:
 *   post:
 *     summary: get Information From Sapien For Samir
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


routerInsertSapiensForPeDePano.post("/insertTarefasLote", async (req, res) => {
    return createTarefaLoteController.handle(req, res);
})

routerInsertSapiensForPeDePano.post("/getUsuarioResponsavel", async (req, res) => {
    return getUsuarioResponsavelController.handle(req, res);
})

routerInsertSapiensForPeDePano.post("/getEspecieTarefa", async (req, res) => {
    return getEspecieTarefaController.handle(req, res);
});

routerInsertSapiensForPeDePano.post("/getSetorResponsavelTarefa", async (req, res) => {
    return getSetorResponsavelTarefaController.handle(req, res);
});

