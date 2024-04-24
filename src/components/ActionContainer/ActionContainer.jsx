import { useContext } from "react";
import classes from "./ActionContainer.module.css";
import { MainCtx } from "../../context/MainCtx";
import SwitchBtn from "../UI/SwitchBtn/SwitchBtn";

const ActionContainer = () => {
  const { selectedItem } = useContext(MainCtx);
  console.log("selectedItem :>> ", selectedItem);
  return (
    <div className={classes.container}>
      <SwitchBtn label="Power" id="power" />
      <div id="display">{selectedItem}</div>
      <div>line</div>
      <SwitchBtn label="Bank" id="bank" />
    </div>
  );
};

export default ActionContainer;
