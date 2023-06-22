export class TarefaDTO{
    observacao: string;
    postIt: string;
    urgente: boolean;
    dataHoraInicioPrazo: string;
    criadoEm: null;
    apagadoEm: null;
    atualizadoEm: null;
    dataHoraFinalPrazo: string;
    dataHoraConclusaoPrazo: string;
    pasta_id: string;
    especieTarefa_id: string;
    usuarioResponsavel_id: null;
    setorResponsavel_id: string;
    setorOrigem_id: string;
    documento_id: string;
    acompanhar: boolean;
    tramitar: boolean;
    arquivar: null;
    usuarioConclusaoPrazo_id: null;
    criadoPor_id: null;
    atualizadoPor_id: null;
    acompanhada: boolean;
    comunicacaoJudicial_id: null;
    movimentoNacional_id: null;
    modalidadeRepercussao_id: null;
    replicar: boolean;
    migrarEtiqueta: boolean;
    redistribuida: boolean;
    distribuicaoAutomatica: boolean;
    idFormatado: string;

    constructor(){
        
    }

}