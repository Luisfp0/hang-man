import type { HasPlayedProps } from "./types";

export const HasPlayed = ({ wordToGuess}: HasPlayedProps) => {
  const alreadyPlayed = localStorage.getItem("played")  
  const hasWin = localStorage.getItem("haWin")

  const targetTime = new Date();
  targetTime.setHours(15, 0, 0, 0)
  const currentTime = new Date()

  const timeUntilNextWord = targetTime.getHours() - currentTime.getHours() + 24

  if(alreadyPlayed) return(
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "550px",
      height: "250px",
      backgroundColor: hasWin ? "green" : "red",
      opacity: 0.98,
      borderRadius: "50px",
      position: "absolute",
      zIndex: 1,
      gap: "10px"
    }}>
      <span style={{ 
        fontSize: "2rem",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
        }}>
          Você {hasWin ? "ganhou" : "perdeu"}!
      </span>
      <span style={{
        fontSize: "2rem", 
        color: "white", 
        }}>
          A última palavra foi "{wordToGuess}"
      </span>
      <span style={{ 
        fontSize: "2rem", 
        color: "white", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        width: '100%' 
      }}>
        Próxima palavra em: {timeUntilNextWord} horas.
      </span>
    </div>
  )
}