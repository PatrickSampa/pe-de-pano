export type ResponseGetTarefa = { 
  id: number;
  uuid: string;
  postIt: string;
  dataHoraInicioPrazo: {
    date: string;
  },
  dataHoraFinalPrazo: {
    date: string;
  },
  pasta: {
    id: number;
    uuid: string;
    documentoAvulso: boolean;
    unidadeArquivistica: number;
    tipoProtocolo: number;
    valorEconomico: number;
    novo: boolean;
    protocoloEletronico: boolean;
    semValorEconomico: boolean;
    emTramitacao: number;
    NUP: string;
    visibilidadeRestrita: boolean;
    visibilidadeExterna: boolean;
    visibilidadeDisciplinar: boolean;
    encerrado: boolean;
    dataHoraAbertura: {
      date: string;
    },
    dataHoraTransicao: {
      date: string;
    },
    titulo: string;
    chaveAcesso: string;
    processoJudicial: {
      id: number;
      numero: number;
      fonteDados: string;
      dataHoraAjuizamento: {
        date: string;
      },
      competencia: number;
      codigoLocalidade: string;
      nivelSigilo: number;
      intervencaoMP: boolean;
      AJG: boolean;
      eletronico: boolean;
      tamanhoProcesso: number;
      valorCausa: number;
      orgaoJulgador: {
        id: number;
        nome: string;
        instancia: number;
        codigoLocal: string;
        ativo: boolean;
        tribunal: {
          id: number;
          nome: string;
          sigla: string;
          justica: number;
          codigoNacional: string;
          ativo: boolean;
        },
      },
    },
    interessados: [any];
  }
}