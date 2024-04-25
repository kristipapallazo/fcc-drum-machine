import { useEffect, useState } from "react";
import DrumContainer from "./components/DrumContainer/DrumContainer";
import AuthorLabel from "./components/UI/AuthorLabel/AuthorLabel";
import MainCtxProvider from "./context/MainCtx";
import { KEYS_ARR } from "./globals";
import AppTitle from "./components/UI/AppTitle/AppTitle";
import "./App.css";

function App() {
  const [keyIsPressed, setKeyIsPressed] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      const capitalKey = key.toUpperCase();
      if (KEYS_ARR.includes(capitalKey)) {
        setKeyIsPressed(capitalKey);
        setTimeout(() => {
          setKeyIsPressed(null);
        }, 200);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <MainCtxProvider>
      <div className="App">
        <AppTitle />
        <DrumContainer keyIsPressed={keyIsPressed} />
        <AuthorLabel />
      </div>
    </MainCtxProvider>
  );
}

export default App;
