"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(), // simple ID generation
        text: input,
      };
      setTodos([...todos, newTodo]);
      setInput(""); // clear input after adding
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6">Todo App</h1>
      <div className="flex justify-center mb-4">
        <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mr-2" placeholder="Add a new todo" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-100 mb-2 p-4 rounded shadow">
            <span>{todo.text}</span>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
