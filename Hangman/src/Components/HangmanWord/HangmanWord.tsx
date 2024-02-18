type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
  handleRetry?: () => void;
};

const HangmanWord = ({
  reveal = false,
  guessedLetters,
  wordToGuess,
  handleRetry,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "4rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        margin:"20px"
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "green",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
      <div>
        <button onClick={handleRetry}>Retry</button>
        <button onClick={handleRetry}>Hint</button>
      </div>
    </div>
    
  );
};

export default HangmanWord;
