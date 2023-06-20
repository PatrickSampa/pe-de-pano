import { Request, Response } from "express";
import { CreateInteressadoUseCase } from "./CreateInteressadoUseCase";

export class CreateInteressadoController {
    constructor(private CreateInteressadoUseCase: CreateInteressadoUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { cookie,
            pasta_id,
            modalidade_id,
            usuario_id,} = request.body;
        try {
            const result = await this.CreateInteressadoUseCase.execute({
                cookie,
                pasta_id,
                modalidade_id,
                usuario_id,
            });
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}