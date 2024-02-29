import { useState } from "react";
import SpeedTypingGame from "./components/SpeedTypingGame";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SpeedTypingGame />
    </>
  );
}

export default App;
