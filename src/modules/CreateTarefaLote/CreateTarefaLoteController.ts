import { Request, Response } from "express";
import { CreateTarefaLoteUseCase } from "./CreateTarefaLoteUseCase";
import { CreateTarefaLoteDTO } from "../../DTO/CreateTarefaLoteDTO";

export class CreateTarefaLoteController {
    constructor(private createTarefaLoteUseCase: CreateTarefaLoteUseCase,) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data: CreateTarefaLoteDTO = request.body;
        try {
            const result = await this.createTarefaLoteUseCase.execute(data);
            console.log(result);
            response.status(200).json(result);
        } catch (error) {
        
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}