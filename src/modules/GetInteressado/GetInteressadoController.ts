import { Request, Response } from "express";
import { GetInteressadoUseCase } from "./GetInteressadoUseCase";

export class GetInteressadoController {
    constructor(private GetInteressadoUseCase: GetInteressadoUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { cookie, cpf_cnpj} = request.body;
        try {
            const result = await this.GetInteressadoUseCase.execute({
                cookie,
                cpf_cnpj,
            });
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}