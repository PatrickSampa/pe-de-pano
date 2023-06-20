export async function contestacaoIsInvalid(paginaContestacao: string): Promise<[string, boolean]>{

    if(paginaContestacao.includes("TIPO 1")){
        return ["CONTESTAÇÃO TIPO 1 - ENCERRAR TAREFA", true];
    }

    if(!paginaContestacao.includes("TIPO")){
        return ["TIPOLOGIA NÃO IDENTIFICADA - ANALISAR CONTESTAÇÃO", true];
    }

    return ["", false];

}