import { Vocabulary } from '../types';

// Calculate score based on difficulty
export const calculateScore = (word: Vocabulary, isCorrect: boolean): number => {
  const baseScore = isCorrect ? 10 : -5;
  
  // Adjust score based on difficulty
  switch (word.difficulty) {
    case 'easy':
      return isCorrect ? baseScore : baseScore * 0.5; // Less penalty for easy words
    case 'medium':
      return baseScore;
    case 'hard':
      return isCorrect ? baseScore * 1.5 : baseScore; // More reward for hard words
    default:
      return baseScore;
  }
};

// Get next review date using spaced repetition algorithm
export const getNextReviewDate = (
  word: Vocabulary, 
  isCorrect: boolean, 
  previousInterval: number = 1
): Date => {
  // Simple spaced repetition algorithm
  // If correct, increase interval exponentially
  // If incorrect, reset to a short interval
  
  let nextInterval = isCorrect 
    ? Math.round(previousInterval * 2) 
    : 1;
    
  // Cap the maximum interval to 60 days
  nextInterval = Math.min(nextInterval, 60);
  
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + nextInterval);
  
  return nextDate;
};

// Shuffle array (Fisher-Yates algorithm)
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};