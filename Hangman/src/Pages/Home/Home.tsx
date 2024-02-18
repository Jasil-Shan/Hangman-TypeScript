import { useCallback, useEffect, useState } from "react";
import words from "../../wordList.json";
import HangmanDrawing from "../../Components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "../../Components/HangmanWord/HangmanWord";
import Keyboard from "../../Components/Keyboard/Keyboard";

const Home = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length > 5;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      console.log("ss", letter);

      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );
  console.log(wordToGuess);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();

      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, wordToGuess]);

  const handleRetry = () => {
    const newWordToGuess = words[Math.floor(Math.random() * words.length)]
    setWordToGuess(newWordToGuess)
  
    setGuessedLetters([])
  }
  

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
      <div style={{ fontSize: "2 rem", textAlign: "center" }}>
        {isWinner && "WINNER WINNER CHICKEN DINNER"}
        {isLoser && "Oh .. oh You are Dead"}
      </div>
      <HangmanDrawing numberofGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <button onClick={handleRetry}>Retry</button>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default Home;
