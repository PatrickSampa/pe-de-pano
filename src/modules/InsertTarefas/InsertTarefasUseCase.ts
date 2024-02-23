import { loginUseCase } from "../LoginUsuario";
import { getUsuarioUseCase } from "../GetUsuario";
import { InsertTarefasDTO } from "../../DTO/InsertTarefasDTO";
import { getPastaUseCase } from "../GetPasta";
import { CreateTarefaDTO } from "../../DTO/CreateTarefaDTO";
import { createTarefaUseCase } from "../CreateTarefa";
import { defineIntervaloPrazo } from "./helps/DefineIntervaloPrazo";


export class InsertTarefasUseCase {
    
    async execute(data: InsertTarefasDTO): Promise<Array<string>> {
        return new Promise(async (resolve, reject) => {
            
            const cookie:string = await loginUseCase.execute(data.login);
            const usuario = await getUsuarioUseCase.execute(cookie);
            const idSetorOrigemUser = usuario[0].colaborador.lotacoes.find(lotacao => lotacao.principal === true)?.setor.id;
            let response: Array<any> = [];
            
            const listaNups = data.listaNups;
            
            for (const nup of listaNups) {

                const pasta = await getPastaUseCase.execute(nup,cookie);
                const pastaId: string = String(pasta[0].id);

                const [prazoInicio, prazoFim] = defineIntervaloPrazo();

                const tarefa = new CreateTarefaDTO(
                    cookie, 
                    data.etiqueta,
                    pastaId,
                    data.especieTarefa,
                    data.setorResponsavel,
                    idSetorOrigemUser,
                    prazoInicio,
                    prazoFim
                );

                const tarefaCriada = await createTarefaUseCase.execute(tarefa);

                
                if(!tarefaCriada){
                    response.push(`verifique interessado e assunto da nup ${nup}`);
                }

            }

            if(response.length === 0){
                response.push(`As tarefas foram cadastradas com sucesso !`);
            }

            resolve(await response);
        })

    }
}