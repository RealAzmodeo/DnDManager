// data/tooltip_definitions/ability_scores.ts
import { StructuredTooltipData } from '../../types';

export const abilityScoresTooltips: Record<string, StructuredTooltipData> = {
  "Strength": {
    name: "Strength",
    category: "Ability Score",
    summary: "Measures physical power, bodily might, and the extent to which you can exert raw physical force.",
    rules: [
      "Determines carrying capacity.",
      "Used for Athletics skill checks.",
      "Affects attack and damage rolls for melee weapons with the 'finesse' property (if chosen over Dexterity) or 'heavy' property.",
      "Requirement for wearing heavy armor effectively."
    ],
    source: "Player's Handbook"
  },
  "Dexterity": {
    name: "Dexterity",
    category: "Ability Score",
    summary: "Measures agility, reflexes, balance, and coordination.",
    rules: [
      "Affects Armor Class (AC) for characters wearing light or medium armor, or no armor.",
      "Used for initiative rolls.",
      "Affects attack and damage rolls for ranged weapons and melee weapons with the 'finesse' property.",
      "Used for Acrobatics, Sleight of Hand, and Stealth skill checks.",
      "Commonly used for saving throws to avoid traps and certain spells."
    ],
    source: "Player's Handbook"
  },
  "Constitution": {
    name: "Constitution",
    category: "Ability Score",
    summary: "Represents health, stamina, and vital force.",
    rules: [
      "Determines hit point maximum and hit points gained per level.",
      "Used for Constitution saving throws, which are often required to maintain concentration on spells or resist poisons and diseases."
    ],
    source: "Player's Handbook"
  },
  "Intelligence": {
    name: "Intelligence",
    category: "Ability Score",
    summary: "Measures reasoning, memory, analytical skill, and logic.",
    rules: [
      "The primary spellcasting ability for Wizards, Artificers, and some subclasses.",
      "Used for Arcana, History, Investigation, Nature, and Religion skill checks.",
      "Affects the number of spells a Wizard can prepare."
    ],
    source: "Player's Handbook"
  },
  "Wisdom": {
    name: "Wisdom",
    category: "Ability Score",
    summary: "Reflects awareness, intuition, insight, and perceptiveness.",
    rules: [
      "The primary spellcasting ability for Clerics, Druids, Rangers, and Monks (for Ki save DC).",
      "Used for Animal Handling, Insight, Medicine, Perception, and Survival skill checks.",
      "A common type of saving throw against spells that affect the mind or senses."
    ],
    source: "Player's Handbook"
  },
  "Charisma": {
    name: "Charisma",
    category: "Ability Score",
    summary: "Represents force of personality, persuasiveness, personal magnetism, ability to lead, and physical attractiveness.",
    rules: [
      "The primary spellcasting ability for Bards, Paladins, Sorcerers, and Warlocks.",
      "Used for Deception, Intimidation, Performance, and Persuasion skill checks.",
      "Affects Paladin's Lay on Hands pool and Aura of Protection bonus, and Cleric's Turn Undead save DC (sometimes)."
    ],
    source: "Player's Handbook"
  },
};
