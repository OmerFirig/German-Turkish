import React from 'react';
import { Trophy, BrainCircuit, Star } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  totalReviewed: number;
  highScore: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  correctAnswers,
  incorrectAnswers,
  totalReviewed,
  highScore,
}) => {
  const accuracy = totalReviewed > 0 
    ? Math.round((correctAnswers / totalReviewed) * 100) 
    : 0;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Trophy className="text-yellow-500 mr-2\" size={24} />
            <h3 className="text-lg font-bold text-gray-800">Puan</h3>
          </div>
          <span className="text-2xl font-bold text-blue-600">{score}</span>
        </div>

        <div className="flex justify-between items-center mb-4 p-3 bg-yellow-50 rounded-lg">
          <div className="flex items-center">
            <Star className="text-yellow-500 mr-2" size={20} />
            <span className="text-gray-700">En Yüksek Puan</span>
          </div>
          <span className="font-bold text-yellow-600">{highScore}</span>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Doğru</span>
            <span className="font-medium text-green-600">{correctAnswers}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Yanlış</span>
            <span className="font-medium text-red-600">{incorrectAnswers}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Toplam</span>
            <span className="font-medium">{totalReviewed}</span>
          </div>

          <div className="pt-3 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <BrainCircuit className="text-purple-500 mr-2" size={20} />
                <span className="text-gray-600">Doğruluk</span>
              </div>
              <span className="font-medium text-purple-600">{accuracy}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${accuracy}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay;