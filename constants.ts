import { AllClassesData, Subclass, ClassSection, ClassDefinition } from './types';
import { allClassesData as rawAllClassesData } from './data/classes'; // Added new import
// Removed 14 individual class data imports

import { ALL_SPECIES_DATA } from './data/speciesData';
import { ALL_ORIGINS_DATA } from './data/originsData';

export { ALL_SPECIES_DATA, ALL_ORIGINS_DATA };

const ensureSubclassIds = (classDef: ClassDefinition): ClassDefinition => {
  const subclassSection = classDef.sections.find(sec => sec.type === 'subclasses') as Extract<ClassSection, { type: 'subclasses' }> | undefined;
  if (subclassSection && subclassSection.subclasses) {
    subclassSection.subclasses = subclassSection.subclasses.map(sc => ({
      ...sc,
      id: sc.id || sc.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') // Create a slug-like ID if not present
    }));
  }
  // Determine subclassChoiceLevel if not already set
  if (classDef.subclassChoiceLevel === undefined) {
    const levelProgSection = classDef.sections.find(s => s.type === 'levelProgression') as Extract<ClassSection, { type: 'levelProgression' }> | undefined;
    if (levelProgSection) {
        for (const levelSet of levelProgSection.levels) {
            if (levelSet.features.some(f => f.isSubclassFeature && f.name.toLowerCase().includes('feature'))) {
                classDef.subclassChoiceLevel = typeof levelSet.level === 'string' ? parseInt(levelSet.level) : levelSet.level;
                break;
            }
        }
    }
  }
  return classDef;
};

// Modified ALL_CLASSES_DATA initialization
export const ALL_CLASSES_DATA: AllClassesData = Object.entries(
  rawAllClassesData
).reduce<AllClassesData>((acc, [key, classDef]) => {
  acc[key] = ensureSubclassIds(classDef);
  return acc;
}, {});

export const getSubclassesForClass = (classKey: string): Subclass[] => {
  const classData = ALL_CLASSES_DATA[classKey];
  if (!classData) return [];
  const subclassSection = classData.sections.find(sec => sec.type === 'subclasses') as (Extract<ClassSection, { type: 'subclasses' }> | undefined);
  return subclassSection ? subclassSection.subclasses : [];
};

export const getClassLevelProgression = (classKey: string) => {
    const classData = ALL_CLASSES_DATA[classKey];
    if (!classData) return [];
    const levelSection = classData.sections.find(sec => sec.type === 'levelProgression') as (Extract<ClassSection, { type: 'levelProgression'}> | undefined);
    return levelSection ? levelSection.levels : [];
};
