import { CreateTarefaDTO } from '../../DTO/CreateTarefaDTO';
import { RequestSapiens } from '../../pytonRequest/requestSapiens';
import { RequestCreateTarefa } from '../../sapiensOperations/resquest/RequestCreateTarefa';
export class CreateTarefaUseCase {
    constructor(private RequestCreateTarefa:RequestCreateTarefa){};
    async execute(data: CreateTarefaDTO): Promise<any> {

        const playload = await this.RequestCreateTarefa.execute(data);
        
        const response = (await RequestSapiens(data.cookie, playload))

        console.log(response);
        
        return response;
    }
}