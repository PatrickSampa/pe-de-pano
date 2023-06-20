export class RequestGetEspecieTarefa {
    async execute(page:string): Promise<string> {
        const getEspecieTarefa = `{
            "action": "SapiensAdministrativo_EspecieTarefa",
            "method": "getEspecieTarefa",
            "data": [
              {
                "fetch": [
                  "generoTarefa"
                ],
                "query": "",
                "page": ${page},
                "start": 150,
                "limit": 25
              }
            ],
            "type": "rpc",
            "tid": 71
          }`
        
        return getEspecieTarefa;
    }
}