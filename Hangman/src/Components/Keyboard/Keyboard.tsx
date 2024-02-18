import styles from "./Keyboard.module.css";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetters,
}: KeyboardProps) => {
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {alphabets.map((letter) => {
        const isActive = activeLetters?.includes(letter)
        const isInactive = inactiveLetters?.includes(letter)
        return (
          <button
            onClick={() => addGuessedLetters(letter)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""} `}
            key={letter}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
