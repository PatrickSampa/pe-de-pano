export class RequestGetUsuarioResponsavelTarefa {
    async execute(query:string): Promise<string> {
        const getTarefa = `{
            "action": "SapiensMain_Usuario",
            "method": "getUsuario",
            "data": [
              {
                "sessao": false,
                "fetch": [],
                "filter": [
                  {
                    "property": "colaborador.lotacoes.setor",
                    "value": "eq:105120"
                  },
                  {
                    "property": "colaborador.lotacoes.distribuidor",
                    "value": "eq:1"
                  }
                ],
                "afastamentoInicio": "20230705 130400",
                "afastamentoFim": "20230710 200000",
                "query": ${query},
                "page": 1,
                "start": 0,
                "limit": 25
              }
            ],
            "type": "rpc",
            "tid": 15
          }`
        
        return getTarefa;
    }
}