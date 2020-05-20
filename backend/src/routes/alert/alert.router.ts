import { Request, Response, Router } from 'express'
const router = Router({mergeParams: true});

import { AlertService } from './alert.service'
import { getPageAndLimit } from "../../helpers/paginator-helper";
import { isInvalidAlertRequest } from "../../helpers/requestAlertValidator";
import HttpStatus from 'http-status-codes/index'

export const getAlerts = router.get('/', async (request: Request, response:Response): Promise<Response> => {
    const { page, limit } = getPageAndLimit(request);
    const [alertData, total]  = await AlertService.getAlertData(page, limit)
    return response.status(HttpStatus.OK).json({alertData, total})
});

export const createAlert = router.post('/', async(request: Request, response: Response): Promise<Response> => {
    if(isInvalidAlertRequest(request.body)) {
        return response.status(HttpStatus.BAD_REQUEST).json('Invalid Request')
    }
    const result = AlertService.createNewAlert(request.body)
    return response.json(result)
});
