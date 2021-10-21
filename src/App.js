import { useEffect, useState } from "react";
import "./App.css";

const drumPads = [
  {
    key: "Q",
    song: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    song: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    song: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    song: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    song: "Heater-6",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    song: "Dsc_Oh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    song: "Kick_n_Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    song: "RP4_KICK_1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    song: "Cev_H2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [text, setText] = useState("");

  const handleClick = (key, song) => {
    const audio = document.getElementById(key);
    setText(song);
    audio.play();
  };

  useEffect(() => {
    window.onkeydown = (e) => {
      const pad = drumPads.find((item) => item.key === e.key.toUpperCase());

      if (pad) {
        const audio = document.getElementById(pad.key);
        setText(pad.song);
        audio.play();
      }
    };
  }, []);

  return (
    <div id="drum-machine">
      <ul className="list">
        {drumPads.map((item, index) => (
          <li
            className="drum-pad"
            id={item.song}
            key={index}
            onClick={() => handleClick(item.key, item.song)}
          >
            {item.key}
            <audio id={item.key} className="clip" src={item.url} />
          </li>
        ))}
      </ul>
      {text && <div id="display">{text}</div>}
    </div>
  );
}
export default App;
