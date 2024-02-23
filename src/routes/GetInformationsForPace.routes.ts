import { Router } from "express";
import {getInformationsForPaceController} from "../modules/GetInformationFromPace";

//const sessao = request.session();

export const routerGetInformationsForPace = Router();

/**
 * @swagger
 * /samir/getInformationFromSapienForPace:
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


routerGetInformationsForPace.post("/pace/getInformationFromSapienForPace", async (req, res) => {
    return getInformationsForPaceController.handle(req, res);
});
