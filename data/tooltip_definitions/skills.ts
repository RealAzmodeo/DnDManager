// data/tooltip_definitions/skills.ts
import { StructuredTooltipData } from '../../types';

export const skillsTooltips: Record<string, StructuredTooltipData> = {
  "Sleight of Hand": {
    name: "Sleight of Hand",
    category: "Skill",
    summary: "Performing acts of legerdemain or manual trickery, such as pickpocketing, concealing an object, or planting something on someone else. Also used for disarming traps or opening locks if thieves' tools proficiency is not used.",
    governingAbility: "Dexterity",
    rules: ["A Dexterity (Sleight of Hand) check."],
    tags: ["Dexterity Based", "Utility", "Thievery"],
    source: "Player's Handbook"
  },
  "Stealth": {
    name: "Stealth",
    category: "Skill",
    summary: "Attempting to conceal oneself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.",
    governingAbility: "Dexterity",
    rules: ["A Dexterity (Stealth) check.", "Heavy armor typically imposes disadvantage on Stealth checks."],
    tags: ["Dexterity Based", "Exploration", "Infiltration"],
    source: "Player's Handbook"
  },
  "Perception": {
    name: "Perception",
    category: "Skill",
    summary: "Spotting, hearing, or otherwise detecting the presence of something. It measures your general awareness of your surroundings and the keenness of your senses.",
    governingAbility: "Wisdom",
    rules: ["A Wisdom (Perception) check.", "Passive Perception = 10 + all modifiers that normally apply to Perception."],
    tags: ["Wisdom Based", "Awareness", "Detection"],
    source: "Player's Handbook"
  },
  "Acrobatics": {
    name: "Acrobatics",
    category: "Skill",
    summary: "Staying on your feet in a tricky situation, such as running across ice, balancing on a tightrope, or staying upright on a rocking ship. Also used to escape grapples.",
    governingAbility: "Dexterity",
    rules: ["A Dexterity (Acrobatics) check."],
    tags: ["Dexterity Based", "Movement", "Balance"],
    source: "Player's Handbook"
  },
  "Intimidation": {
    name: "Intimidation",
    category: "Skill",
    summary: "Attempting to influence someone through overt threats, hostile actions, and physical violence.",
    governingAbility: "Charisma",
    rules: ["A Charisma (Intimidation) check."],
    tags: ["Charisma Based", "Social Interaction", "Influence"],
    source: "Player's Handbook"
  },
  "Deception": {
    name: "Deception",
    category: "Skill",
    summary: "Convincingly hiding the truth, either verbally or through actions. This can encompass misleading others through ambiguity, telling outright lies, or feigning emotions.",
    governingAbility: "Charisma",
    rules: ["A Charisma (Deception) check."],
    tags: ["Charisma Based", "Social Interaction", "Subterfuge"],
    source: "Player's Handbook"
  },
  "Insight": {
    name: "Insight",
    category: "Skill",
    summary: "Determining the true intentions of a creature, such as detecting a lie or predicting someone’s next move. It relies on sensing body language, speech patterns, and changes in demeanor.",
    governingAbility: "Wisdom",
    rules: ["A Wisdom (Insight) check.", "Often used to contest a creature's Deception check."],
    tags: ["Wisdom Based", "Social Interaction", "Perception (Mental)"],
    source: "Player's Handbook"
  },
  "Religion": {
    name: "Religion",
    category: "Skill",
    summary: "Recalling lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults. Can also be used to identify undead creatures.",
    governingAbility: "Intelligence",
    rules: ["An Intelligence (Religion) check."],
    tags: ["Intelligence Based", "Knowledge", "Divine Lore"],
    source: "Player's Handbook"
  },
  "Medicine": {
    name: "Medicine",
    category: "Skill",
    summary: "Stabilizing a dying companion or diagnosing an illness. Can also involve forensic examination.",
    governingAbility: "Wisdom",
    rules: ["A Wisdom (Medicine) check.", "DC 10 to stabilize a creature at 0 HP."],
    tags: ["Wisdom Based", "Healing", "Utility"],
    source: "Player's Handbook"
  },
  "Persuasion": {
    name: "Persuasion",
    category: "Skill",
    summary: "Attempting to influence someone or a group of people with tact, social graces, or good nature.",
    governingAbility: "Charisma",
    rules: ["A Charisma (Persuasion) check."],
    tags: ["Charisma Based", "Social Interaction", "Influence"],
    source: "Player's Handbook"
  },
  "Arcana": {
    name: "Arcana",
    category: "Skill",
    summary: "Recalling lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants thereof. Can also be used to identify magical constructs or aberrations.",
    governingAbility: "Intelligence",
    rules: ["An Intelligence (Arcana) check."],
    tags: ["Intelligence Based", "Knowledge", "Magical Lore"],
    source: "Player's Handbook"
  },
  "Investigation": {
    name: "Investigation",
    category: "Skill",
    summary: "Looking around for clues and making deductions based on those clues. You might deduce the location of a hidden object, discern from a wound what kind of weapon dealt it, or determine the weakest point in a structure.",
    governingAbility: "Intelligence",
    rules: ["An Intelligence (Investigation) check.", "Often used to find hidden details or understand complex mechanisms, contrasting with Perception's raw detection."],
    tags: ["Intelligence Based", "Deduction", "Exploration"],
    source: "Player's Handbook"
  },
  "History": {
    name: "History",
    category: "Skill",
    summary: "Recalling lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.",
    governingAbility: "Intelligence",
    rules: ["An Intelligence (History) check."],
    tags: ["Intelligence Based", "Knowledge", "Lore"],
    source: "Player's Handbook"
  },
  "Athletics": {
    name: "Athletics",
    category: "Skill",
    summary: "Covering difficult situations you encounter while climbing, jumping, or swimming. Also used for grappling and shoving.",
    governingAbility: "Strength",
    rules: ["A Strength (Athletics) check."],
    tags: ["Strength Based", "Physical Activity", "Movement"],
    source: "Player's Handbook"
  },
  "Nature": {
    name: "Nature",
    category: "Skill",
    summary: "Recalling lore about terrain, plants and animals, the weather, and natural cycles. Can also be used to identify fey creatures or natural beasts.",
    governingAbility: "Intelligence",
    rules: ["An Intelligence (Nature) check."],
    tags: ["Intelligence Based", "Knowledge", "Natural Lore"],
    source: "Player's Handbook"
  },
  "Performance": {
    name: "Performance",
    category: "Skill",
    summary: "Delighting an audience with music, dance, acting, storytelling, or some other form of entertainment.",
    governingAbility: "Charisma",
    rules: ["A Charisma (Performance) check."],
    tags: ["Charisma Based", "Social Interaction", "Entertainment"],
    source: "Player's Handbook"
  },
  "Survival": {
    name: "Survival",
    category: "Skill",
    summary: "Following tracks, hunting wild game, guiding a group through difficult terrain, identifying signs of nearby creatures, predicting the weather, or avoiding natural hazards.",
    governingAbility: "Wisdom",
    rules: ["A Wisdom (Survival) check."],
    tags: ["Wisdom Based", "Exploration", "Tracking"],
    source: "Player's Handbook"
  },
  "Animal Handling": {
    name: "Animal Handling",
    category: "Skill",
    summary: "Calming down a domesticated animal, keeping a mount from getting spooked, or intuiting an animal’s intentions. Can also be used to control a mount during risky maneuvers.",
    governingAbility: "Wisdom",
    rules: ["A Wisdom (Animal Handling) check."],
    tags: ["Wisdom Based", "Interaction (Animals)"],
    source: "Player's Handbook"
  },
};
