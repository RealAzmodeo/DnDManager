
import { OriginDefinition } from '../types';

export const ACOLYTE_ORIGIN: OriginDefinition = {
  id: 'acolyte',
  name: "Acolyte Origin",
  description: "You have spent your life in service to a temple, learning its rites and a deep understanding of its faith, or perhaps you were raised in a secluded community with strong spiritual traditions.",
  asi: {
    options: [
      { name: "+2 to one, +1 to another", abilities: [{ score: "Any", bonus: 2 }, { score: "Any", bonus: 1 }], count: 2 },
      { name: "+1 to three different", abilities: [{ score: "Any", bonus: 1 }, { score: "Any", bonus: 1 }, { score: "Any", bonus: 1 }], count: 3 }
    ],
    note: "Choose your ability score increases."
  },
  skillProficiencies: ["Insight", "Religion"],
  languageProficiencyChoices: { choose: 2, from: ["Celestial", "Infernal", "Abyssal", "Primordial", "Draconic", "Elvish", "Dwarvish", "Giant", "Goblin", "Orc"] }, // Example choices
  originFeat: "Magic Initiate", // Example feat
  narrativeHook: "You are driven by your faith or the teachings of your order. What divine truth or sacred mission guides your path?",
  startingEquipment: ["A holy symbol (a gift to you when you entered the priesthood)", "a prayer book or prayer wheel", "5 sticks of incense", "vestments", "a set of common clothes", "and a pouch containing 15 gp"]
};

export const GUARD_ORIGIN: OriginDefinition = {
  id: 'guard',
  name: "Guard Origin",
  description: "You have served as a sentinel, watchperson, or soldier, responsible for protecting a place, person, or community. Discipline and vigilance are your hallmarks.",
  asi: {
    options: [
      { name: "+2 to one, +1 to another", abilities: [{ score: "Any", bonus: 2 }, { score: "Any", bonus: 1 }], count: 2 },
      { name: "+1 to three different", abilities: [{ score: "Any", bonus: 1 }, { score: "Any", bonus: 1 }, { score: "Any", bonus: 1 }], count: 3 }
    ],
    note: "Choose your ability score increases."
  },
  skillProficiencies: ["Athletics", "Perception"],
  toolProficiencyChoices: { choose: 1, from: ["Gaming Set (any)", "Vehicles (Land)"] },
  originFeat: "Alert", // Example feat
  narrativeHook: "You are defined by your sense of duty and watchfulness. What or whom did you guard, and why did you leave that post?",
  startingEquipment: ["An insignia of rank", "a horn with which to summon help", "a set of manacles", "a uniform", "a set of common clothes", "and a pouch containing 10 gp"]
};

export const SAGE_ORIGIN: OriginDefinition = {
  id: 'sage',
  name: "Sage Origin",
  description: "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you.",
   asi: {
    options: [
      { name: "+2 to one, +1 to another", abilities: [{ score: "Any", bonus: 2 }, { score: "Any", bonus: 1 }], count: 2 },
      { name: "+1 to three different", abilities: [{ score: "Any", bonus: 1 }, { score: "Any", bonus: 1 }, { score: "Any", bonus: 1 }], count: 3 }
    ],
    note: "Choose your ability score increases."
  },
  skillProficiencies: ["Arcana", "History"],
  languageProficiencyChoices: { choose: 2, from: ["Celestial", "Infernal", "Abyssal", "Primordial", "Draconic", "Elvish", "Dwarvish", "Giant", "Goblin", "Orc", "Undercommon", "Sylvan"] },
  originFeat: "Keen Mind", // Example feat
  narrativeHook: "What great discovery or piece of forbidden knowledge did you uncover? What mysteries still drive your quest for information?",
  startingEquipment: ["A bottle of black ink", "a quill", "a small knife", "a letter from a dead colleague posing a question you have not yet been able to answer", "a set of common clothes", "and a pouch containing 10 gp"]
};


export const ALL_ORIGINS_DATA: OriginDefinition[] = [
  ACOLYTE_ORIGIN,
  GUARD_ORIGIN,
  SAGE_ORIGIN,
];
