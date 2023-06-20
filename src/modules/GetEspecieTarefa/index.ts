import { RequestGetEspecieTarefa } from '../../sapiensOperations/resquest/RequestGetEspecieTarefa';
import { CreateInteressadoController } from './GetEspecieTarefaController';
import { GetEspecieTarefaUseCase } from './GetEspecieTarefaUseCase';

const requestGetEspecieTarefa = new RequestGetEspecieTarefa();
const getEspecieTarefaUseCase = new GetEspecieTarefaUseCase(requestGetEspecieTarefa);
const getEspecieTarefaController = new CreateInteressadoController(getEspecieTarefaUseCase);

export { getEspecieTarefaUseCase, getEspecieTarefaController};