export class RequestGetPastaProcessoJudicial {
    async execute(numeroProcessoJudicial: string): Promise<string> {
        const getTarefa = `{
            "action":"SapiensAdministrativo_Pasta",
            "method":"getPasta",
            "data":[
               {
                  "fetch":[
                    "setor",
                    "setor.unidade",
                    "processoJudicial"
                  ],
                  "queryProcessoJudicial": 1,
                  "limit":10,
                  "query":" ${numeroProcessoJudicial} ",
                  "page":1,
                  "start":0
               }
            ],
            "type":"rpc",
            "tid":3
         }`
        
        return getTarefa;
    }
}