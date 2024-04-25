import { useContext, useEffect } from "react";
import ActionContainer from "../ActionContainer/ActionContainer";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import "./DrumContainer.css";
import { INITIAL_STORE } from "../../globals";
import { MainCtx } from "../../context/MainCtx";
import { getItemTitle } from "../../utils/helpers";
import { handleClick } from "../DrumItem/DrumItem";

const DrumContainer = ({ keyIsPressed }) => {
  const { features, setSelectedItem } = useContext(MainCtx);

  useEffect(() => {
    if (keyIsPressed) {
      const item = INITIAL_STORE.find((item) => {
        return item.text === keyIsPressed;
      });
      const sourceUrl = features.bank ? item.bankUrl : item.url;
      const title = getItemTitle(sourceUrl);
      handleClick(title, item.text, setSelectedItem);
    }
  }, [keyIsPressed, features.bank, setSelectedItem]);

  return (
    <div id="drum-machine">
      <ItemsContainer />
      <ActionContainer />
    </div>
  );
};

export default DrumContainer;
