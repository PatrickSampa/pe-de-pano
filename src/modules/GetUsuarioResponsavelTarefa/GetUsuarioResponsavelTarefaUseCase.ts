import { GetUsuarioResponsavelTarefaDTO } from "../../DTO/GetUsuarioResponsavelTarefaDTO ";
import { RequestSapiens } from "../../pytonRequest/requestSapiens";
import { RequestGetUsuarioResponsavelTarefa } from "../../sapiensOperations/resquest/RequestGetUsuarioResponsavelTarefa";
import { loginUseCase } from "../LoginUsuario";

export class GetUsuarioResponsavelTarefaUseCase {
    constructor(private requestGetUsuarioResponsavel:RequestGetUsuarioResponsavelTarefa){};
    async execute(data: GetUsuarioResponsavelTarefaDTO): Promise<any> {

        let response;

        const getUsuario = await this.requestGetUsuarioResponsavel.execute(data.query, data.setorResponsavel);

        console.log(getUsuario);

        const cookie:string = await loginUseCase.execute(data.login);
        
        const usuario = (await RequestSapiens(cookie, getUsuario));

        response = usuario[0];
        
        return response;
    }
}