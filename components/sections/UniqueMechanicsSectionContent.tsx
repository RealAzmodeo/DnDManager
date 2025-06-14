
import React from 'react';
import { ClassUniqueMechanicsSection, CardVariant } from '../../types';
import { FeatureCard } from '../FeatureCard';
import { addTooltipsToText } from '../../utils/textUtils';

interface UniqueMechanicsSectionContentProps {
  section: ClassUniqueMechanicsSection;
}

export const UniqueMechanicsSectionContent: React.FC<UniqueMechanicsSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-4">
      {section.intro && <p className="mb-6 text-lg leading-relaxed text-slate-300">{addTooltipsToText(section.intro)}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.mechanics?.map((mechanic, index) => (
          <FeatureCard 
            key={index} 
            name={mechanic.name} 
            description={mechanic.description} 
            variant={
              mechanic.isDeed ? CardVariant.DEED :
              mechanic.isCritical ? CardVariant.CRITICAL :
              CardVariant.CORE 
            }
          />
        ))}
      </div>
    </div>
  );
};
