// data/tooltip_definitions/bard_features.ts
import { StructuredTooltipData } from '../../types';

export const bardFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Bardic Inspiration": {
    name: "Bardic Inspiration",
    category: "Class Feature (Bard)",
    summary: "As a bonus action, give a die (d6, d8, d10, or d12) to an ally. They can add it to one ability check, attack roll, or saving throw within 10 minutes. Uses equal to Charisma modifier, refresh on long rest (or short rest with Font of Inspiration).",
    level: "1 (d6), 5 (d8), 10 (d10), 15 (d12)",
    castingTime: "1 Bonus Action",
    range: "60 feet",
    duration: "10 minutes (until die is used)",
    effects: ["Ally adds inspiration die to an attack, check, or save."],
    recharge: "Long Rest (initially), Short or Long Rest (with Font of Inspiration at L5).",
    rules: ["Uses: Charisma modifier (min 1)."],
    tags: ["Support", "Buff", "Resource", "Bonus Action", "Dice Manipulation"],
    source: "Bard Class"
  },
  "Jack of All Trades": {
    name: "Jack of All Trades",
    category: "Class Feature (Bard)",
    summary: "Add half your proficiency bonus (rounded down) to any ability check you make that doesn’t already include your proficiency bonus.",
    level: 2,
    effects: ["Add half proficiency bonus to non-proficient ability checks."],
    tags: ["Skill Utility", "Versatility"],
    source: "Bard Class"
  },
  "Song of Rest": {
    name: "Song of Rest",
    category: "Class Feature (Bard)",
    summary: "During a short rest, allies (including you) who spend Hit Dice to heal regain extra HP (d6, d8, d10, or d12 based on Bard level).",
    level: "2 (d6), 9 (d8), 13 (d10), 17 (d12)",
    effects: ["Extra healing during short rest for those spending Hit Dice."],
    tags: ["Healing", "Support", "Short Rest"],
    source: "Bard Class"
  },
  "Bard College": {
    name: "Bard College",
    category: "Class Feature (Bard Subclass)",
    summary: "A Bard's subclass, chosen at 3rd level, representing their specialized area of performance and magic (e.g., College of Lore, College of Valor).",
    level: 3,
    source: "Bard Class"
  },
  "Font of Inspiration": {
    name: "Font of Inspiration",
    category: "Class Feature (Bard)",
    summary: "Regain all expended uses of Bardic Inspiration when you finish a short or long rest.",
    level: 5,
    recharge: "Short or Long Rest (for Bardic Inspiration uses)",
    tags: ["Resource Recovery", "Bardic Inspiration"],
    source: "Bard Class"
  },
  "Countercharm": {
    name: "Countercharm",
    category: "Class Feature (Bard)",
    summary: "As an action, start a performance. You and friendly creatures within 30ft that can hear you have advantage on saves vs being frightened or charmed until end of your next turn.",
    level: 6,
    castingTime: "1 Action",
    range: "Self (30-foot radius)",
    duration: "Until end of your next turn",
    effects: ["Advantage on saves vs frightened or charmed for self and allies."],
    tags: ["Support", "Defense", "Condition Resistance"],
    source: "Bard Class"
  },
  "Magical Secrets": {
    name: "Magical Secrets",
    category: "Class Feature (Bard)",
    summary: "Learn a limited number of spells from any class's spell list. These spells count as Bard spells for you. Gained at levels 10, 14, and 18.",
    level: "10, 14, 18",
    effects: ["Learn spells from any spell list."],
    rules: ["Spells chosen must be of a level you can cast.", "Counts as Bard spells for you."],
    tags: ["Spellcasting Versatility", "Customization"],
    source: "Bard Class"
  },
  "Superior Inspiration": {
    name: "Superior Inspiration",
    category: "Class Feature (Bard)",
    summary: "When you roll initiative and have no uses of Bardic Inspiration left, you regain one use.",
    level: 20,
    effects: ["Regain one use of Bardic Inspiration at initiative if none remain."],
    tags: ["Resource Recovery", "Bardic Inspiration", "Capstone"],
    source: "Bard Class"
  },
  "Cutting Words": {
    name: "Cutting Words",
    category: "Class Feature (College of Lore Bard)",
    summary: "As a reaction when a creature you can see within 60ft makes an attack roll, ability check, or damage roll, expend one Bardic Inspiration die and subtract its roll from the creature's roll. Target must not be immune to charm.",
    level: 3,
    castingTime: "1 Reaction",
    range: "60 feet",
    effects: ["Subtract Bardic Inspiration die roll from enemy's attack, check, or damage roll."],
    recharge: "Uses Bardic Inspiration",
    tags: ["Debuff", "Support", "Reaction", "Bardic Inspiration"],
    source: "College of Lore (Bard)"
  },
  "Combat Inspiration": {
    name: "Combat Inspiration",
    category: "Class Feature (College of Valor Bard)",
    summary: "A creature with your Bardic Inspiration die can add it to a weapon damage roll OR use their reaction to add it to AC against one attack.",
    level: 3,
    effects: ["Ally can add Bardic Inspiration die to weapon damage.", "Ally can use reaction to add Bardic Inspiration die to AC against one attack."],
    tags: ["Support", "Offense", "Defense", "Bardic Inspiration"],
    source: "College of Valor (Bard)"
  },
  "Blade Flourish": {
    name: "Blade Flourish",
    category: "Class Feature (College of Swords Bard)",
    summary: "When you take the Attack action, your walking speed increases by 10ft. If you hit with a weapon attack, you can expend a Bardic Inspiration die to use one of three flourishes: Defensive (add die to damage and AC), Slashing (add die to damage and hit another creature), or Mobile (add die to damage and push target, then move).",
    level: 3,
    effects: ["+10ft speed on Attack action.", "Use Bardic Inspiration on hit for extra damage and one of three effects: AC boost, AoE damage, or push + self-move."],
    tags: ["Offense", "Defense", "Mobility", "Bardic Inspiration"],
    source: "College of Swords (Bard)"
  },
  "Silver Tongue": {
    name: "Silver Tongue",
    category: "Class Feature (College of Eloquence Bard)",
    summary: "When making a Charisma (Persuasion) or Charisma (Deception) check, treat a d20 roll of 9 or lower as a 10.",
    level: 3,
    effects: ["Minimum roll of 10 on Persuasion/Deception checks."],
    tags: ["Social Interaction", "Skill Reliability"],
    source: "College of Eloquence (Bard)"
  },
  "Unsettling Words": {
    name: "Unsettling Words",
    category: "Class Feature (College of Eloquence Bard)",
    summary: "As a bonus action, expend one Bardic Inspiration die. Choose a creature within 60ft. Subtract the roll from its next saving throw before your next turn.",
    level: 3,
    castingTime: "1 Bonus Action",
    range: "60 feet",
    effects: ["Subtract Bardic Inspiration die roll from target's next saving throw."],
    recharge: "Uses Bardic Inspiration",
    tags: ["Debuff", "Support", "Bonus Action", "Bardic Inspiration"],
    source: "College of Eloquence (Bard)"
  },
};
