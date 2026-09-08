import { Arm } from "./components/Arm"
import { Body } from "./components/Body"
import { Feet } from "./components/feet"
import { Head } from "./components/Head"

type HangManBodyProps = {
  incorrectGuessedLetters: string[]
}

export const HangManBody = ({ incorrectGuessedLetters }: HangManBodyProps) => {
  const incorrectLetters = incorrectGuessedLetters.length

  const showHead = incorrectLetters >= 1
  const showBody = incorrectLetters >= 2
  const showRightArm = incorrectLetters >= 3
  const showLeftArm = incorrectLetters >= 4
  const showRightFoot = incorrectLetters >= 5
  const showLeftFoot = incorrectLetters >= 6

  return (
    <div style={{ position: "absolute", right: 0, top: 0 }}>
      <div style={{ position: "relative" }}>
        {showHead && <Head />}
        {showBody && <Body />}
        {showRightArm && <Arm customPosition={{ right: "-5px", top: "150px", transform: "rotate(-40deg)" }} />}
        {showLeftArm && <Arm customPosition={{ right: "-55px", top: "150px", transform: "rotate(40deg)" }} />}
        {showRightFoot && <Feet customPosition={{ right: "-5px", bottom: "-308px", transform: "rotate(-40deg)" }} />}
        {showLeftFoot && <Feet customPosition={{ right: "-55px", bottom: "-308px", transform: "rotate(40deg)" }} />}
      </div>
    </div>
  )
}