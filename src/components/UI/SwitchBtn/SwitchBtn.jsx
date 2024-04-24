import { useContext } from "react";
import classes from "./SwitchBtn.module.css";
import { MainCtx } from "../../../context/MainCtx";

const SwitchBtn = (props) => {
  const { id, label = "" } = props;
  const { features, setFeatures } = useContext(MainCtx);
  console.log("features :>> ", features);
  const isEnable = features[id];
  const handleClick = () => {
    setFeatures({ ...features, [id]: !features[id] });
  };

  console.log("isEnable :>> ", isEnable);
  return (
    <div className={classes.container}>
      <span className={classes.label}>{label}:</span>
      <button className={classes.btn} onClick={handleClick}>
        <span
          className={`${classes.circle} ${!isEnable ? classes.unable : ""}`}
        ></span>
      </button>
    </div>
  );
};

export default SwitchBtn;
