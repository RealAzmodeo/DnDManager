
import React from 'react';
import { ClassEquipmentProgressionSection } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';

interface EquipmentProgressionSectionContentProps {
  section: ClassEquipmentProgressionSection;
}

export const EquipmentProgressionSectionContent: React.FC<EquipmentProgressionSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-6 text-slate-300">
      <div>
        <h4 className="text-xl font-semibold text-lime-400 mb-2">Early Game:</h4>
        <ul className="list-disc list-inside space-y-1 pl-2">
          {section.earlyGame.map((item, index) => <li key={`eq-early-${index}`}>{addTooltipsToText(item)}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-lime-400 mb-2">Mid Game:</h4>
        <ul className="list-disc list-inside space-y-1 pl-2">
          {section.midGame.map((item, index) => <li key={`eq-mid-${index}`}>{addTooltipsToText(item)}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-lime-400 mb-2">Late Game:</h4>
        <ul className="list-disc list-inside space-y-1 pl-2">
          {section.lateGame.map((item, index) => <li key={`eq-late-${index}`}>{addTooltipsToText(item)}</li>)}
        </ul>
      </div>
    </div>
  );
};
