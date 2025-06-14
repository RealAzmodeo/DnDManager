// data/tooltip_definitions/wizard_features.ts
import { StructuredTooltipData } from '../../types';

export const wizardFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Arcane Tradition": {
    name: "Arcane Tradition",
    category: "Class Feature (Wizard Subclass)",
    summary: "A Wizard's subclass, representing a specialized school of magic (e.g., Abjuration, Evocation) or a unique approach to spellcasting, chosen at 2nd level.",
    level: 2,
    source: "Wizard Class"
  },
  "Spellbook": {
    name: "Spellbook",
    category: "Class Feature (Wizard)",
    summary: "A Wizard's treasured tome containing all the spells they have learned (except cantrips), from which they prepare their daily spells. New spells can be copied into it.",
    rules: ["Starts with six 1st-level spells.", "Add 2 free spells per wizard level gained.", "Copying spells costs time and gold (50gp and 2 hours per spell level)."],
    source: "Wizard Class, Level 1"
  },
  "Arcane Recovery": {
    name: "Arcane Recovery",
    category: "Class Feature (Wizard)",
    summary: "Once per day during a short rest, recover expended spell slots. Combined level of slots <= half wizard level (rounded up), no slot 6th level or higher.",
    level: 1,
    recharge: "Long Rest (to use the feature again)",
    rules: ["Activates on Short Rest.", "Total slot levels recovered = 1/2 Wizard level (rounded up).", "No individual slot can be 6th level or higher."],
    source: "Wizard Class"
  },
  "Spell Mastery": {
    name: "Spell Mastery",
    category: "Class Feature (Wizard)",
    summary: "Choose one 1st-level and one 2nd-level wizard spell from spellbook. Can cast these at their lowest level without expending a spell slot when prepared.",
    level: 18,
    effects: ["Cast chosen 1st-level spell at will.", "Cast chosen 2nd-level spell at will."],
    source: "Wizard Class"
  },
  "Signature Spells": {
    name: "Signature Spells",
    category: "Class Feature (Wizard)",
    summary: "Choose two 3rd-level wizard spells from spellbook. Always prepared, don't count against prepared spells. Can cast each once at 3rd level without a spell slot per short/long rest.",
    level: 20,
    effects: ["Two chosen 3rd-level spells always prepared.", "Cast each once at 3rd level without slot expenditure."],
    recharge: "Short or Long Rest (for free casting)",
    source: "Wizard Class"
  },
};
