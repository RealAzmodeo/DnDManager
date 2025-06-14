
import React from 'react';
import { ClassFlavorNRoleplayingSection } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';

interface FlavorAndRoleplayingSectionContentProps {
  section: ClassFlavorNRoleplayingSection;
}

export const FlavorAndRoleplayingSectionContent: React.FC<FlavorAndRoleplayingSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-3 text-slate-300">
      {section.content.map((item, index) => (
        <p key={`rp-${index}`} className="leading-relaxed">{addTooltipsToText(item)}</p>
      ))}
    </div>
  );
};
