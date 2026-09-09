export interface HasPlayedProps {
  wordToGuess: string;
  isWinner: boolean;
  retry: () => void;
}