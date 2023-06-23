import { ILoginDTO } from "./LoginDTO";

export class CreateTarefaLoteDTO {
    login: ILoginDTO;
    etiqueta?: string;
    especieTarefa:string;
    setorResponsavel:string;
    setorOrigem:string;
    prazoInicio?:string;
    prazoFim?:string;
    listaProcessosJudiciais:string[];
}