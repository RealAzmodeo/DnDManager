
import React from 'react';
import { ClassMulticlassingSection } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';

interface MulticlassingSectionContentProps {
  section: ClassMulticlassingSection;
}

export const MulticlassingSectionContent: React.FC<MulticlassingSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-4 text-slate-300">
      {section.generalNotes.map((note, index) => (
        <p key={`mc-note-${index}`} className="leading-relaxed">{addTooltipsToText(note)}</p>
      ))}
      {section.goodCombinations && section.goodCombinations.length > 0 && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-amber-400 mb-3">Good Combinations:</h4>
          <ul className="space-y-3">
            {section.goodCombinations.map((combo, index) => (
              <li key={`mc-combo-${index}`} className="p-3 bg-slate-700/50 rounded-md border border-slate-600">
                <strong className="text-amber-300">{addTooltipsToText(combo.className)} {combo.levels ? `(${combo.levels} levels)` : ''}:</strong>
                <span className="ml-2">{addTooltipsToText(combo.synergy)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
