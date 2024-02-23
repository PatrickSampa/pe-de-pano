import { RequestCreateAssunto } from '../../sapiensOperations/resquest/RequestCreateAssunto';
import { CreateAssuntoController } from './CreateAssuntoController';
import { CreateAssuntoUseCase } from './CreateAssuntoUseCase';


const requestCreateInteressado = new RequestCreateAssunto();
const createAssuntoUseCase = new CreateAssuntoUseCase(requestCreateInteressado);
const createAssuntoController = new CreateAssuntoController(createAssuntoUseCase);

export { createAssuntoUseCase, createAssuntoController };