import { Request } from 'express'

export const getPageAndLimit = (request: Request) => {
    let page = request.query.page;
    let limit = request.query.limit;

    return {
        page: page ? parseInt(<string>page) : 1,
        limit: limit ? parseInt(<string>limit): 10
    }
}