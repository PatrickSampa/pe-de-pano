import { Request, Response } from "express";
import { InsertTarefasUseCase } from "./InsertTarefasUseCase";
import { InsertTarefasDTO } from "../../DTO/InsertTarefasDTO";

export class InsertTarefasController {
    constructor(private insertTarefasUseCase: InsertTarefasUseCase,) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data: InsertTarefasDTO = request.body;
        try {
            const result = await this.insertTarefasUseCase.execute(data);
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}