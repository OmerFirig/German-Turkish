export interface Vocabulary {
  id: string;
  german: string;
  turkish: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  example?: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export interface GameState {
  currentCardIndex: number;
  score: number;
  cardsReviewed: number;
  correctAnswers: number;
  incorrectAnswers: number;
  favorites: string[];
  selectedCategories: string[];
  gameMode: 'learn' | 'quiz';
}