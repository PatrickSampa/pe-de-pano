import { GetUsuarioResponsavelTarefaDTO } from "../../DTO/GetUsuarioResponsavelTarefaDTO ";
import { RequestSapiens } from "../../pytonRequest/requestSapiens";
import { RequestGetUsuarioResponsavelTarefa } from "../../sapiensOperations/resquest/RequestGetUsuarioResponsavelTarefa";
import { loginUseCase } from "../LoginUsuario";

export class GetUsuarioResponsavelTarefaUseCase {
    constructor(private RequestGetUsuario:RequestGetUsuarioResponsavelTarefa){};
    async execute(data: GetUsuarioResponsavelTarefaDTO): Promise<any> {

        let response:Array<any> = []

        const getUsuario = await this.RequestGetUsuario.execute(data.query);

        const cookie:string = await loginUseCase.execute(data.login);
        
        const ususario = (await RequestSapiens(cookie, getUsuario));

        response.push(ususario);
        
        return response;
    }
}