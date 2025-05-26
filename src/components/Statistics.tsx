import React from 'react';
import { 
  Trophy, 
  Flame, 
  Brain, 
  Target, 
  Calendar, 
  Percent 
} from 'lucide-react';
import { Statistics as StatsType } from '../types';

const Statistics: React.FC<StatsType> = ({
  totalWordsLearned,
  longestStreak,
  masteredWords,
  averageAccuracy,
  daysActive,
  dailyGoalAchievements,
}) => {
  const stats = [
    {
      icon: Brain,
      label: 'Öğrenilen Kelimeler',
      value: totalWordsLearned,
      color: 'text-blue-500',
    },
    {
      icon: Flame,
      label: 'En Uzun Seri',
      value: `${longestStreak} gün`,
      color: 'text-orange-500',
    },
    {
      icon: Trophy,
      label: 'Favoriler',
      value: masteredWords,
      color: 'text-yellow-500',
    },
    {
      icon: Percent,
      label: 'Ortalama Başarı',
      value: `${Math.round(averageAccuracy)}%`,
      color: 'text-green-500',
    },
    {
      icon: Calendar,
      label: 'Aktif Günler',
      value: daysActive,
      color: 'text-purple-500',
    },
    {
      icon: Target,
      label: 'Hedef Başarıları',
      value: dailyGoalAchievements,
      color: 'text-red-500',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <div
          key={label}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4"
        >
          <div className="flex items-center mb-2">
            <Icon className={`${color} mr-2`} size={20} />
            <h4 className="text-sm text-gray-600 dark:text-gray-300">{label}</h4>
          </div>
          <p className="text-xl font-bold dark:text-white">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;