import type { EndGameProps } from "./types"

export const EndGame = ({isWinner, isLoser, wordToGuess, retry}: EndGameProps) => {
  if (!isWinner && !isLoser) return null

  return (  
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      width: "550px",
      height: "250px",
      border: "3px solid black",
      backgroundColor: isWinner ? "green" : "red",
      opacity: 0.98,
      borderRadius: "30px",
      position: "absolute",
      zIndex: 1,
    }}>
      {
        isWinner ? (
          <span style={{ 
          fontSize: "2rem", 
          color: "white", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          width: '100%' 
          }}>
            Acerto mizeravi
          </span>
        ) : 
        <div style={{display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "10px", 
          fontSize: "2rem", 
          color: "white"}}>
          <span style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            width: '100%' 
          }}>
            NT(nem tentou) 
          </span>
          <span>
            The word was: 
          </span>
          <span style={{
            textDecoration: "underline"
          }}>
            {wordToGuess}
          </span>
        </div>
      }
      <button 
        onClick={(() => retry())}
        style={{
          fontSize: "1rem",
          border: "3px solid rgb(0, 0, 0)",
          borderRadius: "5px",
          padding: "15px"
        }}>
        Tentar novamente pra Lele testar {"<3"}
      </button>
    </div>
  )
}
