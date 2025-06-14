
import React from 'react';
import { ClassLevelProgressionSection, LevelFeatureSet, FeatureDetail, CardVariant } from '../../types';
import { FeatureCard } from '../FeatureCard';
import { addTooltipsToText } from '../../utils/textUtils';

interface LevelProgressionSectionContentProps {
  section: ClassLevelProgressionSection;
}

export const LevelProgressionSectionContent: React.FC<LevelProgressionSectionContentProps> = ({ section }) => {
  return (
    <div className="space-y-8">
      {section.levels?.map((levelSet: LevelFeatureSet, idx: number) => (
        <div key={idx} className="bg-slate-800 p-6 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold mb-1 text-sky-400 border-b-2 border-sky-500 pb-2">
            Level {levelSet.level}
          </h3>
          {levelSet.title && <p className="text-xl font-medium mb-4 text-sky-300">{addTooltipsToText(levelSet.title)}</p>}
          <div className="space-y-4">
            {levelSet.features.map((feature: FeatureDetail, featureIdx: number) => (
              <FeatureCard
                key={featureIdx}
                name={feature.name}
                description={feature.description}
                note={feature.note}
                variant={
                  feature.isCritical ? CardVariant.CRITICAL :
                  feature.isDeed ? CardVariant.DEED :
                  feature.isSubclassFeature ? CardVariant.SUBCLASS :
                  CardVariant.DEFAULT
                }
                subItems={feature.subItems}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
