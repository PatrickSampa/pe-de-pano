import { RequestGetPastaProcessoJudicial } from "../../sapiensOperations/resquest/RequestGetPastaProcessoJudicial";
import { GetPastaProcessoJudicialUseCase } from "./GetPastaProcessoJudicialUseCase";

export const requestGetPastaProcessoJudicial = new RequestGetPastaProcessoJudicial();
export const getPastaProcessoJudicialUseCase = new GetPastaProcessoJudicialUseCase(requestGetPastaProcessoJudicial);