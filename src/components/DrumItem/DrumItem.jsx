import { MainCtx } from "../../context/MainCtx";
import { getItemTitle } from "../../utils/helpers";
import "./DrumItem.css";
import { useContext, useEffect, useRef } from "react";

export const handleClick = (title, text, setSelectedItem) => {
  const drumPadEl = document.getElementById(title);
  const audioEl = document.getElementById(text);
  audioEl.play();
  drumPadEl.style.background = "var(--sec-color)";
  drumPadEl.style.boxShadow = "2px 2px 5px inset black";
  // document.getElementById('display').innerHTML = title
  setSelectedItem(title);

  setTimeout(() => {
    drumPadEl.style.background = "var(--pri-color)";
    drumPadEl.style.boxShadow = "2px 2px 5px gray";
  }, 200);
};

const DrumItem = ({ item }) => {
  const { text, url, bankUrl } = item;
  const { features, setSelectedItem } = useContext(MainCtx);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.volume = features.volume / 100;
    }
  }, [features.volume]);

  const sourceUrl = features.bank ? bankUrl : url;
  const title = getItemTitle(sourceUrl);

  return (
    <div
      className="drum-pad"
      id={title}
      onClick={() => handleClick(title, text, setSelectedItem)}
    >
      <audio
        className="clip"
        id={text}
        muted={!features.power}
        src={sourceUrl}
        ref={ref}
      ></audio>
      {text}
    </div>
  );
};

export default DrumItem;
