
import React, { useEffect, useMemo } from 'react';
import { CharacterInProgress, AbilityScore, ClassDefinition, AllClassesData, ClassBaseTraitsSection, LevelFeatureSet, FeatureDetail, CardVariant, ClassSkillChoiceData, ALL_SKILLS_LIST, OriginDefinition, ClassSection, Subclass } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';
import { FeatureCard } from '../FeatureCard';

interface Level1ClassSelectionProps {
  character: CharacterInProgress;
  effectiveScores: AbilityScore[];
  selectedClassDef: ClassDefinition | null;
  allClassesData: AllClassesData;
  originsData: OriginDefinition[]; 
  onClassChange: (classKey: string) => void;
  onSkillChange: (skills: string[]) => void;
  onUpdateCharacter: (updates: Partial<CharacterInProgress>) => void;
  subclasses: Subclass[];
  subclassChoiceLevel?: number;
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

const parseSkillChoiceString = (desc: string): ClassSkillChoiceData | null => {
    const choiceMatch = desc.match(/Choose (two|three|four|one) from ([^.]+)\.?/i);
    if (choiceMatch) {
        const countWord = choiceMatch[1].toLowerCase();
        let count = 0;
        if (countWord === "one") count = 1;
        else if (countWord === "two") count = 2;
        else if (countWord === "three") count = 3;
        else if (countWord === "four") count = 4;
        
        const skillsListString = choiceMatch[2].replace(/, and /g, ', ').replace(/ and /g, ', ');
        const skillsList = skillsListString.split(',').map(s => s.trim().replace(/\.$/, ''));
        const validSkills = skillsList.filter(skill => 
            ALL_SKILLS_LIST.some(validSkill => validSkill.toLowerCase() === skill.toLowerCase())
        ).map(skill => ALL_SKILLS_LIST.find(validSkill => validSkill.toLowerCase() === skill.toLowerCase()) || skill);

        if (count > 0 && validSkills.length > 0) {
            return { count, from: validSkills };
        }
    }
    return null;
};


export const Level1ClassSelection: React.FC<Level1ClassSelectionProps> = ({
  character,
  effectiveScores,
  selectedClassDef,
  allClassesData,
  originsData,
  onClassChange,
  onSkillChange,
  onUpdateCharacter,
  subclasses,
  subclassChoiceLevel,
  onSubclassChange,
}) => {

  const handleClassSkillCheckboxChange = (skillName: string, isChecked: boolean) => {
    const currentSkills = character.chosenClassSkills || [];
    let newSkills: string[];

    if (isChecked) {
      if (character.availableClassSkillChoices && currentSkills.length < character.availableClassSkillChoices.count) {
        newSkills = [...currentSkills, skillName];
      } else {
        newSkills = currentSkills;
        if (character.availableClassSkillChoices) {
            alert(`You can only choose ${character.availableClassSkillChoices.count} skills for this class.`);
        }
      }
    } else {
      newSkills = currentSkills.filter(s => s !== skillName);
    }
    onSkillChange(newSkills);
  };
  
  const conModifier = useMemo(() => {
    const conScore = effectiveScores.find(s => s.name === 'Constitution')?.value ?? 10;
    return getAbilityModifier(conScore);
  }, [effectiveScores]);

  const classBaseTraits = useMemo(() => {
    if (!selectedClassDef) return null;
    return selectedClassDef.sections.find(s => s.type === 'baseTraits') as ClassBaseTraitsSection | undefined;
  }, [selectedClassDef]);

  const level1ClassFeatures = useMemo(() => {
    if (!selectedClassDef) return [];
    const levelProgSection = selectedClassDef.sections.find(
      s => s.type === 'levelProgression'
    ) as Extract<ClassSection, { type: 'levelProgression' }> | undefined;

    if (levelProgSection && levelProgSection.levels) {
      const firstLevelFeatures = levelProgSection.levels.find(
        l => (typeof l.level === 'number' && l.level === 1) || (String(l.level) === "1")
      )?.features;
      // Filter out generic subclass choice placeholders if subclass is chosen at L1 elsewhere
      return firstLevelFeatures?.filter(f => !(f.isSubclassFeature && subclassChoiceLevel === 1)) || [];
    }
    return [];
  }, [selectedClassDef, subclassChoiceLevel]);

  const level1SubclassFeatures = useMemo(() => {
    if (!selectedClassDef || !character.selectedSubclassId || subclassChoiceLevel !== 1) return [];
    const selectedSubclass = subclasses.find(sc => sc.id === character.selectedSubclassId || sc.name === character.selectedSubclassId); // Support ID or name
    return selectedSubclass?.features.filter(f => (typeof f.level === 'number' && f.level === 1) || String(f.level) === "1") || [];
  }, [selectedClassDef, character.selectedSubclassId, subclassChoiceLevel, subclasses]);


  const hitDiceString = classBaseTraits?.items.find(item => item.name === 'Hit Dice')?.description || 'N/A';
  const proficienciesString = classBaseTraits?.items.find(item => item.name === 'Proficiencies')?.description || 'N/A';
  const savingThrowsString = classBaseTraits?.items.find(item => item.name === 'Saving Throws')?.description || 'N/A';
  const startingEquipmentString = classBaseTraits?.items.find(item => item.name.toLowerCase().includes('starting equipment'))?.description || 'Not specified in class data.';

   useEffect(() => {
    if (selectedClassDef) {
        const baseTraits = selectedClassDef.sections.find(s => s.type === 'baseTraits') as ClassBaseTraitsSection | undefined;
        const skillsTrait = baseTraits?.items.find(item => item.name.toLowerCase() === 'skills');
        let skillChoiceData: ClassSkillChoiceData | undefined = undefined;
        if (skillsTrait?.description) {
            skillChoiceData = parseSkillChoiceString(skillsTrait.description) || undefined;
        }
        onUpdateCharacter({ availableClassSkillChoices: skillChoiceData, chosenClassSkills: [], chosenClassSkillCount: 0 });
    } else {
        onUpdateCharacter({ availableClassSkillChoices: undefined, chosenClassSkills: [], chosenClassSkillCount: 0 });
    }
  }, [selectedClassDef, onUpdateCharacter]);


  return (
    <div className="space-y-8 text-slate-200">
      <Section title="Class Selection">
        <select
          value={character.selectedClassKey || ''}
          onChange={(e) => onClassChange(e.target.value)}
          className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-4"
        >
          <option value="">-- Select Class --</option>
          {Object.keys(allClassesData).map(key => (
            <option key={key} value={key}>{allClassesData[key].className}</option>
          ))}
        </select>

        {selectedClassDef && (
          <div className="p-4 bg-slate-700/50 rounded-md space-y-3 text-sm">
            <h4 className="text-lg font-semibold text-emerald-400">{addTooltipsToText(selectedClassDef.className)}</h4>
            <p className="italic text-slate-400">{addTooltipsToText(selectedClassDef.classDescription)}</p>
            <p><strong className="text-slate-300">Hit Dice:</strong> {addTooltipsToText(hitDiceString)}</p>
            <p><strong className="text-slate-300">Saving Throws:</strong> {addTooltipsToText(savingThrowsString)}</p>
            <p><strong className="text-slate-300">Proficiencies:</strong> {addTooltipsToText(proficienciesString)}</p>
          </div>
        )}
      </Section>

      {selectedClassDef && (
        <>
          {subclassChoiceLevel === 1 && subclasses.length > 0 && (
            <Section title={`${selectedClassDef.className} Subclass (Level 1 Choice)`}>
              <select
                value={character.selectedSubclassId || ''}
                onChange={(e) => onSubclassChange(e.target.value)}
                className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-4"
              >
                <option value="">-- Select Subclass --</option>
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

          <Section title="Starting Hit Points">
            <p className="text-slate-300">Your Level 1 Hit Points: <strong className="text-xl text-green-400">{character.level1HitPoints ?? 'Calculating...'}</strong></p>
            <p className="text-xs text-slate-400">(Calculated as: Max Hit Die Value + Constitution Modifier ({conModifier}))</p>
          </Section>

          {character.availableClassSkillChoices && character.availableClassSkillChoices.from.length > 0 && (
            <Section title={`Class Skill Proficiencies (Choose ${character.availableClassSkillChoices.count})`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {character.availableClassSkillChoices.from.map(skill => (
                  <label key={skill} className="flex items-center space-x-2 p-2 bg-slate-700/60 rounded-md hover:bg-slate-600/60 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      value={skill}
                      checked={character.chosenClassSkills?.includes(skill)}
                      onChange={(e) => handleClassSkillCheckboxChange(skill, e.target.checked)}
                      disabled={!character.chosenClassSkills?.includes(skill) && (character.chosenClassSkillCount || 0) >= (character.availableClassSkillChoices?.count || 0)}
                      className="form-checkbox h-5 w-5 text-sky-500 bg-slate-600 border-slate-500 rounded focus:ring-sky-500 focus:ring-offset-slate-800"
                    />
                    <span className="text-slate-300">{addTooltipsToText(skill)}</span>
                  </label>
                ))}
              </div>
              {character.chosenClassSkillCount !== undefined && character.availableClassSkillChoices && character.chosenClassSkillCount >= character.availableClassSkillChoices.count && (
                <p className="text-xs text-green-400 mt-2">You have selected the maximum number of skills.</p>
              )}
            </Section>
          )}

          <Section title="Level 1 Features">
            <div className="space-y-4">
                {level1ClassFeatures.map((feature, index) => (
                  <FeatureCard
                    key={`level1-class-${index}-${feature.name}`}
                    name={feature.name}
                    description={feature.description}
                    note={feature.note}
                    subItems={feature.subItems}
                    variant={feature.isCritical ? CardVariant.CRITICAL : CardVariant.DEFAULT}
                  />
                ))}
                {level1SubclassFeatures.map((feature, index) => (
                  <FeatureCard
                    key={`level1-subclass-${index}-${feature.name}`}
                    name={feature.name}
                    description={feature.description}
                    note={feature.note}
                    subItems={feature.subItems}
                    variant={CardVariant.SUBCLASS}
                  />
                ))}
                {level1ClassFeatures.length === 0 && level1SubclassFeatures.length === 0 && (
                    <p className="text-slate-400">No specific features listed for Level 1 beyond core class mechanics (e.g., spellcasting for casters), or subclass choice if applicable.</p>
                )}
            </div>
          </Section>
          
           <Section title="Starting Equipment">
              <p className="text-slate-300 mb-2"><strong className="text-slate-100">From Class:</strong> {addTooltipsToText(startingEquipmentString)}</p>
              {character.selectedOriginId && character.selectedClassKey && allClassesData[character.selectedClassKey] && (
                <p className="text-slate-300"><strong className="text-slate-100">From Origin:</strong> {addTooltipsToText(character.selectedOriginId ? (originsData.find(o=>o.id === character.selectedOriginId)?.startingEquipment?.join(', ') || "50gp worth of equipment, choose specific items with DM.") : "Select origin to see gear.")}</p>
              )}
            </Section>
        </>
      )}
    </div>
  );
};
