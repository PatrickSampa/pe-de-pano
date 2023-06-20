import { GetModalidadeInteressadoDTO } from '../../DTO/GetModalidadeInteressado';
import { RequestSapiens } from '../../pytonRequest/requestSapiens';
import { RequestGetModalidadeInteressado } from '../../sapiensOperations/resquest/RequestGetModalidadeInteressado';
export class GetModalidadeInteressadoUseCase {
    constructor(private requestGetModalidadeInteressado:RequestGetModalidadeInteressado){};
    async execute(cookie:string, nomeModalidade:string): Promise<any> {

        const playload = await this.requestGetModalidadeInteressado.execute(nomeModalidade);
        
        const response = (await RequestSapiens(cookie, playload))
        
        return response;
    }
}