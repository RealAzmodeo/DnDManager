// data/tooltip_definitions/sorcerer_features.ts
import { StructuredTooltipData } from '../../types';

export const sorcererFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Sorcerous Origin": {
    name: "Sorcerous Origin",
    category: "Class Feature (Sorcerer Subclass)",
    summary: "A Sorcerer's subclass, chosen at 1st level, which describes the source of their innate magical power (e.g., Draconic Bloodline, Wild Magic).",
    level: 1,
    source: "Sorcerer Class"
  },
  "Font of Magic": {
    name: "Font of Magic",
    category: "Class Feature (Sorcerer)",
    summary: "A wellspring of magic represented by Sorcery Points, allowing Sorcerers to create various magical effects, including Metamagic and Flexible Casting.",
    level: 2,
    tags: ["Resource", "Spellcasting Enhancement", "Metamagic"],
    source: "Sorcerer Class"
  },
  "Sorcery Points": {
    name: "Sorcery Points",
    category: "Class Resource (Sorcerer)",
    summary: "A pool of points (equal to Sorcerer level starting at L2) used to power Font of Magic abilities, primarily Metamagic and Flexible Casting (creating spell slots or converting slots to points). Regained on a long rest.",
    level: 2,
    recharge: "Long Rest",
    rules: ["Points equal to Sorcerer level."],
    tags: ["Resource", "Spellcasting", "Metamagic Fuel"],
    source: "Sorcerer Class"
  },
  "Metamagic": {
    name: "Metamagic",
    category: "Class Feature (Sorcerer)",
    summary: "The ability to twist spells by spending Sorcery Points, altering their range, duration, targets, components, or other properties. Sorcerers learn a few options and can gain more at higher levels.",
    level: 3,
    effects: [
      "Careful Spell: Spend 1 sorcery point; chosen creatures (up to Cha mod) auto-succeed saves.",
      "Distant Spell: Spend 1 sorcery point; double spell range (Touch becomes 30ft).",
      "Empowered Spell: Spend 1 sorcery point; reroll damage dice (up to Cha mod).",
      "Extended Spell: Spend 1 sorcery point; double spell duration (max 24 hours).",
      "Heightened Spell: Spend 3 sorcery points; one target has disadvantage on first save vs spell.",
      "Quickened Spell: Spend 2 sorcery points; change spell casting time from 1 action to 1 bonus action.",
      "Subtle Spell: Spend 1 sorcery point; cast spell without somatic/verbal components.",
      "Twinned Spell: Spend sorcery points equal to spell level (1 for cantrips); target a second creature with a single-target, non-self spell."
    ],
    tags: ["Spellcasting Enhancement", "Customization", "Sorcery Points"],
    source: "Sorcerer Class"
  },
  "Draconic Resilience": {
    name: "Draconic Resilience",
    category: "Class Feature (Draconic Bloodline Sorcerer)",
    summary: "Grants +1 HP per Sorcerer level. When not wearing armor, AC equals 13 + Dexterity modifier.",
    level: 1,
    effects: ["HP maximum increases by 1 per Sorcerer level.", "AC = 13 + Dexterity modifier when unarmored."],
    tags: ["Defense", "Survivability", "AC Bonus"],
    source: "Draconic Bloodline (Sorcerer)"
  },
  "Elemental Affinity": {
    name: "Elemental Affinity",
    category: "Class Feature (Draconic Bloodline Sorcerer)",
    summary: "When casting a spell that deals damage of the type associated with your draconic ancestry, add Charisma modifier to one damage roll. Can spend 1 sorcery point to gain resistance to that damage type for 1 hour.",
    level: 6,
    effects: ["Add Charisma modifier to one damage roll of ancestral damage type.", "Spend 1 sorcery point for 1-hour resistance to ancestral damage type."],
    tags: ["Damage Bonus", "Resistance", "Offense", "Defense"],
    source: "Draconic Bloodline (Sorcerer)"
  },
  "Wild Magic Surge": {
    name: "Wild Magic Surge",
    category: "Class Feature (Wild Magic Sorcerer)",
    summary: "After casting a sorcerer spell of 1st level or higher, the DM can have you roll a d20. On a 1, roll on the Wild Magic Surge table for a random magical effect.",
    level: 1,
    rules: ["Trigger: Cast sorcerer spell of 1st level or higher.", "Roll d20; on a 1, roll on Wild Magic Surge table."],
    tags: ["Random Effect", "Chaos Magic"],
    source: "Wild Magic (Sorcerer)"
  },
  "Tides of Chaos": {
    name: "Tides of Chaos",
    category: "Class Feature (Wild Magic Sorcerer)",
    summary: "Gain advantage on one attack roll, ability check, or saving throw. Recharges on long rest OR after DM forces a Wild Magic Surge.",
    level: 1,
    effects: ["Gain advantage on one attack, check, or save."],
    recharge: "Long Rest or after DM-forced Wild Magic Surge.",
    tags: ["Dice Manipulation", "Advantage", "Resource"],
    source: "Wild Magic (Sorcerer)"
  },
};
