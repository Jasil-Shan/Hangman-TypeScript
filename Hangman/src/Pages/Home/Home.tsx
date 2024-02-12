import { useEffect, useState } from 'react'
import words from '../../worldList.json'
import HangmanDrawing from '../../Components/HangmanDrawing/HangmanDrawing';
import '../../App.css'

const Home = () => {

    const [wordToGuess, setWordToGuess] = useState<string>()
    console.log(wordToGuess);
  
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
    useEffect(() => {
      (async function () {
        const data = words[Math.floor(Math.random() * words.length)]
      })();
    }, [])
  
    return (
      <>
        <HangmanDrawing />
      </>
    )
}

export default Home