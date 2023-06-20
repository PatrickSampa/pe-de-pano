import { RequestSapiens } from '../../pytonRequest/requestSapiens';
import { RequestGetInteressado } from '../../sapiensOperations/resquest/RequestGetInteressado';
export class GetInteressadoUseCase {
    constructor(private requestGetInteressado:RequestGetInteressado){};
    async execute(cookie:string, cpfCnpj:string): Promise<any> {

        const playload = await this.requestGetInteressado.execute(cpfCnpj);
        
        const response = (await RequestSapiens(cookie, playload))
        
        return response;
    }
}