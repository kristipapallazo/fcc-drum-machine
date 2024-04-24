import { useContext } from "react";
import classes from "./SwitchBtn.module.css";
import { MainCtx } from "../../../context/MainCtx";

const getStatusClass = (isActive) =>
  isActive ? classes.active : classes.notActive;

const SwitchBtn = (props) => {
  const { id, label = "" } = props;
  const { features, setFeatures } = useContext(MainCtx);
  const isActive = features[id];
  const handleClick = () => {
    setFeatures({ ...features, [id]: !features[id] });
  };

  const btnClass = `${classes.btn} ${getStatusClass(isActive)}`;
  const statusClass = `${classes.status} ${getStatusClass(isActive)}`;
  const smallCircleClass = `${classes.smallCircle} ${getStatusClass(isActive)}`;
  return (
    <div className={classes.container}>
      <span className={classes.label}>{label}:</span>
      <button className={btnClass} onClick={handleClick}>
        <span className={classes.circle}>
          <span className={statusClass}>{isActive ? "On" : "Off"}</span>
          <span className={smallCircleClass}></span>
        </span>
      </button>
    </div>
  );
};

export default SwitchBtn;
