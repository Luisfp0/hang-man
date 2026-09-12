import { useState } from "react"
import dataSet from "./words.json" with {type:"json"}
import { HangmanDrawing } from "./components/HangmanDrawing"
import { HangmanWord } from "./components/HangManWord"
import { Keyboard } from "./components/Keyboard"
import { EndGame } from "./components/EndGame"
// import { HasPlayed } from "./components/HasPlayed"
const wordList = dataSet.words

export const App = () => {
  const [theme, setTheme] = useState("Geral")
  const [wordsBySelectedTheme, setWordBySelectedTheme] = useState(dataSet.words.find(element => element.theme === theme).words)
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return wordsBySelectedTheme[Math.floor(Math.random() * wordsBySelectedTheme.length)]
  })

  const [correctGuessedLetters, setCorrectGuessedLetters] = useState<string[]>([])

  const [incorrectGuessedLetters, setIncorrectGuessedLetters] = useState<string[]>([])

  const isLoser = incorrectGuessedLetters.length >= 6
  const isWinner = wordToGuess.split("").every((letter) => correctGuessedLetters.includes(letter))

  const retry = () => {
    setCorrectGuessedLetters([])
    setIncorrectGuessedLetters([])
    const availableWords = wordsBySelectedTheme.filter((currentWord) => currentWord !== wordToGuess)
    setWordToGuess(availableWords[Math.floor(Math.random() * wordsBySelectedTheme.length)])
  }

  const onChangeTheme = ((theme: string) => {
    setTheme(theme)
    const availableWords = wordList.find(element => element.theme === theme).words
    setWordBySelectedTheme(availableWords)
    const word = availableWords[Math.floor(Math.random() * availableWords.length)]
    setWordToGuess(word)
  })

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
        <div style={{
          display: "flex",
          gap: "15px"
        }}>
          Tema:
          <select onChange={(e) => onChangeTheme(e.target.value)}>
            {
              wordList.map((item) => (
                <option value={item.theme}>{item.theme}</option>
              ))
            }
          </select>
        </div>
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
