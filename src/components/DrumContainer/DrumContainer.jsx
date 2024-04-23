import ActionContainer from "../ActionContainer/ActionContainer";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import "./DrumContainer.css";

const DrumContainer = (props) => {
  return (
    <div id="drum-machine">
      <ItemsContainer />
      <ActionContainer />
      {/* <div id="display"></div> */}
    </div>
  );
};

export default DrumContainer;
