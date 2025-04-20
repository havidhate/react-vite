import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./redux/actions";

function App() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAdd = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      dispatch(addTodo(value));
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add todo" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.status ? "line-through" : "none",
              marginBottom: 10,
              cursor: "pointer",
            }}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.title}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>

      <h3>Redux State:</h3>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default App;
