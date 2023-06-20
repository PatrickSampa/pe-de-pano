import { CreateAssuntoDTO } from "../../DTO/CreateAssuntoDTO";

export class RequestCreateAssunto {
    async execute(data: CreateAssuntoDTO): Promise<string> {
        const createAssunto = `{
          "action": "SapiensAdministrativo_Assunto",
          "method": "createAssunto",
          "data": [
            {
              "principal": false,
              "assuntoAdministrativo_id": ${data.assuntoAdministrativo_id},
              "pasta_id": ${data.pasta_id}
            }
          ],
          "type": "rpc",
          "tid": 34
        }`
        
        return createAssunto;
    }
}