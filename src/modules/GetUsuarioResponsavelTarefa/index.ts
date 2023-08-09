import { GetUsuarioResponsavelTarefaUseCase } from './GetUsuarioResponsavelTarefaUseCase';
import { GetUsuarioResponsavelTarefaController } from './GetUsuarioResponsavelTarefaController';
import { RequestGetUsuarioResponsavelTarefa } from '../../sapiensOperations/resquest/RequestGetUsuarioResponsavelTarefa';
import { RequestGetAfastamento } from '../../sapiensOperations/resquest/RequestGetAfastamento';

const requestGetUsuarioResponsavelTarefa = new RequestGetUsuarioResponsavelTarefa();
const requestGetAfastamento = new RequestGetAfastamento();
const getUsuarioResponsavelTarefaUseCase = new GetUsuarioResponsavelTarefaUseCase(requestGetUsuarioResponsavelTarefa,requestGetAfastamento);
const getUsuarioResponsavelController = new GetUsuarioResponsavelTarefaController(getUsuarioResponsavelTarefaUseCase);

export { getUsuarioResponsavelTarefaUseCase, getUsuarioResponsavelController };