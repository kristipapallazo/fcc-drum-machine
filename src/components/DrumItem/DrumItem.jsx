import { MainCtx } from "../../App";
import "./DrumItem.css";
import { useContext } from "react";

const DrumItem = ({ item }) => {
  const { text, id, url } = item;
  const { setSelectedItem } = useContext(MainCtx);
  const handleClick = (id) => {
    const el = document.getElementById(id);
    console.log("el :>> ", el);
    el.style.background = "var(--sec-color)";
    setSelectedItem(id);
    setTimeout(() => {
      el.style.background = "var(--pri-color)";
    }, 200);
  };

  return (
    <div className="drum-pad" id={id} onClick={() => handleClick(id)}>
      {text}
      <audio className="clip" id={id} src={url}></audio>
    </div>
  );
};

export default DrumItem;
