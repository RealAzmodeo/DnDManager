// data/tooltip_definitions/fighter_features.ts
import { StructuredTooltipData } from '../../types';

export const fighterFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Second Wind": {
    name: "Second Wind",
    category: "Class Feature (Fighter)",
    summary: "As a bonus action, regain HP equal to 1d10 + Fighter level. Usable once per short or long rest.",
    level: 1,
    castingTime: "1 Bonus Action",
    healing: "1d10 + Fighter level",
    recharge: "Short or Long Rest",
    tags: ["Healing", "Self-Heal", "Bonus Action"],
    source: "Fighter Class"
  },
  "Action Surge": {
    name: "Action Surge",
    category: "Class Feature (Fighter)",
    summary: "Take one additional action on your turn. Usable once per short or long rest (twice at L17, but only once per turn).",
    level: "2 (1 use), 17 (2 uses)",
    effects: ["Gain an additional action on your turn."],
    recharge: "Short or Long Rest",
    tags: ["Action Economy", "Burst Potential"],
    source: "Fighter Class"
  },
  "Martial Archetype": {
    name: "Martial Archetype",
    category: "Class Feature (Fighter Subclass)",
    summary: "A Fighter's subclass, chosen at 3rd level, representing their specialized combat style (e.g., Battle Master, Champion, Eldritch Knight).",
    level: 3,
    source: "Fighter Class"
  },
  "Indomitable": {
    name: "Indomitable",
    category: "Class Feature (Fighter)",
    summary: "Reroll a failed saving throw. Must use the new roll. Usable once per long rest (increases to 2 uses at L13, 3 uses at L17).",
    level: "9 (1 use), 13 (2 uses), 17 (3 uses)",
    effects: ["Reroll a failed saving throw."],
    recharge: "Long Rest",
    tags: ["Defense", "Saving Throws"],
    source: "Fighter Class"
  },
  "Combat Superiority": {
    name: "Combat Superiority",
    category: "Class Feature (Battle Master Fighter)",
    summary: "Learn special combat maneuvers and gain superiority dice (d8s, later d10s) to fuel them. Maneuvers add effects or damage to attacks.",
    level: 3,
    rules: ["Learn maneuvers (e.g., Disarming Attack, Trip Attack).", "Gain superiority dice (e.g., 4d8 at L3).", "Expend dice to use maneuvers.", "Dice recharge on short or long rest."],
    recharge: "Short or Long Rest (for superiority dice)",
    tags: ["Maneuvers", "Resource", "Tactical Combat"],
    source: "Battle Master (Fighter Archetype)"
  },
  "Improved Critical": {
    name: "Improved Critical",
    category: "Class Feature (Champion Fighter)",
    summary: "Weapon attacks score a critical hit on a roll of 19 or 20.",
    level: 3,
    effects: ["Critical hit range becomes 19-20."],
    tags: ["Critical Hit", "Offense"],
    source: "Champion (Fighter Archetype)"
  },
  "Spellcasting (Eldritch Knight)": {
    name: "Spellcasting (Eldritch Knight)",
    category: "Class Feature (Eldritch Knight Fighter)",
    summary: "Grants the Eldritch Knight the ability to cast wizard spells, primarily from the Abjuration and Evocation schools, using Intelligence as their spellcasting ability. Follows third-caster progression.",
    level: 3,
    governingAbility: "Intelligence",
    rules: ["Learns cantrips and spells from Wizard list (mostly Abjuration/Evocation).", "Prepares spells.", "Third-caster spell slot progression."],
    tags: ["Spellcasting", "Arcane Magic", "Gish"],
    source: "Eldritch Knight (Fighter Archetype)"
  },
  "Weapon Bond": {
    name: "Weapon Bond",
    category: "Class Feature (Eldritch Knight Fighter)",
    summary: "Magically bond with one weapon. Cannot be disarmed of it unless incapacitated. Can summon bonded weapon to hand as bonus action if on same plane.",
    level: 3,
    castingTime: "1 hour ritual (to bond)",
    effects: ["Cannot be disarmed of bonded weapon (unless incapacitated).", "Summon bonded weapon as bonus action."],
    tags: ["Utility", "Weapon Magic"],
    source: "Eldritch Knight (Fighter Archetype)"
  },
};
