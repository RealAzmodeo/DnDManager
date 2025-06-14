
import React, { useState, useMemo, useEffect } from 'react';
import { CharacterInProgress, AbilityScore, ClassDefinition, LevelFeatureSet, FeatureDetail, CardVariant, ClassSection, Subclass, AllClassesData } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';
import { FeatureCard } from '../FeatureCard'; 

interface LevelProgressionDisplayProps {
  character: CharacterInProgress;
  effectiveScores: AbilityScore[];
  selectedClassDef: ClassDefinition;
  allClassesData: AllClassesData; // Added to fetch full class data
  subclasses: Subclass[];
  subclassChoiceLevel?: number;
  onUpdateCharacter: (updates: Partial<CharacterInProgress>) => void;
  onSubclassChange: (subclassId: string) => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
  <div className={`p-6 bg-slate-800/50 rounded-xl shadow-lg border border-slate-700 ${className}`}>
    <h3 className="text-2xl font-semibold text-sky-400 mb-4 pb-2 border-b border-sky-600/50" style={{ fontFamily: "'Merriweather', serif" }}>
      {title}
    </h3>
    {children}
  </div>
);

const getAbilityModifier = (scoreValue: number): number => {
  return Math.floor((scoreValue - 10) / 2);
};

const getProficiencyBonus = (level: number): number => {
  if (level < 1) return 0;
  return Math.floor((level - 1) / 4) + 2;
};

export const LevelProgressionDisplay: React.FC<LevelProgressionDisplayProps> = ({
  character,
  effectiveScores,
  selectedClassDef,
  allClassesData,
  subclasses,
  subclassChoiceLevel,
  onUpdateCharacter,
  onSubclassChange,
}) => {
  const [displayLevel, setDisplayLevel] = useState<number>(character.currentLevel && character.currentLevel > 1 ? character.currentLevel : 2);

  useEffect(() => {
    onUpdateCharacter({ currentLevel: displayLevel });
  }, [displayLevel, onUpdateCharacter]);

  const conModifier = useMemo(() => {
    const conScore = effectiveScores.find(s => s.name === 'Constitution')?.value ?? 10;
    return getAbilityModifier(conScore);
  }, [effectiveScores]);

  const hitDieValue = useMemo(() => {
    const baseTraitsSection = selectedClassDef.sections.find(s => s.type === 'baseTraits') as Extract<ClassSection, { type: 'baseTraits' }> | undefined;
    const hitDiceItem = baseTraitsSection?.items.find(item => item.name === 'Hit Dice');
    if (hitDiceItem?.description) {
      const match = hitDiceItem.description.match(/d(\d+)/);
      return match ? parseInt(match[1]) : 8; 
    }
    return 8;
  }, [selectedClassDef]);

  const averageHPGainPerLevel = useMemo(() => {
    return Math.floor(hitDieValue / 2) + 1 + conModifier;
  }, [hitDieValue, conModifier]);

  const totalHitPoints = useMemo(() => {
    if (!character.level1HitPoints) return 'N/A (Complete Level 1)';
    if (displayLevel === 1) return character.level1HitPoints;
    return character.level1HitPoints + (averageHPGainPerLevel * (displayLevel - 1));
  }, [character.level1HitPoints, averageHPGainPerLevel, displayLevel]);

  const proficiencyBonus = useMemo(() => getProficiencyBonus(displayLevel), [displayLevel]);

  const levelProgressionData = useMemo(() => {
    const progressionSection = selectedClassDef.sections.find(
      s => s.type === 'levelProgression'
    ) as Extract<ClassSection, { type: 'levelProgression' }> | undefined;
    return progressionSection?.levels || [];
  }, [selectedClassDef]);

  const classFeaturesAtSelectedLevel: FeatureDetail[] = useMemo(() => {
    const levelSet = levelProgressionData.find(l => Number(l.level) === displayLevel);
    // Filter out generic subclass choice placeholders if subclass is chosen at this level via the dedicated UI
    return levelSet?.features.filter(f => !(f.isSubclassFeature && displayLevel === subclassChoiceLevel)) || [];
  }, [levelProgressionData, displayLevel, subclassChoiceLevel]);

  const subclassFeaturesAtSelectedLevel: FeatureDetail[] = useMemo(() => {
    if (!character.selectedSubclassId) return [];
    const selectedSc = subclasses.find(sc => sc.id === character.selectedSubclassId || sc.name === character.selectedSubclassId);
    return selectedSc?.features.filter(f => (typeof f.level === 'number' && f.level === displayLevel) || String(f.level) === String(displayLevel)) || [];
  }, [subclasses, character.selectedSubclassId, displayLevel]);


  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayLevel(parseInt(e.target.value, 10));
  };
  
  const getSubclassTypeName = (): string => {
    if (!selectedClassDef) return "Subclass";
    // Attempt to find the name from the feature that grants subclass choice
    const progSection = selectedClassDef.sections.find(s => s.type === 'levelProgression') as Extract<ClassSection, { type: 'levelProgression'}> | undefined;
    if (progSection && subclassChoiceLevel) {
        const choiceLevelData = progSection.levels.find(l => Number(l.level) === subclassChoiceLevel);
        const choiceFeature = choiceLevelData?.features.find(f => f.isSubclassFeature && f.name.toLowerCase().includes('feature'));
        if (choiceFeature) {
            // e.g., "Gunslinger's Creed Feature" -> "Gunslinger's Creed"
            const typeName = choiceFeature.name.replace(/ Feature$/, '');
            // Make it more generic, e.g., "Divine Domain" instead of "Divine Domain Feature"
            const commonNames: Record<string, string> = {
                "Gunslinger's Creed": "Creed",
                "Psionic Discipline": "Discipline",
                "Divine Domain": "Domain",
                "Arcane Tradition": "Tradition",
                "Sacred Oath": "Oath",
                "Martial Archetype": "Archetype",
                "Bard College": "College",
                "Roguish Archetype": "Archetype",
                "Primal Path": "Path",
                "Druid Circle": "Circle",
                "Monastic Tradition": "Tradition",
                "Sorcerous Origin": "Origin",
                "Otherworldly Patron": "Patron",
                "Ranger Conclave": "Conclave"
            };
            return commonNames[typeName] || typeName || "Subclass";
        }
    }
    // Fallback for generic term
    const commonNameMatch = selectedClassDef.className.toLowerCase();
    if (commonNameMatch === 'fighter') return 'Martial Archetype';
    if (commonNameMatch === 'cleric') return 'Divine Domain';
    // Add more specific fallbacks if needed
    return "Subclass";
};


  const getSpecialScalingInfo = (): string | null => {
    if (!selectedClassDef) return null;
    switch (selectedClassDef.className.toLowerCase()) {
      case 'rogue':
        const sneakAttackDice = Math.ceil(displayLevel / 2);
        return `Sneak Attack: ${sneakAttackDice}d6`;
      case 'monk':
        let martialArtsDie = 'd4';
        if (displayLevel >= 17) martialArtsDie = 'd10';
        else if (displayLevel >= 11) martialArtsDie = 'd8';
        else if (displayLevel >= 5) martialArtsDie = 'd6';
        const kiPoints = displayLevel;
        let unarmoredMovement = '+10ft';
        if (displayLevel >= 18) unarmoredMovement = '+30ft';
        else if (displayLevel >= 14) unarmoredMovement = '+25ft';
        else if (displayLevel >= 10) unarmoredMovement = '+20ft';
        else if (displayLevel >= 6) unarmoredMovement = '+15ft';
        return `Martial Arts: ${martialArtsDie}, Ki Points: ${kiPoints}, Unarmored Movement: ${unarmoredMovement}`;
      case 'barbarian':
        const rageUses = displayLevel >= 20 ? 'Unlimited' : displayLevel >= 17 ? 6 : displayLevel >= 12 ? 5 : displayLevel >= 6 ? 4 : displayLevel >= 3 ? 3 : 2;
        const rageDamage = displayLevel >= 16 ? '+4' : displayLevel >= 9 ? '+3' : '+2';
        return `Rage Uses: ${rageUses}${displayLevel < 20 ? '/LR' : ''}, Rage Damage: ${rageDamage}`;
      default:
        return null;
    }
  };
  
  const specialScalingInfo = getSpecialScalingInfo();

  const showSubclassSelectionUI = subclassChoiceLevel && displayLevel === subclassChoiceLevel && subclassChoiceLevel > 1 && !character.selectedSubclassId && subclasses.length > 0;

  return (
    <div className="space-y-6 text-slate-200">
      <Section title={`Level Progression (Viewing Level ${displayLevel})`} className="sticky top-4 z-10">
        <div className="flex items-center space-x-4 mb-4">
          <label htmlFor="level-select" className="font-medium text-slate-300">View Level:</label>
          <select
            id="level-select"
            value={displayLevel}
            onChange={handleLevelChange}
            className="p-2 bg-slate-700 text-slate-100 border border-slate-600 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            {Array.from({ length: 19 }, (_, i) => i + 2).map(level => (
              <option key={level} value={level}>Level {level}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-slate-700/70 rounded-md">
            <p><strong className="text-sky-300">Proficiency Bonus:</strong> +{proficiencyBonus}</p>
          </div>
          <div className="p-3 bg-slate-700/70 rounded-md">
            <p><strong className="text-sky-300">Total Hit Points (Avg):</strong> {totalHitPoints}</p>
            <p className="text-xs text-slate-400"> (L1: {character.level1HitPoints}, then +{averageHPGainPerLevel}/level avg.)</p>
          </div>
           {specialScalingInfo && (
            <div className="p-3 bg-slate-700/70 rounded-md">
               <p><strong className="text-sky-300">Special Scaling:</strong> {addTooltipsToText(specialScalingInfo)}</p>
            </div>
          )}
        </div>
      </Section>

      {showSubclassSelectionUI && (
        <Section title={`Choose Your ${selectedClassDef.className} ${getSubclassTypeName()}`}>
          <p className="text-sm text-slate-400 mb-3">At Level {subclassChoiceLevel}, you specialize by choosing a {getSubclassTypeName()}.</p>
          <select
            value={character.selectedSubclassId || ''}
            onChange={(e) => onSubclassChange(e.target.value)}
            className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-4"
          >
            <option value="">-- Select {getSubclassTypeName()} --</option>
            {subclasses.map(sc => (
              <option key={sc.id || sc.name} value={sc.id || sc.name}>{sc.name}</option>
            ))}
          </select>
          {character.selectedSubclassId && subclasses.find(sc => sc.id === character.selectedSubclassId || sc.name === character.selectedSubclassId) && (
            <div className="p-3 bg-slate-600/50 rounded-md text-sm">
              <h5 className="font-semibold text-purple-300">{subclasses.find(sc => sc.id === character.selectedSubclassId || sc.name === character.selectedSubclassId)?.name}</h5>
              <p className="italic text-slate-400">{addTooltipsToText(subclasses.find(sc => sc.id === character.selectedSubclassId || sc.name === character.selectedSubclassId)?.description || "")}</p>
            </div>
          )}
        </Section>
      )}

      <Section title={`Features at Level ${displayLevel}`}>
        {classFeaturesAtSelectedLevel.length === 0 && subclassFeaturesAtSelectedLevel.length === 0 && !showSubclassSelectionUI && (
            <p className="text-slate-400">No new core class features explicitly gained at this level, or waiting for subclass selection. Check for subclass features if a subclass is chosen, or other progression (e.g., spell slots for casters).</p>
        )}
        {classFeaturesAtSelectedLevel.length > 0 && (
          <>
            <h4 className="text-lg font-medium text-teal-300 mb-2">Class Features:</h4>
            <div className="space-y-4">
              {classFeaturesAtSelectedLevel.map((feature, index) => (
                <FeatureCard
                  key={`level-${displayLevel}-classfeat-${index}-${feature.name}`}
                  name={feature.name}
                  description={feature.description}
                  note={feature.note}
                  subItems={feature.subItems}
                  variant={feature.isCritical ? CardVariant.CRITICAL : feature.isDeed ? CardVariant.DEED : CardVariant.DEFAULT}
                />
              ))}
            </div>
          </>
        )}
         {subclassFeaturesAtSelectedLevel.length > 0 && (
           <>
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Subclass Features ({subclasses.find(sc => sc.id === character.selectedSubclassId || sc.name === character.selectedSubclassId)?.name || 'Subclass'}):</h4>
            <div className="space-y-4">
              {subclassFeaturesAtSelectedLevel.map((feature, index) => (
                <FeatureCard
                  key={`level-${displayLevel}-subclassfeat-${index}-${feature.name}`}
                  name={feature.name} // Subclass features should ideally already be prefixed or distinct
                  description={feature.description}
                  note={feature.note}
                  subItems={feature.subItems}
                  variant={CardVariant.SUBCLASS}
                />
              ))}
            </div>
           </>
         )}
      </Section>
      
       { [4, 6, 8, 10, 12, 14, 16, 19].includes(displayLevel) && // Adjusted ASI levels for Fighters etc.
         classFeaturesAtSelectedLevel.some(f => f.name.toLowerCase().includes('ability score improvement') || f.name.toLowerCase().includes('feat')) && (
        <Section title="Ability Score Improvement / Feat">
          <p className="text-slate-400">At this level, you typically gain an Ability Score Improvement or can choose a Feat. Specific choices will be implemented later.</p>
        </Section>
      )}
    </div>
  );
};
