export class CreateTarefaDTO {
    cookie: string;
    etiqueta?: string;
    pastaId: string;
    especieTarefa:string;
    setorResponsavel:string;
    setorOrigem:string;
    prazoInicio:string;
    prazoFim:string;

    constructor(cookie:string, etiqueta:string, pastaId:string, especieTarefa:string, setorResponsavel:string, setorOrigem:string, prazoInicio:string, prazoFim:string){
        this.cookie = cookie;
        this.etiqueta = etiqueta;
        this.pastaId = pastaId;
        this.especieTarefa = especieTarefa;
        this.setorResponsavel = setorResponsavel;
        this.setorOrigem = setorOrigem;
        this.prazoInicio = prazoInicio;
        this.prazoFim = prazoFim;
    }
}