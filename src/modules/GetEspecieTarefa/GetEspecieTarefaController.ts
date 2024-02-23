import { Request, Response } from "express";
import { GetEspecieTarefaUseCase } from "./GetEspecieTarefaUseCase";
import { GetEspecieTarefaDTO } from "../../DTO/GetEspecieTarefaDTO";


export class GetEspecieTarefaController {
    constructor(private GetEspecieTarefaUseCase: GetEspecieTarefaUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data: GetEspecieTarefaDTO = request.body;
        try {
            const result = await this.GetEspecieTarefaUseCase.execute(data);
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}