import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [joke, setJoke] = useState(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const res = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await res.json();
        setJoke(data);
      } catch (error) {
        console.log("Error fetching joke:", error);
      }
    };
    fetchJoke();
  }, [reload]);
  return (
    <div className="joke-container">
      <h1>😂 Random Joke Generator</h1>
      <div className="card">
        {joke ? (
          <>
            <h3>{joke.setup}</h3>
            <p>
              <strong>{joke.punchline}</strong>
            </p>
          </>
        ) : (
          <p>Loading joke...</p>
        )}
      </div>
      <button onClick={() => setReload((prev) => prev + 1)}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
