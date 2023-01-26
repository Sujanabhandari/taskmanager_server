import './src/database/client'
import express, { type Request, type Response, type NextFunction } from 'express'

import * as cors from 'cors'
import type ErrorResponse from './src/utils/ErrorResponse'
import todoListRouter from './src/routes/todolist'
import todoRouter from './src/routes/todo'

const app = express()
app.use(express.json())

app.use(cors.default({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use('/api', todoListRouter)
app.use('/api', todoRouter)
const port = (process.env.port != null) || 3333

app.use(function (err: ErrorResponse, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.error(err.stack)
  // render the error page
  res.status(err.statusCode || 500)
  res.send({
    error: err.message
  })
})

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
