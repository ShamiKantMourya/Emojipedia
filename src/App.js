import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😅": "Grinning Face With Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "🤑": "Money-Mouth Face",
  "😐": "Neutral-face",
  "😏": "Smirking Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "🥴": "Woozy Face",
  "😟": " Worried Face"
};
var emojis = Object.keys(emojiDictionary);
export default function App() {
  const [emojiInput, setEmojiInput] = useState("");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var emojiInput = emojiDictionary[userInput];
    setEmojiInput(emojiInput);
  }
  function emojiClickHandler(emoji) {
    var emojiInput = emojiDictionary[emoji];
    setEmojiInput(emojiInput);
  }
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Emojipedia</h1>
      <input onChange={emojiHandler} />
      <h2> {emojiInput} </h2>
      <h3>Emojis We Have</h3>
      {emojis.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
