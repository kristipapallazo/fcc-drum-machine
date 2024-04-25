import { createContext, useEffect, useState } from "react";
import { INITIAL_STORE } from "../globals/index";
import { mobileAndTabletcheck } from "../utils/helpers";

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
  isMobile: false,
};
export const MainCtx = createContext(initialState);

const MainCtxProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [features, setFeatures] = useState(initialFeatures);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = mobileAndTabletcheck(window.innerWidth);
    setIsMobile(isMobile);
  }, []);

  const ctxVal = {
    store: INITIAL_STORE,
    selectedItem,
    setSelectedItem,
    features,
    setFeatures,
    isMobile,
  };
  return <MainCtx.Provider value={ctxVal}>{children}</MainCtx.Provider>;
};

export default MainCtxProvider;
