import React from 'react';
import { BookOpen, Trophy, Heart } from 'lucide-react';

interface HeaderProps {
  activeTab: 'learn' | 'quiz' | 'favorites';
  onChangeTab: (tab: 'learn' | 'quiz' | 'favorites') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onChangeTab }) => {
  return (
    <header className="bg-white shadow-sm mb-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="flex flex-row items-center">
              <div className="h-8 w-8 mr-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"></div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-black to-red-600"></div>
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-800">Almanca Kelime Kartları</h1>
          </div>
        </div>
        
        <div className="flex border-b">
          <button
            className={`px-4 py-3 flex items-center ${
              activeTab === 'learn'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => onChangeTab('learn')}
          >
            <BookOpen size={18} className="mr-2" />
            <span>Öğren</span>
          </button>
          
          <button
            className={`px-4 py-3 flex items-center ${
              activeTab === 'quiz'
                ? 'border-b-2 border-green-500 text-green-600 font-medium'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => onChangeTab('quiz')}
          >
            <Trophy size={18} className="mr-2" />
            <span>Quiz</span>
          </button>
          
          <button
            className={`px-4 py-3 flex items-center ${
              activeTab === 'favorites'
                ? 'border-b-2 border-red-500 text-red-600 font-medium'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => onChangeTab('favorites')}
          >
            <Heart size={18} className="mr-2" />
            <span>Favoriler</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;