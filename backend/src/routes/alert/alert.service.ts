import { getRepository } from "typeorm"
import { Alert } from "../../entity/Alert"
import { MAX_ITEMS_PER_PAGE } from "../../helpers/constansts";

export class AlertService {

    static async getAlertData(page: number, limit: number): Promise<Alert[]> {
        const offset = ((page - 1) * MAX_ITEMS_PER_PAGE)
        return await getRepository(Alert).find({
            skip: offset,
            take: limit
        });
    }

    static async createNewAlert(alert: Alert): Promise<Alert> {
        const newAlert = getRepository(Alert).create(alert)
        return await getRepository(Alert).save(newAlert)
    }
}
