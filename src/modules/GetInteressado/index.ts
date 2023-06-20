import { RequestGetInteressado } from '../../sapiensOperations/resquest/RequestGetInteressado';
import { GetInteressadoController } from './GetInteressadoController';
import { GetInteressadoUseCase } from './GetInteressadoUseCase';

const requestGetInteressado = new RequestGetInteressado();
const getInteressadoUseCase = new GetInteressadoUseCase(requestGetInteressado);
const getInteressadoController = new GetInteressadoController(getInteressadoUseCase);

export { getInteressadoUseCase , getInteressadoController };