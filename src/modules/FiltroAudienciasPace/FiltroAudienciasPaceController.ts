import { Request, Response } from "express";
import { FiltroAudienciasPaceUseCase } from "./FiltroAudienciasPaceUseCase";
import { IGetInformationsFromSapiensDTO } from "../../DTO/GetInformationsFromSapiensDTO";

export class FiltroAudienciasPaceController {
    constructor(private getInformationsForPaceUseCase: FiltroAudienciasPaceUseCase,) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data: IGetInformationsFromSapiensDTO = request.body;
        try {
            const result = await this.getInformationsForPaceUseCase.execute(data);
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}