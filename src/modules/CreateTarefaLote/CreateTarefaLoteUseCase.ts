import { loginUseCase } from "../LoginUsuario";
import { getUsuarioUseCase } from "../GetUsuario";
import { CreateTarefaLoteDTO } from "../../DTO/CreateTarefaLoteDTO";
import { getPastaUseCase } from "../GetPasta";
import { getPastaProcessoJudicialUseCase } from "../GetPastaProcessoJudicial";
import { TarefaDTO } from "../../DTO/TarefaDTO";


export class CreateTarefaLoteUseCase {
    
    async execute(data: CreateTarefaLoteDTO): Promise<Array<string>> {
        return new Promise(async (resolve, reject) => {
            
            const cookie:string = await loginUseCase.execute(data.login);
            
            let response: Array<any> = [];
            
            const listaProcessosJudiciais = data.listaProcessosJudiciais;
            const usuario = await getUsuarioUseCase.execute(cookie);
            console.log(usuario);
            const idSetorOrigemUser:string = usuario[0].colaborador.lotacoes.find(lotacao => lotacao.principal === true)?.setor.id;
            
            for (const numeroProcessoJudicial of listaProcessosJudiciais) {
                
                const infoProcesso = await getPastaProcessoJudicialUseCase.execute(numeroProcessoJudicial, cookie);
                const pasta_id = infoProcesso[0].id.toString();
                const objetoTarefa:TarefaDTO = new TarefaDTO(
                    data.etiqueta,
                    data.prazoInicio,
                    data.prazoFim,
                    pasta_id,
                    data.especieTarefa,
                    idSetorOrigemUser
                );
                response.push(objetoTarefa);
            }

            resolve(await response);
        })

    }
}