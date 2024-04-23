import "./App.css";
import DrumContainer from "./components/DrumContainer/DrumContainer";
import AuthorLabel from "./components/UI/AuthorLabel/AuthorLabel";
import { createContext, useEffect, useState } from "react";
import { initialStore } from "./globals";

const initialFeatures = {
  power: true,
  bank: true,
  volume: 0,
};
const initialState = {
  store: [],
  selectedItem: "",
  setSelectedItem: () => {},
  features: initialFeatures,
  setFeatures: () => {},
};
export const MainCtx = createContext(initialState);

function App() {
  const [store, setStore] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [features, setFeatures] = useState(initialFeatures);

  useEffect(() => {
    setStore(initialStore);
  }, []);

  return (
    <MainCtx.Provider
      value={{ store, selectedItem, setSelectedItem, features, setFeatures }}
    >
      <div className="App">
        <DrumContainer />
        <AuthorLabel />
      </div>
    </MainCtx.Provider>
  );
}

export default App;
