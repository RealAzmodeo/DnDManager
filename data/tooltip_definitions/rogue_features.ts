// data/tooltip_definitions/rogue_features.ts
import { StructuredTooltipData } from '../../types';

export const rogueFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Sneak Attack": {
    name: "Sneak Attack",
    category: "Class Feature (Rogue)",
    summary: "Once per turn, deal extra damage (scales with Rogue level, e.g., 1d6 at L1) to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage if an ally is within 5 feet of the target, that ally isn’t incapacitated, and you don’t have disadvantage.",
    level: "1 (and scales with level)",
    damage: [{ dice: "Varies (e.g. 1d6 at L1, 10d6 at L19)", type: "Same as weapon", notes: "See Rogue table for scaling." }],
    rules: ["Once per turn.", "Requires advantage OR ally within 5ft of target (and no disadvantage).", "Must use finesse or ranged weapon."],
    tags: ["Damage Bonus", "Precision", "Stealth", "Finesse Weapon", "Ranged Weapon"],
    source: "Rogue Class"
  },
  "Thieves' Cant": {
    name: "Thieves' Cant",
    category: "Class Feature (Rogue)",
    summary: "A secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation with other creatures who know it. It takes four times longer to convey a message than speaking plainly.",
    level: 1,
    tags: ["Utility", "Social Interaction", "Roleplaying"],
    source: "Rogue Class"
  },
  "Cunning Action": {
    name: "Cunning Action",
    category: "Class Feature (Rogue)",
    summary: "As a bonus action on your turn, you can take the Dash, Disengage, or Hide action.",
    level: 2,
    castingTime: "1 Bonus Action",
    effects: ["Can Dash, Disengage, or Hide as a bonus action."],
    tags: ["Mobility", "Stealth", "Action Economy", "Bonus Action"],
    source: "Rogue Class"
  },
  "Uncanny Dodge": {
    name: "Uncanny Dodge",
    category: "Class Feature (Rogue)",
    summary: "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.",
    level: 5,
    castingTime: "1 Reaction",
    effects: ["Halve damage from one attack."],
    tags: ["Defense", "Damage Reduction", "Reaction"],
    source: "Rogue Class"
  },
  "Reliable Talent": {
    name: "Reliable Talent",
    category: "Class Feature (Rogue)",
    summary: "Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.",
    level: 11,
    effects: ["Minimum roll of 10 on proficient ability checks."],
    tags: ["Skill Reliability", "Utility"],
    source: "Rogue Class"
  },
  "Blindsense": {
    name: "Blindsense",
    category: "Class Feature (Rogue)",
    summary: "If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.",
    level: 14,
    range: "10 feet",
    effects: ["Detect hidden/invisible creatures within 10ft by hearing."],
    tags: ["Perception", "Detection", "Special Sense"],
    source: "Rogue Class"
  },
  "Slippery Mind": {
    name: "Slippery Mind",
    category: "Class Feature (Rogue)",
    summary: "You gain proficiency in Wisdom saving throws.",
    level: 15,
    effects: ["Gain Wisdom saving throw proficiency."],
    tags: ["Defense", "Saving Throws", "Mental Resistance"],
    source: "Rogue Class"
  },
  "Elusive": {
    name: "Elusive",
    category: "Class Feature (Rogue)",
    summary: "No attack roll has advantage against you while you aren’t incapacitated.",
    level: 18,
    effects: ["Prevents attackers from gaining advantage against you (unless incapacitated)."],
    tags: ["Defense", "Anti-Advantage"],
    source: "Rogue Class"
  },
  "Stroke of Luck": {
    name: "Stroke of Luck",
    category: "Class Feature (Rogue)",
    summary: "If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Usable once per short or long rest.",
    level: 20,
    effects: ["Turn a missed attack into a hit OR turn a failed ability check into a 20 (success)."],
    recharge: "Short or Long Rest",
    tags: ["Offense", "Utility", "Dice Manipulation", "Capstone"],
    source: "Rogue Class"
  },
  "Roguish Archetype": {
    name: "Roguish Archetype",
    category: "Class Feature (Rogue Subclass)",
    summary: "A Rogue's subclass, chosen at 3rd level, representing their specialized area of expertise (e.g., Thief, Assassin, Arcane Trickster).",
    level: 3,
    source: "Rogue Class"
  },
  "Fast Hands": {
    name: "Fast Hands",
    category: "Class Feature (Thief Rogue)",
    summary: "Use the bonus action from Cunning Action to make a Dexterity (Sleight of Hand) check, use thieves’ tools to disarm a trap or open a lock, or take the Use an Object action.",
    level: 3,
    effects: ["Expanded Cunning Action options: Sleight of Hand, Thieves' Tools, Use an Object."],
    tags: ["Utility", "Action Economy", "Bonus Action"],
    source: "Thief (Rogue Archetype)"
  },
  "Second-Story Work": {
    name: "Second-Story Work",
    category: "Class Feature (Thief Rogue)",
    summary: "Climbing no longer costs extra movement. Running jump distance increases by Dexterity modifier in feet.",
    level: 3,
    effects: ["Climb at normal speed.", "Increased running jump distance."],
    tags: ["Mobility", "Exploration"],
    source: "Thief (Rogue Archetype)"
  },
  "Assassinate": {
    name: "Assassinate",
    category: "Class Feature (Assassin Rogue)",
    summary: "Advantage on attack rolls against any creature that hasn’t taken a turn yet. Any hit scored against a surprised creature is a critical hit.",
    level: 3,
    effects: ["Advantage on attacks vs creatures yet to act.", "Critical hit on surprised creatures."],
    tags: ["Offense", "Burst Damage", "Stealth", "Surprise Attack"],
    source: "Assassin (Rogue Archetype)"
  },
  "Mage Hand Legerdemain": {
    name: "Mage Hand Legerdemain",
    category: "Class Feature (Arcane Trickster Rogue)",
    summary: "When casting Mage Hand, it can be invisible and perform extra tasks: stow/retrieve object in another's container, use thieves’ tools at range. Requires Sleight of Hand vs Perception to do unnoticed.",
    level: 3,
    effects: ["Enhanced Mage Hand: invisible, stows/retrieves items, uses thieves' tools at range."],
    tags: ["Spellcasting Utility", "Stealth", "Mage Hand"],
    source: "Arcane Trickster (Rogue Archetype)"
  },
};
