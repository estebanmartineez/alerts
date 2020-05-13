import {Alert} from "../entity/Alert";

export const isInvalidAlertRequest = (alert: Alert): Boolean => {
    return !alert.description || !alert.server || !alert.server_type || !alert.createdAt
}