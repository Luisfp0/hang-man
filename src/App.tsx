import { useState } from "react"
import words from "./wordLists.json"
import { HangmanDrawing } from "./components/HangmanDrawing"
import { HangmanWord } from "./components/HangManWord"
import { Keyboard } from "./components/Keyboard"
import { EndGame } from "./components/EndGame"
// import { HasPlayed } from "./components/HasPlayed"

export const App = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [correctGuessedLetters, setCorrectGuessedLetters] = useState<string[]>([])

  const [incorrectGuessedLetters, setIncorrectGuessedLetters] = useState<string[]>([])

  const isLoser = incorrectGuessedLetters.length >= 6
  const isWinner = wordToGuess.split("").every((letter) => correctGuessedLetters.includes(letter))
  
  const retry = () => {
    setCorrectGuessedLetters([])
    setIncorrectGuessedLetters([])
    const availableWords = words.filter((currentWord) => currentWord !== wordToGuess)
    setWordToGuess(availableWords[Math.floor(Math.random() * words.length)])
  }

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
      <EndGame retry={retry} isWinner={isWinner} isLoser={isLoser} wordToGuess={wordToGuess} />
      {/* <HasPlayed retry={() => retry()} wordToGuess={wordToGuess} isWinner={isWinner} isLoser={isLoser}/> */}
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
          isLoser={isLoser}
          isWinner={isWinner}
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
