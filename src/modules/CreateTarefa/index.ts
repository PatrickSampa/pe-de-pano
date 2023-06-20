import { RequestCreateTarefa } from '../../sapiensOperations/resquest/RequestCreateTarefa';
import { CreateTarefaUseCase } from './CreateTarefaUseCase';

const requestCreateTarefa = new RequestCreateTarefa();
const createTarefaUseCase = new CreateTarefaUseCase(requestCreateTarefa);

export { createTarefaUseCase };