import * as express from 'express'
import { getTodoLists, addTodoLists, getSingleTodoList, updateTodoList, deleteTodoList } from '../controllers/TodoList'

const todoListRouter = express.Router()

todoListRouter.route('/todolists').get(getTodoLists).post(addTodoLists)
todoListRouter.route('/todolists/:id').get(getSingleTodoList).put(updateTodoList).delete(deleteTodoList)
export default todoListRouter
