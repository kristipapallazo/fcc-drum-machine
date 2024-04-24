import { useContext } from "react";
import ActionContainer from "../ActionContainer/ActionContainer";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import "./DrumContainer.css";
import { MainCtx } from "../../context/MainCtx";
import { getMobileClass } from "../../utils/helpers";

const DrumContainer = () => {
  const { isMobile } = useContext(MainCtx);
  return (
    <div id="drum-machine" className={getMobileClass(isMobile)}>
      <ItemsContainer />
      <ActionContainer />
    </div>
  );
};

export default DrumContainer;
