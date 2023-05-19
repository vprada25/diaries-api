import { Router } from 'express'

import { RootController } from '../../application/controllers'

const rootRouter = () => {
    const router = Router()

    router.get('/', RootController)

    return router
}

export default rootRouter()
