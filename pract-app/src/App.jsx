import { useState } from "react";
import "./App.css";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     if (input.trim()) {
//       setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
//       setInput("");
//     }
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Add a todo"
//       />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//               }}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// function Parent() {
//   const [state, setState] = useState("");
//   const handleState = (state) => {
//     setState(state);
//   };
//   return (
//     <>
//       <h1>Parent Component</h1>
//       <span> Meassge from parent:{state}</span>
//       <Child setter={setState} />
//     </>
//   );
// }

// function Child(props) {
//   return (
//     <>
//       <h1>Child Component</h1>
//       <input
//         onChange={(e) => {
//           props.setter(e.target.value);
//         }}
//       />
//     </>
//   );
// }

// export default Parent;
