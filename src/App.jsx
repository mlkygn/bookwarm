import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main/>
    </>
  );
}

export default App;
