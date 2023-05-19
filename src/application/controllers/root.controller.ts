import { Request, Response } from 'express'

import { HttpStatus } from '../../@common/constants'

export const RootController = (_req: Request, res: Response): void => {
  res.status(HttpStatus.OK).send({ message: 'Welcome to Api' })
}
