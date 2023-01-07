import coimbraCafe from "./coimbra_cafe.png";
import nightCafeAudio from "./coimbra_plaza_vid.m4v";

import beachCafe from "./beach_cafe.png";
import beachCafeAudio from "./alveiro_beach_cafe.m4v";

import nazare from "./nazare.png";
import nazareAudio from "./nazare.m4v";

import busker from "./busker.png";
import buskerAudio from "./guitar_lisbon_street.m4v";

import coimbraStreet from "./night_street.png";
import coimbraStreetAudio from "./arcada_street.m4v";

import soccer from "./soccer.png";
import soccerAudio from "./soccer.m4v";

import nye from "./nye.png";
import nyeAudio from "./nye_morning.m4v";

import "./App.css";

const PhotoCard = ({ title, photo, video, desc }) => {
  return (
    <div className="container">
      <h3 className="title">{title}</h3>
      {/* <h4>{desc}</h4> */}
      <img src={photo} className="photo" alt="logo" />
      <div>
        <video className="video" src={video} controls="controls" />
      </div>
      <div className="divider"></div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <h1>Sounds of Portugal</h1>
      <div className="desc-container">
        <p>
          I recently took a trip to Portugal. Here are some ChatGPT generated
          images with an accompanying sound byte from the scene of the crime.
        </p>
      </div>
      <PhotoCard
        title="Coimbra Cafe"
        photo={coimbraCafe}
        video={nightCafeAudio}
        desc="Night cafe scene with a coffee cup in the foreground"
      />
      <PhotoCard
        title="Coimbra Street"
        photo={coimbraStreet}
        video={coimbraStreetAudio}
        desc="Night cafe scene with a coffee cup in the foreground"
      />
      <PhotoCard
        title="Alveiro Beach Cafe"
        photo={beachCafe}
        video={beachCafeAudio}
        desc="Night cafe scene with a coffee cup in the foreground"
      />
      <PhotoCard
        title="Nazare Lighthouse"
        photo={nazare}
        video={nazareAudio}
        desc="Night cafe scene with a coffee cup in the foreground"
      />
      <PhotoCard
        title="Lisbon Street Artist"
        photo={busker}
        video={buskerAudio}
        desc="Night cafe scene with a coffee cup in the foreground"
      />
      <PhotoCard
        title="FC Porto"
        photo={soccer}
        video={soccerAudio}
        desc="Night cafe scene with a coffee cup in the foreground"
      />
      <PhotoCard
        title="Late night scenes from Lisbon"
        photo={nye}
        video={nyeAudio}
        desc="Night cafe scene with a coffee cup in the foreground"
      />
    </div>
  );
}

export default App;
