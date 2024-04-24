import { useContext, useEffect, useState } from "react";
import classes from "./Volume.module.css";
import { MainCtx } from "../../../context/MainCtx";

const VolumeControl = () => {
  const [volume, setVolume] = useState(50);
  const { setFeatures } = useContext(MainCtx);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };
  useEffect(() => {
    setFeatures((prev) => ({ ...prev, volume }));
  }, [volume, setFeatures]);

  return (
    <div className={classes.container}>
      <h2 className={classes.label}>Volume Control</h2>
      <input
        className={classes.input}
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <p className={classes.volResp}>Volume: {volume}</p>
    </div>
  );
};

export default VolumeControl;
