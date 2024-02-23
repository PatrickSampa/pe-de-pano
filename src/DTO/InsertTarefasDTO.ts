import { ILoginDTO } from "./LoginDTO";

export class InsertTarefasDTO {
    login: ILoginDTO;
    etiqueta?: string;
    especieTarefa:string;
    setorResponsavel:string;
    prazoInicio:string;
    prazoFim:string;
    listaNups:string[];
}