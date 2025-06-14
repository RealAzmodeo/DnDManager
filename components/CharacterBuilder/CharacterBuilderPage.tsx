
import React, { useState, useEffect, useMemo } from 'react';
import { CharacterInProgress, ABILITY_SCORE_NAMES, STANDARD_ARRAY, SpeciesDefinition, OriginDefinition, SelectedOriginASI, AbilityScore, ClassDefinition, ClassSkillChoiceData, ClassBaseTraitsSection, LevelFeatureSet, ClassSection, Subclass } from '../../types';
import { Level0PreClass } from './Level0PreClass';
import { Level1ClassSelection } from './Level1ClassSelection'; 
import { LevelProgressionDisplay } from './LevelProgressionDisplay';
import { ALL_SPECIES_DATA, ALL_ORIGINS_DATA, ALL_CLASSES_DATA, getSubclassesForClass } from '../../constants';
import { addTooltipsToText } from '../../utils/textUtils';

const getAbilityModifier = (scoreValue: number): number => {
  return Math.floor((scoreValue - 10) / 2);
};

const parseSkillChoiceString = (desc: string): ClassSkillChoiceData | null => {
    const choiceMatch = desc.match(/Choose (two|three|four|one) from (.+?)\.?$/i);
    if (choiceMatch) {
        const countWord = choiceMatch[1].toLowerCase();
        let count = 0;
        if (countWord === "one") count = 1;
        else if (countWord === "two") count = 2;
        else if (countWord === "three") count = 3;
        else if (countWord === "four") count = 4;
        
        const skillsList = choiceMatch[2].split(',').map(s => s.trim().replace(/\.$/, ''));
        if (count > 0 && skillsList.length > 0) {
            return { count, from: skillsList };
        }
    }
    return null;
};

const determineSubclassChoiceLevel = (classDef?: ClassDefinition): number | undefined => {
    if (!classDef) return undefined;
    const levelProgSection = classDef.sections.find(s => s.type === 'levelProgression') as Extract<ClassSection, { type: 'levelProgression' }> | undefined;
    if (!levelProgSection) return undefined;

    for (const levelSet of levelProgSection.levels) {
        if (levelSet.features.some(f => f.isSubclassFeature && f.name.toLowerCase().includes('feature'))) { // Heuristic: main choice feature usually named like "XYZ Feature"
            return typeof levelSet.level === 'string' ? parseInt(levelSet.level) : levelSet.level;
        }
    }
    return undefined; // Default if not found in a structured way
};


export const CharacterBuilderPage: React.FC = () => {
  const initialAbilityScores = ABILITY_SCORE_NAMES.map(name => ({
    name,
    value: 0, 
    baseValue: 0,
    speciesBonus: 0,
    originBonus: 0,
  }));

  const [character, setCharacter] = useState<CharacterInProgress>({
    abilityScores: initialAbilityScores,
    selectedAbilityScoreValues: [...STANDARD_ARRAY],
    assignedScores: {},
    chosenClassSkills: [],
    currentLevel: 1,
  });
  const [currentStep, setCurrentStep] = useState<'level0' | 'level1' | 'progression'>('level0');

  const updateCharacter = (updates: Partial<CharacterInProgress>) => {
    setCharacter(prev => ({ ...prev, ...updates }));
  };
  
  const updateAbilityScoreAssignment = (scoreName: AbilityScore['name'], value: number | null) => {
    setCharacter(prev => {
      const newAssignedScores = { ...prev.assignedScores };
      const oldAssignedValue = newAssignedScores[scoreName];

      for (const key in newAssignedScores) {
        if (newAssignedScores[key as AbilityScore['name']] === value && value !== null) {
          delete newAssignedScores[key as AbilityScore['name']];
        }
      }
      
      if (value !== null) {
        newAssignedScores[scoreName] = value;
      } else {
         delete newAssignedScores[scoreName];
      }

      const newAvailableScores = [...STANDARD_ARRAY];
      Object.values(newAssignedScores).forEach(assignedVal => {
        if (assignedVal === undefined) return;
        const indexToRemove = newAvailableScores.indexOf(assignedVal);
        if (indexToRemove > -1) {
          newAvailableScores.splice(indexToRemove, 1);
        }
      });

      if (oldAssignedValue !== undefined && value === null) { 
        newAvailableScores.push(oldAssignedValue);
        newAvailableScores.sort((a, b) => b - a); 
      }

      return {
        ...prev,
        assignedScores: newAssignedScores,
        selectedAbilityScoreValues: newAvailableScores,
      };
    });
  };

  const handleSpeciesChange = (speciesId: string) => {
    updateCharacter({ selectedSpeciesId: speciesId });
  };

  const handleOriginChange = (originId: string) => {
     const selectedOriginDef = ALL_ORIGINS_DATA.find(o => o.id === originId);
    updateCharacter({ 
        selectedOriginId: originId, 
        selectedOriginASI: undefined,
        originSkillProficiencies: selectedOriginDef?.skillProficiencies || []
    });
  };
  
  const handleOriginASIChange = (asiSelection: SelectedOriginASI) => {
    updateCharacter({ selectedOriginASI: asiSelection });
  };

  const handleClassChange = (classKey: string) => {
    const selectedClassDef = ALL_CLASSES_DATA[classKey];
    let availableClassSkillChoices: ClassSkillChoiceData | undefined = undefined;
    // let subclassChoiceLvl: number | undefined = undefined; // This will be handled by useMemo later

    if (selectedClassDef) {
        const baseTraitsSection = selectedClassDef.sections.find(s => s.type === 'baseTraits') as Extract<ClassSection, { type: 'baseTraits' }> | undefined;
        const skillsTrait = baseTraitsSection?.items.find(item => item.name.toLowerCase() === 'skills');
        if (skillsTrait?.description) {
            availableClassSkillChoices = parseSkillChoiceString(skillsTrait.description) || undefined;
        }
        // subclassChoiceLvl = determineSubclassChoiceLevel(selectedClassDef);
        // No longer mutating ALL_CLASSES_DATA[classKey].subclassChoiceLevel here
    }
    

    updateCharacter({ 
        selectedClassKey: classKey, 
        chosenClassSkills: [],
        chosenClassSkillCount: 0,
        level1HitPoints: undefined, 
        availableClassSkillChoices, 
        selectedSubclassId: undefined, 
        currentLevel: 1 
    });
  };

  const handleSubclassChange = (subclassId: string) => {
    updateCharacter({ selectedSubclassId: subclassId });
  };

  const handleSkillChange = (updatedSkills: string[]) => {
    updateCharacter({ 
        chosenClassSkills: updatedSkills,
        chosenClassSkillCount: updatedSkills.length
    });
  };

  const calculateAndSetLevel1HP = () => {
    if (character.selectedClassKey && effectiveScores.find(s => s.name === 'Constitution')) {
      const classDef = ALL_CLASSES_DATA[character.selectedClassKey];
      const baseTraitsSection = classDef?.sections.find(sec => sec.type === 'baseTraits') as Extract<ClassSection, { type: 'baseTraits' }> | undefined;
      const hitDiceItem = baseTraitsSection?.items.find(item => item.name === 'Hit Dice');
      
      if (hitDiceItem?.description) {
        const hitDieMatch = hitDiceItem.description.match(/d(\d+)/);
        if (hitDieMatch) {
          const hitDieValue = parseInt(hitDieMatch[1]);
          const conScore = effectiveScores.find(s => s.name === 'Constitution')?.value ?? 10;
          const conModifier = getAbilityModifier(conScore);
          updateCharacter({ level1HitPoints: hitDieValue + conModifier, currentLevel: 1 });
        }
      }
    }
  };
  
  const effectiveScores = useMemo(() => {
    let scores = ABILITY_SCORE_NAMES.map(name => ({
        name,
        value: character.assignedScores?.[name] ?? 0,
        baseValue: character.assignedScores?.[name] ?? 0,
        speciesBonus: 0,
        originBonus: 0,
    }));

    const currentSpecies = ALL_SPECIES_DATA.find(s => s.id === character.selectedSpeciesId);
    if (currentSpecies) {
        // Ensure currentSpecies.asi is an array before iterating
        if (currentSpecies.asi && Array.isArray(currentSpecies.asi)) {
            currentSpecies.asi.forEach(mod => {
                const scoreToUpdate = scores.find(s => s.name === mod.score);
                // Only apply specific ASIs, not 'Any' or 'Choice' here as they are handled by Origin
                if (scoreToUpdate && mod.score !== 'Any' && mod.score !== 'Choice') {
                    scoreToUpdate.speciesBonus = (scoreToUpdate.speciesBonus || 0) + mod.bonus;
                }
            });
        }
    }

    if (character.selectedOriginASI) {
        character.selectedOriginASI.assignments.forEach(assignment => {
            const scoreToUpdate = scores.find(s => s.name === assignment.score);
            if (scoreToUpdate) {
                scoreToUpdate.originBonus = (scoreToUpdate.originBonus || 0) + assignment.bonus;
            }
        });
    }
    
    scores.forEach(s => {
      s.value = (s.baseValue || 0) + (s.speciesBonus || 0) + (s.originBonus || 0);
    });

    return scores;
  }, [character.assignedScores, character.selectedSpeciesId, character.selectedOriginASI]);

  useEffect(() => {
    if (currentStep === 'level1' && character.selectedClassKey) { 
        calculateAndSetLevel1HP();
    }
  }, [effectiveScores, character.selectedClassKey, currentStep]);


  const selectedClassDefinition = character.selectedClassKey ? ALL_CLASSES_DATA[character.selectedClassKey] : undefined;
  const selectedOriginDefinition = character.selectedOriginId ? ALL_ORIGINS_DATA.find(o => o.id === character.selectedOriginId) : undefined;
  const selectedSpeciesDefinition = character.selectedSpeciesId ? ALL_SPECIES_DATA.find(s => s.id === character.selectedSpeciesId) : undefined;
  
  const subclassChoiceLevel = useMemo(() => {
      if (selectedClassDefinition && selectedClassDefinition.subclassChoiceLevel !== undefined) {
          return selectedClassDefinition.subclassChoiceLevel;
      }
      return determineSubclassChoiceLevel(selectedClassDefinition);
  }, [selectedClassDefinition]);

  const isLevel0Complete = Object.values(character.assignedScores || {}).length === 6 &&
                           character.selectedSpeciesId &&
                           character.selectedOriginId &&
                           character.selectedOriginASI;

  const isLevel1Complete = isLevel0Complete &&
                           character.selectedClassKey &&
                           character.level1HitPoints !== undefined &&
                           (character.availableClassSkillChoices ? (character.chosenClassSkillCount || 0) === character.availableClassSkillChoices.count : true) &&
                           (subclassChoiceLevel === 1 ? !!character.selectedSubclassId : true);


  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-center space-x-2 mb-6 border-b border-slate-700 pb-4">
        <button
          onClick={() => setCurrentStep('level0')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${currentStep === 'level0' ? 'bg-sky-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'}`}
        >
          Step 1: Origins & Abilities (Level 0)
        </button>
        <button
          onClick={() => {
            if(!isLevel0Complete) {
                alert("Please complete all selections in Level 0 (assign all ability scores, select species, origin, and apply origin ASI) before proceeding.");
                return;
            }
            setCurrentStep('level1');
          }}
          disabled={!isLevel0Complete}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${currentStep === 'level1' ? 'bg-sky-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Step 2: Class & Starting Details (Level 1)
        </button>
        <button
          onClick={() => {
            if (!isLevel1Complete) {
              alert("Please complete all selections in Level 1 (select class, ensure skills are chosen if applicable, subclass chosen if applicable at L1, and HP is calculated) before proceeding.");
              return;
            }
            setCurrentStep('progression');
          }}
          disabled={!isLevel1Complete}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${currentStep === 'progression' ? 'bg-sky-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Step 3: Progression (Level 2+)
        </button>
      </div>

      {currentStep === 'level0' && (
        <Level0PreClass
          character={character}
          speciesData={ALL_SPECIES_DATA}
          originsData={ALL_ORIGINS_DATA}
          onSpeciesChange={handleSpeciesChange}
          onOriginChange={handleOriginChange}
          onOriginASIChange={handleOriginASIChange}
          onAbilityScoreAssign={updateAbilityScoreAssignment}
          effectiveScores={effectiveScores}
          onUpdateCharacter={updateCharacter}
        />
      )}
      
      {currentStep === 'level1' && selectedClassDefinition && ( 
         <Level1ClassSelection
          character={character}
          effectiveScores={effectiveScores}
          selectedClassDef={selectedClassDefinition}
          allClassesData={ALL_CLASSES_DATA}
          originsData={ALL_ORIGINS_DATA} 
          onClassChange={handleClassChange}
          onSkillChange={handleSkillChange}
          onUpdateCharacter={updateCharacter}
          subclasses={getSubclassesForClass(character.selectedClassKey || "")}
          subclassChoiceLevel={subclassChoiceLevel}
          onSubclassChange={handleSubclassChange}
        />
      )}
      {currentStep === 'level1' && !selectedClassDefinition && ( 
         <Level1ClassSelection
          character={character}
          effectiveScores={effectiveScores}
          selectedClassDef={null}
          allClassesData={ALL_CLASSES_DATA}
          originsData={ALL_ORIGINS_DATA} 
          onClassChange={handleClassChange}
          onSkillChange={handleSkillChange}
          onUpdateCharacter={updateCharacter}
          subclasses={[]}
          subclassChoiceLevel={undefined}
          onSubclassChange={handleSubclassChange}
        />
      )}


      {currentStep === 'progression' && selectedClassDefinition && (
        <LevelProgressionDisplay
            character={character}
            effectiveScores={effectiveScores}
            selectedClassDef={selectedClassDefinition}
            allClassesData={ALL_CLASSES_DATA}
            subclasses={getSubclassesForClass(character.selectedClassKey || "")}
            subclassChoiceLevel={subclassChoiceLevel}
            onUpdateCharacter={updateCharacter}
            onSubclassChange={handleSubclassChange}
        />
      )}


      <div className="mt-8 p-4 bg-slate-800/70 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-sky-300 mb-3">Character Summary (Work in Progress)</h3>
        <pre className="text-xs text-slate-300 whitespace-pre-wrap overflow-x-auto">
          {JSON.stringify({
            name: character.name,
            currentBuilderStep: currentStep,
            characterLevel: character.currentLevel,
            assignedScores: character.assignedScores,
            effectiveScores: effectiveScores.map(s => ({ name: s.name, value: s.value, base: s.baseValue, species: s.speciesBonus, origin: s.originBonus, modifier: getAbilityModifier(s.value) })),
            species: selectedSpeciesDefinition?.name,
            origin: selectedOriginDefinition?.name,
            originFeat: selectedOriginDefinition?.originFeat,
            originASI: character.selectedOriginASI,
            originSkills: character.originSkillProficiencies,
            personalHistory: character.personalHistory,
            class: selectedClassDefinition?.className,
            subclassChoiceLevel: subclassChoiceLevel, 
            selectedSubclassId: character.selectedSubclassId,
            level1HP: character.level1HitPoints,
            chosenClassSkills: character.chosenClassSkills,
            availableClassSkillChoices: character.availableClassSkillChoices,
            chosenClassSkillCount: character.chosenClassSkillCount,
            isLevel0Complete,
            isLevel1Complete
          }, (key, value) => (value === undefined ? "Not Set" : value) , 2)}
        </pre>
      </div>
    </div>
  );
};
