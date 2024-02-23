import { IGetInformationsFromSapiensDTO } from "../../DTO/GetInformationsFromSapiensDTO";
import { getTarefaUseCase } from "../GetTarefa";
import { getUsuarioUseCase } from "../GetUsuario";
import { loginUseCase } from "../LoginUsuario";
import { updateEtiquetaUseCase } from "../UpdateEtiqueta";
import { IGetArvoreDocumentoDTO } from "../../DTO/GetArvoreDocumentoDTO";
import { ResponseArvoreDeDocumento } from "../../sapiensOperations/response/ResponseArvoreDeDocumento";
import { getArvoreDocumentoUseCase } from "../GetArvoreDocumento/index";
import { contestacaoIsInvalid} from "./helps/ContestacaoIsInvalid";
import { getDocumentoUseCase } from '../GetDocumento';

export class FiltroAudienciasPaceUseCase {

    async execute(data: IGetInformationsFromSapiensDTO): Promise<Array<string>> {
        return new Promise(async (resolve, reject) => {

            const cookie:string = await loginUseCase.execute(data.login);
            const usuario = (await getUsuarioUseCase.execute(cookie));

            const usuario_id:string = `${usuario[0].id}`;

            //o que api vai retornar
            let response: Array<any> = [];
            data.etiqueta = await data.etiqueta.toUpperCase()
            const etiquetaInvalida:boolean = data.etiqueta.includes("FALHA") || data.etiqueta.includes("ATUALIZAÇAO")

            if (etiquetaInvalida) {
                console.log(etiquetaInvalida)
                reject(new Error("etiqueta não pode ter as palavras falha e atualizaçao"))
            }

            const qunatidadeDeProcesso = 50;
            var tarefas: any[]
            do {    
                tarefas = await getTarefaUseCase.execute({ cookie, usuario_id, etiqueta: data.etiqueta, qunatidadeDeProcesso })

                for (const tarefa of tarefas) {

                    const objectGetArvoreDocumento: IGetArvoreDocumentoDTO = { nup: tarefa.pasta.NUP, chave: tarefa.pasta.chaveAcesso, cookie, tarefa_id: tarefa.id }
                    const tarefaId = tarefa.id;
                    let arrayDeDocumentos: ResponseArvoreDeDocumento[];
                    try {
                        arrayDeDocumentos = (await getArvoreDocumentoUseCase
                        .execute(objectGetArvoreDocumento))
                        .reverse();

                    } catch (error) {
                        console.log(error);
                        (await updateEtiquetaUseCase.execute({ cookie, etiqueta: "DOSPREV COM FALHA NA GERAÇAO", tarefaId }));
                        continue;
                    }
                    
                    const objectContestacao:ResponseArvoreDeDocumento = arrayDeDocumentos.find(Documento => Documento.documentoJuntado.tipoDocumento.sigla == "CONTEST"||
                    Documento.documentoJuntado.tipoDocumento.sigla == "PROPACORD");


                    if(objectContestacao === undefined){
                        (await updateEtiquetaUseCase.execute({ cookie, etiqueta: "CONTESTAÇÃO NÃO LOCALIZADA", tarefaId }));
                        continue;
                    }

                    const idContestacaoParaPesquisa:number = objectContestacao.documentoJuntado.componentesDigitais[0].id;
                    const paginaContestacao:string = await getDocumentoUseCase.execute({ cookie, idDocument: idContestacaoParaPesquisa });

                    const [etiqueta, IsInvalid] = await contestacaoIsInvalid(paginaContestacao);

                    if (IsInvalid) {
                        (await updateEtiquetaUseCase.execute({ cookie, etiqueta: etiqueta , tarefaId }));
                        continue;
                    }

                }
            } while (tarefas.length >= 50);

            resolve(await response)
        })

    }
}