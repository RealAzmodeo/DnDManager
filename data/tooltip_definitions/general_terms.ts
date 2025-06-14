// data/tooltip_definitions/general_terms.ts
import { StructuredTooltipData } from '../../types';

export const generalTermsTooltips: Record<string, StructuredTooltipData> = {
  "Firearm": {
    name: "Firearm",
    category: "Weapon Type",
    summary: "A ranged weapon that uses gunpowder or a similar propellant to fire a projectile. Common in some D&D settings, with specific rules for ammunition, reloading, and properties like 'misfire' or 'scatter'.",
    tags: ["Ranged Weapon", "Ammunition"],
    source: "Dungeon Master's Guide / Specific Setting Guides"
  },
  "Akimbo": {
    name: "Akimbo",
    category: "Fighting Style / Tactic",
    summary: "A fighting style or ability that allows a character to effectively wield two weapons, one in each hand, often pistols in the context of a Gunslinger. Typically mitigates or removes penalties for two-weapon fighting.",
    rules: ["Usually involves using two light weapons, or specific class features to dual-wield non-light weapons.", "Standard two-weapon fighting allows a bonus action attack with the off-hand weapon if both are light, but without adding ability modifier to off-hand damage unless a feature permits it."],
    tags: ["Two-Weapon Fighting", "Combat Style"],
    source: "Player's Handbook / Class Features"
  },
  "Critical Hit": {
    name: "Critical Hit",
    category: "Combat Mechanic",
    summary: "When an attack roll results in a natural 20 (or within a specified critical hit range), the attack scores a critical hit. This typically means rolling all of the attack's damage dice twice, then adding relevant modifiers.",
    effects: ["Roll all damage dice for the attack twice, then add modifiers."],
    tags: ["Attack Roll", "Damage Bonus"],
    source: "Player's Handbook",
    rules: ["Trigger: Natural 20 on attack roll (or expanded range via features)."]
  },
  "Advantage": {
    name: "Advantage",
    category: "Game Mechanic",
    summary: "When a character has advantage on a roll (attack roll, ability check, or saving throw), they roll two d20s and use the higher result. This significantly increases the chance of success.",
    rules: ["Roll two d20s, use the higher result."],
    tags: ["Dice Roll Modifier"],
    source: "Player's Handbook"
  },
  "Disadvantage": {
    name: "Disadvantage",
    category: "Game Mechanic",
    summary: "When a character has disadvantage on a roll, they roll two d20s and use the lower result. This significantly decreases the chance of success.",
    rules: ["Roll two d20s, use the lower result."],
    tags: ["Dice Roll Modifier"],
    source: "Player's Handbook"
  },
  "Saving Throw": {
    name: "Saving Throw",
    category: "Game Mechanic",
    summary: "A roll made to resist or avoid a spell, trap, poison, disease, or similar threat. The type of saving throw (e.g., Dexterity, Wisdom) depends on the effect. The DC is set by the effect's source.",
    rules: ["Roll 1d20 + ability modifier + proficiency bonus (if proficient in that save) + other modifiers.", "Compare result to the Difficulty Class (DC) of the effect."],
    tags: ["Defense", "Dice Roll"],
    source: "Player's Handbook"
  },
  "Proficiency Bonus": {
    name: "Proficiency Bonus",
    category: "Character Statistic",
    summary: "A bonus added to rolls for skills, weapons, tools, and saving throws your character is proficient with. It scales with your character's total level.",
    numericalValue: "+2 (Levels 1-4), +3 (Levels 5-8), +4 (Levels 9-12), +5 (Levels 13-16), +6 (Levels 17-20)",
    rules: ["Applies to attack rolls with proficient weapons, ability checks with proficient skills/tools, saving throws proficient in, and spell attack rolls/save DCs for casters."],
    tags: ["Character Progression"],
    source: "Player's Handbook"
  },
  "AC": {
    name: "Armor Class (AC)",
    category: "Combat Statistic",
    summary: "Represents how hard it is to hit a creature with an attack. An attacker's attack roll must meet or exceed the target's AC to hit.",
    rules: [
      "Base AC is 10 + Dexterity modifier (if unarmored).",
      "Light Armor: Armor's base AC + Dexterity modifier.",
      "Medium Armor: Armor's base AC + Dexterity modifier (max +2, usually).",
      "Heavy Armor: Armor's base AC (Dexterity doesn't apply, may have Strength requirement).",
      "Shields add +2 AC.",
      "Other modifiers can apply (spells, magic items, cover)."
    ],
    tags: ["Defense", "Combat"],
    source: "Player's Handbook"
  },
  "Hit Dice": {
    name: "Hit Dice",
    category: "Character Resource",
    summary: "Represent a character's resilience and ability to recover from wounds. Used during short rests to regain hit points. The size (d6, d8, d10, d12) and number (equal to character level) vary by class.",
    rules: ["During a short rest, a character can spend one or more Hit Dice to regain hit points.", "For each Hit Die spent, roll the die and add your Constitution modifier. Regain HP equal to the total.", "A character regains half their total number of Hit Dice (min 1) after a long rest."],
    tags: ["Healing", "Resource", "Short Rest"],
    source: "Player's Handbook"
  },
  "Epic Boon": {
    name: "Epic Boon",
    category: "High-Level Reward",
    summary: "A powerful reward granted to high-level characters (typically level 19 or 20), providing significant new abilities or enhancements beyond normal class features or feats.",
    level: "Typically 19 or 20",
    source: "Dungeon Master's Guide / D&D 2024 Rules"
  },
  "Irresistible Offense": {
    name: "Irresistible Offense",
    category: "Epic Boon",
    summary: "An Epic Boon that allows your attacks to ignore a target's resistance to damage, and to treat immunity as resistance instead. Highly effective against well-protected foes.",
    effects: ["Your attacks ignore damage resistance.", "Your attacks treat damage immunity as resistance instead."],
    tags: ["Damage Dealing", "High-Level"],
    source: "Dungeon Master's Guide"
  },
  "Initiative": {
    name: "Initiative",
    category: "Combat Mechanic",
    summary: "A Dexterity check made at the start of combat to determine the turn order. Higher rolls go earlier in the round.",
    rules: ["Roll a d20 + Dexterity modifier + any other initiative bonuses (e.g., Alert feat, Quick Draw feature).", "Creatures act in order from highest roll to lowest."],
    governingAbility: "Dexterity",
    tags: ["Combat", "Turn Order"],
    source: "Player's Handbook"
  },
  "Blindsight": {
    name: "Blindsight",
    category: "Sensory Ability",
    summary: "A creature with blindsight can perceive its surroundings without relying on sight, within a specific radius. Useful for detecting invisible creatures or navigating in darkness.",
    rules: ["Functions in darkness and against invisible targets within the specified range.", "Does not allow perception through solid objects unless specified."],
    tags: ["Perception", "Special Sense"],
    source: "Monster Manual / Various Features"
  },
  "Cover": {
    name: "Cover",
    category: "Combat Mechanic",
    summary: "Obstacles can provide cover during combat, making a target more difficult to hit and potentially aiding Dexterity saving throws.",
    rules: [
      "Half Cover: +2 bonus to AC and Dexterity saving throws. Target is at least half obscured.",
      "Three-Quarters Cover: +5 bonus to AC and Dexterity saving throws. Target is at least three-quarters obscured.",
      "Total Cover: Target cannot be targeted directly by an attack or a spell."
    ],
    tags: ["Defense", "Combat Modifier"],
    source: "Player's Handbook"
  },
  "Radiant Damage": {
    name: "Radiant Damage",
    category: "Damage Type",
    summary: "Damage typically associated with holy power, searing light, or positive energy. Many celestial beings and divine spells deal radiant damage. It often bypasses resistances of undead or fiendish creatures.",
    tags: ["Divine", "Light"],
    source: "Player's Handbook"
  },
  "d8": { name: "d8", category: "Dice Type", summary: "An eight-sided die. Used for Hit Dice (e.g., Clerics, Rogues, Gunslingers) and weapon damage (e.g., longsword, rapier, morningstar).", source: "Game Mechanics" },
  "d6": { name: "d6", category: "Dice Type", summary: "A six-sided die. Used for Hit Dice (e.g., Wizards, Sorcerers) and weapon damage (e.g., shortsword, dagger, sling).", source: "Game Mechanics" },
  "d10": { name: "d10", category: "Dice Type", summary: "A ten-sided die. Used for Hit Dice (e.g., Fighters, Paladins, Rangers) and weapon damage (e.g., glaive, halberd, longbow).", source: "Game Mechanics" },
  "Spell Slot": {
    name: "Spell Slot",
    category: "Spellcasting Resource",
    summary: "A resource expended to cast a spell of a certain level. Casters have a limited number of spell slots of various levels, which are typically regained after a long rest.",
    rules: ["Casting a spell of a certain level requires expending a spell slot of that level or higher.", "Casting a spell using a higher-level slot can sometimes enhance its effects."],
    recharge: "Typically Long Rest (Warlocks regain on Short Rest).",
    tags: ["Spellcasting", "Resource"],
    source: "Player's Handbook"
  },
  "Cantrip": {
    name: "Cantrip",
    category: "Spell Type",
    summary: "A spell that can be cast at will, without using a spell slot and without being prepared in advance (for classes that prepare spells). Wizards and other casters typically know a set number of these.",
    level: 0,
    rules: ["Can be cast an unlimited number of times.", "Damage often scales with character level.", "Cost: No spell slot"],
    tags: ["Spellcasting", "At-Will"],
    source: "Player's Handbook"
  },
  "Component Pouch": {
    name: "Component Pouch",
    category: "Equipment (Spellcasting)",
    summary: "A small, belt-mounted bag holding a variety of mundane material components needed for many spells. An alternative to an arcane focus for most spells that have material components without a specified cost.",
    rules: ["Contains material components for spells, unless a cost is indicated for the material component."],
    source: "Player's Handbook"
  },
  "Arcane Focus": {
    name: "Arcane Focus",
    category: "Equipment (Spellcasting)",
    summary: "An item such as a wand, staff, orb, or crystal that Wizards (and some other arcane casters) can use instead of non-costly material components when casting spells.",
    rules: ["Can be used in place of material components that don't have a specified cost."],
    source: "Player's Handbook"
  },
   "Musical Instrument": {
    name: "Musical Instrument",
    category: "Tool/Equipment (Spellcasting Focus for Bards)",
    summary: "An item used to create music, such as a lute, flute, drum, or horn. Bards can use a musical instrument as a spellcasting focus for their bard spells.",
    rules: ["Can be used by Bards as a spellcasting focus.", "Proficiency with a musical instrument allows adding proficiency bonus to checks made to play music."],
    tags: ["Equipment", "Tool", "Spellcasting Focus (Bard)"],
    source: "Player's Handbook"
  },
  "Druidic Focus": {
    name: "Druidic Focus",
    category: "Equipment (Spellcasting)",
    summary: "An item such as a sprig of mistletoe, a totem, a yew wand, or a staff drawn whole from a living tree. Druids can use these items as a spellcasting focus for their druid spells.",
    rules: ["Can be used in place of material components that don't have a specified cost for druid spells."],
    tags: ["Equipment", "Spellcasting Focus (Druid)"],
    source: "Player's Handbook"
  },
  "Herbalism Kit": {
    name: "Herbalism Kit",
    category: "Tool",
    summary: "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.",
    rules: ["Allows identifying and applying herbs with proficiency.", "Required to craft antitoxin and potions of healing."],
    tags: ["Tool Proficiency", "Crafting", "Utility"],
    source: "Player's Handbook"
  }
};
