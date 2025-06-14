
import { AllClassesData, Subclass, ClassSection, ClassDefinition } from './types';
import { gunslingerClassData } from './data/gunslinger';
import { psionClassData } from './data/psion';
import { clericClassData } from './data/cleric';
import { wizardClassData } from './data/wizard';
import { paladinClassData } from './data/paladin';
import { fighterClassData } from './data/fighter';
import { bardClassData } from './data/bard';
import { rogueClassData } from './data/rogue';
import { barbarianClassData } from './data/barbarian';
import { druidClassData } from './data/druid';
import { monkClassData } from './data/monk';
import { sorcererClassData } from './data/sorcerer';
import { rangerClassData } from './data/ranger';
import { warlockClassData } from './data/warlock'; 

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

export const ALL_CLASSES_DATA: AllClassesData = {
  "gunslinger": ensureSubclassIds(gunslingerClassData),
  "psion": ensureSubclassIds(psionClassData),
  "cleric": ensureSubclassIds(clericClassData),
  "wizard": ensureSubclassIds(wizardClassData),
  "paladin": ensureSubclassIds(paladinClassData),
  "fighter": ensureSubclassIds(fighterClassData),
  "bard": ensureSubclassIds(bardClassData),
  "rogue": ensureSubclassIds(rogueClassData),
  "barbarian": ensureSubclassIds(barbarianClassData),
  "druid": ensureSubclassIds(druidClassData),
  "monk": ensureSubclassIds(monkClassData),
  "sorcerer": ensureSubclassIds(sorcererClassData),
  "ranger": ensureSubclassIds(rangerClassData),
  "warlock": ensureSubclassIds(warlockClassData),
};

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
