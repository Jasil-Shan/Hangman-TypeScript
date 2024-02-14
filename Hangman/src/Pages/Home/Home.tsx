import { useEffect, useState } from 'react'
import words from '../../worldList.json'
import HangmanDrawing from '../../Components/HangmanDrawing/HangmanDrawing';
import '../../App.css'

const Home = () => {

    const [wordToGuess, setWordToGuess] = useState<string>()
  
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
    useEffect(() => {
      (async function () {
        const data = words[Math.floor(Math.random() * words.length)]
      })();
    }, [])
  
    return (
      <>
      <div style={{fontSize:"2 rem", textAlign:"center"}}>Lose Or WIn</div>
        <HangmanDrawing />
      </>
    )
}

export default Home