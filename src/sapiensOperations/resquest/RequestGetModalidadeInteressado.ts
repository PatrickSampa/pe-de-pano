export class RequestGetModalidadeInteressado {
    async execute(nomeModalidade: string): Promise<string> {
        const createAssunto = `{
          "action": "SapiensAdministrativo_ModalidadeInteressado",
          "method": "getModalidadeInteressado",
          "data": [
            {
              "query": "${nomeModalidade}",
              "page": 1,
              "start": 0,
              "limit": 25
            }
          ],
          "type": "rpc",
          "tid": 109
        }`
        
        return createAssunto;
    }
}