import * as express from 'express';

import { addTodo, deleteTodo, getSingleTodo, getTodo, updateTodo } from '../controllers/Todo';
const todoRouter = express.Router();

todoRouter.route('/todos').get(getTodo).post(addTodo);
todoRouter.route('/todos/:id').get(getSingleTodo).put(updateTodo).delete(deleteTodo);
export default todoRouter;
