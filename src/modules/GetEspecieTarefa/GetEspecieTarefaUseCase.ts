import { GetEspecieTarefaDTO } from '../../DTO/GetEspecieTarefaDTO';
import { RequestSapiens } from '../../pytonRequest/requestSapiens';
import { ResponseGetEspecieTarefa } from '../../sapiensOperations/response/ResponseGetEspecieTarefa';
import { RequestGetEspecieTarefa } from '../../sapiensOperations/resquest/RequestGetEspecieTarefa';
import { loginUseCase } from '../LoginUsuario';
export class GetEspecieTarefaUseCase {
    constructor(private RequestGetEspecieTarefa:RequestGetEspecieTarefa){};
    async execute(data: GetEspecieTarefaDTO): Promise<any> {

        const cookie:string = await loginUseCase.execute(data.login);

        const playload = await this.RequestGetEspecieTarefa.execute(data.query);
        
        let response = (await RequestSapiens(cookie, playload));

        response = response.map(({id,nome}) => ({id,nome}));

        console.log(response);
    
        return response;
    }
}