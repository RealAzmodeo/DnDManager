// data/tooltip_definitions/cleric_features.ts
import { StructuredTooltipData } from '../../types';

export const clericFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Divine Domain": {
    name: "Divine Domain",
    category: "Class Feature (Cleric Subclass)",
    summary: "A Cleric's subclass, chosen at 1st level, representing a specific aspect of their deity's portfolio (e.g., Life, Light, War). It grants domain spells and unique features.",
    level: 1,
    source: "Cleric Class"
  },
  "Channel Divinity": {
    name: "Channel Divinity",
    category: "Class Feature (Cleric/Paladin)",
    summary: "A signature Cleric and Paladin feature that allows them to channel divine energy for powerful effects. Each class/subclass grants specific options.",
    recharge: "Short or Long Rest",
    source: "Cleric Class (Level 2), Paladin Class (Level 3)",
    rules: ["Uses: 1 per Short/Long Rest (Cleric L2), 2/rest (Cleric L6), 3/rest (Cleric L18). Paladin: 1/rest."]
  },
  "Turn Undead": {
    name: "Turn Undead",
    category: "Class Feature (Cleric Channel Divinity)",
    summary: "As an action, present holy symbol. Each undead within 30ft that can see/hear you must make a Wisdom saving throw or be turned for 1 minute or until it takes damage.",
    castingTime: "1 Action",
    range: "30 feet",
    duration: "1 minute (or until damaged)",
    saveInfo: { attribute: "Wisdom", effectOnFailure: "Turned (flees, can't take reactions or willingly move to a space where it can't see you).", effectOnSuccess: "No effect." },
    conditionsApplied: ["Turned"],
    source: "Cleric Class, Level 2"
  },
  "Destroy Undead": {
    name: "Destroy Undead",
    category: "Class Feature (Cleric)",
    summary: "When an undead fails its saving throw against Turn Undead, if its CR is low enough, it is instantly destroyed.",
    rules: ["CR 1/2 or lower (L5)", "CR 1 or lower (L8)", "CR 2 or lower (L11)", "CR 3 or lower (L14)", "CR 4 or lower (L17)", "Trigger: Undead fails Turn Undead save."],
    source: "Cleric Class (starting Level 5)"
  },
  "Divine Intervention": {
    name: "Divine Intervention",
    category: "Class Feature (Cleric)",
    summary: "Call on your deity to intervene. Describe assistance, roll d100. If roll <= cleric level, deity intervenes (DM chooses nature).",
    level: 10,
    rules: ["Roll d100 <= Cleric Level for success."],
    recharge: "7 days (if successful), or Long Rest (if unsuccessful). At L20, it's automatically successful (Improved Divine Intervention).",
    tags: ["Deity Interaction"],
    source: "Cleric Class"
  },
};
