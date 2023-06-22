import { loginUseCase } from "../LoginUsuario";
import { getUsuarioUseCase } from "../GetUsuario";
import { CreateTarefaLoteDTO } from "../../DTO/CreateTarefaLoteDTO";
import { getPastaUseCase } from "../GetPasta";
import { getPastaProcessoJudicialUseCase } from "../GetPastaProcessoJudicial";


export class CreateTarefaLoteUseCase {
    
    async execute(data: CreateTarefaLoteDTO): Promise<Array<string>> {
        return new Promise(async (resolve, reject) => {
            
            const cookie:string = await loginUseCase.execute(data.login);
            
            let response: Array<any> = [];
            
            const listaProcessosJudiciais = data.listaProcessosJudiciais;
            
            for (const numeroProcessoJudicial of listaProcessosJudiciais) {
                
                const processo = await getPastaProcessoJudicialUseCase.execute(numeroProcessoJudicial, cookie);
                //const objetoTarefa = new TarefaDTO(processo[0].nup);
                response.push(processo);
                console.log(processo);
            }

            resolve(await response);
        })

    }
}