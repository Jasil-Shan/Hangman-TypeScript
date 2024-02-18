import { useEffect, useState } from "react";
import words from "../../worldList.json";
import HangmanDrawing from "../../Components/HangmanDrawing/HangmanDrawing";
import "../../App.css";
import HangmanWord from "../../Components/HangmanWord/HangmanWord";
import Keyboard from "../../Components/Keyboard/Keyboard";

const Home = () => {
  const [wordToGuess, setWordToGuess] = useState<string>();

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    (async function () {
      const data = words[Math.floor(Math.random() * words.length)];
    })();
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2 rem", textAlign: "center" }}>Lose Or WIn</div>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;
