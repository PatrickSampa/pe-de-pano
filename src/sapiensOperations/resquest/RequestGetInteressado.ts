export class RequestGetInteressado {
    async execute(cpf_cnpj: string): Promise<string> {
        const createAssunto = `{
          "action": "SapiensMain_CadastroIdentificador",
          "method": "getCadastroIdentificador",
          "data": [
            {
              "fetch": [
                "pessoa",
                "pessoa.modalidadeQualificacaoPessoa",
                "pessoa.modalidadeGeneroPessoa"
              ],
              "query": "${cpf_cnpj}",
              "page": 1,
              "start": 0,
              "limit": 25
            }
          ],
          "type": "rpc",
          "tid": 53
        }`
        
        return createAssunto;
    }
}