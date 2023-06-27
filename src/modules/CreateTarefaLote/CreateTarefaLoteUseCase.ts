import { loginUseCase } from "../LoginUsuario";
import { getUsuarioUseCase } from "../GetUsuario";
import { CreateTarefaLoteDTO } from "../../DTO/CreateTarefaLoteDTO";
import { getPastaUseCase } from "../GetPasta";
import { getPastaProcessoJudicialUseCase } from "../GetPastaProcessoJudicial";
import { TarefaDTO } from "../../DTO/TarefaDTO";
import { RequestCreateTarefaLote } from "../../sapiensOperations/resquest/RequestCreateTarefaLote";
import { RequestSapiens } from "../../pytonRequest/requestSapiens";


export class CreateTarefaLoteUseCase {
    
    async execute(data: CreateTarefaLoteDTO): Promise<Array<string>> {
        return new Promise(async (resolve, reject) => {
            
            const cookie:string = await loginUseCase.execute(data.login);
            
            //let response:Array<any> = []
            let listaTarefas:string = '';
            

            const listaProcessosJudiciais = data.listaProcessosJudiciais;
            const usuario = await getUsuarioUseCase.execute(cookie);
            const idSetorOrigemUser:string = usuario[0].colaborador.lotacoes.find(lotacao => lotacao.principal === true)?.setor.id;
            
            for (const numeroProcessoJudicial of listaProcessosJudiciais) {
                
                const infoProcesso = await getPastaProcessoJudicialUseCase.execute(numeroProcessoJudicial, cookie);
                const pasta_id = infoProcesso[0].id.toString();
                const tarefa:TarefaDTO = new TarefaDTO();
                const objTarefa = tarefa.execute(
                    data.etiqueta,
                    data.prazoInicio,
                    data.prazoFim,
                    Number(pasta_id),
                    data.especieTarefa,
                    Number(idSetorOrigemUser),
                    data.setorResponsavel,
                    data.usuarioResponsavel
                )
                if(numeroProcessoJudicial === listaProcessosJudiciais[listaProcessosJudiciais.length-1]){
                    listaTarefas += objTarefa;
                }else{
                    listaTarefas += `${objTarefa},`;
                }
            }

            const requestCreateTarefaLote = new RequestCreateTarefaLote();
            const payload = await requestCreateTarefaLote.execute(listaTarefas);
            console.log(payload);
            
            const response = (await RequestSapiens(cookie, payload))

            resolve(await response);
        })

    }
}