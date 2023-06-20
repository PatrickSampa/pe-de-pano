import { loginUseCase } from "../LoginUsuario";
import { getInteressadoUseCase } from "../GetInteressado";
import { InsertInteressadoAndAssuntoOnProcessDTO } from "../../DTO/InsertInteressadoAndAssuntoOnProcessDTO";
import { createInteressadoUseCase } from "../CreateInteressado";
import { getModalidadeInteressadoUseCase } from "../GetModalidadeInteressado";
import { getPastaUseCase } from "../GetPasta";
import { CreateInteressadoDTO } from "../../DTO/CreateInteressadoDTO";
import { createAssuntoUseCase } from "../CreateAssunto";
import { CreateAssuntoDTO } from "../../DTO/CreateAssuntoDTO";


export class InsertInteressadoAndAssuntoOnProcessUseCase {

    async execute(data: InsertInteressadoAndAssuntoOnProcessDTO): Promise<Array<string>> {
        return new Promise(async (resolve, reject) => {

            const cookie:string = await loginUseCase.execute(data.login);

            //o que api vai retornar
            let response: Array<any> = [];


            const listaNups = data.listaNups;
            
            for (const nup of listaNups) {
                const interessado = await getInteressadoUseCase.execute(cookie, data.interessado.cpfCnpj);
                const modalidade = await getModalidadeInteressadoUseCase.execute(cookie, data.interessado.modalidade);
                const pasta = await getPastaUseCase.execute(nup,cookie);
                const pasta_id: string = String(pasta[0].id);
                const modalidade_id: string = String(modalidade[0].id);
                const interessado_id: string = String(interessado[0].pessoa_id);
                
                const createInteressado:CreateInteressadoDTO = new CreateInteressadoDTO(cookie,pasta_id,modalidade_id,interessado_id);
                const createAssunto:CreateAssuntoDTO = new CreateAssuntoDTO(cookie,pasta_id,data.assunto);
                const interessadoCadastrado = await createInteressadoUseCase.execute(createInteressado);
                const assuntoCadastrado = await createAssuntoUseCase.execute(createAssunto);

                if(!interessadoCadastrado || !assuntoCadastrado){
                    response.push(`Nup:${nup} Falha na criação de Assunto/Interessado`);
                }
            }

            if(response.length === 0){
                response.push(`Assuntos e interessados cadastrados com sucesso !`);
            }

            resolve(await response);
        })

    }
}