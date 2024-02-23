import { GetUsuarioResponsavelTarefaDTO } from "../../DTO/GetUsuarioResponsavelTarefaDTO ";
import { RequestSapiens } from "../../pytonRequest/requestSapiens";
import { RequestGetUsuarioResponsavelTarefa } from "../../sapiensOperations/resquest/RequestGetUsuarioResponsavelTarefa";
import { getUsuarioUseCase } from "../GetUsuario";
import { loginUseCase } from "../LoginUsuario";

export class GetUsuarioResponsavelTarefaUseCase {
    constructor(private requestGetUsuarioResponsavel:RequestGetUsuarioResponsavelTarefa, private requestGetAfastamento){};
    async execute(data: GetUsuarioResponsavelTarefaDTO): Promise<any> {

        let response;

        const getUsuarioResponsavel = await this.requestGetUsuarioResponsavel.execute(data.query, data.setorResponsavel);

        const cookie:string = await loginUseCase.execute(data.login);
        
        const usuarioResponsavel = (await RequestSapiens(cookie, getUsuarioResponsavel));

        // const usuario = await getUsuarioUseCase.execute(cookie);

        // const id_colaborador = usuario[0].colaborador.id;

        // const afastamento_usuario = await this.requestGetAfastamento.execute(id_colaborador);

        response = usuarioResponsavel[0];
        
        return response;
    }
}