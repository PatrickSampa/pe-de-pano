import { Request, Response } from "express";
import { GetInformationsForPaceUseCase } from "./GetInformationsForPaceUseCase";
import { ILoginDTO } from "../../DTO/LoginDTO";

export class GetInformationsForPaceController {
    constructor(private getInformationsForPaceUseCase: GetInformationsForPaceUseCase,) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data: ILoginDTO = request.body;
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