
import React, { useState, useMemo } from 'react';
import { ClassPlannerConfig, Subclass, LevelFeatureSet, CombinedLevelInfo, PlannerRecommendationDetails, FeatureDetail } from '../types'; // Updated imports
import { FeatureCard } from './FeatureCard';
import { CardVariant } from '../types';
import { addTooltipsToText } from '../utils/textUtils';

interface ClassPlannerProps { 
  plannerConfig: ClassPlannerConfig;
  subclasses: Subclass[];
  coreLevelProgression: LevelFeatureSet[];
  className: string; 
}

export const ClassPlanner: React.FC<ClassPlannerProps> = ({ plannerConfig, subclasses, coreLevelProgression, className }) => { 
  const [selectedSubclass, setSelectedSubclass] = useState<Subclass | null>(null);
  const [showProgression, setShowProgression] = useState(false);

  const handleSubclassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const subclassName = event.target.value;
    setSelectedSubclass(subclasses.find(s => s.name === subclassName) || null);
    setShowProgression(false);
  };

  const handleShowProgression = () => {
    if (selectedSubclass) {
      setShowProgression(true);
    } else {
      alert("Please select a subclass first.");
    }
  };
  
  const getSubclassFeatureForLevel = (level: number): FeatureDetail | undefined => {
    if (!selectedSubclass || !selectedSubclass.features) return undefined;

    const foundFeature = selectedSubclass.features.find(feature => {
      // Ensure feature.level is treated as a number for comparison
      const featureLevel = typeof feature.level === 'string' ? parseInt(feature.level, 10) : feature.level;
      return featureLevel === level;
    });

    if (foundFeature) {
      return {
        ...foundFeature,
        name: `${selectedSubclass.name}: ${foundFeature.name}`, 
        isSubclassFeature: true,
      };
    }
    return undefined;
  };

  const combinedProgression: CombinedLevelInfo[] = useMemo(() => {
    if (!showProgression || !selectedSubclass) return [];

    return coreLevelProgression.map(levelSet => {
      const levelNum = typeof levelSet.level === 'string' ? parseInt(levelSet.level, 10) : levelSet.level;
      
      let plannerNotes: PlannerRecommendationDetails | undefined;

      const subRecommendations = plannerConfig.subclassSpecificRecommendations[selectedSubclass.name];
      const subLevelReco = subRecommendations?.find(r => r.level === levelNum);
      
      if (subLevelReco) {
        plannerNotes = subLevelReco.recommendation;
      } else {
        const generalLevelReco = plannerConfig.generalLevelRecommendations.find(r => r.level === levelNum);
        if (generalLevelReco) {
          plannerNotes = generalLevelReco.recommendation;
        }
      }
      
      // For Level 1, ensure the feat suggestion from the origin is primary.
      if (levelNum === 1 && plannerConfig.origin.recommendedFeat) {
        const originFeat = plannerConfig.origin.recommendedFeat;
        const basePlannerNotes = plannerNotes || {};
        const existingFeatSuggestion = basePlannerNotes.featSuggestion || "";
        
        // Prioritize origin feat, then append others if they exist and are different.
        let combinedFeatSuggestion = originFeat;
        if (existingFeatSuggestion && existingFeatSuggestion.toLowerCase() !== originFeat.toLowerCase() && !existingFeatSuggestion.toLowerCase().includes(originFeat.toLowerCase())) {
            combinedFeatSuggestion += `, ${existingFeatSuggestion}`;
        }
        
        plannerNotes = {
            ...basePlannerNotes,
            featSuggestion: combinedFeatSuggestion,
            notes: basePlannerNotes.notes // Keep existing notes
        };
      }
      
      // More comprehensive filter keywords for subclass-related features in the core progression
      const filterKeywords = ['subclass', 'creed', 'discipline', 'domain', 'tradition', 'oath', 'archetype', 'path', 'circle', 'college', 'origin', 'patron']; 
      const classFeatures = levelSet.features.filter(f => 
        !filterKeywords.some(keyword => f.name.toLowerCase().includes(keyword.toLowerCase())) && 
        !f.isSubclassFeature // Explicitly filter out features marked as subclass features if any slip through
      );

      return {
        level: levelSet.level,
        levelTitle: levelSet.title,
        classFeatures: classFeatures,
        subclassFeature: getSubclassFeatureForLevel(levelNum),
        plannerNotes: plannerNotes,
      };
    });
  }, [showProgression, selectedSubclass, coreLevelProgression, plannerConfig, className]); // Added className to dependency array
  
  const getSubclassTypeName = () => {
    // This can be expanded as more classes are added/defined
    switch (className.toLowerCase()) {
      case 'rogue': return 'Roguish Archetype';
      case 'fighter': return 'Martial Archetype';
      case 'bard': return 'Bard College';
      case 'cleric': return 'Divine Domain';
      case 'wizard': return 'Arcane Tradition';
      case 'paladin': return 'Sacred Oath';
      case 'gunslinger': return 'Gunslinger\'s Creed';
      case 'psion': return 'Psionic Discipline';
      case 'barbarian': return 'Primal Path';
      case 'druid': return 'Druid Circle';
      case 'monk': return 'Monastic Tradition';
      case 'sorcerer': return 'Sorcerous Origin';
      case 'ranger': return 'Ranger Conclave';
      case 'warlock': return 'Otherworldly Patron';
      default: return 'Subclass';
    }
  };

  return (
    <section className="my-12 p-6 bg-slate-800/60 rounded-xl shadow-2xl backdrop-blur-md border border-slate-700">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 pb-3 border-b-2 border-teal-500 text-teal-300" style={{ fontFamily: "'Merriweather', serif" }}>
        {className} Build Planner
      </h2>

      <div className="mb-8 p-6 bg-slate-700/50 rounded-lg border border-slate-600">
        <h3 className="text-2xl font-semibold text-sky-400 mb-4">Recommended Starting Build:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
          <div>
            <strong className="text-sky-300">Species:</strong> {addTooltipsToText(plannerConfig.species.name)}
            <p className="text-sm text-slate-400 italic ml-2">{addTooltipsToText(plannerConfig.species.note)}</p>
          </div>
          <div>
            <strong className="text-sky-300">Origin:</strong> {addTooltipsToText(plannerConfig.origin.name)}
            <p className="text-sm text-slate-400 italic ml-2">{addTooltipsToText(plannerConfig.origin.note)}</p>
            {plannerConfig.origin.recommendedFeat && <p className="text-sm text-slate-400 ml-2"><strong>Recommended Origin Feat:</strong> {addTooltipsToText(plannerConfig.origin.recommendedFeat)}</p>}
          </div>
          <div>
            <strong className="text-sky-300">Ability Score Priority:</strong>
            <ul className="list-disc list-inside ml-2 text-sm text-slate-400 space-y-1">
              {plannerConfig.abilityPriority.map(p => <li key={p}>{addTooltipsToText(p)}</li>)}
            </ul>
          </div>
          <div>
            <strong className="text-sky-300">Key Class Skills to Consider:</strong>
            <ul className="list-disc list-inside ml-2 text-sm text-slate-400 space-y-1">
              {plannerConfig.keyClassSkills.map(s => <li key={s}>{addTooltipsToText(s)}</li>)}
            </ul>
            <p className="text-xs text-slate-500 mt-1 ml-2">(Note: Your Origin provides specific skill proficiencies. These are additional class skills to consider if options arise.)</p>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row items-center gap-4">
        <label htmlFor="subclass-select" className="text-xl text-sky-300 font-medium">Choose Your {className} {addTooltipsToText(getSubclassTypeName())}:</label>
        <select
          id="subclass-select"
          value={selectedSubclass?.name || ''}
          onChange={handleSubclassChange}
          className="p-3 bg-slate-700 text-slate-200 border border-slate-600 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 flex-grow"
        >
          <option value="" disabled>Select a {addTooltipsToText(getSubclassTypeName())}</option>
          {subclasses.map(sc => <option key={sc.name} value={sc.name}>{sc.name}</option>)}
        </select>
        <button
          onClick={handleShowProgression}
          disabled={!selectedSubclass}
          className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Show Level Progression
        </button>
      </div>

      {showProgression && selectedSubclass && (
        <div className="mt-10 space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-teal-400 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
            Level Progression for: <span className="text-teal-200">{addTooltipsToText(selectedSubclass.name)}</span>
          </h3>
          {selectedSubclass.note && (
            <p className="text-center text-slate-300 mb-6 italic border-t border-b border-slate-700 py-3 bg-slate-700/30 rounded-md shadow-inner">{addTooltipsToText(selectedSubclass.note)}</p>
          )}
          {combinedProgression.map(levelInfo => (
            <div key={`prog-${levelInfo.level}`} className="p-6 bg-slate-800 rounded-lg shadow-xl border-l-4 border-teal-600">
              <h4 className="text-2xl font-bold mb-1 text-teal-400">
                Level {levelInfo.level}
              </h4>
              {levelInfo.levelTitle && <p className="text-lg font-medium mb-3 text-teal-300">{addTooltipsToText(levelInfo.levelTitle)}</p>}
              
              <div className="space-y-4">
                {levelInfo.classFeatures.map((feature, idx) => (
                  <FeatureCard 
                    key={`cf-${idx}-${feature.name}`} 
                    name={feature.name} 
                    description={feature.description} 
                    note={feature.note}
                    variant={feature.isCritical ? CardVariant.CRITICAL : feature.isDeed ? CardVariant.DEED : CardVariant.DEFAULT} 
                  />
                ))}
                {levelInfo.subclassFeature && (
                  <FeatureCard 
                    name={levelInfo.subclassFeature.name} 
                    description={levelInfo.subclassFeature.description} 
                    note={levelInfo.subclassFeature.note}
                    variant={CardVariant.SUBCLASS}
                  />
                )}
              </div>

              {levelInfo.plannerNotes && (
                <div className="mt-6 p-4 bg-slate-700/70 rounded-md border border-slate-600">
                  <h5 className="text-lg font-semibold text-amber-400 mb-2">Build Recommendations:</h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                    {levelInfo.plannerNotes.fightingStyle && <li><strong>Fighting Style:</strong> {addTooltipsToText(levelInfo.plannerNotes.fightingStyle)}</li>}
                    {levelInfo.plannerNotes.asiChoice && <li><strong>ASI/Feat Priority:</strong> {addTooltipsToText(levelInfo.plannerNotes.asiChoice)}</li>}
                    {levelInfo.plannerNotes.featSuggestion && <li><strong>Feat Suggestion:</strong> {addTooltipsToText(levelInfo.plannerNotes.featSuggestion)}</li>}
                    {levelInfo.plannerNotes.spellSuggestions && <li><strong>Spell Suggestions:</strong> {addTooltipsToText(levelInfo.plannerNotes.spellSuggestions.join('; '))}</li>}
                    {levelInfo.plannerNotes.skillSuggestions && <li><strong>Skill Focus:</strong> {addTooltipsToText(levelInfo.plannerNotes.skillSuggestions.join(', '))}</li>}
                    {levelInfo.plannerNotes.notes && <li><strong>Notes:</strong> <span className="italic">{addTooltipsToText(levelInfo.plannerNotes.notes)}</span></li>}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
