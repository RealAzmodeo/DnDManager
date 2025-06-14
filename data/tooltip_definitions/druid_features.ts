// data/tooltip_definitions/druid_features.ts
import { StructuredTooltipData } from '../../types';

export const druidFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Druidic": {
    name: "Druidic",
    category: "Class Feature (Druid)",
    summary: "The secret language of druids. Allows communication with other druids and leaving hidden messages.",
    level: 1,
    tags: ["Utility", "Language", "Roleplaying"],
    source: "Druid Class"
  },
  "Wild Shape": {
    name: "Wild Shape",
    category: "Class Feature (Druid)",
    summary: "As an action, magically assume the shape of a beast you have seen before. Limited uses per short/long rest. Max CR and movement types improve with level.",
    level: 2,
    castingTime: "1 Action (or Bonus Action for Moon Druid)",
    recharge: "Short or Long Rest (for uses)",
    rules: ["Uses: 2 per short/long rest (until L20).", "L2: Max CR 1/4, no fly/swim.", "L4: Max CR 1/2, no fly.", "L8: Max CR 1, flying allowed.", "Retain Int, Wis, Cha scores, HP, proficiencies, features (if new form can use them).", "Cannot cast spells in beast form (until Beast Spells at L18)."],
    tags: ["Transformation", "Utility", "Combat", "Exploration", "Stealth"],
    source: "Druid Class"
  },
  "Druid Circle": {
    name: "Druid Circle",
    category: "Class Feature (Druid Subclass)",
    summary: "A Druid's subclass, chosen at 2nd level, representing their specific connection to and philosophy regarding the natural world (e.g., Circle of the Land, Circle of the Moon).",
    level: 2,
    source: "Druid Class"
  },
  "Natural Recovery": {
    name: "Natural Recovery",
    category: "Class Feature (Circle of the Land Druid)",
    summary: "During a short rest, recover expended spell slots. Combined level of slots <= half druid level (rounded up), no slot 6th level or higher. Usable once per long rest.",
    level: 2,
    recharge: "Long Rest (to use the feature again)",
    rules: ["Activates on Short Rest.", "Total slot levels recovered = 1/2 Druid level (rounded up).", "No individual slot can be 6th level or higher."],
    tags: ["Spellcasting", "Resource Recovery"],
    source: "Circle of the Land (Druid)"
  },
  "Combat Wild Shape": {
    name: "Combat Wild Shape",
    category: "Class Feature (Circle of the Moon Druid)",
    summary: "Use Wild Shape as a bonus action. While transformed, can use a bonus action to expend a spell slot to regain 1d8 HP per slot level.",
    level: 2,
    effects: ["Wild Shape as Bonus Action.", "Heal in Wild Shape by expending spell slots (Bonus Action)."],
    tags: ["Wild Shape", "Action Economy", "Healing", "Combat"],
    source: "Circle of the Moon (Druid)"
  },
  "Elemental Wild Shape": {
    name: "Elemental Wild Shape",
    category: "Class Feature (Circle of the Moon Druid)",
    summary: "Expend two uses of Wild Shape to transform into an air, earth, fire, or water elemental.",
    level: 10,
    effects: ["Transform into an elemental (Air, Earth, Fire, or Water)."],
    rules: ["Costs 2 uses of Wild Shape."],
    tags: ["Wild Shape", "Transformation", "Elemental"],
    source: "Circle of the Moon (Druid)"
  },
  "Timeless Body": {
    name: "Timeless Body",
    category: "Class Feature (Druid/Monk)",
    summary: "Druid (L18): For every 10 years that pass, your body ages only 1 year. Monk (L15): You suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. Monk also no longer needs food/water.",
    level: "18 (Druid), 15 (Monk)",
    effects: ["Slowed aging (Druid).", "Immunity to magical aging, no frailty of old age, no need for food/water (Monk)."],
    tags: ["Utility", "Longevity"],
    source: "Druid Class, Monk Class"
  },
  "Beast Spells": {
    name: "Beast Spells",
    category: "Class Feature (Druid)",
    summary: "Can cast many druid spells in any Wild Shape form. Can perform somatic/verbal components, but not material components.",
    level: 18,
    effects: ["Cast druid spells while in Wild Shape (no material components)."],
    tags: ["Wild Shape", "Spellcasting"],
    source: "Druid Class"
  },
  "Archdruid": {
    name: "Archdruid",
    category: "Class Feature (Druid)",
    summary: "Unlimited uses of Wild Shape.",
    level: 20,
    effects: ["Unlimited Wild Shape uses."],
    tags: ["Wild Shape", "Capstone"],
    source: "Druid Class"
  },
};
