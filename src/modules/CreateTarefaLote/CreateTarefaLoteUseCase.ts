import { loginUseCase } from "../LoginUsuario";
import { getUsuarioUseCase } from "../GetUsuario";
import { CreateTarefaLoteDTO } from "../../DTO/CreateTarefaLoteDTO";
import { getPastaUseCase } from "../GetPasta";


export class CreateTarefaLoteUseCase {
    
    async execute(data: CreateTarefaLoteDTO): Promise<Array<string>> {
        return new Promise(async (resolve, reject) => {
            
            const cookie:string = await loginUseCase.execute(data.login);
            
            let response: Array<any> = [];
            
            const listaNups = data.listaNups;
            
            for (const nup of listaNups) {
                
                const processo = await getPastaUseCase.execute(nup, cookie);
                console.log(processo);
            }

            resolve(await response);
        })

    }
}