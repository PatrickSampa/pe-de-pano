import { CreateTarefaDTO } from "../../DTO/CreateTarefaDTO";

export class RequestCreateTarefa {
    async execute(data: CreateTarefaDTO): Promise<string> {
        const createAssunto = `{
          "action": "SapiensAdministrativo_Tarefa",
          "method": "createTarefa",
          "data": [
            {
              "observacao": "",
              "postIt": "${data.etiqueta}",
              "urgente": false,
              "dataHoraInicioPrazo": "${data.prazoInicio}",
              "criadoEm": null,
              "apagadoEm": null,
              "atualizadoEm": null,
              "dataHoraFinalPrazo": "${data.prazoFim}",
              "dataHoraConclusaoPrazo": null,
              "pasta_id": ${data.pastaId},
              "especieTarefa_id": ${data.especieTarefa},
              "usuarioResponsavel_id": null,
              "setorResponsavel_id": ${data.setorResponsavel},
              "setorOrigem_id": ${data.setorOrigem},
              "documento_id": "",
              "acompanhar": false,
              "tramitar": true,
              "arquivar": "",
              "usuarioConclusaoPrazo_id": "",
              "criadoPor_id": "",
              "atualizadoPor_id": "",
              "acompanhada": false,
              "comunicacaoJudicial_id": "",
              "movimentoNacional_id": "",
              "modalidadeRepercussao_id": "",
              "replicar": false,
              "migrarEtiqueta": false,
              "redistribuida": false,
              "distribuicaoAutomatica": true,
              "idFormatado": ""
            }
          ],
          "type": "rpc",
          "tid": 28
        }`
        
        return createAssunto;
    }
}