
import { SpeciesDefinition } from '../types';

export const HUMAN_SPECIES: SpeciesDefinition = {
  id: 'human',
  name: "Human",
  description: "Humans are the most adaptable and ambitious people among the common species. Whatever their goals, humans are the innovators, the achievers, and the pioneers of the worlds.",
  asi: [ 
    { score: "Any", bonus: 1 }, { score: "Any", bonus: 1 }, { score: "Any", bonus: 1 } 
    // In 2024 PHB, standard Human is +1 to three different ability scores OR +2 to one and +1 to another. 
    // Origin ASI then stacks on top. For simplicity in data, we'll represent base human ASI here, origin ASIs are separate.
    // The PHB errata for Human states: "Ability Score Increases. Increase two different ability scores of your choice by 1."
    // And then Origin provides +2/+1 or +1/+1/+1.
    // Let's simplify Species ASI for now to be more direct and let Origin handle the main ASIs per user prompt.
    // For initial character builder, let's assume Species ASIs are specific, and Origin provides the flexible choice.
    // So for Human:
    // { score: "Strength", bonus: 1 }, { score: "Dexterity", bonus: 1 }, { score: "Constitution", bonus: 1 },
    // { score: "Intelligence", bonus: 1 }, { score: "Wisdom", bonus: 1 }, { score: "Charisma", bonus: 1 }
    // (This is effectively +1 to all, which is too much. The 2024 Player's Handbook Human gets:
    // "Ability Score Increases. When determining your character’s ability scores, increase one score by 2 and increase a different score by 1, or increase three different scores by 1.")
    // This sounds like it *replaces* the ASI from Origin, or is the only ASI.
    // User prompt specifies Origin gives the +2/+1 or +1/+1/+1.
    // Let's assume a simplified "Classic Human" that gets +1 to two different scores for now.
    // Or, no ASI from Species, and ALL ASI comes from Origin as per user Level 0 spec for Origin.
    // User: "Atributos Base ... Aplicá los modificadores otorgados por tu Origen."
    // User: "Origen (Background) ... Bonos a tres atributos (+1/+1/+1 o +2/+1)."
    // This implies Species might give other things, but ASIs are an Origin choice.
    // Let's make Human species give a skill and a feat per PHB 2014 variant as a trait.
    // Or, simpler: Species gives specific traits and NO ASIs directly. All ASIs from Origin choice. This is cleaner.
    // For now, let's use Human (Variant-like) from old PHB for placeholder.
    // 2024 Human: Resourceful. You gain proficiency in one skill of your choice. You also gain one Feat of your choice for which you qualify.
    // This feat is *separate* from the Origin feat.
    // This is getting complicated. Let's stick to user's structure for Level 0: Origin gives main ASI and feat.
    // Species will give its unique traits.
  ],
  speed: 30,
  size: "Medium",
  traits: [
    { name: "Resourceful", description: "You gain proficiency in one skill of your choice." },
    // The 2024 Human also gets a feat, but the user's structure puts the "Origin Feat" at Origin level.
    // To avoid confusion, I'll omit the species feat here and assume the "Origin Feat" is the main one.
    // If a species *always* grants an *additional* feat, that would need to be specified.
    // For simplicity, let's assume species traits don't grant feats if the Origin does.
  ],
  languagesKnown: ["Common"],
  languageChoices: 1,
};

export const ELF_SPECIES: SpeciesDefinition = {
  id: 'elf',
  name: "Elf",
  description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
  asi: [{ score: "Dexterity", bonus: 2 }], // Traditional Elf ASI
  speed: 30,
  size: "Medium",
  vision: "Darkvision 60ft",
  traits: [
    { name: "Keen Senses", description: "You have proficiency in the Perception skill." },
    { name: "Fey Ancestry", description: "You have advantage on saving throws against being charmed, and magic can’t put you to sleep." },
    { name: "Trance", description: "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep." }
  ],
  languagesKnown: ["Common", "Elvish"],
};

export const ORC_SPECIES: SpeciesDefinition = {
  id: 'orc',
  name: "Orc",
  description: "Orcs are known for their formidable strength and resilience, often forming communities that value martial prowess and endurance.",
  asi: [{ score: "Strength", bonus: 2 }, { score: "Constitution", bonus: 1 }], // Traditional Orc ASI
  speed: 30,
  size: "Medium",
  vision: "Darkvision 60ft",
  traits: [
    { name: "Powerful Build", description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift." },
    { name: "Relentless Endurance", description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest." },
    { name: "Adrenaline Rush", description: "As a bonus action on your turn, you can move up to your speed toward a hostile creature that you can see or hear. You must end this move closer to the enemy than you started." } // 2024 Orc trait
  ],
  languagesKnown: ["Common", "Orc"],
};


export const ALL_SPECIES_DATA: SpeciesDefinition[] = [
  HUMAN_SPECIES,
  ELF_SPECIES,
  ORC_SPECIES,
];
