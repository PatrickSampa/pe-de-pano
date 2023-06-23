export class TarefaDTO{
    observacao: string = "";
    postIt: string;
    urgente: boolean = false;
    dataHoraInicioPrazo: string;
    criadoEm: null = null;
    apagadoEm: null = null;
    atualizadoEm: null = null;
    dataHoraFinalPrazo: string;
    dataHoraConclusaoPrazo: string = null;
    pasta_id: string;
    especieTarefa_id: string;
    usuarioResponsavel_id: null = null;
    setorResponsavel_id: string;
    setorOrigem_id: string;
    documento_id: string = "";
    acompanhar: boolean = false;
    tramitar: boolean = true;
    arquivar: string = "";
    usuarioConclusaoPrazo_id: string = "";
    criadoPor_id: string = "";
    atualizadoPor_id: string = "";
    acompanhada: boolean = false;
    comunicacaoJudicial_id: string = "";
    movimentoNacional_id: string = "";
    modalidadeRepercussao_id: string;
    replicar: boolean = false;
    migrarEtiqueta: boolean = false;
    redistribuida: boolean = false;
    distribuicaoAutomatica: boolean = true;
    idFormatado: string = "";

    constructor(
        postIt: string,
        dataHoraInicioPrazo: string,
        dataHoraFinalPrazo: string,
        pasta_id: string,
        especieTarefa_id: string,
        setorOrigem_id: string,
      ) {
        this.postIt = postIt;
        this.dataHoraInicioPrazo = dataHoraInicioPrazo;
        this.dataHoraFinalPrazo = dataHoraFinalPrazo;
        this.pasta_id = pasta_id;
        this.especieTarefa_id = especieTarefa_id;
        this.setorOrigem_id = setorOrigem_id;
      }

}