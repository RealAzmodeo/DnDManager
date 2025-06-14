
import React from 'react';
import { ClassSubclassesSection, Subclass } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';

interface SubclassesSectionContentProps {
  section: ClassSubclassesSection;
}

export const SubclassesSectionContent: React.FC<SubclassesSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-6">
      {section.intro && <p className="mb-8 text-lg leading-relaxed text-slate-300">{addTooltipsToText(section.intro)}</p>}
      {section.subclasses?.map((subclass: Subclass, index: number) => (
        <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-xl border-l-4 border-purple-500">
          <h4 className="text-2xl font-semibold text-purple-400 mb-2">{addTooltipsToText(subclass.name)}</h4>
          <p className="text-slate-300 mb-4 italic">{addTooltipsToText(subclass.description)}</p>
          {subclass.note && <p className="text-sm text-purple-200 bg-purple-900/30 p-2 rounded-md mb-3">{addTooltipsToText(subclass.note)}</p>}
          <div className="mt-3 space-y-2 pl-4 border-l-2 border-purple-700">
            {subclass.features.map((feature, featIdx) => (
               <div key={featIdx} className="text-sm py-1">
                  <strong className="text-purple-300">{addTooltipsToText(feature.name)} {feature.level ? `(L${feature.level})` : ''}:</strong>
                  <span className="text-slate-400 ml-2">{addTooltipsToText(feature.description)}</span>
               </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
