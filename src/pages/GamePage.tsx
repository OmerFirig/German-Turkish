import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import GameControls from '../components/GameControls';
import CategorySelector from '../components/CategorySelector';
import ScoreDisplay from '../components/ScoreDisplay';
import Header from '../components/Header';
import { Vocabulary } from '../types';
import { getRandomVocabulary, vocabularyData } from '../data/vocabulary';

const GamePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'learn' | 'quiz' | 'favorites'>('learn');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['basics']);
  const [cards, setCards] = useState<Vocabulary[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [totalReviewed, setTotalReviewed] = useState(0);

  // Initialize or update cards when selected categories change
  useEffect(() => {
    if (activeTab === 'favorites') {
      const favoriteCards = vocabularyData.filter(word => favorites.includes(word.id));
      setCards(favoriteCards.length > 0 ? favoriteCards : []);
    } else {
      const newCards = getRandomVocabulary(20, selectedCategories.length > 0 ? selectedCategories : undefined);
      setCards(newCards);
    }
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
  }, [selectedCategories, activeTab, favorites]);

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
    setScore(prev => prev + 10);
    setCorrectAnswers(prev => prev + 1);
    setTotalReviewed(prev => prev + 1);
    handleNextCard();
  };

  const handleIncorrectAnswer = () => {
    setScore(prev => Math.max(0, prev - 5));
    setIncorrectAnswers(prev => prev + 1);
    setTotalReviewed(prev => prev + 1);
    handleNextCard();
  };

  const handleReset = () => {
    const newCards = getRandomVocabulary(20, selectedCategories.length > 0 ? selectedCategories : undefined);
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
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onChangeTab={handleChangeTab} />

      <main className="max-w-5xl mx-auto px-4 pb-16">
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
      </main>
    </div>
  );
};

export default GamePage;