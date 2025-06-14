
import React, { useState, useEffect } from 'react';
import { CharacterInProgress, SpeciesDefinition, OriginDefinition, AbilityScore, STANDARD_ARRAY, ABILITY_SCORE_NAMES, ASIOption, SelectedOriginASI } from '../../types';
import { addTooltipsToText } from '../../utils/textUtils';
import { MASTER_TOOLTIP_DEFINITIONS } from '../../tooltipData';

interface Level0PreClassProps {
  character: CharacterInProgress;
  speciesData: SpeciesDefinition[];
  originsData: OriginDefinition[];
  onSpeciesChange: (speciesId: string) => void;
  onOriginChange: (originId: string) => void;
  onOriginASIChange: (asiSelection: SelectedOriginASI) => void;
  onAbilityScoreAssign: (scoreName: AbilityScore['name'], value: number | null) => void;
  effectiveScores: AbilityScore[];
  onUpdateCharacter: (updates: Partial<CharacterInProgress>) => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="p-6 bg-slate-800/50 rounded-xl shadow-lg border border-slate-700">
    <h3 className="text-2xl font-semibold text-sky-400 mb-4 pb-2 border-b border-sky-600/50" style={{ fontFamily: "'Merriweather', serif" }}>
      {title}
    </h3>
    {children}
  </div>
);

const renderTraits = (traits: Array<{ name: string; description: string }>) => (
  <ul className="list-disc list-inside space-y-1 text-sm">
    {traits.map(trait => (
      <li key={trait.name}>
        <strong className="text-slate-300">{addTooltipsToText(trait.name)}:</strong> {addTooltipsToText(trait.description)}
      </li>
    ))}
  </ul>
);

export const Level0PreClass: React.FC<Level0PreClassProps> = ({
  character,
  speciesData,
  originsData,
  onSpeciesChange,
  onOriginChange,
  onOriginASIChange,
  onAbilityScoreAssign,
  effectiveScores,
  onUpdateCharacter
}) => {
  const selectedSpecies = speciesData.find(s => s.id === character.selectedSpeciesId);
  const selectedOrigin = originsData.find(o => o.id === character.selectedOriginId);
  
  const [localOriginASISelections, setLocalOriginASISelections] = useState<Partial<Record<string, AbilityScore['name']>>>({});
  const [selectedOriginASIOptionName, setSelectedOriginASIOptionName] = useState<string | undefined>(selectedOrigin?.asi.options[0]?.name);


  useEffect(() => {
    // Reset local ASI selections if origin or ASI option changes
    setLocalOriginASISelections({});
    if (selectedOrigin && selectedOrigin.asi.options.length > 0) {
        setSelectedOriginASIOptionName(selectedOrigin.asi.options[0].name);
    } else {
        setSelectedOriginASIOptionName(undefined);
    }
  }, [character.selectedOriginId]);


  const handleLocalOriginASISelection = (paramName: string, score: AbilityScore['name']) => {
    setLocalOriginASISelections(prev => ({...prev, [paramName]: score}));
  };
  
  const applyOriginASI = () => {
    if (!selectedOrigin || !selectedOriginASIOptionName) return;
    const currentASIOption = selectedOrigin.asi.options.find(opt => opt.name === selectedOriginASIOptionName);
    if (!currentASIOption) return;

    const assignments: Array<{ score: AbilityScore['name']; bonus: number }> = [];
    let anyIndex = 0;

    currentASIOption.abilities.forEach(abilityRule => {
        if (abilityRule.score === 'Any') {
            const selectedScore = localOriginASISelections[`any${anyIndex}`];
            if (selectedScore) {
                // Check for duplicates if this option implies different scores
                const isThreeDifferent = currentASIOption.name.includes("three different");
                if (isThreeDifferent && assignments.some(a => a.score === selectedScore)) {
                   // Handle error or disallow - simple for now: skip if duplicate on "three different"
                   return; 
                }
                assignments.push({ score: selectedScore, bonus: abilityRule.bonus });
            }
            anyIndex++;
        } else { // Fixed ability score bonus
            assignments.push({ score: abilityRule.score, bonus: abilityRule.bonus });
        }
    });
    onOriginASIChange({ optionName: currentASIOption.name, assignments });
  };


  const availableFeats = Object.keys(MASTER_TOOLTIP_DEFINITIONS).filter(
    key => MASTER_TOOLTIP_DEFINITIONS[key].category === "Feat" && MASTER_TOOLTIP_DEFINITIONS[key].prerequisites !== "Spellcasting or Pact Magic feature" // Simplification for now
  );
  
  const handleTextHistoryChange = (field: keyof NonNullable<CharacterInProgress['personalHistory']>, value: string) => {
    onUpdateCharacter({
      personalHistory: {
        ...character.personalHistory,
        [field]: value,
      }
    });
  };


  return (
    <div className="space-y-8 text-slate-200">
      <Section title="Character Name">
        <input
            type="text"
            placeholder="Enter character name"
            value={character.name || ''}
            onChange={(e) => onUpdateCharacter({ name: e.target.value })}
            className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
        />
      </Section>

      <Section title="Ability Scores (Standard Array Assignment)">
        <p className="text-sm text-slate-400 mb-4">Assign the standard array scores (15, 14, 13, 12, 10, 8) to your abilities. Applied ASIs from Species and Origin will be shown below.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {ABILITY_SCORE_NAMES.map(scoreName => (
            <div key={scoreName} className="flex items-center space-x-2">
              <label htmlFor={`score-${scoreName}`} className="w-28 font-medium text-slate-300">{scoreName}:</label>
              <select
                id={`score-${scoreName}`}
                value={character.assignedScores?.[scoreName] || ""}
                onChange={(e) => onAbilityScoreAssign(scoreName, e.target.value ? parseInt(e.target.value) : null)}
                className="p-2 bg-slate-600 border border-slate-500 rounded-md focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="">-- Select --</option>
                {(character.assignedScores?.[scoreName] ? [character.assignedScores?.[scoreName], ...character.selectedAbilityScoreValues || []] : character.selectedAbilityScoreValues || []).sort((a,b) => b-a).map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
         <div className="mt-4 p-3 bg-slate-700/50 rounded-md">
            <h4 className="text-lg font-semibold text-sky-300 mb-2">Effective Scores:</h4>
            {effectiveScores.map(score => (
                <div key={score.name} className="text-sm text-slate-300">
                    {score.name}: {score.value} 
                    <span className="text-xs text-slate-400"> (Base: {score.baseValue || '-'}, Species: {score.speciesBonus || '-'}, Origin: {score.originBonus || '-'})</span>
                </div>
            ))}
        </div>
      </Section>

      <Section title="Species">
        <select
          value={character.selectedSpeciesId || ''}
          onChange={(e) => onSpeciesChange(e.target.value)}
          className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-4"
        >
          <option value="">-- Select Species --</option>
          {speciesData.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        {selectedSpecies && (
          <div className="p-4 bg-slate-700/50 rounded-md space-y-2">
            <h4 className="text-lg font-semibold text-teal-400">{addTooltipsToText(selectedSpecies.name)}</h4>
            <p className="text-sm italic text-slate-400">{addTooltipsToText(selectedSpecies.description)}</p>
            {selectedSpecies.asi.length > 0 && (
              <p className="text-sm"><strong className="text-slate-300">Ability Score Increases:</strong> {selectedSpecies.asi.map(a => `${a.score} +${a.bonus}`).join(', ')}</p>
            )}
            <p className="text-sm"><strong className="text-slate-300">Speed:</strong> {selectedSpecies.speed} ft.</p>
            <p className="text-sm"><strong className="text-slate-300">Size:</strong> {selectedSpecies.size}</p>
            {selectedSpecies.vision && <p className="text-sm"><strong className="text-slate-300">Vision:</strong> {addTooltipsToText(selectedSpecies.vision)}</p>}
            {selectedSpecies.languagesKnown.length > 0 && <p className="text-sm"><strong className="text-slate-300">Languages:</strong> {selectedSpecies.languagesKnown.join(', ')}{selectedSpecies.languageChoices ? ` (+${selectedSpecies.languageChoices} other)` : ''}</p>}
            {selectedSpecies.traits.length > 0 && <div className="text-sm"><strong className="text-slate-300">Traits:</strong> {renderTraits(selectedSpecies.traits)}</div>}
          </div>
        )}
      </Section>

      <Section title="Origin (Background)">
        <select
          value={character.selectedOriginId || ''}
          onChange={(e) => onOriginChange(e.target.value)}
          className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-4"
        >
          <option value="">-- Select Origin --</option>
          {originsData.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
        </select>
        {selectedOrigin && (
          <div className="p-4 bg-slate-700/50 rounded-md space-y-2">
            <h4 className="text-lg font-semibold text-violet-400">{addTooltipsToText(selectedOrigin.name)}</h4>
            <p className="text-sm italic text-slate-400">{addTooltipsToText(selectedOrigin.description)}</p>
            
            <div className="text-sm space-y-1">
              <strong className="text-slate-300">Ability Score Increases:</strong>
              <select 
                value={selectedOriginASIOptionName || ""} 
                onChange={(e) => { setSelectedOriginASIOptionName(e.target.value); setLocalOriginASISelections({}); }}
                className="ml-2 p-1 bg-slate-600 border border-slate-500 rounded-md text-sm"
              >
                {selectedOrigin.asi.options.map(opt => <option key={opt.name} value={opt.name}>{opt.name}</option>)}
              </select>
              <p className="text-xs text-slate-400 ml-2">{selectedOrigin.asi.note}</p>
              {selectedOrigin.asi.options.find(opt => opt.name === selectedOriginASIOptionName)?.abilities.filter(ab => ab.score === 'Any').map((abilityRule, index) => (
                <div key={`asi-choice-${index}`} className="ml-4 my-1">
                  <label htmlFor={`origin-asi-${index}`} className="mr-2 text-slate-400">Choose Score for +{abilityRule.bonus}:</label>
                  <select
                    id={`origin-asi-${index}`}
                    value={localOriginASISelections[`any${index}`] || ""}
                    onChange={(e) => handleLocalOriginASISelection(`any${index}`, e.target.value as AbilityScore['name'])}
                    className="p-1 bg-slate-500 border border-slate-400 rounded-md text-sm"
                  >
                    <option value="">--Select Stat--</option>
                    {ABILITY_SCORE_NAMES.map(name => <option key={name} value={name}>{name}</option>)}
                  </select>
                </div>
              ))}
              <button onClick={applyOriginASI} className="mt-2 px-3 py-1 bg-sky-600 hover:bg-sky-700 text-white text-sm rounded-md shadow">Apply Origin ASI</button>
              {character.selectedOriginASI && (
                 <p className="text-xs text-green-400 ml-2">Applied: {character.selectedOriginASI.assignments.map(a => `${a.score} +${a.bonus}`).join(', ')}</p>
              )}
            </div>

            {selectedOrigin.skillProficiencies.length > 0 && <p className="text-sm"><strong className="text-slate-300">Skill Proficiencies:</strong> {selectedOrigin.skillProficiencies.map(s => addTooltipsToText(s)).join(', ')}</p>}
            {selectedOrigin.skillProficiencyChoices && <p className="text-sm"><strong className="text-slate-300">Skill Choices:</strong> Choose {selectedOrigin.skillProficiencyChoices.choose} from {selectedOrigin.skillProficiencyChoices.from.map(s => addTooltipsToText(s)).join(', ')}</p>}
            {selectedOrigin.toolProficiencies && selectedOrigin.toolProficiencies.length > 0 && <p className="text-sm"><strong className="text-slate-300">Tool Proficiencies:</strong> {selectedOrigin.toolProficiencies.map(s => addTooltipsToText(s)).join(', ')}</p>}
            {selectedOrigin.toolProficiencyChoices && <p className="text-sm"><strong className="text-slate-300">Tool Choices:</strong> Choose {selectedOrigin.toolProficiencyChoices.choose} from {selectedOrigin.toolProficiencyChoices.from.map(s => addTooltipsToText(s)).join(', ')}</p>}
            {selectedOrigin.languageProficiencies && selectedOrigin.languageProficiencies.length > 0 && <p className="text-sm"><strong className="text-slate-300">Languages:</strong> {selectedOrigin.languageProficiencies.join(', ')}</p>}
            {selectedOrigin.languageProficiencyChoices && <p className="text-sm"><strong className="text-slate-300">Language Choices:</strong> Choose {selectedOrigin.languageProficiencyChoices.choose} from {selectedOrigin.languageProficiencyChoices.from.map(s => addTooltipsToText(s)).join(', ')}</p>}
            <p className="text-sm"><strong className="text-slate-300">Origin Feat:</strong> {addTooltipsToText(selectedOrigin.originFeat)}</p>
            <p className="text-sm"><strong className="text-slate-300">Narrative Hook:</strong> {addTooltipsToText(selectedOrigin.narrativeHook)}</p>
            {selectedOrigin.startingEquipment && selectedOrigin.startingEquipment.length > 0 && (
                <div className="text-sm"><strong className="text-slate-300">Suggested Starting Gear (Gained at Level 1):</strong> 
                    <ul className="list-disc list-inside pl-4 text-slate-400">
                        {selectedOrigin.startingEquipment.map((item, i) => <li key={i}>{addTooltipsToText(item)}</li>)}
                    </ul>
                </div>
            )}
          </div>
        )}
      </Section>

      <Section title="Personal History">
        <div className="space-y-3">
          <div>
            <label htmlFor="ideals" className="block text-sm font-medium text-slate-300 mb-1">Ideals:</label>
            <textarea id="ideals" value={character.personalHistory?.ideals || ''} onChange={e => handleTextHistoryChange('ideals', e.target.value)} rows={2} className="w-full p-2 bg-slate-700 text-slate-200 border border-slate-600 rounded-md focus:ring-sky-500 focus:border-sky-500"></textarea>
          </div>
          <div>
            <label htmlFor="bonds" className="block text-sm font-medium text-slate-300 mb-1">Bonds:</label>
            <textarea id="bonds" value={character.personalHistory?.bonds || ''} onChange={e => handleTextHistoryChange('bonds', e.target.value)} rows={2} className="w-full p-2 bg-slate-700 text-slate-200 border border-slate-600 rounded-md focus:ring-sky-500 focus:border-sky-500"></textarea>
          </div>
          <div>
            <label htmlFor="flaws" className="block text-sm font-medium text-slate-300 mb-1">Flaws:</label>
            <textarea id="flaws" value={character.personalHistory?.flaws || ''} onChange={e => handleTextHistoryChange('flaws', e.target.value)} rows={2} className="w-full p-2 bg-slate-700 text-slate-200 border border-slate-600 rounded-md focus:ring-sky-500 focus:border-sky-500"></textarea>
          </div>
          <div>
            <label htmlFor="goals" className="block text-sm font-medium text-slate-300 mb-1">Goals:</label>
            <textarea id="goals" value={character.personalHistory?.goals || ''} onChange={e => handleTextHistoryChange('goals', e.target.value)} rows={2} className="w-full p-2 bg-slate-700 text-slate-200 border border-slate-600 rounded-md focus:ring-sky-500 focus:border-sky-500"></textarea>
          </div>
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-slate-300 mb-1">Motivation (What drove you to adventure?):</label>
            <textarea id="motivation" value={character.personalHistory?.motivation || ''} onChange={e => handleTextHistoryChange('motivation', e.target.value)} rows={2} className="w-full p-2 bg-slate-700 text-slate-200 border border-slate-600 rounded-md focus:ring-sky-500 focus:border-sky-500"></textarea>
          </div>
        </div>
      </Section>
    </div>
  );
};
