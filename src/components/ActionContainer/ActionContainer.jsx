import { useContext } from "react";
import classes from "./ActionContainer.module.css";
import { MainCtx } from "../../context/MainCtx";
import SwitchBtn from "../UI/SwitchBtn/SwitchBtn";
import VolumeControl from "../UI/Volume/Volume";

const ActionContainer = () => {
  const { selectedItem } = useContext(MainCtx);
  console.log("selectedItem :>> ", selectedItem);
  return (
    <div className={classes.container}>
      <SwitchBtn label="Power" id="power" />
      <div id="display">{selectedItem}</div>
      <VolumeControl />
      <SwitchBtn label="Bank" id="bank" />
    </div>
  );
};

export default ActionContainer;
