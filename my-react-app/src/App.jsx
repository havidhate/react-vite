import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>My Simple Site</h1>
      </header>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <h2>Welcome to My Website!</h2>
        <p>This is a basic layout using React and Vite.</p>
      </main>

      <footer>
        <p>&copy; 2025 My Simple Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
