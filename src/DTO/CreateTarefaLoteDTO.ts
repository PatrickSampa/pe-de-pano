import { ILoginDTO } from "./LoginDTO";

export class CreateTarefaLoteDTO {
    login: ILoginDTO;
    etiqueta?: string;
    especieTarefa:number;
    setorResponsavel:number;
    usuarioResponsavel:number;
    setorOrigem:number;
    prazoInicio?:string;
    prazoFim?:string;
    listaProcessosJudiciais:string[];
}