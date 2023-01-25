import { Request, Response, NextFunction } from 'express';
import asyncHandler from '../utils/asyncHandler';
import ErrorResponse from '../utils/ErrorResponse';
import Todo from '../models/Todo';

const getTodo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { todolistId } = req.query;
    const todo = await Todo.find({ todolistId });
    res.status(200).json(todo);
});

const addTodo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, done, todolistId } = req.body;
    const todo = await Todo.create({ name, done, todolistId });
    res.status(200).json(todo);
});

const getSingleTodo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
        throw new ErrorResponse('Todo not found', 404);
    }
    res.status(200).json(todo);
});

const updateTodo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, done } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { name, done }, { new: true });
    if (!todo) {
        throw new ErrorResponse('Todo not found', 404);
    }
    res.status(200).json(todo);
});

const deleteTodo = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
        throw new ErrorResponse('Todo not found', 404);
    }
    res.status(204).json();
});

export {
    getTodo,
    addTodo,
    getSingleTodo,
    updateTodo,
    deleteTodo
};
