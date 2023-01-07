import nightCafe from "./night_cafe.png";
import nightCafeAudio from "./coimbra_plaza_vid.m4v";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={nightCafe} className="App-logo" alt="logo" />
        <video
          src={nightCafeAudio}
          width="600"
          height="300"
          controls="controls"
          autoplay="true"
        />

        <p>this is a change</p>
      </header>
    </div>
  );
}

export default App;
