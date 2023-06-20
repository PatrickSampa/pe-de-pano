import { Request, Response } from "express";
import { InsertInteressadoAndAssuntoOnProcessUseCase } from "./InsertInteressadoAndAssuntoOnProcessUseCase";
import { InsertInteressadoAndAssuntoOnProcessDTO } from "../../DTO/InsertInteressadoAndAssuntoOnProcessDTO";

export class InsertInteressadoAndAssuntoOnProcessController {
    constructor(private insertInteressadoAndAssuntoOnProcessUseCase: InsertInteressadoAndAssuntoOnProcessUseCase,) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data: InsertInteressadoAndAssuntoOnProcessDTO = request.body;
        try {
            const result = await this.insertInteressadoAndAssuntoOnProcessUseCase.execute(data);
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}