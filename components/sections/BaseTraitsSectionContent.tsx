
import React from 'react';
import { ClassBaseTraitsSection, CardVariant } from '../../types';
import { FeatureCard } from '../FeatureCard';
// addTooltipsToText is not directly used here, but FeatureCard uses it.

interface BaseTraitsSectionContentProps {
  section: ClassBaseTraitsSection;
}

export const BaseTraitsSectionContent: React.FC<BaseTraitsSectionContentProps> = ({ section }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {section.items?.map((item, index) => (
        <FeatureCard 
          key={index} 
          name={item.name} 
          description={item.description} 
          variant={CardVariant.CORE}
        />
      ))}
    </div>
  );
};
