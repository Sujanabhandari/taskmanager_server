import * as mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  todolistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'todolist',
    required: true,
    onDelete: 'CASCADE'
  },
  date: { type: Date, default: Date.now }
})

const Todo = mongoose.model('Todo', todoSchema)
export default Todo
