import React from 'react';
import { Heart } from 'lucide-react';
import { Vocabulary } from '../types';
import { getCategoryById } from '../data/vocabulary';

interface CardProps {
  word: Vocabulary;
  isFlipped: boolean;
  onFlip: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  showAnswer?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  word, 
  isFlipped, 
  onFlip, 
  isFavorite, 
  onToggleFavorite,
  showAnswer = false
}) => {
  const category = getCategoryById(word.category);
  
  return (
    <div 
      className="relative w-full max-w-md h-64 cursor-pointer perspective-1000 mx-auto"
      onClick={onFlip}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div 
          className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6"
          style={{ border: `3px solid ${category?.color || '#3B82F6'}` }}
        >
          <div 
            className="absolute top-4 right-4 z-10"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
          >
            <Heart 
              size={24} 
              className={`transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-300'}`}
            />
          </div>
          
          <span 
            className="text-xs font-medium px-2 py-1 rounded-full absolute top-4 left-4"
            style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
          >
            {category?.name}
          </span>
          
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-2 text-center">{word.german}</h2>
            
            {showAnswer && (
              <div className="mt-4 text-gray-500 text-center">
                <p className="text-xl">{word.turkish}</p>
              </div>
            )}
            
            {word.example && (
              <p className="text-sm italic text-gray-500 mt-4 text-center">
                "{word.example}"
              </p>
            )}
          </div>
          
          <div className="absolute bottom-4 text-sm text-gray-400">
            {!showAnswer && 'Çeviri için tıklayın'}
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6"
          style={{ border: `3px solid ${category?.color || '#3B82F6'}` }}
        >
          <div 
            className="absolute top-4 right-4 z-10"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
          >
            <Heart 
              size={24} 
              className={`transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-300'}`}
            />
          </div>
          
          <span 
            className="text-xs font-medium px-2 py-1 rounded-full absolute top-4 left-4"
            style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
          >
            {category?.name}
          </span>
          
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-sm text-gray-500 mb-1">Almanca</p>
            <h2 className="text-2xl font-bold mb-4 text-center">{word.german}</h2>
            
            <p className="text-sm text-gray-500 mb-1">Türkçe</p>
            <p className="text-2xl font-medium text-center">{word.turkish}</p>
            
            {word.example && (
              <p className="text-sm italic text-gray-500 mt-4 text-center">
                "{word.example}"
              </p>
            )}
          </div>
          
          <div className="absolute bottom-4 text-sm text-gray-400">
            Kelimeye dönmek için tıklayın
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;