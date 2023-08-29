import { loginUseCase } from "../LoginUsuario";
import { getUsuarioUseCase } from "../GetUsuario";
import { CreateTarefaLoteDTO } from "../../DTO/CreateTarefaLoteDTO";
import { getPastaProcessoJudicialUseCase } from "../GetPastaProcessoJudicial";
import { TarefaDTO } from "../../DTO/TarefaDTO";
import { RequestCreateTarefaLote } from "../../sapiensOperations/resquest/RequestCreateTarefaLote";
import { RequestSapiens } from "../../pytonRequest/requestSapiens";


export class CreateTarefaLoteUseCase {
    
    async execute(data: CreateTarefaLoteDTO): Promise<Object>{
        return new Promise(async (resolve, reject) => {
            
                const cookie = await loginUseCase.execute(data.login);
                
                //let response:Array<any> = []
                let listaTarefas:string = '';
                let processosNaoEncontrados:Array<any> = []
                
    
                const listaProcessosJudiciais = data.listaProcessosJudiciais;
                // const usuario = await getUsuarioUseCase.execute(cookie);
                // const idSetorOrigemUser:string = usuario[0].colaborador.lotacoes.find(lotacao => lotacao.principal === true)?.setor.id;
                const idSetorOrigemUser = '41430';
                
                for await (const processoJudicial of listaProcessosJudiciais) {
                    
                    const infoProcesso = await getPastaProcessoJudicialUseCase.execute(processoJudicial.numeroProcesso, cookie);
                    if(infoProcesso.length > 0){
                        const pasta_id = infoProcesso[0].id.toString();
                        const tarefa:TarefaDTO = new TarefaDTO();
                        const objTarefa = tarefa.execute(
                            data.etiqueta,
                            processoJudicial.prazoInicio,
                            processoJudicial.prazoFim,
                            Number(pasta_id),
                            data.especieTarefa,
                            Number(idSetorOrigemUser),
                            data.setorResponsavel,
                            data.usuarioResponsavel
                        )
                        if(processoJudicial === listaProcessosJudiciais[0]){
                            listaTarefas += objTarefa;
                        }else{
                            listaTarefas += `,${objTarefa}`;
                        }
                    }else{
                        processosNaoEncontrados.push(processoJudicial);
                        continue;
                    }
                }
    
                const requestCreateTarefaLote = new RequestCreateTarefaLote();
                const payload = await requestCreateTarefaLote.execute(listaTarefas);
                console.log(payload);
                console.log('recebi a req do pace');
                
                let response = {};
                const responseSapiens  = await RequestSapiens(cookie, payload);
                
                if(!responseSapiens){
                    reject(new Error('erro de conexão com o sapiens'))
                }
    
                if(processosNaoEncontrados.length > 0){
                    response= {
                        message:"Processos nao existentes no sapiens",
                        processosNaoEncontrados                    
                    };
                }
                
                resolve(response);
            
        })

    }
}