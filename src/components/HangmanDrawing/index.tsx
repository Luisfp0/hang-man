import { HangManBody } from "./components/HangManBody"
import { HangManGallows } from "./components/HangManGallows"

type HangmanDrawingProps = {
  incorrectGuessedLetters: string[]
}

export const HangmanDrawing = ({ incorrectGuessedLetters }: HangmanDrawingProps) => {
  return (
    <div style={{
      position: "relative",
    }}>
        <HangManGallows />
        <HangManBody incorrectGuessedLetters={incorrectGuessedLetters} />
    </div>
  )
}