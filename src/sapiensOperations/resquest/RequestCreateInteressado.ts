import { CreateInteressadoDTO } from "../../DTO/CreateInteressadoDTO";

export class RequestCreateInteressado {
    async execute(data: CreateInteressadoDTO): Promise<string> {
        const createInteressado = `{
            "action": "SapiensAdministrativo_Interessado",
            "method": "createInteressado",
            "data": [
              {
                "criadoEm": null,
                "apagadoEm": null,
                "atualizadoEm": null,
                "criadoPor_id": "",
                "atualizadoPor_id": "",
                "pasta_id": ${data.pasta_id},
                "modalidadeInteressado_id": ${data.modalidade_id},
                "pessoa_id": ${data.interessado_id},
                "cargoInteressado": ""
              }
            ],
            "type": "rpc",
            "tid": 21
        }`
        
        return createInteressado;
    }
}