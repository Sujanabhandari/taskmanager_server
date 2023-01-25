import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../utils/asyncHandler';
import ErrorResponse from '../utils/ErrorResponse';
import TodoList from '../models/Todolist';

const getTodoLists = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const todolists = await TodoList.find();
    res.status(200).json(todolists);
});

const addTodoLists = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const todolist = await TodoList.create({ name });
    res.status(200).json(todolist);
});


const getSingleTodoList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const todolist = await TodoList.findById(id);
    if (!todolist) {
        throw new ErrorResponse('Todolist not found', 404);
    }
    res.status(200).json(todolist);
});

const updateTodoList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name } = req.body;
    const todolist = await TodoList.findByIdAndUpdate(id, { name }, { new: true });
    if (!todolist) {
        throw new ErrorResponse('Todolist not found', 404);
    }
    res.status(200).json(todolist);
});

const deleteTodoList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const todolist = await TodoList.findByIdAndDelete(id);
    if (!todolist) {
        throw new ErrorResponse('Todolist not found', 404);
    }
    res.status(204).json();
});

export {
  getTodoLists,
  addTodoLists,
  getSingleTodoList,
  updateTodoList,
  deleteTodoList
};
