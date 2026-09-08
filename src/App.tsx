import { useEffect, useState } from "react"
import word from "./wordLists.json"
import { HangmanDrawing } from "./components/HangmanDrawing"
import { HangmanWord } from "./components/HangManWord"
import { Keyboard } from "./components/Keyboard"
import { EndGame } from "./components/EndGame"
import { HasPlayed } from "./components/HasPlayed"

export const App = () => {
  const [wordToGuess] = useState<string>(() => {
    return word[Math.floor(Math.random() * word.length)]
  })

  const [correctGuessedLetters, setCorrectGuessedLetters] = useState<string[]>([])

  const [incorrectGuessedLetters, setIncorrectGuessedLetters] = useState<string[]>([])

  const isLoser = incorrectGuessedLetters.length >= 6
  const isWinner = wordToGuess.split("").every((letter) => correctGuessedLetters.includes(letter))
  console.log(wordToGuess)

  useEffect(() => {
    if(isLoser || isWinner) {
      localStorage.setItem("played", "true")
      localStorage.setItem("hasWin", isWinner ? "true" : "false")
      localStorage.setItem("hasLose", isLoser ? "true" : "false")
    }
  }, [correctGuessedLetters, incorrectGuessedLetters, wordToGuess, isLoser, isWinner])

  return (
    <div style={{
      maxWidth: "1200px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }}>
      <EndGame isWinner={isWinner} isLoser={isLoser} wordToGuess={wordToGuess} />
      <HasPlayed wordToGuess={wordToGuess}/>
      <div style={{
        fontSize: "2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <HangmanDrawing incorrectGuessedLetters={incorrectGuessedLetters}/>
        <HangmanWord guessedLetters={correctGuessedLetters} wordToGuess={wordToGuess}/> 
        <Keyboard 
          wordToGuess={wordToGuess}
          correctGuessedLetters={correctGuessedLetters}
          setCorrectGuessedLetters={setCorrectGuessedLetters}
          incorrectGuessedLetters={incorrectGuessedLetters}
          setIncorrectGuessedLetters={setIncorrectGuessedLetters}
        />
      </div>
    </div>
  )
}
