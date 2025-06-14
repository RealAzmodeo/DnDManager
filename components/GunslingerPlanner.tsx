
import React, { useState, useMemo } from 'react';
import { ClassPlannerConfig, Subclass, LevelFeatureSet, CombinedLevelInfo, PlannerRecommendationDetails, FeatureDetail } from '../types'; // Updated imports
import { FeatureCard } from './FeatureCard';
import { CardVariant } from '../types';
import { addTooltipsToText } from '../utils/textUtils';

interface ClassPlannerProps { // Renamed from GunslingerPlannerProps
  plannerConfig: ClassPlannerConfig;
  subclasses: Subclass[];
  coreLevelProgression: LevelFeatureSet[];
  className: string; // Added to display class name in planner title
}

export const ClassPlanner: React.FC<ClassPlannerProps> = ({ plannerConfig, subclasses, coreLevelProgression, className }) => { // Renamed component
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
    if (!selectedSubclass) return undefined;

    // This logic for finding subclass feature index might need to be more robust
    // if subclass feature levels aren't consistently 3, 6, 10, 14 for all classes.
    // For now, assuming this pattern.
    let featureIndex = -1;
    if (level === 3) featureIndex = 0;
    else if (level === 6) featureIndex = 1;
    else if (level === 10) featureIndex = 2;
    else if (level === 14) featureIndex = 3;
    // Some classes get subclass features at other levels, this will need generalization.
    // e.g. Clerics get a feature at L1. For now, this is a simplified example.

    if (featureIndex !== -1 && selectedSubclass.features && selectedSubclass.features[featureIndex]) {
      // Ensure feature names are unique or clearly tied to the subclass if they are generic like "Subclass Feature"
      const originalFeature = selectedSubclass.features[featureIndex];
      return {
        ...originalFeature,
        name: `${selectedSubclass.name}: ${originalFeature.name}`, // Prefix with subclass name for clarity
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

      // Try to get subclass-specific recommendations first
      const subRecommendations = plannerConfig.subclassSpecificRecommendations[selectedSubclass.name];
      const subLevelReco = subRecommendations?.find(r => r.level === levelNum);
      
      if (subLevelReco) {
        plannerNotes = subLevelReco.recommendation;
      } else {
        // Fallback to general recommendations
        const generalLevelReco = plannerConfig.generalLevelRecommendations.find(r => r.level === levelNum);
        if (generalLevelReco) {
          plannerNotes = generalLevelReco.recommendation;
        }
      }
      
      // Add initial feat note for level 1 if applicable
      if (levelNum === 1 && plannerConfig.origin.recommendedFeat) {
        const originFeatNote = `Origin Feat: ${plannerConfig.origin.recommendedFeat}.`;
        const currentFeatSuggestion = plannerNotes?.featSuggestion || "";
        let combinedFeatSuggestion = plannerConfig.origin.recommendedFeat;
        if (currentFeatSuggestion && !currentFeatSuggestion.toLowerCase().includes(plannerConfig.origin.recommendedFeat.toLowerCase())) {
          combinedFeatSuggestion += `, ${currentFeatSuggestion}`;
        }
        
        plannerNotes = {
            ...plannerNotes,
            featSuggestion: combinedFeatSuggestion,
            notes: plannerNotes?.notes ? `${originFeatNote} ${plannerNotes.notes}` : originFeatNote
        };
      }

      return {
        level: levelSet.level,
        levelTitle: levelSet.title,
        classFeatures: levelSet.features.filter(f => !f.name.toLowerCase().includes('subclass') && !f.name.toLowerCase().includes('creed')), // Filter out generic "Subclass Feature" text from core progression
        subclassFeature: getSubclassFeatureForLevel(levelNum),
        plannerNotes: plannerNotes,
      };
    });
  }, [showProgression, selectedSubclass, coreLevelProgression, plannerConfig]);

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
            {plannerConfig.origin.skillProficiencies && plannerConfig.origin.skillProficiencies.length > 0 &&
              <p className="text-sm text-slate-400 ml-2"><strong>Origin Skills:</strong> {addTooltipsToText(plannerConfig.origin.skillProficiencies.join(', '))}</p>
            }
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
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row items-center gap-4">
        <label htmlFor="subclass-select" className="text-xl text-sky-300 font-medium">Choose Your Subclass:</label>
        <select
          id="subclass-select"
          value={selectedSubclass?.name || ''}
          onChange={handleSubclassChange}
          className="p-3 bg-slate-700 text-slate-200 border border-slate-600 rounded-md shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 flex-grow"
        >
          <option value="" disabled>Select a Subclass</option>
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
                    {levelInfo.plannerNotes.featSuggestion && !levelInfo.plannerNotes.asiChoice?.toLowerCase().includes("feat:") && <li><strong>Feat Suggestion:</strong> {addTooltipsToText(levelInfo.plannerNotes.featSuggestion)}</li>}
                    {levelInfo.plannerNotes.spellSuggestions && <li><strong>Spell Suggestions:</strong> {addTooltipsToText(levelInfo.plannerNotes.spellSuggestions.join(', '))}</li>}
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
