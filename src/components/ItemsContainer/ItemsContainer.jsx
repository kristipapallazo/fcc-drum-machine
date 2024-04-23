import { useContext } from "react";
import DrumItem from "../DrumItem/DrumItem";
import classes from "./ItemsContainer.module.css";
import { MainCtx } from "../../App";

const ItemsContainer = (props) => {
  const { store } = useContext(MainCtx);
  console.log("store :>> ", store);
  const drumItems = store.map((item) => <DrumItem key={item.id} item={item} />);

  return <div className={classes.container}>{drumItems}</div>;
};

export default ItemsContainer;
