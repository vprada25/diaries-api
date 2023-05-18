import express, { Express } from 'express'

import router from './infrastructure/routes'
import server from './infrastructure/express/server'

const bootstrap = (): void => {
  const app: Express = express()

  router(app)
  server(app)
}

bootstrap()
