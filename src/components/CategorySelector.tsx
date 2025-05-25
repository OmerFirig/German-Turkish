import React from 'react';
import { categories } from '../data/vocabulary';
import { getCategoryIcon } from '../data/vocabulary';

interface CategorySelectorProps {
  selectedCategories: string[];
  onSelectCategory: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategories,
  onSelectCategory,
}) => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Kategoriler</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          const IconComponent = getCategoryIcon(category.id);
          
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`
                flex flex-col items-center justify-center p-4 rounded-lg transition-all
                ${isSelected 
                  ? `bg-opacity-20 ring-2 shadow-md` 
                  : 'bg-white hover:bg-gray-50'}
              `}
              style={{
                backgroundColor: isSelected ? `${category.color}20` : '',
                borderColor: isSelected ? category.color : '',
                ringColor: isSelected ? category.color : '',
              }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
                style={{ 
                  backgroundColor: `${category.color}20`,
                  color: category.color 
                }}
              >
                <IconComponent size={20} />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;