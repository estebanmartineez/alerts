import {getRepository, Like} from "typeorm"
import { Alert } from "../../entity/Alert"
import {Request} from "express";

export class AlertService {

    static async getAlertData(page: number, limit: number): Promise<[Alert[], number]> {
        const offset = (page * limit)
        return await getRepository(Alert).findAndCount({
            skip: offset,
            take: limit
        });
    }

    static async createNewAlert(alert: Alert): Promise<Alert> {
        const newAlert = getRepository(Alert).create(alert)
        return await getRepository(Alert).save(newAlert)
    }

    static async searchAlerts(request: Request):Promise<Alert[]> {
        let query = request.query.search
        return await getRepository(Alert).find({
            where : [{
                server : Like(`%${query}%`),
            }, {
                description : Like(`%${query}%`),
            }]
        });
    }
}
