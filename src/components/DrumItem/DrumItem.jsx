import { MainCtx } from "../../context/MainCtx";
import "./DrumItem.css";
import { useContext } from "react";

const DrumItem = ({ item }) => {
  const { text, id, url, bankUrl } = item;
  const { setSelectedItem, features } = useContext(MainCtx);
  const handleClick = (id) => {
    const drumPadEl = document.getElementById(id);
    console.log("drumPadEl :>> ", drumPadEl);
    drumPadEl.style.background = "var(--sec-color)";
    setSelectedItem(id);
    setTimeout(() => {
      drumPadEl.style.background = "var(--pri-color)";
    }, 200);
  };
  const sourceUrl = features.bank ? bankUrl : url;

  return (
    <div className="drum-pad" id={id} onClick={() => handleClick(id)}>
      <audio className="clip" id={text}>
        <source src={sourceUrl} type="audio/mp3"></source>
      </audio>
      {text}
    </div>
  );
};

export default DrumItem;
