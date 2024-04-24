import "./App.css";
import DrumContainer from "./components/DrumContainer/DrumContainer";
import AuthorLabel from "./components/UI/AuthorLabel/AuthorLabel";
import MainCtxProvider from "./context/MainCtx";

function App() {
  return (
    <MainCtxProvider>
      <div className="App">
        <DrumContainer />
        <AuthorLabel />
      </div>
    </MainCtxProvider>
  );
}

export default App;
