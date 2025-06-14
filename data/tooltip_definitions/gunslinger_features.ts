// data/tooltip_definitions/gunslinger_features.ts
import { StructuredTooltipData } from '../../types';

export const gunslingerFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Gunslinger's Creed": {
    name: "Gunslinger's Creed",
    category: "Class Feature (Gunslinger Subclass)",
    summary: "The term for a Gunslinger's subclass, chosen at 3rd level. Each Creed defines their specialized style and grants unique features at various levels.",
    level: 3,
    source: "Gunslinger Class"
  },
  "Risk Dice": {
    name: "Risk Dice",
    category: "Class Resource (Gunslinger)",
    summary: "A special resource pool (e.g., d8s) used by the Gunslinger class to perform 'Deeds'. These dice are typically recovered on a short or long rest.",
    rules: ["Initially 4d8, recovered on short or long rest."],
    recharge: "Short or Long Rest",
    source: "Gunslinger Class, Level 2"
  },
  "Deeds": {
    name: "Deeds",
    category: "Class Feature (Gunslinger)",
    summary: "Special maneuvers or abilities that a Gunslinger can perform by expending Risk Dice. They often have cinematic or powerful effects, enhancing offense, defense, or utility. One Deed can be used per turn.",
    rules: ["Expend Risk Dice to activate.", "One Deed per turn."],
    source: "Gunslinger Class, Level 2"
  },
  "Quick Draw": {
    name: "Quick Draw",
    category: "Class Feature (Gunslinger)",
    summary: "Grants Advantage on Initiative rolls and allows faster weapon drawing/stowing.",
    level: 1,
    effects: ["Advantage on Initiative rolls.", "Can draw or stow two weapons when normally only one is allowed."],
    source: "Gunslinger Class"
  },
  "Critical Shot": {
    name: "Critical Shot",
    category: "Class Feature (Gunslinger)",
    summary: "A Gunslinger feature that increases the critical hit range of their ranged weapon attacks.",
    level: "2 (19-20), 9 (18-20), 17 (17-20)",
    effects: ["Ranged weapon attacks score a critical hit on a roll of 19-20. Improves to 18-20 at L9, and 17-20 at L17."],
    tags: ["Critical Hit"],
    source: "Gunslinger Class"
  },
  "Gut Shot": {
    name: "Gut Shot",
    category: "Class Feature (Gunslinger)",
    summary: "On a critical hit with a firearm against a Large or smaller creature, its speed is halved, and it has Disadvantage on attack rolls until it uses an action to remove the bullet.",
    level: 5,
    effects: ["Target's speed halved.", "Target has Disadvantage on attack rolls."],
    duration: "1 minute or until bullet removed (Action).",
    additionalDetails: { immunity: "Amorphous creatures, elementals, undead." },
    tags: ["Critical Hit", "Debuff"],
    source: "Gunslinger Class",
    rules: ["Trigger: Critical hit with a firearm against Large or smaller creature."]
  },
  "Weapon Mastery": {
    name: "Weapon Mastery",
    category: "System Mechanic (D&D 2024) / Class Feature (Gunslinger)",
    summary: "Gain special benefits (mastery properties) with weapons you are proficient with and have trained extensively in. Gunslingers apply these to firearms, gaining unique properties like 'Aim' or 'Blast'.",
    rules: ["Gunslingers apply properties to 2 firearm types at L1, increases to 3 at L4, 4 at L10."],
    source: "D&D 2024 Rules / Gunslinger Class"
  },
};
