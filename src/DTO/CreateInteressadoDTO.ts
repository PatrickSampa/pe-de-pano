export class CreateInteressadoDTO {
    cookie: string;
    pasta_id: string;
    modalidade_id:string;
    interessado_id: string;

    constructor(cookie: string, pasta_id: string, modalidade_id: string, interessado_id: string) {
        this.cookie = cookie;
        this.pasta_id = pasta_id;
        this.modalidade_id = modalidade_id;
        this.interessado_id = interessado_id;
    }
}