import { CreateAssuntoDTO } from '../../DTO/CreateAssuntoDTO';
import { RequestSapiens } from '../../pytonRequest/requestSapiens';
import { RequestCreateAssunto } from '../../sapiensOperations/resquest/RequestCreateAssunto';


export class CreateAssuntoUseCase {
    constructor(private RequestCreateAssunto:RequestCreateAssunto){};
    async execute(data: CreateAssuntoDTO): Promise<any> {

        const playload = await this.RequestCreateAssunto.execute(data);
        
        const response = (await RequestSapiens(data.cookie, playload))
        
        return response;
    }
}