// data/tooltip_definitions/monk_features.ts
import { StructuredTooltipData } from '../../types';

export const monkFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Ki": {
    name: "Ki",
    category: "Class Resource (Monk)",
    summary: "A mystical energy Monks use to fuel special abilities. Ki points are spent to activate features like Flurry of Blows, Patient Defense, Step of the Wind, and Stunning Strike. Ki save DC = 8 + proficiency bonus + Wisdom modifier.",
    level: 2,
    recharge: "Short or Long Rest (with meditation)",
    rules: ["Ki points equal to Monk level."],
    tags: ["Resource", "Mystical Energy", "Combat"],
    source: "Monk Class"
  },
  "Martial Arts": {
    name: "Martial Arts",
    category: "Class Feature (Monk)",
    summary: "Allows using Dexterity for unarmed strikes/monk weapons, making bonus action unarmed strikes, and using a special damage die for these attacks that scales with Monk level.",
    level: 1,
    effects: ["Use Dex for unarmed/monk weapon attacks/damage.", "Bonus action unarmed strike after Attack action with unarmed/monk weapon.", "Unarmed/monk weapon damage die scales (d4, d6, d8, d10)."],
    tags: ["Combat", "Unarmed Combat", "Weapon Style", "Action Economy"],
    source: "Monk Class"
  },
  "Unarmored Defense (Monk)": {
    name: "Unarmored Defense (Monk)",
    category: "Class Feature (Monk)",
    summary: "While wearing no armor and not wielding a shield, your Armor Class equals 10 + your Dexterity modifier + your Wisdom modifier.",
    level: 1,
    effects: ["AC = 10 + Dex mod + Wis mod when unarmored and not using a shield."],
    tags: ["Defense", "AC Bonus", "Passive"],
    source: "Monk Class"
  },
  "Deflect Missiles": {
    name: "Deflect Missiles",
    category: "Class Feature (Monk)",
    summary: "As a reaction when hit by a ranged weapon attack, reduce damage by 1d10 + Dex mod + Monk level. If reduced to 0, can catch missile and spend 1 Ki to throw it back.",
    level: 3,
    castingTime: "1 Reaction",
    effects: ["Reduce damage from ranged weapon attack.", "Can catch and throw back missile (costs 1 Ki)."],
    tags: ["Defense", "Reaction", "Ranged Combat", "Ki Ability"],
    source: "Monk Class"
  },
  "Stunning Strike": {
    name: "Stunning Strike",
    category: "Class Feature (Monk)",
    summary: "When hitting with a melee weapon attack, spend 1 Ki point to force a Constitution save. On failure, target is stunned until end of your next turn.",
    level: 5,
    saveInfo: { attribute: "Constitution", dc: "Ki save DC", effectOnFailure: "Stunned until end of your next turn." },
    conditionsApplied: ["Stunned"],
    rules: ["Costs 1 Ki point.", "Trigger: Hit with melee weapon attack."],
    tags: ["Control", "Debuff", "Ki Ability", "Melee Attack"],
    source: "Monk Class"
  },
  "Slow Fall": {
    name: "Slow Fall",
    category: "Class Feature (Monk)",
    summary: "As a reaction when falling, reduce falling damage by five times your Monk level.",
    level: 4,
    castingTime: "1 Reaction",
    effects: ["Reduce falling damage."],
    tags: ["Defense", "Utility", "Mobility"],
    source: "Monk Class"
  },
  "Monastic Tradition": {
    name: "Monastic Tradition",
    category: "Class Feature (Monk Subclass)",
    summary: "A Monk's subclass, chosen at 3rd level, representing their specialized martial and Ki philosophy (e.g., Way of the Open Hand, Way of Shadow).",
    level: 3,
    source: "Monk Class"
  },
  "Open Hand Technique": {
    name: "Open Hand Technique",
    category: "Class Feature (Way of the Open Hand Monk)",
    summary: "When hitting with a Flurry of Blows attack, can impose one effect: knock prone (Dex save), push 15ft (Str save), or prevent reactions until end of your next turn.",
    level: 3,
    effects: ["Knock prone (Dex save).", "Push 15 feet (Str save).", "Prevent target's reactions."],
    rules: ["Trigger: Hit with Flurry of Blows attack."],
    tags: ["Control", "Debuff", "Flurry of Blows Enhancement"],
    source: "Way of the Open Hand (Monk)"
  },
  "Shadow Arts": {
    name: "Shadow Arts",
    category: "Class Feature (Way of Shadow Monk)",
    summary: "Spend 2 Ki points to cast Darkness, Darkvision, Pass without Trace, or Silence as an action without material components. Also gain Minor Illusion cantrip.",
    level: 3,
    effects: ["Cast Darkness, Darkvision, Pass without Trace, or Silence (2 Ki each).", "Gain Minor Illusion cantrip."],
    tags: ["Spell-like Ability", "Ki Ability", "Stealth", "Utility", "Illusion"],
    source: "Way of Shadow (Monk)"
  },
  // Timeless Body is also a Druid feature, already defined in druid_features.ts
};
