import React from 'react';
import { ArrowLeft, ArrowRight, Check, X, RotateCcw } from 'lucide-react';

interface GameControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onCorrect?: () => void;
  onIncorrect?: () => void;
  onReset: () => void;
  isQuizMode: boolean;
  isFirst: boolean;
  isLast: boolean;
  totalCards: number;
  currentIndex: number;
}

const GameControls: React.FC<GameControlsProps> = ({
  onPrevious,
  onNext,
  onCorrect,
  onIncorrect,
  onReset,
  isQuizMode,
  isFirst,
  isLast,
  totalCards,
  currentIndex,
}) => {
  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={`p-3 rounded-full ${
            isFirst
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } transition-colors`}
          aria-label="Previous card"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="text-center">
          <span className="text-lg font-medium">
            {currentIndex + 1} / {totalCards}
          </span>
        </div>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`p-3 rounded-full ${
            isLast
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } transition-colors`}
          aria-label="Next card"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {isQuizMode && onCorrect && onIncorrect && (
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={onIncorrect}
            className="flex items-center justify-center px-6 py-3 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
            aria-label="I got it wrong"
          >
            <X size={20} className="mr-2" />
            <span>Bilmedim</span>
          </button>
          
          <button
            onClick={onCorrect}
            className="flex items-center justify-center px-6 py-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
            aria-label="I got it right"
          >
            <Check size={20} className="mr-2" />
            <span>Bildim</span>
          </button>
        </div>
      )}

      {isLast && (
        <div className="flex justify-center mt-6">
          <button
            onClick={onReset}
            className="flex items-center justify-center px-6 py-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
          >
            <RotateCcw size={20} className="mr-2" />
            <span>Yeniden Başla</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default GameControls;