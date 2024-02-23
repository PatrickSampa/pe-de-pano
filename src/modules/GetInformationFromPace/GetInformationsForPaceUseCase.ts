import { ILoginDTO } from "../../DTO/LoginDTO";
import { getTarefaUseCase } from "../GetTarefa";
import { getUsuarioUseCase } from "../GetUsuario";
import { loginUseCase } from "../LoginUsuario";
import { updateEtiquetaUseCase } from "../UpdateEtiqueta";
import { AudienciaDTO } from "../../DTO/AudienciaDTO";

export class GetInformationsForPaceUseCase {

    async execute(data: ILoginDTO): Promise<Array<string>> {
        return new Promise(async (resolve, reject) => {

            const cookie:string = await loginUseCase.execute(data);
            const usuario = (await getUsuarioUseCase.execute(cookie));

            const usuario_id:string = `${usuario[0].id}`;


            let response: Array<any> = [];

            const qunatidadeDeProcesso = 50;
            var tarefas: any[];
            do {    
                tarefas = await getTarefaUseCase.execute({ cookie, usuario_id, etiqueta: 'SALA', qunatidadeDeProcesso });

                for (const tarefa of tarefas) {

                    const tarefaId = tarefa.id;
                    let interessados: string[] = [];

                    tarefa.pasta.interessados.forEach(interessado => {
                        interessados.push(interessado.pessoa.nome);
                    }); 
                    
                    const audiencia:AudienciaDTO = new AudienciaDTO(
                        tarefa.dataHoraFinalPrazo.date,
                        tarefa.postIt,
                        tarefa.pasta.NUP,
                        interessados,
                        tarefa.pasta.processoJudicial.orgaoJulgador.nome
                    );

                    (await updateEtiquetaUseCase.execute({ cookie, etiqueta: "PAUTADO", tarefaId }));

                    response.push(audiencia);

                }
            } while (tarefas.length >= 50);

            resolve(await response)
        })

    }
}