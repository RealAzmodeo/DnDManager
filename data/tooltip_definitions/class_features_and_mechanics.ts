// data/tooltip_definitions/class_features_and_mechanics.ts
import { StructuredTooltipData } from '../../types';

export const classFeaturesAndMechanicsTooltips: Record<string, StructuredTooltipData> = {
  "Fighting Style": {
    name: "Fighting Style",
    category: "Class Feature (Martial Classes)",
    summary: "A feature gained by martial classes (Fighter, Paladin, Ranger, Gunslinger, Bard - College of Valor/Swords) providing a specific combat bonus or capability.",
    level: "Varies by class (e.g., Fighter/Gunslinger L1, Paladin L2, Bard L3).",
    effects: ["Various options like Archery (+2 to ranged attacks), Defense (+1 AC), Dueling (+2 damage with one-handed weapon), Great Weapon Fighting (reroll 1s and 2s on damage with two-handed weapon), Protection (impose disadvantage on attack vs ally), Two-Weapon Fighting (add ability mod to off-hand attack)."],
    source: "Various Classes"
  },
  "Evasion": {
    name: "Evasion",
    category: "Class Feature (Rogue/Monk/Ranger/Gunslinger/Druid)",
    summary: "When subjected to an effect allowing a Dexterity save for half damage, take no damage on a success and half damage on a fail (unless incapacitated).",
    level: "Varies (e.g., Rogue L7, Monk L7, Gunslinger L7)",
    saveInfo: { attribute: "Dexterity", effectOnSuccess: "No damage.", effectOnFailure: "Half damage." },
    source: "Various Classes",
    rules: ["Trigger: Effect allowing Dexterity save for half damage."]
  },
  "Extra Attack": {
    name: "Extra Attack",
    category: "Class Feature (Martial Classes)",
    summary: "Allows making additional attacks when taking the Attack action. Fighters gain up to three additional attacks (total of four) by 20th level. Bards (Valor/Swords) get one at 6th level.",
    level: "5 (Common for many martial classes like Paladin, Gunslinger, Fighter L5: 1 extra, L11: 2 extra, L20: 3 extra). Bard (Valor/Swords) L6. Monk L5.",
    effects: ["Make two attacks instead of one with the Attack action at 5th level (or 6th for some Bards). Fighters gain more at 11th and 20th levels."],
    source: "Various Classes"
  },
  "Expertise": {
    name: "Expertise",
    category: "Class Feature (Bard/Rogue)",
    summary: "Double your proficiency bonus for any ability check you make with chosen skills. Bards gain Expertise in two skills at 3rd level and two more at 10th level. Rogues gain Expertise in two skills (or one skill and thieves' tools) at 1st level and two more at 6th level.",
    level: "1 & 6 (Rogue), 3 & 10 (Bard)",
    effects: ["Double proficiency bonus for chosen skills/tools."],
    tags: ["Skill Mastery", "Utility"],
    source: "Bard Class, Rogue Class"
  },
  "Ritual Casting": {
    name: "Ritual Casting",
    category: "Spellcasting Mechanic",
    summary: "The ability of certain spellcasters (e.g., Wizards, Clerics, Bards, Druids) to cast a spell with the 'ritual' tag without expending a spell slot, by taking an additional 10 minutes to perform the casting.",
    castingTime: "Spell's normal casting time + 10 minutes.",
    rules: ["Spell must have the 'Ritual' tag.", "Caster must have the spell prepared or in their spellbook (for Wizards), or known (for Bards).", "Cost: No spell slot expended."],
    tags: ["Spellcasting", "Ritual"],
    source: "Player's Handbook / Various Classes"
  },
};
