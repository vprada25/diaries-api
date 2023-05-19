import { Express } from 'express'

import rootRouter from './root.router'
import diariesRouter from './diaries.router'

export const router = (app: Express) => {
    app.use('/', diariesRouter)
    app.use('/', rootRouter)
}
