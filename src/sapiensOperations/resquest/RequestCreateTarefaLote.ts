import { TarefaDTO } from "../../DTO/TarefaDTO";

export class RequestCreateTarefaLote {
    async execute(teste:string): Promise<string> {

        const createTarefaLote = `{
          "action": "SapiensAdministrativo_Tarefa",
          "method": "createTarefa",
          "data": [
            [
              ${teste}
            ]
          ],
          "type": "rpc",
          "tid": 87
        }`
      
        return createTarefaLote;
    }
}