import { Router } from 'express'
import { DiariesController } from '../../application/controllers'

const diariesRouter = (): Router => {
  const router = Router()

  router.get('/diaries', DiariesController)

  return router
}

export default diariesRouter()
