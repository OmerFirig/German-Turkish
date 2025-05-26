import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { Howl } from 'howler';
import Card from '../components/Card';
import GameControls from '../components/GameControls';
import CategorySelector from '../components/CategorySelector';
import ScoreDisplay from '../components/ScoreDisplay';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import DailyGoal from '../components/DailyGoal';
import { Vocabulary } from '../types';
import { getRandomVocabulary, vocabularyData } from '../data/vocabulary';
import { Moon, Sun, Volume2, VolumeX } from 'lucide-react';

// Create sound objects
const sounds = {
  correct: new Howl({ src: ['/sounds/correct.mp3'] }),
  incorrect: new Howl({ src: ['/sounds/incorrect.mp3'] }),
  flip: new Howl({ src: ['/sounds/flip.mp3'] })
};

const STORAGE_KEYS = {
  FAVORITES: 'german-flashcards-favorites',
  LAST_SELECTED_CATEGORIES: 'german-flashcards-categories',
  HIGH_SCORE: 'german-flashcards-high-score',
  STREAK: 'german-flashcards-streak',
  LAST_REVIEW_DATES: 'german-flashcards-review-dates',
  MASTERED_WORDS: 'german-flashcards-mastered',
  DAILY_GOAL: 'german-flashcards-daily-goal',
  WORDS_LEARNED_TODAY: 'german-flashcards-learned-today',
  LAST_ACTIVE_DATE: 'german-flashcards-last-active',
  STATISTICS: 'german-flashcards-statistics',
  SOUND_ENABLED: 'german-flashcards-sound',
  NIGHT_MODE: 'german-flashcards-night-mode'
};

const GamePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'learn' | 'quiz' | 'favorites'>('learn');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['basics']);
  const [cards, setCards] = useState<Vocabulary[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return stored ? JSON.parse(stored) : [];
  });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.HIGH_SCORE);
    return stored ? parseInt(stored, 10) : 0;
  });
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [totalReviewed, setTotalReviewed] = useState(0);
  const [streak, setStreak] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.STREAK);
    return stored ? parseInt(stored, 10) : 0;
  });
  
  const [showConfetti, setShowConfetti] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.DAILY_GOAL);
    return stored ? parseInt(stored, 10) : 10;
  });
  
  const [wordsLearnedToday, setWordsLearnedToday] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.WORDS_LEARNED_TODAY);
    return stored ? parseInt(stored, 10) : 0;
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.SOUND_ENABLED);
    return stored ? JSON.parse(stored) : true;
  });

  const [nightMode, setNightMode] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.NIGHT_MODE);
    return stored ? JSON.parse(stored) : false;
  });

  // Initialize or update cards when selected categories change
  useEffect(() => {
    if (activeTab === 'favorites') {
      const favoriteCards = vocabularyData.filter(word => favorites.includes(word.id));
      setCards(favoriteCards);
    } else {
      const newCards = getRandomVocabulary(20, selectedCategories);
      setCards(newCards);
    }
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
  }, [selectedCategories, activeTab, favorites]);

  // Save favorites
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  // Save high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem(STORAGE_KEYS.HIGH_SCORE, score.toString());
    }
  }, [score, highScore]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        // Don't allow deselecting the last category
        if (prev.length === 1) return prev;
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsCardFlipped(false);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsCardFlipped(false);
    }
  };

  const handleFlipCard = () => {
    if (soundEnabled) {
      sounds.flip.play();
    }
    setIsCardFlipped(prev => !prev);
  };

  const handleToggleFavorite = (wordId: string) => {
    setFavorites(prev => {
      if (prev.includes(wordId)) {
        return prev.filter(id => id !== wordId);
      } else {
        return [...prev, wordId];
      }
    });
  };

  const handleCorrectAnswer = () => {
    if (soundEnabled) {
      sounds.correct.play();
    }
    setScore(prev => prev + 10);
    setCorrectAnswers(prev => prev + 1);
    setTotalReviewed(prev => prev + 1);
    setWordsLearnedToday(prev => prev + 1);
    handleNextCard();
  };

  const handleIncorrectAnswer = () => {
    if (soundEnabled) {
      sounds.incorrect.play();
    }
    setScore(prev => Math.max(0, prev - 5));
    setIncorrectAnswers(prev => prev + 1);
    setTotalReviewed(prev => prev + 1);
    handleNextCard();
  };

  const handleReset = () => {
    const newCards = getRandomVocabulary(20, selectedCategories);
    setCards(newCards);
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
  };

  const handleChangeTab = (tab: 'learn' | 'quiz' | 'favorites') => {
    setActiveTab(tab);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setTotalReviewed(0);
  };

  return (
    <div className={`min-h-screen ${nightMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {showConfetti && <ReactConfetti />}
      
      <Header activeTab={activeTab} onChangeTab={handleChangeTab} />

      <main className="max-w-5xl mx-auto px-4 pb-16">
        <div className="flex justify-end space-x-4 mb-4">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {soundEnabled ? <Volume2 /> : <VolumeX />}
          </button>
          <button
            onClick={() => setNightMode(!nightMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {nightMode ? <Sun /> : <Moon />}
          </button>
        </div>

        <DailyGoal
          current={wordsLearnedToday}
          goal={dailyGoal}
          streak={streak}
          onUpdateGoal={setDailyGoal}
        />

        {activeTab !== 'favorites' && (
          <CategorySelector
            selectedCategories={selectedCategories}
            onSelectCategory={handleCategorySelect}
          />
        )}

        {cards.length > 0 ? (
          <>
            <Card
              word={cards[currentCardIndex]}
              isFlipped={isCardFlipped}
              onFlip={handleFlipCard}
              isFavorite={favorites.includes(cards[currentCardIndex].id)}
              onToggleFavorite={() => handleToggleFavorite(cards[currentCardIndex].id)}
              showAnswer={activeTab === 'learn' && isCardFlipped}
            />

            <GameControls
              onPrevious={handlePreviousCard}
              onNext={handleNextCard}
              onCorrect={activeTab === 'quiz' ? handleCorrectAnswer : undefined}
              onIncorrect={activeTab === 'quiz' ? handleIncorrectAnswer : undefined}
              onReset={handleReset}
              isQuizMode={activeTab === 'quiz'}
              isFirst={currentCardIndex === 0}
              isLast={currentCardIndex === cards.length - 1}
              totalCards={cards.length}
              currentIndex={currentCardIndex}
            />

            {activeTab === 'quiz' && (
              <div className="mt-8">
                <ScoreDisplay
                  score={score}
                  correctAnswers={correctAnswers}
                  incorrectAnswers={incorrectAnswers}
                  totalReviewed={totalReviewed}
                  highScore={highScore}
                />
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl shadow-md p-6">
            <p className="text-xl text-gray-600 mb-4">
              {activeTab === 'favorites' 
                ? 'Henüz favori kelime eklemediniz.' 
                : 'Bu kategoride kelime bulunamadı.'}
            </p>
            {activeTab === 'favorites' && (
              <button
                onClick={() => setActiveTab('learn')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Öğrenmeye Başla
              </button>
            )}
          </div>
        )}

        <Statistics
          totalWordsLearned={correctAnswers}
          longestStreak={streak}
          masteredWords={favorites.length}
          averageAccuracy={totalReviewed > 0 ? (correctAnswers / totalReviewed) * 100 : 0}
          daysActive={streak}
          dailyGoalAchievements={Math.floor(wordsLearnedToday / dailyGoal)}
        />
      </main>
    </div>
  );
};

export default GamePage;