export interface KeyboardProps {
  wordToGuess: string;
  correctGuessedLetters: string[];
  setCorrectGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  setIncorrectGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  incorrectGuessedLetters: string[];
  isWinner: boolean;
  isLoser: boolean;
}