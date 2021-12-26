import { Request, Response } from "express";
import { FindAllDeliverymanUseCase } from "./FindAllDeliverymanUseCase";



export class FindAllDeliverymanController {
    async handle(request: Request, response: Response){
        const findAllDeliverymanUseCase = new FindAllDeliverymanUseCase();

        const { id_deliveryman } = request;

        const deliveries = await findAllDeliverymanUseCase.execute(id_deliveryman);
        
        return response.json(deliveries);
    }

}