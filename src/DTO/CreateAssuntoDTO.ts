export class CreateAssuntoDTO {
    cookie: string;
    pasta_id: string;
    assuntoAdministrativo_id:string;

    constructor(cookie:string, pasta_id:string, assuntoAdministrativo_id:string){
        this.cookie = cookie;
        this.pasta_id = pasta_id;
        this.assuntoAdministrativo_id = assuntoAdministrativo_id;
    }
}