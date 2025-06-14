
// tooltipData.ts
import { StructuredTooltipData } from './types'; 
import { abilityScoresTooltips } from './data/tooltip_definitions/ability_scores';
import { originsTooltips } from './data/tooltip_definitions/origins'; // Changed from backgroundsTooltips
import { classFeaturesAndMechanicsTooltips } from './data/tooltip_definitions/class_features_and_mechanics'; // Will be smaller
import { conditionsTooltips } from './data/tooltip_definitions/conditions';
import { featsTooltips } from './data/tooltip_definitions/feats';
import { generalTermsTooltips } from './data/tooltip_definitions/general_terms'; // Will include equipment
import { racesTooltips } from './data/tooltip_definitions/races';
import { skillsTooltips } from './data/tooltip_definitions/skills';
import { spellsTooltips } from './data/tooltip_definitions/spells';
import { subclassNamesTooltips } from './data/tooltip_definitions/subclass_names';
import { maneuversTooltips } from './data/tooltip_definitions/maneuvers';

// New imports for class-specific features
import { gunslingerFeaturesTooltips } from './data/tooltip_definitions/gunslinger_features';
import { psionFeaturesTooltips } from './data/tooltip_definitions/psion_features';
import { clericFeaturesTooltips } from './data/tooltip_definitions/cleric_features';
import { wizardFeaturesTooltips } from './data/tooltip_definitions/wizard_features';
import { paladinFeaturesTooltips } from './data/tooltip_definitions/paladin_features';
import { fighterFeaturesTooltips } from './data/tooltip_definitions/fighter_features';
import { bardFeaturesTooltips } from './data/tooltip_definitions/bard_features';
import { rogueFeaturesTooltips } from './data/tooltip_definitions/rogue_features';
import { barbarianFeaturesTooltips } from './data/tooltip_definitions/barbarian_features';
import { druidFeaturesTooltips } from './data/tooltip_definitions/druid_features';
import { monkFeaturesTooltips } from './data/tooltip_definitions/monk_features';
import { sorcererFeaturesTooltips } from './data/tooltip_definitions/sorcerer_features';
import { rangerFeaturesTooltips } from './data/tooltip_definitions/ranger_features';
import { warlockFeaturesTooltips } from './data/tooltip_definitions/warlock_features'; // Added Warlock features


export const MASTER_TOOLTIP_DEFINITIONS: Record<string, StructuredTooltipData> = {
  ...abilityScoresTooltips,
  ...originsTooltips, // Changed from backgroundsTooltips
  ...classFeaturesAndMechanicsTooltips, // Now for shared multi-class mechanics
  ...conditionsTooltips,
  ...featsTooltips,
  ...generalTermsTooltips, // Now includes general equipment like component pouch
  ...racesTooltips,
  ...skillsTooltips,
  ...spellsTooltips,
  ...subclassNamesTooltips,
  ...maneuversTooltips,

  // Add all class-specific features
  ...gunslingerFeaturesTooltips,
  ...psionFeaturesTooltips,
  ...clericFeaturesTooltips,
  ...wizardFeaturesTooltips,
  ...paladinFeaturesTooltips,
  ...fighterFeaturesTooltips,
  ...bardFeaturesTooltips,
  ...rogueFeaturesTooltips,
  ...barbarianFeaturesTooltips,
  ...druidFeaturesTooltips,
  ...monkFeaturesTooltips,
  ...sorcererFeaturesTooltips,
  ...rangerFeaturesTooltips,
  ...warlockFeaturesTooltips, // Added Warlock features
};