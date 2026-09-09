export interface EndGameProps {
  isWinner: boolean;
  isLoser: boolean;
  wordToGuess: string;
  retry: () => void;
}