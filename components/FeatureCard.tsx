import React from 'react';
import { CardVariant } from '../types';
import { addTooltipsToText } from '../utils/textUtils'; // Import the utility

interface FeatureCardProps {
  name: string;
  description: string;
  level?: string | number;
  note?: string;
  subItems?: string[];
  variant?: CardVariant;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ name, description, level, note, subItems, variant = CardVariant.DEFAULT }) => {
  let bgColor = 'bg-slate-700/70 hover:bg-slate-600/90';
  let titleColor = 'text-sky-300';
  let borderColor = 'border-slate-600';
  let noteColor = 'text-yellow-400';
  let displayName = name; // Use a mutable variable for potentially prefixed name

  switch (variant) {
    case CardVariant.DEED:
      bgColor = 'bg-red-800/70 hover:bg-red-700/90';
      titleColor = 'text-red-300';
      borderColor = 'border-red-700';
      noteColor = 'text-red-200';
      if (!name.toLowerCase().startsWith('deed:')) {
        displayName = `DEED: ${name}`;
      }
      break;
    case CardVariant.SUBCLASS:
      bgColor = 'bg-purple-800/70 hover:bg-purple-700/90';
      titleColor = 'text-purple-300';
      borderColor = 'border-purple-700';
      noteColor = 'text-purple-200';
      break;
    case CardVariant.CRITICAL:
      bgColor = 'bg-yellow-700/70 hover:bg-yellow-600/90';
      titleColor = 'text-yellow-200';
      borderColor = 'border-yellow-600';
      noteColor = 'text-yellow-100';
      break;
    case CardVariant.CORE:
      bgColor = 'bg-teal-800/70 hover:bg-teal-700/90';
      titleColor = 'text-teal-300';
      borderColor = 'border-teal-700';
      break;
  }

  return (
    <div className={`p-5 rounded-lg shadow-lg border ${borderColor} ${bgColor} transition-all duration-300 ease-in-out transform hover:scale-[1.02]`}>
      <h5 className={`text-xl font-semibold mb-2 ${titleColor}`}>
        {addTooltipsToText(displayName)}
        {level && <span className="text-sm font-normal text-slate-400 ml-2">(Level {level})</span>}
      </h5>
      <div className="text-slate-300 leading-relaxed text-sm">{addTooltipsToText(description)}</div>
      {subItems && subItems.length > 0 && (
        <ul className="list-disc list-inside mt-2 pl-4 text-slate-400 text-sm space-y-1">
          {subItems.map((item, index) => (
            <li key={index}>{addTooltipsToText(item)}</li>
          ))}
        </ul>
      )}
      {note && <p className={`mt-3 text-xs italic ${noteColor} font-medium`}>{addTooltipsToText(note)}</p>}
    </div>
  );
};
