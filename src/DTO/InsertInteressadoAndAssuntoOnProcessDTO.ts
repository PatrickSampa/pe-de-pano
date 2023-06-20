import { I_InteressadoDTO } from "./InteressadoDTO";
import { ILoginDTO } from "./LoginDTO";

export class InsertInteressadoAndAssuntoOnProcessDTO {
    login: ILoginDTO;
    interessado : I_InteressadoDTO;
    assunto: string;
    listaNups:string[];
}