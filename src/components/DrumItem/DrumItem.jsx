import { MainCtx } from "../../context/MainCtx";
import { getItemTitle } from "../../utils/helpers";
import "./DrumItem.css";
import { useContext, useEffect, useRef } from "react";

const DrumItem = ({ item }) => {
  const { text, url, bankUrl } = item;
  const { setSelectedItem, features } = useContext(MainCtx);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.volume = features.volume / 100;
      // ref.current.addEventListener("click", () => {
      //   const sourceUrl = features.bank ? bankUrl : url;
      //   const title = getItemTitle(sourceUrl);
      //   console.log("title :>> ", title);
      //   setSelectedItem(title);
      // });
    }
  }, [features.volume]);

  const sourceUrl = features.bank ? bankUrl : url;
  const title = getItemTitle(sourceUrl);

  const handleClick = (drumPadId, audioId) => {
    const drumPadEl = document.getElementById(drumPadId);
    const audioEl = document.getElementById(audioId);
    audioEl.play();
    drumPadEl.style.background = "var(--sec-color)";
    console.log("drumPadId :>> ", drumPadId);
    setSelectedItem(drumPadId);
    setTimeout(() => {
      drumPadEl.style.background = "var(--pri-color)";
    }, 200);
  };
  // useEffect(() => {
  //   console.log("test");
  //   setSelectedItem(null);
  // }, [features.bank, title, setSelectedItem]);

  return (
    <div
      className="drum-pad"
      id={title}
      onClick={() => handleClick(title, text)}
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
