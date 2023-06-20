import { RequestCreateInteressado } from '../../sapiensOperations/resquest/RequestCreateInteressado';
import { CreateInteressadoController } from './CreateInteressadoController';
import {CreateInteressadoUseCase } from './CreateInteressadoUseCase';

const requestCreateInteressado = new RequestCreateInteressado();
const createInteressadoUseCase = new CreateInteressadoUseCase(requestCreateInteressado);
const createInteressadoController = new CreateInteressadoController(createInteressadoUseCase);

export { createInteressadoUseCase, createInteressadoController };