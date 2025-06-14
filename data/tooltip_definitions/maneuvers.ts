// data/tooltip_definitions/maneuvers.ts
import { StructuredTooltipData } from '../../types';

export const maneuversTooltips: Record<string, StructuredTooltipData> = {
  "Commander's Strike": {
    name: "Commander's Strike",
    category: "Battle Master Maneuver",
    summary: "When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack's damage roll.",
    effects: [
      "Forgo one of your attacks (when taking Attack action).",
      "Use a bonus action.",
      "Expend one superiority die.",
      "Choose a friendly creature who can see or hear you.",
      "Creature uses its reaction to make one weapon attack.",
      "Add the superiority die to the attack's damage roll."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "actionCost": "Forgo one attack + Bonus Action",
      "target": "Friendly creature",
      "effect": "Target makes reaction attack, adds superiority die to damage"
    },
    tags: ["Combat", "Support", "Offense", "Bonus Action"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Disarming Attack": {
    name: "Disarming Attack",
    category: "Battle Master Maneuver",
    summary: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the superiority die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.",
    effects: [
      "Expend one superiority die.",
      "Add superiority die to the attack's damage roll.",
      "Target makes a Strength saving throw (DC = 8 + proficiency bonus + Str or Dex modifier).",
      "On a failed save, target drops one chosen item it's holding."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Hit with weapon attack",
      "extraDamage": "Superiority Die roll",
      "saveType": "Strength",
      "effectOnFail": "Drops chosen item"
    },
    tags: ["Combat", "Control", "Offense"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Distracting Strike": {
    name: "Distracting Strike",
    category: "Battle Master Maneuver",
    summary: "When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.",
    effects: [
      "Expend one superiority die.",
      "Add superiority die to the attack's damage roll.",
      "Next attack roll against target by an ally has advantage (before start of your next turn)."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Hit with weapon attack",
      "extraDamage": "Superiority Die roll",
      "effect": "Advantage on next ally attack vs target"
    },
    tags: ["Combat", "Support", "Offense"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Evasive Footwork": {
    name: "Evasive Footwork",
    category: "Battle Master Maneuver",
    summary: "When you move on your turn, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.",
    effects: [
      "Expend one superiority die when you move.",
      "Add superiority die roll to AC until you stop moving."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "When moving",
      "effect": "Add superiority die roll to AC"
    },
    tags: ["Combat", "Defense", "Mobility"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Feinting Attack": {
    name: "Feinting Attack",
    category: "Battle Master Maneuver",
    summary: "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature this turn. If that attack hits, add the superiority die to the attack's damage roll.",
    effects: [
      "Expend one superiority die.",
      "Use a bonus action.",
      "Target one creature within 5 feet.",
      "Gain advantage on your next attack roll against the target this turn.",
      "If attack hits, add superiority die to damage roll."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "actionCost": "Bonus Action",
      "effect": "Advantage on next attack vs target, extra damage on hit",
      "extraDamage": "Superiority Die roll (on hit)"
    },
    tags: ["Combat", "Offense", "Bonus Action"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Goading Attack": {
    name: "Goading Attack",
    category: "Battle Master Maneuver",
    summary: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.",
    effects: [
      "Expend one superiority die.",
      "Add superiority die to the attack's damage roll.",
      "Target makes a Wisdom saving throw (DC = 8 + proficiency bonus + Str or Dex modifier).",
      "On failed save, target has disadvantage on attacks against others until end of your next turn."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Hit with weapon attack",
      "extraDamage": "Superiority Die roll",
      "saveType": "Wisdom",
      "effectOnFail": "Disadvantage on attacks vs targets other than you"
    },
    tags: ["Combat", "Control", "Defense", "Tanking"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Lunging Attack": {
    name: "Lunging Attack",
    category: "Battle Master Maneuver",
    summary: "When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll.",
    effects: [
      "Expend one superiority die.",
      "Increase reach for one melee weapon attack by 5 feet.",
      "If attack hits, add superiority die to damage roll."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Making a melee weapon attack",
      "reachIncrease": "5 feet",
      "extraDamage": "Superiority Die roll (on hit)"
    },
    tags: ["Combat", "Offense", "Reach"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Maneuvering Attack": {
    name: "Maneuvering Attack",
    category: "Battle Master Maneuver",
    summary: "When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.",
    effects: [
      "Expend one superiority die.",
      "Add superiority die to the attack's damage roll.",
      "Choose a friendly creature who can see or hear you.",
      "Ally uses reaction to move up to half speed without provoking opportunity attacks from your target."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Hit with weapon attack",
      "extraDamage": "Superiority Die roll",
      "effect": "Ally can move via reaction"
    },
    tags: ["Combat", "Support", "Mobility"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Menacing Attack": {
    name: "Menacing Attack",
    category: "Battle Master Maneuver",
    summary: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.",
    effects: [
      "Expend one superiority die.",
      "Add superiority die to the attack's damage roll.",
      "Target makes a Wisdom saving throw (DC = 8 + proficiency bonus + Str or Dex modifier).",
      "On failed save, target is frightened of you until end of your next turn."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Hit with weapon attack",
      "extraDamage": "Superiority Die roll",
      "saveType": "Wisdom",
      "effectOnFail": "Frightened of you"
    },
    conditionsApplied: ["Frightened"],
    tags: ["Combat", "Control", "Debuff", "Offense"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Parry": {
    name: "Parry",
    category: "Battle Master Maneuver",
    summary: "When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.",
    effects: [
      "Use reaction when damaged by melee attack.",
      "Expend one superiority die.",
      "Reduce damage by (superiority die roll + Dexterity modifier)."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "actionCost": "Reaction",
      "trigger": "Damaged by melee attack",
      "damageReductionFormula": "Superiority Die roll + Dexterity modifier"
    },
    tags: ["Combat", "Defense", "Reaction"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Precision Attack": {
    name: "Precision Attack",
    category: "Battle Master Maneuver",
    summary: "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.",
    effects: [
      "Expend one superiority die.",
      "Add superiority die roll to a weapon attack roll."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Making a weapon attack roll",
      "effect": "Add superiority die to attack roll"
    },
    tags: ["Combat", "Offense", "Accuracy"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Pushing Attack": {
    name: "Pushing Attack",
    category: "Battle Master Maneuver",
    summary: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.",
    effects: [
      "Expend one superiority die.",
      "Add superiority die to the attack's damage roll.",
      "Target (Large or smaller) makes a Strength saving throw (DC = 8 + proficiency bonus + Str or Dex modifier).",
      "On failed save, push target up to 15 feet away."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Hit with weapon attack",
      "extraDamage": "Superiority Die roll",
      "targetSizeLimit": "Large or smaller",
      "saveType": "Strength",
      "effectOnFail": "Push target up to 15 feet"
    },
    tags: ["Combat", "Control", "Forced Movement", "Offense"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Rally": {
    name: "Rally",
    category: "Battle Master Maneuver",
    summary: "On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.",
    effects: [
      "Use a bonus action.",
      "Expend one superiority die.",
      "Choose a friendly creature who can see or hear you.",
      "Target gains temporary HP = (superiority die roll + Charisma modifier)."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "actionCost": "Bonus Action",
      "target": "Friendly creature",
      "tempHpFormula": "Superiority Die roll + Charisma modifier"
    },
    tags: ["Combat", "Support", "Temporary HP", "Bonus Action"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Riposte": {
    name: "Riposte",
    category: "Battle Master Maneuver",
    summary: "When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll.",
    effects: [
      "Use reaction when missed by melee attack.",
      "Expend one superiority die.",
      "Make a melee weapon attack against the attacker.",
      "If attack hits, add superiority die to damage roll."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "actionCost": "Reaction",
      "trigger": "Creature misses you with melee attack",
      "effect": "Make melee attack, add superiority die to damage on hit",
      "extraDamage": "Superiority Die roll (on hit)"
    },
    tags: ["Combat", "Offense", "Reaction"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Sweeping Attack": {
    name: "Sweeping Attack",
    category: "Battle Master Maneuver",
    summary: "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.",
    effects: [
      "Expend one superiority die.",
      "Choose another creature within 5 feet of original target and in reach.",
      "If original attack roll hits second creature, it takes damage = superiority die roll (same type as original attack)."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Hit with melee weapon attack",
      "secondaryTargetDamage": "Superiority Die roll (same type as original attack)"
    },
    tags: ["Combat", "Offense", "AoE (Minor)"],
    source: "Battle Master (Fighter Archetype) - PHB"
  },
  "Trip Attack": {
    name: "Trip Attack",
    category: "Battle Master Maneuver",
    summary: "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.",
    effects: [
      "Expend one superiority die.",
      "Add superiority die to the attack's damage roll.",
      "Target (Large or smaller) makes a Strength saving throw (DC = 8 + proficiency bonus + Str or Dex modifier).",
      "On failed save, knock target prone."
    ],
    additionalDetails: {
      "superiorityDieCost": "1",
      "trigger": "Hit with weapon attack",
      "extraDamage": "Superiority Die roll",
      "targetSizeLimit": "Large or smaller",
      "saveType": "Strength",
      "effectOnFail": "Knock target prone"
    },
    conditionsApplied: ["Prone"],
    tags: ["Combat", "Control", "Debuff", "Offense"],
    source: "Battle Master (Fighter Archetype) - PHB"
  }
};
