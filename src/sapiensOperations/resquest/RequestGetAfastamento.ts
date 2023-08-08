export class RequestGetAfastamento {
    async execute(colaborador_id:string): Promise<string> {
        const getAfastamento = `{
            "action": "SapiensMain_Afastamento",
            "method": "getAfastamento",
            "data": [
              {
                "fetch": [
                  "modalidadeAfastamento"
                ],
                "page": 1,
                "start": 0,
                "limit": 25,
                "filter": [
                  {
                    "property": "colaborador.id",
                    "value": "eq:${colaborador_id}"
                  }
                ]
              }
            ],
            "type": "rpc",
            "tid": 4
          }`;
        
        return getAfastamento;
    }
}