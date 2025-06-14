// data/tooltip_definitions/psion_features.ts
import { StructuredTooltipData } from '../../types';

export const psionFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Psi Points": {
    name: "Psi Points",
    category: "Class Resource (Psion)",
    summary: "A resource pool used by Psions to fuel their psionic powers. Similar to spell slots for casters or Ki points for Monks.",
    recharge: "Typically Short or Long Rest (varies by specific Psion version).",
    source: "Psion Class"
  },
  "Psionic Discipline": {
    name: "Psionic Discipline",
    category: "Class Feature (Psion Subclass)",
    summary: "The term for a Psion's subclass, representing a specialized area of psionic study or mastery, such as Telepathy, Telekinesis, or Metacreativity (Shaping). Chosen at 1st level.",
    level: 1,
    source: "Psion Class"
  },
  "Psionic Talent": {
    name: "Psionic Talent",
    category: "Class Feature (Psion)",
    summary: "Minor psionic effects, akin to cantrips for spellcasters, that a Psion can typically use at will without expending Psi Points.",
    castingTime: "Typically 1 Action",
    range: "Varies",
    source: "Psion Class, Level 1",
    rules: ["Cost: 0 Psi Points"]
  },
};
