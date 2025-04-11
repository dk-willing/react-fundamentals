import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todo");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Kindly enter an activity");
      return;
    }

    setTodo([...todo, input]);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <ul>
        {todo.map((activity) => {
          return <li key={Math.random()}>{activity}</li>;
        })}
      </ul>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add An Activity"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default TodoList;
