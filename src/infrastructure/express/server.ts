import { Express } from 'express'
import { PORT } from '../constants'

export const server = (app: Express): void => {
  app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`)
  })
}
