import { Request, Response } from 'express';
import { GetUsuarioResponsavelTarefaUseCase } from './GetUsuarioResponsavelTarefaUseCase';
import { GetUsuarioResponsavelTarefaDTO } from '../../DTO/GetUsuarioResponsavelTarefaDTO ';

export class GetUsuarioResponsavelTarefaController {
    constructor(private getUsuarioResponsavelTarefaUseCase: GetUsuarioResponsavelTarefaUseCase,) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data:GetUsuarioResponsavelTarefaDTO = request.body;
        try {
            const result = await this.getUsuarioResponsavelTarefaUseCase.execute(data);
            console.log(result);
            response.status(200).json(result);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}