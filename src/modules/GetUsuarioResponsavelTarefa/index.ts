import { GetUsuarioResponsavelTarefaUseCase } from './GetUsuarioResponsavelTarefaUseCase';
import { GetUsuarioResponsavelTarefaController } from './GetUsuarioResponsavelTarefaController';
import { RequestGetUsuario } from '../../sapiensOperations/resquest/RequestGetUsuario';

const requestGetUsuarioResponsavelTarefa = new RequestGetUsuario();
const getUsuarioResponsavelTarefaUseCase = new GetUsuarioResponsavelTarefaUseCase(requestGetUsuarioResponsavelTarefa);
const getUsuarioResponsavelController = new GetUsuarioResponsavelTarefaController(getUsuarioResponsavelTarefaUseCase);

export { getUsuarioResponsavelTarefaUseCase, getUsuarioResponsavelController };