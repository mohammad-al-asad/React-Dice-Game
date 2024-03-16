import { useState } from "react";
import "./App.css";
import GamePage from "./components/GamePage";
import HomePage from "./components/HomePage";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const clickHandler = () => {
    setIsGameOn(true);
  };
  return (
    <>{isGameOn ? <GamePage /> : <HomePage clickHandler={clickHandler} />}</>
  );
}

export default App;
