import { GetInformationsForPaceController } from "./GetInformationsForPaceController";
import { GetInformationsForPaceUseCase } from "./GetInformationsForPaceUseCase";

export const getInformationsForPaceUseCase = new GetInformationsForPaceUseCase();
export const getInformationsForPaceController = new GetInformationsForPaceController(getInformationsForPaceUseCase);
 
