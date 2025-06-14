
import React from 'react';
import { ClassIntroSection, ClassClosingRemarksSection } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';

interface IntroSectionContentProps {
  section: ClassIntroSection | ClassClosingRemarksSection;
}

export const IntroSectionContent: React.FC<IntroSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-4 text-slate-300">
      {section.content.map((paragraph, index) => (
        <p key={index} className="leading-relaxed">{addTooltipsToText(paragraph)}</p>
      ))}
    </div>
  );
};
