import { useCallback, useEffect, useState } from "react";
import words from "../../wordList.json";
import HangmanDrawing from "../../Components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "../../Components/HangmanWord/HangmanWord";
import Keyboard from "../../Components/Keyboard/Keyboard";
import Swal from "sweetalert2";

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
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );
  console.log(wordToGuess);

 useCallback ( ()=> {
  if(incorrectLetters.length == 5){
    Swal.fire({
      title: "Going to Die!",
      text: "You Need a Hint?",
      icon: "question",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToGuess}`)
          if (!response.ok) {
            throw new Error('Failed to fetch data')
          }
          const data = await response.json()
          Swal.fire({
            title: "Hint",
            text: `Synonym of word : ${data[0]?.meanings[1]?.synonyms[0] || data[0].meanings[0].synonyms[0]}`,
            icon: "question",
            cancelButtonText: "Ok",
          })
          console.log(data[0].meanings[1].synonyms[0]);
          
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    });
  }},[incorrectLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();

      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    if (isLoser) {
      Swal.fire({
        title: "Oh oh.. You are Dead",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat`,
        confirmButtonColor: "#716add",
        confirmButtonText: "Retry",
      }).then((result) => {
        if (result.isConfirmed) {
          handleRetry();
        }
      });
    } else if (isWinner) {
      Swal.fire({
        title: "WINNER WINNER CHICKEN DINNER",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat`,
        confirmButtonColor: "green",
        confirmButtonText: "Retry",
      }).then((result) => {
        if (result.isConfirmed) {
            handleRetry();
        }
      });
    }
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  const handleRetry = () => {
    const newWordToGuess = words[Math.floor(Math.random() * words.length)];
    setWordToGuess(newWordToGuess);

    setGuessedLetters([]);
  };

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
      <div
        style={{
          margin: "25px",
          width: "100%",
          fontSize: "2.5rem",
          fontWeight: "bolder",
          textAlign: "center",
          color: "whitesmoke",
        }}
      >
        <span>HANGMAN</span>
      </div>
      <HangmanDrawing numberofGuesses={incorrectLetters.length} />

      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
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
