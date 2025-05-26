import React from 'react';
import { Target, Flame } from 'lucide-react';

interface DailyGoalProps {
  current: number;
  goal: number;
  streak: number;
  onUpdateGoal: (goal: number) => void;
}

const DailyGoal: React.FC<DailyGoalProps> = ({
  current,
  goal,
  streak,
  onUpdateGoal,
}) => {
  const progress = (current / goal) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Target className="text-blue-500 mr-2\" size={24} />
          <h3 className="text-lg font-bold dark:text-white">Günlük Hedef</h3>
        </div>
        <div className="flex items-center">
          <Flame className="text-orange-500 mr-2" size={20} />
          <span className="font-bold text-orange-500">{streak} gün</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {current} / {goal} kelime
          </span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {[5, 10, 15, 20].map((value) => (
          <button
            key={value}
            onClick={() => onUpdateGoal(value)}
            className={`px-3 py-1 rounded-full text-sm ${
              goal === value
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DailyGoal;