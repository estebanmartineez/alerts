import { Request, Response, Router } from 'express'
const router = Router({mergeParams: true});

import {AlertService} from "../alert.service";
import HttpStatus from 'http-status-codes/index'

export const getAlertsSearch = router.get('/', async (request: Request, response:Response): Promise<Response> => {
    const alertData  = await AlertService.searchAlerts(request)
    return response.status(HttpStatus.OK).json(alertData)
});