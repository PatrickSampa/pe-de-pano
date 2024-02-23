import { Request, Response } from "express";
import { CreateAssuntoUseCase } from "./CreateAssuntoUseCase";

export class CreateAssuntoController {
    constructor(private CreateAssuntoUseCase: CreateAssuntoUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { cookie,
            pasta_id,
            assuntoAdministrativo_id} = request.body;
        try {
            const result = await this.CreateAssuntoUseCase.execute({
                cookie,
                pasta_id,
                assuntoAdministrativo_id
            });
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}