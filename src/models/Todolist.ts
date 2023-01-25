import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoListSchema = new Schema({
  name: { type: String, required: true,},
  date: { type: Date, default: Date.now },
});

const TodoList = mongoose.model("TodoList", todoListSchema);
export default TodoList;
