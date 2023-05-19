import express, { Express } from 'express'

import { router, server } from './infrastructure'

const bootstrap = (): void => {
    const app: Express = express()

    router(app)
    server(app)
}

bootstrap()
