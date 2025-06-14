
import React from 'react';
import { ClassStrengthsWeaknessesSection } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';

interface StrengthsWeaknessesSectionContentProps {
  section: ClassStrengthsWeaknessesSection;
}

export const StrengthsWeaknessesSectionContent: React.FC<StrengthsWeaknessesSectionContentProps> = ({ section }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="text-xl font-semibold text-emerald-400 mb-3">Strengths</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          {section.strengths.map((item, index) => <li key={`strength-${index}`}>{addTooltipsToText(item)}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-red-400 mb-3">Weaknesses</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          {section.weaknesses.map((item, index) => <li key={`weakness-${index}`}>{addTooltipsToText(item)}</li>)}
        </ul>
      </div>
    </div>
  );
};
