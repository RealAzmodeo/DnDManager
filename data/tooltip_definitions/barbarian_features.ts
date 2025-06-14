// data/tooltip_definitions/barbarian_features.ts
import { StructuredTooltipData } from '../../types';

export const barbarianFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Rage": {
    name: "Rage",
    category: "Class Feature (Barbarian)",
    summary: "As a bonus action, enter a rage. Gain advantage on Strength checks/saves, bonus damage with Strength-based melee attacks, and resistance to bludgeoning, piercing, and slashing damage. Lasts 1 minute, ends early if not attacking/attacked or unconscious. Limited uses per long rest.",
    level: 1,
    castingTime: "1 Bonus Action",
    duration: "1 minute",
    effects: ["Advantage on Strength checks and Strength saving throws.", "Bonus to melee damage rolls using Strength (e.g., +2 at L1).", "Resistance to bludgeoning, piercing, and slashing damage."],
    recharge: "Long Rest (for uses)",
    rules: ["Uses: 2/day at L1, increases with level.", "Ends if turn ends and haven't attacked or taken damage since last turn, or if knocked unconscious, or ended as bonus action."],
    tags: ["Combat Steroid", "Damage Bonus", "Damage Resistance", "Bonus Action"],
    source: "Barbarian Class"
  },
  "Unarmored Defense (Barbarian)": {
    name: "Unarmored Defense (Barbarian)",
    category: "Class Feature (Barbarian)",
    summary: "While not wearing armor, AC equals 10 + Dexterity modifier + Constitution modifier. Can use a shield and still gain this benefit.",
    level: 1,
    effects: ["AC = 10 + Dex mod + Con mod when unarmored."],
    tags: ["Defense", "AC Bonus", "Passive"],
    source: "Barbarian Class"
  },
  "Reckless Attack": {
    name: "Reckless Attack",
    category: "Class Feature (Barbarian)",
    summary: "When making your first Strength-based melee attack on your turn, gain advantage on all Strength-based melee attack rolls this turn, but attack rolls against you have advantage until your next turn.",
    level: 2,
    effects: ["Advantage on own Strength-based melee attacks this turn.", "Attack rolls against you have advantage until your next turn."],
    tags: ["Offense", "High Risk/Reward", "Combat Modifier"],
    source: "Barbarian Class"
  },
  "Danger Sense": {
    name: "Danger Sense",
    category: "Class Feature (Barbarian)",
    summary: "Advantage on Dexterity saving throws against effects you can see (e.g., traps, spells). Does not function if blinded, deafened, or incapacitated.",
    level: 2,
    effects: ["Advantage on Dexterity saving throws against visible effects."],
    tags: ["Defense", "Saving Throws", "Trap Evasion", "Spell Evasion"],
    source: "Barbarian Class"
  },
  "Primal Path": {
    name: "Primal Path",
    category: "Class Feature (Barbarian Subclass)",
    summary: "A Barbarian's subclass, chosen at 3rd level, representing the source and nature of their rage (e.g., Path of the Totem Warrior, Path of the Berserker).",
    level: 3,
    source: "Barbarian Class"
  },
  "Brutal Critical": {
    name: "Brutal Critical",
    category: "Class Feature (Barbarian)",
    summary: "Roll additional weapon damage dice when determining extra damage for a critical hit with a melee attack. Starts with one extra die at 9th level, increasing to two at 13th and three at 17th.",
    level: "9 (1 die), 13 (2 dice), 17 (3 dice)",
    effects: ["Roll additional weapon damage dice on a critical hit."],
    tags: ["Critical Hit", "Damage Bonus", "Offense"],
    source: "Barbarian Class"
  },
  "Relentless Rage": {
    name: "Relentless Rage",
    category: "Class Feature (Barbarian)",
    summary: "If you drop to 0 HP while raging and don't die outright, make a DC 10 Constitution save. If successful, drop to 1 HP instead. DC increases by 5 for each use after the first, resetting on short/long rest.",
    level: 11,
    saveInfo: { attribute: "Constitution", dc: "10 (increases by 5 each use)", effectOnSuccess: "Drop to 1 HP instead of 0." },
    tags: ["Defense", "Survivability", "Death Prevention"],
    source: "Barbarian Class"
  },
  "Frenzy": {
    name: "Frenzy",
    category: "Class Feature (Path of the Berserker Barbarian)",
    summary: "When you rage, you can choose to go into a frenzy. For the duration of your rage, you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
    level: 3,
    effects: ["Make one melee weapon attack as a bonus action while raging.", "Suffer one level of exhaustion when rage ends."],
    tags: ["Offense", "Action Economy", "Bonus Action", "Exhaustion"],
    source: "Path of the Berserker (Barbarian)"
  },
  "Totem Spirit": {
    name: "Totem Spirit",
    category: "Class Feature (Path of the Totem Warrior Barbarian)",
    summary: "At 3rd level, choose a totem animal (Bear, Eagle, Elk, Tiger, or Wolf) that grants a benefit while raging. Further totem features are gained at later levels.",
    level: 3,
    effects: ["Bear: Resistance to all damage except psychic.", "Eagle: Disadvantage on opportunity attacks vs you, Dash as bonus action.", "Elk: Walking speed +15ft.", "Tiger: Increased jump distance.", "Wolf: Allies have advantage on melee attacks vs enemies within 5ft of you."],
    tags: ["Buff", "Defense", "Offense", "Mobility", "Support"],
    source: "Path of the Totem Warrior (Barbarian)"
  },
};
