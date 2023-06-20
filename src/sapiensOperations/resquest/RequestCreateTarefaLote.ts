export class RequestCreateTarefa {
    async execute(arrayProcessos: []): Promise<string> {
        const createTarefaLote = `{
          "action": "SapiensAdministrativo_Tarefa",
          "method": "createTarefa",
          "data": [
            ${arrayProcessos}
          ],
          "type": "rpc",
          "tid": 87
        }`
        
        return createTarefaLote;
    }
}