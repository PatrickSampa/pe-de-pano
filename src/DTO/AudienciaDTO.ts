export class AudienciaDTO { 
    dataHora: string;
    sala: string;
    processo: string;
    interessados: string[];
    vara: string;

    constructor(dataHora: string, sala: string, processo: string, interessados: string[], vara: string) {
        this.dataHora = dataHora;
        this.sala = sala;
        this.processo = processo;
        this.interessados = interessados;
        this.vara = vara;
    }
}