import { IGetTarefaDTO } from "../../DTO/GetTarefaDTO";
import { RequestSapiens } from "../../pytonRequest/requestSapiens";
import { ResponseGetTarefa } from "../../sapiensOperations/response/ResponseGetTarefa";
import { RequestGetTarefa } from "../../sapiensOperations/resquest/RequestGetTarefa";

export class GetTarefaUseCase {
    constructor(private RequestGetTarefa:RequestGetTarefa){};
    async execute(data: IGetTarefaDTO): Promise<Array<any>> {

        const getTarefa = await this.RequestGetTarefa.execute(data.usuario_id, data.etiqueta, data.processoJudicial ,data.qunatidadeDeProcesso);
        
        const response = (await RequestSapiens(data.cookie, getTarefa));
        
        return response;
    }
}