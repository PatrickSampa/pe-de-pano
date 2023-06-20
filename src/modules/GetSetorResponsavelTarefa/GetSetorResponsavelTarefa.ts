import { Request, Response } from "express";
import { GetSetorResponsavelTarefaUseCase } from "./GetSetorResponsavelTarefaUseCase";
import { GetEspecieTarefaDTO } from "../../DTO/GetEspecieTarefaDTO";


export class GetSetorResponsavelTarefaController {
    constructor(private getSetorResponsavelTarefaUseCase: GetSetorResponsavelTarefaUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data: GetEspecieTarefaDTO = request.body;
        try {
            const result = await this.getSetorResponsavelTarefaUseCase.execute(data);
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}