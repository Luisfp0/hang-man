import type { KeyboardProps } from "./types"
import { KEYS } from "./utils"

export const Keyboard = ({wordToGuess, correctGuessedLetters, setCorrectGuessedLetters, setIncorrectGuessedLetters, incorrectGuessedLetters}: KeyboardProps) => {
  const keys = KEYS
  const onClickWord = (key: string) => {
    if(wordToGuess.includes(key)){
      setCorrectGuessedLetters((currentLetters) => [...currentLetters, key])
    } else {
      setIncorrectGuessedLetters((currentLetters) => [...currentLetters, key])
    }
  }
  return (
    <div style={{display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "space-between"}}>
      {keys.map( (key) => {
        const isGuessed = correctGuessedLetters.includes(key)
        const isIncorrect = incorrectGuessedLetters.includes(key)
        return <button 
        style={{
          display: "flex",
          border: "1px solid black",
          padding: "25px",
          backgroundColor: isGuessed ? "green" : isIncorrect ? "red" : "white",
        }} key={key} onClick={() => onClickWord(key)}>
          <span>{key}</span>
        </button>
      })}
    </div>
  )
}