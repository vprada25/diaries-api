import { Request, Response } from 'express'

import { getDiaries } from '../../domain/services'
import { HttpStatus } from '../../@common/constants'

export const DiariesController = (_req: Request, res: Response): void => {
  try {
    const response = getDiaries()
    res.status(HttpStatus.OK).json(response)
  } catch (error) {
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: error, statusCode: HttpStatus.INTERNAL_SERVER_ERROR })
  }
}
