import { createContext, useState } from "react";
import { initialStore } from "../globals/index";

const initialFeatures = {
  power: true,
  bank: false,
  volume: 0,
};
export const initialState = {
  store: [],
  selectedItem: null,
  setSelectedItem: () => {},
  features: initialFeatures,
  setFeatures: () => {},
};
export const MainCtx = createContext(initialState);

const MainCtxProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [features, setFeatures] = useState(initialFeatures);
  const ctxVal = {
    store: initialStore,
    selectedItem,
    setSelectedItem,
    features,
    setFeatures,
  };
  return <MainCtx.Provider value={ctxVal}>{children}</MainCtx.Provider>;
};

export default MainCtxProvider;
