import { InsertTarefasController } from "./InserTarefasController";
import { InsertTarefasUseCase } from "./InsertTarefasUseCase";

export const insertTarefasUseCase = new InsertTarefasUseCase();
export const insertTarefasController = new InsertTarefasController(insertTarefasUseCase);

