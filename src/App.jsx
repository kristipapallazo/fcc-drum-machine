import "./App.css";
import DrumContainer from "./components/DrumContainer/DrumContainer";
import AuthorLabel from "./components/UI/AuthorLabel/AuthorLabel";
import { createContext, useEffect, useState } from "react";
import { initialStore } from "./globals";

const initialState = {
  store: [],
  selectedItem: {},
};
export const MainCtx = createContext(initialState);

function App() {
  const [store, setStore] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setStore(initialStore);
  }, []);

  return (
    <MainCtx.Provider value={{ store, selectedItem }}>
      <div className="App">
        <DrumContainer />
        <AuthorLabel />
      </div>
    </MainCtx.Provider>
  );
}

export default App;
