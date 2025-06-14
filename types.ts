export interface FeatureDetail {
  name: string;
  description: string;
  level?: string | number;
  subItems?: string[];
  note?: string;
  isDeed?: boolean; 
  isSubclassFeature?: boolean;
  isCritical?: boolean; 
}

export interface Subclass extends FeatureDetail {
  id: string; // Added ID for unique identification
  features: FeatureDetail[];
}

export interface LevelFeatureSet {
  level: number | string;
  features: FeatureDetail[];
  title?: string;
}

interface ClassSectionBase {
  title: string;
  sectionId: string; 
}

export interface ClassIntroSection extends ClassSectionBase {
  type: 'intro';
  content: string[];
}

export interface ClassRolePlaystyleSection extends ClassSectionBase {
  type: 'rolePlaystyle';
  content: string[]; 
}

export interface ClassStrengthsWeaknessesSection extends ClassSectionBase {
  type: 'strengthsWeaknesses';
  strengths: string[];
  weaknesses: string[];
}

export interface ClassBaseTraitsSection extends ClassSectionBase {
  type: 'baseTraits';
  items: FeatureDetail[]; 
}

export interface ClassLevelProgressionSection extends ClassSectionBase {
  type: 'levelProgression';
  levels: LevelFeatureSet[];
}

export interface ClassUniqueMechanicsSection extends ClassSectionBase {
  type: 'uniqueMechanics'; 
  intro?: string;
  mechanics: FeatureDetail[]; 
}

export interface ClassSubclassesSection extends ClassSectionBase {
  type: 'subclasses';
  intro?: string;
  subclasses: Subclass[];
}

export interface ClassFlavorNRoleplayingSection extends ClassSectionBase {
  type: 'flavorAndRoleplaying';
  content: string[]; 
}

export interface ClassMulticlassingSection extends ClassSectionBase {
  type: 'multiclassing';
  generalNotes: string[];
  goodCombinations?: Array<{
    className: string;
    synergy: string;
    levels?: string;
  }>;
}

export interface ClassEquipmentProgressionSection extends ClassSectionBase {
  type: 'equipmentProgression';
  earlyGame: string[];
  midGame: string[];
  lateGame: string[];
}

export interface ClassClosingRemarksSection extends ClassSectionBase {
  type: 'closingRemarks';
  content: string[];
}

export interface FeatCategory {
  categoryName: string;
  description?: string;
  feats: FeatureDetail[]; 
}

export interface ClassFeatsSection extends ClassSectionBase {
  type: 'feats';
  intro?: string;
  categories?: FeatCategory[];
}


export type ClassSection =
  | ClassIntroSection
  | ClassRolePlaystyleSection
  | ClassStrengthsWeaknessesSection
  | ClassBaseTraitsSection
  | ClassLevelProgressionSection
  | ClassUniqueMechanicsSection
  | ClassSubclassesSection
  | ClassFlavorNRoleplayingSection
  | ClassMulticlassingSection
  | ClassEquipmentProgressionSection
  | ClassClosingRemarksSection
  | ClassFeatsSection; 

export enum CardVariant {
  DEFAULT = 'default',
  DEED = 'deed', 
  SUBCLASS = 'subclass',
  CRITICAL = 'critical',
  CORE = 'core'
}

// --- Planner Types ---
export interface PlannerRecommendationDetails {
  fightingStyle?: string;
  asiChoice?: string;
  featSuggestion?: string; 
  skillSuggestions?: string[];
  spellSuggestions?: string[]; 
  notes?: string;
}

export interface PlannerRecommendationForLevel {
  level: number;
  recommendation: PlannerRecommendationDetails;
}

export interface SubclassPlannerRecommendations {
  [subclassName: string]: PlannerRecommendationForLevel[];
}

export interface ClassPlannerConfig {
  species: { name: string; note: string; }; 
  origin: { 
    name: string; 
    note: string;
    recommendedFeat: string; 
    skillProficiencies: string[]; 
  };
  abilityPriority: string[];
  keyClassSkills: string[]; 
  generalLevelRecommendations: PlannerRecommendationForLevel[];
  subclassSpecificRecommendations: SubclassPlannerRecommendations;
}

export interface CombinedLevelInfo {
  level: number | string;
  levelTitle?: string;
  classFeatures: FeatureDetail[];
  subclassFeature?: FeatureDetail;
  plannerNotes?: PlannerRecommendationDetails;
}

// --- Top-Level Data Structure for a Single Class ---
export interface ClassSkillChoiceData {
  count: number;
  from: string[];
}

export interface ClassDefinition {
  className: string; 
  classTitle: string; 
  classDescription: string; 
  themeColor?: string; 
  sections: ClassSection[];
  plannerConfig: ClassPlannerConfig;
  subclassChoiceLevel?: number; // Added to explicitly store when subclass is chosen
}

// --- Structure for All Classes Data ---
export interface AllClassesData {
  [classNameKey: string]: ClassDefinition;
}

// --- Tooltip Data Structure ---
export interface TooltipDamageInstance {
  dice?: string; 
  type: string;  
  notes?: string; 
}

export interface TooltipSaveInfo {
  attribute: string; 
  dc?: string | number; 
  effectOnSuccess?: string;
  effectOnFailure?: string;
}

export interface StructuredTooltipData {
  name: string;            
  category: string;        
  summary: string;         
  
  level?: string | number;
  castingTime?: string;
  range?: string;
  area?: string; 
  components?: string[]; 
  duration?: string;
  school?: string;          
  
  damage?: TooltipDamageInstance[];
  healing?: string;         
  saveInfo?: TooltipSaveInfo;
  effects?: string[];       
  conditionsApplied?: string[]; 
  recharge?: string;        
  
  prerequisites?: string;
  source?: string;          
  tags?: string[];          
  
  governingAbility?: string; 
  
  rules?: string[]; 
  numericalValue?: string | number; 

  additionalDetails?: Record<string, string>; 
}

// --- Character Builder Types ---

export interface AbilityScore {
  name: 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';
  value: number;
  baseValue?: number; 
  speciesBonus?: number;
  originBonus?: number;
}

export interface SpeciesTrait {
  name: string;
  description: string;
}

export interface SpeciesDefinition {
  id: string;
  name: string;
  description: string;
  asi: Array<{ score: 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma' | 'Any' | 'Choice'; bonus: number; count?: number }>;
  speed: number;
  size: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
  vision?: string; 
  traits: SpeciesTrait[];
  languagesKnown: string[];
  languageChoices?: number;
}

export interface ASIOption {
  name: string; 
  abilities: Array<{ score: 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma' | 'Any'; bonus: number; fixed?: boolean }>; 
  count?: number; 
}

export interface OriginDefinition {
  id: string;
  name: string;
  description: string;
  asi: { options: ASIOption[]; note?: string };
  skillProficiencies: string[];
  skillProficiencyChoices?: { choose: number; from: string[] };
  toolProficiencies?: string[];
  toolProficiencyChoices?: { choose: number; from: string[] };
  languageProficiencies?: string[];
  languageProficiencyChoices?: { choose: number; from: string[] };
  originFeat: string; 
  narrativeHook: string;
  startingEquipment?: string[];
}

export interface SelectedOriginASI {
  optionName: string;
  assignments: Array<{ score: AbilityScore['name']; bonus: number }>;
}

export interface CharacterInProgress {
  name?: string;
  currentLevel?: number; 
  abilityScores: AbilityScore[]; 
  selectedAbilityScoreValues?: number[]; 
  assignedScores?: Partial<Record<AbilityScore['name'], number>>; 

  selectedSpeciesId?: string;

  selectedOriginId?: string;
  selectedOriginASI?: SelectedOriginASI;
  originSkillProficiencies?: string[]; // Skills granted by origin
  
  personalHistory?: {
    ideals?: string;
    bonds?: string;
    flaws?: string;
    goals?: string;
    motivation?: string;
  };

  selectedClassKey?: string;
  selectedSubclassId?: string; 
  level1HitPoints?: number;
  chosenClassSkills?: string[];
  chosenClassSkillCount?: number; // Track how many class skills are chosen
  availableClassSkillChoices?: ClassSkillChoiceData; 
}

export const ABILITY_SCORE_NAMES: AbilityScore['name'][] = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
export const STANDARD_ARRAY: number[] = [15, 14, 13, 12, 10, 8];
export const ALL_SKILLS_LIST: string[] = [
    "Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", 
    "History", "Insight", "Intimidation", "Investigation", "Medicine", 
    "Nature", "Perception", "Performance", "Persuasion", "Religion", 
    "Sleight of Hand", "Stealth", "Survival"
];

export interface GameMechanic {
  id: string; // Unique identifier for the mechanic
  name: string; // Display name of the mechanic
  description: string; // Detailed description
  type: 'skill' | 'dice' | 'ability' | 'status_effect' | 'other'; // Type of mechanic
  properties?: Record<string, any>; // Optional field for additional properties
}
