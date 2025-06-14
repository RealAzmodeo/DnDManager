// data/tooltip_definitions/races.ts
import { StructuredTooltipData } from '../../types';

export const racesTooltips: Record<string, StructuredTooltipData> = {
  "Aasimar": {
    name: "Aasimar",
    category: "Species",
    summary: "Individuals with celestial heritage. Aasimar can manifest divine power in various forms, such as Radiant Soul, Radiant Consumption, or Necrotic Shroud, often allowing them to inflict extra damage or gain protective auras.",
    tags: ["Celestial", "Divine"],
    source: "Player's Handbook (2024)"
  },
  "Dragonborn": {
    name: "Dragonborn",
    category: "Species",
    summary: "Descendants of dragons, Dragonborn physical characteristics and abilities vary among different lineages, often distinguished by the color and type of their draconic ancestor (e.g., metallic or chromatic). They typically possess a breath weapon and damage resistance related to their ancestry.",
    tags: ["Draconic", "Breath Weapon", "Elemental Resistance"],
    source: "Player's Handbook (2024)"
  },
  "Dwarf": {
    name: "Dwarf",
    category: "Species",
    summary: "Classic, stout humanoids known for their resilience, connection to stone and metal, and deep traditions. Dwarves are often skilled artisans and warriors.",
    additionalDetails: { "Known For": "Resilience, traditional craftsmanship, often associated with mountains and underground kingdoms." },
    tags: ["Sturdy", "Artisan", "Traditional"],
    source: "Player's Handbook (2024)"
  },
  "Elf": {
    name: "Elf",
    category: "Species",
    summary: "Graceful humanoids with long lifespans, often possessing a deep connection to nature or magic. Elves have various lineages, such as Wood Elves adapted to forests, Drow from subterranean realms (no longer inherently evil), and High Elves known for their arcane aptitude. These subtypes are now considered lineages or variants within the main Elf species.",
    additionalDetails: { "Lineages/Variants": "Wood Elf, Drow (Subterranean Elf), High Elf." },
    tags: ["Fey Ancestry", "Graceful", "Long-lived", "Magic Affinity", "Nature Affinity"],
    source: "Player's Handbook (2024)"
  },
  "Gnome": {
    name: "Gnome",
    category: "Species",
    summary: "Small, clever humanoids known for their ingenuity, curiosity, and connection to either forests (Forest Gnomes) or rocky, hilly terrains (Rock Gnomes). These subtypes are considered lineages or variants within the main Gnome species.",
    additionalDetails: { "Lineages/Variants": "Forest Gnome, Rock Gnome." },
    tags: ["Small", "Clever", "Illusion Affinity (often Forest)", "Tinkering Affinity (often Rock)"],
    source: "Player's Handbook (2024)"
  },
  "Goliath": {
    name: "Goliath",
    category: "Species",
    summary: "Tall and powerful humanoids, replacing the concept of half-giants. Goliaths are known for their strength, resilience, and adaptation to harsh mountainous environments. They often have a competitive and stoic nature.",
    tags: ["Giant-kin", "Strong", "Resilient", "Mountain Dweller"],
    source: "Player's Handbook (2024)"
  },
  "Halfling": {
    name: "Halfling",
    category: "Species",
    summary: "Small, cheerful humanoids known for their surprising agility, inherent luck, and often practical, down-to-earth nature. They value comfort, community, and simple pleasures.",
    additionalDetails: { "Known For": "Agility, luck, cheerful disposition." },
    tags: ["Small", "Lucky", "Agile", "Comfort-loving"],
    source: "Player's Handbook (2024)"
  },
  "Human": {
    name: "Human",
    category: "Species",
    summary: "The most adaptable and diverse species, Humans are known for their ambition, short lifespans (relative to other species), and ability to thrive in a wide variety of cultures and environments. They remain highly customizable, similar to previous editions.",
    tags: ["Adaptable", "Versatile", "Ambitious"],
    source: "Player's Handbook (2024)"
  },
  "Orc": {
    name: "Orc",
    category: "Species",
    summary: "Now a core Player's Handbook species, Orcs are portrayed as a tough and determined people, no longer inherently evil or solely monstrous. They are often physically powerful and value strength and resilience.",
    tags: ["Strong", "Resilient", "Determined"],
    source: "Player's Handbook (2024)"
  },
  "Tiefling": {
    name: "Tiefling",
    category: "Species",
    summary: "Humanoids with infernal heritage, often bearing physical traits that reflect their fiendish ancestry (such as horns, tails, or unusual skin tones). Tieflings are presented with modern updates, and while sometimes mistrusted, they are not inherently evil.",
    tags: ["Infernal Heritage", "Fiendish Traits", "Charismatic (often)"],
    source: "Player's Handbook (2024)"
  },
  // Keep existing race tooltips for now, as they might be referenced by old data or for context.
  // Will remove/update them progressively if they are fully superseded.
  "Variant Human": {
    name: "Variant Human",
    category: "Race Option (Pre-2024)",
    summary: "An alternative to the standard Human race, allowing a character to gain a feat at 1st level, increase two different ability scores by 1, and gain one skill proficiency.",
    effects: [
      "Increase two different ability scores of your choice by 1.",
      "Gain proficiency in one skill of your choice.",
      "Gain one feat of your choice."
    ],
    tags: ["Customizable", "Feat"],
    source: "Player's Handbook (Pre-2024 Variant Rule)"
  },
  "Hill Dwarf": {
    name: "Hill Dwarf",
    category: "Race (Subrace of Dwarf - Pre-2024)",
    summary: "Known for their exceptional hardiness and resilience, often associated with hills and mining communities.",
    effects: [
      "Ability Score Increase: Constitution +2, Wisdom +1.",
      "Dwarven Resilience: Advantage on saving throws against poison, resistance to poison damage.",
      "Dwarven Combat Training: Proficiency with battleaxe, handaxe, light hammer, warhammer.",
      "Tool Proficiency: Proficiency with smith's tools, brewer's supplies, or mason's tools.",
      "Stonecunning: Add double proficiency bonus to History checks related to origin of stonework.",
      "Darkvision: 60 feet.",
      "Dwarven Toughness: Hit point maximum increases by 1, and it increases by 1 every time you gain a level."
    ],
    tags: ["Durable", "Wisdom Bonus", "Bonus HP"],
    source: "Player's Handbook (Pre-2024)"
  },
  "High Elf": {
    name: "High Elf",
    category: "Race (Subrace of Elf - Pre-2024)",
    summary: "Elves known for their keen minds, mastery of magic, and often haughty demeanor. They value artistry and academic pursuits.",
    effects: [
      "Ability Score Increase: Dexterity +2, Intelligence +1.",
      "Darkvision: 60 feet.",
      "Keen Senses: Proficiency in the Perception skill.",
      "Fey Ancestry: Advantage on saving throws against being charmed, and magic can’t put you to sleep.",
      "Trance: Need only 4 hours of sleep (meditation).",
      "Elf Weapon Training: Proficiency with longsword, shortsword, shortbow, longbow.",
      "Cantrip: Know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
    ],
    tags: ["Dexterous", "Intelligent", "Magic User", "Perception"],
    source: "Player's Handbook (Pre-2024)"
  },
  "Custom Lineage": {
    name: "Custom Lineage",
    category: "Race Option (TCoE - Pre-2024 Style)",
    summary: "An option for character creation allowing players to design their own lineage, choosing an ability score increase, a feat, and either darkvision or a skill proficiency.",
    effects: [
      "Increase one ability score of your choice by 2.",
      "Gain one feat of your choice for which you qualify.",
      "Variable Trait: You gain either Darkvision (60 feet) or proficiency in one skill of your choice."
    ],
    tags: ["Customizable", "Feat", "Flexible"],
    source: "Tasha's Cauldron of Everything"
  },
};
