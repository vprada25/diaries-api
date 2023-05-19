import { Request, Response } from 'express'

import { HttpStatus } from '../../@common/constants'

export const RootController = (_req: Request, res: Response) => {
    res.status(HttpStatus.OK).send({ message: 'Welcome to Api' })
}
