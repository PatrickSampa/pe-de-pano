import { RequestGetModalidadeInteressado } from '../../sapiensOperations/resquest/RequestGetModalidadeInteressado';
import { GetModalidadeInteressadoUseCase } from './GetModalidadeInteressadoUseCase';

const requestGetModalidadeInteressado = new RequestGetModalidadeInteressado();
const getModalidadeInteressadoUseCase = new GetModalidadeInteressadoUseCase(requestGetModalidadeInteressado);

export { getModalidadeInteressadoUseCase };