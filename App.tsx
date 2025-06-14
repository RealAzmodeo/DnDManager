
import React, { useState, useEffect } from 'react';
import { ALL_CLASSES_DATA, getSubclassesForClass, getClassLevelProgression } from './constants';
import { 
  ClassSection, ClassDefinition,
  ClassIntroSection, ClassClosingRemarksSection, ClassRolePlaystyleSection, 
  ClassStrengthsWeaknessesSection, ClassBaseTraitsSection, ClassLevelProgressionSection,
  ClassUniqueMechanicsSection, ClassSubclassesSection, ClassFeatsSection,
  ClassFlavorNRoleplayingSection, ClassMulticlassingSection, ClassEquipmentProgressionSection
} from './types';
import { ContentSection } from './components/ContentSection';
import { ClassPlanner } from './components/ClassPlanner';
import { addTooltipsToText } from './utils/textUtils';
import { TooltipModal } from './components/TooltipModal'; 
import { CharacterBuilderPage } from './components/CharacterBuilder/CharacterBuilderPage'; // New

// Import new section components
import { IntroSectionContent } from './components/sections/IntroSectionContent';
import { RolePlaystyleSectionContent } from './components/sections/RolePlaystyleSectionContent';
import { StrengthsWeaknessesSectionContent } from './components/sections/StrengthsWeaknessesSectionContent';
import { BaseTraitsSectionContent } from './components/sections/BaseTraitsSectionContent';
import { LevelProgressionSectionContent } from './components/sections/LevelProgressionSectionContent';
import { UniqueMechanicsSectionContent } from './components/sections/UniqueMechanicsSectionContent';
import { SubclassesSectionContent } from './components/sections/SubclassesSectionContent';
import { FeatsSectionContent } from './components/sections/FeatsSectionContent';
import { FlavorAndRoleplayingSectionContent } from './components/sections/FlavorAndRoleplayingSectionContent';
import { MulticlassingSectionContent } from './components/sections/MulticlassingSectionContent';
import { EquipmentProgressionSectionContent } from './components/sections/EquipmentProgressionSectionContent';

const App: React.FC = () => {
  const classKeys = Object.keys(ALL_CLASSES_DATA);
  const [selectedClassKey, setSelectedClassKey] = useState<string>(classKeys[0] || '');
  const [showPlanner, setShowPlanner] = useState(false);
  const [activeView, setActiveView] = useState<'guide' | 'builder'>('guide'); // New state for view

  const currentClassDef: ClassDefinition | undefined = ALL_CLASSES_DATA[selectedClassKey];

  useEffect(() => {
    if (activeView === 'guide' && currentClassDef) {
      document.title = currentClassDef.classTitle;
    } else if (activeView === 'builder') {
      document.title = "Character Builder";
    }
  }, [currentClassDef, activeView]);

  if (activeView === 'guide' && !currentClassDef) {
    return <div className="p-8 text-center text-red-500">Error: No class definition found for key: {selectedClassKey}. Please check constants.ts</div>;
  }

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClassKey(event.target.value);
    setShowPlanner(false); 
  };

  const renderSectionContent = (section: ClassSection): React.ReactNode => {
    switch (section.type) {
      case 'intro':
      case 'closingRemarks':
        return <IntroSectionContent section={section as ClassIntroSection | ClassClosingRemarksSection} />;
      case 'rolePlaystyle':
        return <RolePlaystyleSectionContent section={section as ClassRolePlaystyleSection} />;
      case 'strengthsWeaknesses':
        return <StrengthsWeaknessesSectionContent section={section as ClassStrengthsWeaknessesSection} />;
      case 'baseTraits':
        return <BaseTraitsSectionContent section={section as ClassBaseTraitsSection} />;
      case 'levelProgression':
        return <LevelProgressionSectionContent section={section as ClassLevelProgressionSection} />;
      case 'uniqueMechanics':
        return <UniqueMechanicsSectionContent section={section as ClassUniqueMechanicsSection} />;
      case 'subclasses':
        return <SubclassesSectionContent section={section as ClassSubclassesSection} />;
      case 'feats':
        return <FeatsSectionContent section={section as ClassFeatsSection} />;
      case 'flavorAndRoleplaying':
        return <FlavorAndRoleplayingSectionContent section={section as ClassFlavorNRoleplayingSection} />;
      case 'multiclassing':
        return <MulticlassingSectionContent section={section as ClassMulticlassingSection} />;
      case 'equipmentProgression':
        return <EquipmentProgressionSectionContent section={section as ClassEquipmentProgressionSection} />;
      default:
        return null;
    }
  };

  const allSubclassesForCurrentClass = getSubclassesForClass(selectedClassKey);
  const coreLevelProgressionForCurrentClass = getClassLevelProgression(selectedClassKey);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-slate-100 p-4 md:p-8 font-[Inter]">
      <header className="text-center mb-10 pt-8">
        <div className="flex justify-center items-center space-x-4 max-w-2xl mx-auto mb-6">
          {activeView === 'guide' && (
            <div className="flex-grow max-w-md">
              <label htmlFor="class-select" className="sr-only">Select D&D Class</label>
              <select
                id="class-select"
                value={selectedClassKey}
                onChange={handleClassChange}
                className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-lg shadow-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-xl font-semibold"
              >
                {classKeys.map(key => (
                  <option key={key} value={key}>{ALL_CLASSES_DATA[key].className}</option>
                ))}
              </select>
            </div>
          )}
          <button
            onClick={() => setActiveView(activeView === 'guide' ? 'builder' : 'guide')}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 text-lg"
          >
            {activeView === 'guide' ? 'Character Builder' : 'Class Guides'}
          </button>
        </div>

        {activeView === 'guide' && currentClassDef && (
          <>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-4 tracking-tight" style={{ fontFamily: "'Merriweather', serif" }}>
              {currentClassDef.classTitle}
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {addTooltipsToText(currentClassDef.classDescription)}
            </p>
          </>
        )}
         {activeView === 'builder' && (
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300 mb-4 tracking-tight" style={{ fontFamily: "'Merriweather', serif" }}>
            Character Builder
          </h1>
        )}
      </header>

      {activeView === 'builder' ? (
        <CharacterBuilderPage />
      ) : (
        currentClassDef && (
          <>
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <button
                onClick={() => setShowPlanner(!showPlanner)}
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
              >
                {showPlanner ? `Hide ${currentClassDef.className} Build Planner` : `Plan Your ${currentClassDef.className} Build`}
              </button>
            </div>

            {showPlanner && (
              <ClassPlanner
                plannerConfig={currentClassDef.plannerConfig}
                subclasses={allSubclassesForCurrentClass}
                coreLevelProgression={coreLevelProgressionForCurrentClass}
                className={currentClassDef.className}
              />
            )}

            <main className="max-w-5xl mx-auto space-y-12">
              {!showPlanner && currentClassDef.sections.map((section, index) => (
                <ContentSection key={`${selectedClassKey}-${section.sectionId}-${index}`} title={section.title}>
                  {renderSectionContent(section)}
                </ContentSection>
              ))}
            </main>

            <footer className="text-center mt-16 py-8 border-t border-slate-700">
              <p className="text-slate-500">{addTooltipsToText(`${currentClassDef.className} Class information based on D&D 2024 materials and other relevant sources.`)}</p>
              <p className="text-sm text-slate-600">App by AI. For illustrative purposes.</p>
            </footer>
          </>
        )
      )}
      
      <TooltipModal />
    </div>
  );
};

export default App;
