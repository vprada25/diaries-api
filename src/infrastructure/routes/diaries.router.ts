import { Router } from 'express'

const diariesRouter = () => {
    const router = Router()

    router.get('/diaries', (_req, res) => {
        res.send('Hello World!')
    })

    return router
}

export default diariesRouter()
