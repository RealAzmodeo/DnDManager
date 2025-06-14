
import React from 'react';
import { ClassRolePlaystyleSection } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';

interface RolePlaystyleSectionContentProps {
  section: ClassRolePlaystyleSection;
}

export const RolePlaystyleSectionContent: React.FC<RolePlaystyleSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-4 text-slate-300">
      {section.content.map((paragraph, index) => (
        <p key={index} className="leading-relaxed">{addTooltipsToText(paragraph)}</p>
      ))}
    </div>
  );
};
