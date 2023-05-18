import { Express } from 'express'

import diariesRouter from './diaries.router'

const router = (app: Express) => {
  app.use('/', diariesRouter)
}

export default router
