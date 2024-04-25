import { useContext, useEffect, useState } from "react";
import "./App.css";
import DrumContainer from "./components/DrumContainer/DrumContainer";
import AuthorLabel from "./components/UI/AuthorLabel/AuthorLabel";
import MainCtxProvider, { MainCtx } from "./context/MainCtx";
import { INITIAL_STORE, KEYS_ARR } from "./globals";
import { getItemTitle } from "./utils/helpers";
import { handleClick } from "./components/DrumItem/DrumItem";

function App() {
  const { features } = useContext(MainCtx);
  const [keyIsPressed, setKeyIsPressed] = useState(null);
  const { setSelectedItem } = useContext(MainCtx);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      const capitalKey = key.toUpperCase();
      if (KEYS_ARR.includes(capitalKey)) {
        const el = document.getElementById(capitalKey);
        el.play();
        setKeyIsPressed(capitalKey);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  useEffect(() => {
    if (keyIsPressed) {
      const item = INITIAL_STORE.find((item) => {
        return item.text === keyIsPressed;
      });
      const sourceUrl = features.bank ? item.bankUrl : item.url;
      const title = getItemTitle(sourceUrl);
      handleClick(title, item.text, setSelectedItem);
      document.getElementById("display").innerHTML = title;
    }
  }, [keyIsPressed, features.bank, setSelectedItem]);
  return (
    <MainCtxProvider>
      <div className="App">
        <p className="app-title">Drum machine</p>
        <DrumContainer />
        <AuthorLabel />
      </div>
    </MainCtxProvider>
  );
}

export default App;
