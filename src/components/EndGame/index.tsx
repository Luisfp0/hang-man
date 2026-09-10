import type { EndGameProps } from "./types"

const rockFont = '"New Rocker", Impact, fantasy'

export const EndGame = ({isWinner, isLoser, wordToGuess, retry}: EndGameProps) => {
  if (!isWinner && !isLoser) return null

  const accent = isWinner ? "#ffd700" : "#ff2a2a"

  return (  
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      gap: "1.2rem",
      width: "clamp(280px, 95%, 600px)",
      minHeight: "280px",
      padding: "1.75rem 1.5rem",
      boxSizing: "border-box",
      border: `4px solid ${accent}`,
      background: isWinner
        ? "linear-gradient(160deg, #2a2208 0%, #0c0c0c 40%, #000 100%)"
        : "linear-gradient(160deg, #3a0000 0%, #0c0c0c 40%, #000 100%)",
      borderRadius: "6px",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%) rotate(-1.2deg)",
      zIndex: 1,
      fontFamily: rockFont,
      color: "#f5f5f5",
      textAlign: "center",
      boxShadow: `0 0 28px ${accent}, 0 12px 0 #111, inset 0 0 40px rgba(0,0,0,0.55)`,
    }}>
      {
        isWinner ? (
          <span style={{ 
          fontSize: "clamp(1.6rem, 5vw, 2.4rem)", 
          color: "#ffd700", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          width: '100%',
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textShadow: "0 0 12px #ffd700, 3px 3px 0 #000",
          }}>
            Acerto mizeravi
          </span>
        ) : 
        <div style={{display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "12px", 
          color: "#f5f5f5"}}>
          <span style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            width: '100%',
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#ff2a2a",
            textShadow: "0 0 14px #ff2a2a, 3px 3px 0 #000",
          }}>
            NT(nem tentou) 
          </span>
          <span style={{
            fontSize: "0.95rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#bbb",
          }}>
            The word was: 
          </span>
          <span style={{
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            color: "#ffd700",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "underline",
            textUnderlineOffset: "6px",
            textShadow: "0 0 10px #ffd700",
          }}>
            {wordToGuess}
          </span>
        </div>
      }
      <button
        className="try-again-rock"
        onClick={(() => retry())}
        style={{
          fontFamily: rockFont,
          fontSize: "1.4rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#ffd700",
          background: "linear-gradient(180deg, #2a2a2a 0%, #0a0a0a 50%, #000 100%)",
          border: "3px solid #ffd700",
          borderRadius: "2px",
          padding: "12px 28px",
          cursor: "pointer",
          textShadow: "0 0 8px #ff2a2a, 2px 2px 0 #000",
          boxShadow:
            "0 4px 0 #5a0000, 0 0 12px rgba(255, 42, 42, 0.55), inset 0 1px 0 #666",
        }}
      >
        {isWinner ? "Play Again" : "Try Again"}
      </button>
    </div>
  )
}
