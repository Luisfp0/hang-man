import type { HangmanWordProps } from "./types"

export const HangmanWord = ({guessedLetters, wordToGuess}: HangmanWordProps) => {
  const wordSplit = wordToGuess ?? ""
  const wordSplitArray = wordSplit.split("")
  return (
    <div style={{
      display: "flex",
      gap: ".25em",
      fontSize: "clamp(1.5rem, 5vw, 6rem)",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "monospace",
    }}>
      {wordSplitArray.map((letter, index) => (
        <div key={index} 
          style={{ borderBottom: "5px solid black",
        }}>
          <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
          }}>{letter}</span>
        </div>
      ))}
    </div>
  )
}