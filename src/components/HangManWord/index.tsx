import type { HangmanWordProps } from "./types"

export const HangmanWord = ({guessedLetters, wordToGuess}: HangmanWordProps) => {
  const wordSplit = wordToGuess ?? ""
  const wordSplitArray = wordSplit.split("")
  return (
    <div style={{
      display: "flex",
      gap: ".25em",
      fontSize: "6rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "monospace",
    }}>
      {wordSplitArray.map((letter, index) => (
        <div key={index} 
          style={{ borderBottom: ".1em solid black",
        }}>
          <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
          }}>{letter}</span>
        </div>
      ))}
    </div>
  )
}