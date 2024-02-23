import { RequestGetEspecieTarefa } from '../../sapiensOperations/resquest/RequestGetEspecieTarefa';
import { RequestGetSetorResponsavelTarefa } from '../../sapiensOperations/resquest/RequestGetSetorResponsavelTarefa';
import { GetSetorResponsavelTarefaController } from './GetSetorResponsavelTarefa';
import { GetSetorResponsavelTarefaUseCase } from './GetSetorResponsavelTarefaUseCase';

const requestGetSetorResponsavelTarefa = new RequestGetSetorResponsavelTarefa();
const getSetorResponsavelTarefaUseCase = new GetSetorResponsavelTarefaUseCase(requestGetSetorResponsavelTarefa);
const getSetorResponsavelTarefaController = new GetSetorResponsavelTarefaController(getSetorResponsavelTarefaUseCase);

export { getSetorResponsavelTarefaUseCase, getSetorResponsavelTarefaController };