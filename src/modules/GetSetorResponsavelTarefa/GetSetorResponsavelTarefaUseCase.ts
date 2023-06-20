import { GetSetorResponsavelTarefaDTO } from '../../DTO/GetSetorResponsavelTarefaDTO';
import { RequestSapiens } from '../../pytonRequest/requestSapiens';
import { RequestGetSetorResponsavelTarefa } from '../../sapiensOperations/resquest/RequestGetSetorResponsavelTarefa';
import { getUsuarioUseCase } from '../GetUsuario';
import { loginUseCase } from '../LoginUsuario';
export class GetSetorResponsavelTarefaUseCase {
    constructor(private RequestGetSetorResponsavelTarefa:RequestGetSetorResponsavelTarefa){};
    async execute(data: GetSetorResponsavelTarefaDTO): Promise<any> {

        const cookie:string = await loginUseCase.execute(data.login);

        const usuario = await getUsuarioUseCase.execute(cookie);
        const idSetorUnidadeOrigemUser = usuario[0].colaborador.lotacoes.find(lotacao => lotacao.principal === true)?.setor.unidade.id;

        const playload = await this.RequestGetSetorResponsavelTarefa.execute(data.query, idSetorUnidadeOrigemUser);
        
        let response = (await RequestSapiens(cookie, playload));

        response = response.map(({id,nome}) => ({id,nome}));
    
        return response;
    }
}