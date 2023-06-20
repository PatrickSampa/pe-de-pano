import { CreateInteressadoDTO } from '../../DTO/CreateInteressadoDTO';
import { RequestSapiens } from '../../pytonRequest/requestSapiens';
import { RequestCreateInteressado } from '../../sapiensOperations/resquest/RequestCreateInteressado';
export class CreateInteressadoUseCase {
    constructor(private RequestCreateInteressado:RequestCreateInteressado){};
    async execute(data: CreateInteressadoDTO): Promise<any> {

        const playload = await this.RequestCreateInteressado.execute(data);
        
        const response = (await RequestSapiens(data.cookie, playload))
        
        return response;
    }
}