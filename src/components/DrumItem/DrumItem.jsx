import "./DrumItem.css";
const DrumItem = ({ item }) => {
  const { text, id, url } = item;
  return (
    <div className="drum-pad" id={id}>
      {text}
      <audio className="clip" id={id} src={url}></audio>
    </div>
  );
};

export default DrumItem;
