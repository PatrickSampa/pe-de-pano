import { GetUsuarioResponsavelTarefaUseCase } from './GetUsuarioResponsavelTarefaUseCase';
import { GetUsuarioResponsavelTarefaController } from './GetUsuarioResponsavelTarefaController';
import { RequestGetUsuarioResponsavelTarefa } from '../../sapiensOperations/resquest/RequestGetUsuarioResponsavelTarefa';

const requestGetUsuarioResponsavelTarefa = new RequestGetUsuarioResponsavelTarefa();
const getUsuarioResponsavelTarefaUseCase = new GetUsuarioResponsavelTarefaUseCase(requestGetUsuarioResponsavelTarefa);
const getUsuarioResponsavelController = new GetUsuarioResponsavelTarefaController(getUsuarioResponsavelTarefaUseCase);

export { getUsuarioResponsavelTarefaUseCase, getUsuarioResponsavelController };