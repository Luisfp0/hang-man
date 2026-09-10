import { HangManBody } from "./components/HangManBody"
import { HangManGallows } from "./components/HangManGallows"
import type { HangmanDrawingProps } from "./types"

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