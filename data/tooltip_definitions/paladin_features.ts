// data/tooltip_definitions/paladin_features.ts
import { StructuredTooltipData } from '../../types';

export const paladinFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Divine Smite": {
    name: "Divine Smite",
    category: "Class Feature (Paladin)",
    summary: "When hitting with a melee weapon attack, expend one spell slot to deal extra radiant damage.",
    level: 2,
    damage: [{ dice: "2d8", type: "Radiant", notes: "for 1st-level slot" }],
    rules: ["Trigger: Hit with a melee weapon attack.", "Cost: 1 spell slot (or higher).", "+1d8 radiant damage for each spell level higher than 1st (max 5d8).", "Additional +1d8 if target is undead or fiend (max 6d8)."],
    tags: ["Melee Attack", "Radiant Damage", "Burst Damage"],
    source: "Paladin Class"
  },
  "Lay on Hands": {
    name: "Lay on Hands",
    category: "Class Feature (Paladin)",
    summary: "A pool of healing power (Paladin level x 5 HP). As an action, touch a creature to restore HP from pool, or expend 5 HP to cure one disease or neutralize one poison.",
    level: 1,
    castingTime: "1 Action",
    healing: "Pool of Paladin Level x 5 HP.",
    effects: ["Restore HP.", "Cure one disease (costs 5 HP from pool).", "Neutralize one poison (costs 5 HP from pool)."],
    recharge: "Long Rest",
    source: "Paladin Class"
  },
  "Divine Sense": {
    name: "Divine Sense",
    category: "Class Feature (Paladin)",
    summary: "As an action, detect strong celestial, fiendish, or undead presences, or consecrated/desecrated places/objects within 60 feet until end of next turn.",
    level: 1,
    castingTime: "1 Action",
    range: "60 feet",
    duration: "Until the end of your next turn.",
    recharge: "Long Rest",
    effects: ["Detects celestials, fiends, undead.", "Detects consecrated/desecrated ground/objects."],
    source: "Paladin Class",
    rules: ["Uses: Charisma modifier + 1 per long rest."]
  },
  "Divine Health": {
    name: "Divine Health",
    category: "Class Feature (Paladin)",
    summary: "The divine magic flowing through you makes you immune to disease.",
    level: 3,
    effects: ["Immunity to disease."],
    source: "Paladin Class"
  },
  "Aura of Protection": {
    name: "Aura of Protection",
    category: "Class Feature (Paladin)",
    summary: "You and friendly creatures within 10 feet gain a bonus to all saving throws equal to your Charisma modifier (min +1). Must be conscious.",
    level: "6 (10ft range), 18 (30ft range)",
    range: "10 feet (increases to 30 feet at L18)",
    effects: ["Bonus to all saving throws = Charisma modifier (min +1) for self and allies in aura."],
    tags: ["Aura", "Saving Throw Bonus", "Party Buff"],
    source: "Paladin Class"
  },
  "Aura of Courage": {
    name: "Aura of Courage",
    category: "Class Feature (Paladin)",
    summary: "You and friendly creatures within 10 feet can’t be frightened while you are conscious.",
    level: "10 (10ft range), 18 (30ft range)",
    range: "10 feet (increases to 30 feet at L18)",
    effects: ["Immunity to Frightened condition for self and allies in aura."],
    conditionsApplied: ["Immunity to Frightened (for those in aura)"],
    tags: ["Aura", "Condition Immunity", "Party Buff"],
    source: "Paladin Class"
  },
  "Improved Divine Smite": {
    name: "Improved Divine Smite",
    category: "Class Feature (Paladin)",
    summary: "Your melee weapon attacks deal an extra 1d8 radiant damage. This is in addition to Divine Smite if used.",
    level: 11,
    damage: [{ dice: "1d8", type: "Radiant", notes: "Always active on melee weapon hits." }],
    tags: ["Melee Attack", "Radiant Damage", "Damage Bonus"],
    source: "Paladin Class",
    rules: ["Trigger: Hit with a melee weapon attack."]
  },
  "Cleansing Touch": {
    name: "Cleansing Touch",
    category: "Class Feature (Paladin)",
    summary: "As an action, end one spell on yourself or on one willing creature you touch.",
    level: 14,
    castingTime: "1 Action",
    recharge: "Long Rest",
    effects: ["Ends one spell on target."],
    source: "Paladin Class",
    rules: ["Uses: Charisma modifier times per long rest (min 1)."]
  },
  "Sacred Oath": {
    name: "Sacred Oath",
    category: "Class Feature (Paladin Subclass)",
    summary: "A Paladin's subclass, chosen at 3rd level, representing their solemn vow and the source of their unique powers (e.g., Oath of Devotion, Oath of Vengeance).",
    level: 3,
    source: "Paladin Class"
  },
  // Channel Divinity is already in cleric_features.ts as it's shared, but its options are subclass-specific.
  // The specific Channel Divinity options for Paladin oaths will be in their subclass definitions if they need tooltips.
};
