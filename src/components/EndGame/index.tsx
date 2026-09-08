import type { EndGameProps } from "./types"

export const EndGame = ({isWinner, isLoser, wordToGuess}: EndGameProps) => {
  if (!isWinner && !isLoser) return null

  return (  
    <div style={{
      display: "flex",
      width: "550px",
      height: "250px",
      backgroundColor: isWinner ? "green" : "red",
      opacity: 0.98,
      borderRadius: "50px",
      position: "absolute",
      zIndex: 1,
    }}>
      <span style={{ 
        fontSize: "2rem", 
        color: "white", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        width: '100%' 
        }}>
          {isWinner ? "Winner!" : `Nice try! The word was: ${wordToGuess}`}
        </span>
    </div>
  )
}
