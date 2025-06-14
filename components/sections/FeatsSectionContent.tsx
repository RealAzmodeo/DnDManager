
import React from 'react';
import { ClassFeatsSection, CardVariant } from '../../types';
import { FeatureCard } from '../FeatureCard';
import { addTooltipsToText } from '../../utils/textUtils';

interface FeatsSectionContentProps {
  section: ClassFeatsSection;
}

export const FeatsSectionContent: React.FC<FeatsSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-6">
      {section.intro && (
        <p className="mb-6 text-lg leading-relaxed text-slate-300">{addTooltipsToText(section.intro)}</p>
      )}
      {section.categories?.map((category, catIdx) => (
        <div key={catIdx} className="mb-8">
          <h4 className="text-xl font-semibold text-amber-400 mb-3 border-b border-amber-500/50 pb-2">
            {addTooltipsToText(category.categoryName)}
          </h4>
          {category.description && (
            <p className="text-sm text-slate-400 italic mb-4">{addTooltipsToText(category.description)}</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.feats.map((feat, featIdx) => (
              <FeatureCard
                key={featIdx}
                name={feat.name}
                description={feat.description}
                note={feat.note}
                variant={CardVariant.CORE} // Using CORE variant for feats
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
