
// data/tooltip_definitions/warlock_features.ts
import { StructuredTooltipData } from '../../types';

export const warlockFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Otherworldly Patron": {
    name: "Otherworldly Patron",
    category: "Class Feature (Warlock Subclass)",
    summary: "A Warlock's subclass, chosen at 1st level, representing the powerful entity with whom they have forged a pact (e.g., The Archfey, The Fiend, The Great Old One). This choice grants specific features and an expanded spell list.",
    level: 1,
    source: "Warlock Class"
  },
  "Pact Magic": {
    name: "Pact Magic",
    category: "Class Feature (Warlock)",
    summary: "Warlocks cast spells using a unique system where they have few spell slots, but these slots are always cast at their highest available warlock spell level and recharge on a short or long rest.",
    rules: [
      "Spell slots are all of the same, highest available warlock spell level.",
      "Limited number of spell slots (e.g., 1 at L1, 2 from L2-L10, 3 from L11-L16, 4 from L17+).",
      "Slots recover on a short or long rest."
    ],
    tags: ["Spellcasting", "Resource", "Short Rest Recovery"],
    source: "Warlock Class, Level 1"
  },
  "Eldritch Blast": {
    name: "Eldritch Blast",
    category: "Cantrip (Warlock)",
    school: "Evocation",
    castingTime: "1 Action",
    range: "120 feet",
    components: ["V", "S"],
    duration: "Instantaneous",
    summary: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
    damage: [{ dice: "1d10", type: "Force", notes: "per beam" }],
    rules: ["Number of beams: 1 (L1-4), 2 (L5-10), 3 (L11-16), 4 (L17+)."],
    tags: ["Cantrip", "Damage", "Force Damage", "Attack Roll", "Staple"],
    source: "Player's Handbook"
  },
  "Eldritch Invocations": {
    name: "Eldritch Invocations",
    category: "Class Feature (Warlock)",
    summary: "Fragments of forbidden knowledge that grant Warlocks persistent magical abilities. Options include enhancing Eldritch Blast, gaining at-will spells, or passive benefits. Chosen at various levels.",
    level: "2 (learn 2, gain more at higher levels)",
    source: "Warlock Class"
  },
  "Agonizing Blast": {
    name: "Agonizing Blast",
    category: "Eldritch Invocation",
    prerequisites: "Eldritch Blast cantrip",
    summary: "When you cast Eldritch Blast, add your Charisma modifier to the damage it deals on a hit.",
    effects: ["Add Charisma modifier to Eldritch Blast damage per beam."],
    tags: ["Damage Bonus", "Eldritch Blast Enhancement"],
    source: "Warlock Class (Invocation Option)"
  },
  "Repelling Blast": {
    name: "Repelling Blast",
    category: "Eldritch Invocation",
    prerequisites: "Eldritch Blast cantrip",
    summary: "When you hit a creature with Eldritch Blast, you can push the creature up to 10 feet away from you.",
    effects: ["Push target up to 10 feet on Eldritch Blast hit."],
    tags: ["Control", "Forced Movement", "Eldritch Blast Enhancement"],
    source: "Warlock Class (Invocation Option)"
  },
  "Devil's Sight": {
    name: "Devil's Sight",
    category: "Eldritch Invocation",
    summary: "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.",
    range: "120 feet",
    effects: ["See normally in all darkness (magical and nonmagical) up to 120ft."],
    tags: ["Utility", "Darkvision Enhancement", "Perception"],
    source: "Warlock Class (Invocation Option)"
  },
  "Pact Boon": {
    name: "Pact Boon",
    category: "Class Feature (Warlock)",
    summary: "At 3rd level, a Warlock receives a gift from their patron: Pact of the Blade (summon/bond a weapon), Pact of the Chain (improved familiar), or Pact of the Tome (extra cantrips/rituals).",
    level: 3,
    source: "Warlock Class"
  },
  "Pact of the Blade": {
    name: "Pact of the Blade",
    category: "Pact Boon Option (Warlock)",
    summary: "Use your action to create a pact weapon in your empty hand. You can choose the form of this melee weapon each time you create it. You are proficient with it while you wield it. This weapon counts as magical for overcoming resistance/immunity. Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more, if you use this feature again, if you dismiss the weapon (no action required), or if you die. You can also transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. The ritual takes 1 hour to complete. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can’t affect an artifact or a sentient weapon in this way.",
    level: 3,
    effects: ["Summon a melee weapon or bond with a magic weapon.", "Proficient with pact weapon.", "Pact weapon is magical."],
    tags: ["Combat", "Weaponry"],
    source: "Warlock Class (Pact Boon)"
  },
  "Pact of the Chain": {
    name: "Pact of the Chain",
    category: "Pact Boon Option (Warlock)",
    summary: "Learn the Find Familiar spell if you don't already know it (counts as Warlock spell, doesn't count against spells known). When you cast it, you can choose one of the normal forms for a familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite. Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to use its reaction to make one attack of its own.",
    level: 3,
    effects: ["Gain Find Familiar spell.", "Can choose special familiar forms (imp, pseudodragon, quasit, sprite).", "Familiar can attack using your forgone attack (via its reaction)."],
    tags: ["Utility", "Familiar", "Scouting", "Support"],
    source: "Warlock Class (Pact Boon)"
  },
  "Pact of the Tome": {
    name: "Pact of the Tome",
    category: "Pact Boon Option (Warlock)",
    summary: "Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class’s spell list (the three needn’t be from the same list). While the book is on your person, you can cast those cantrips at will. They don’t count against your number of cantrips known. If they don’t appear on the warlock spell list, they are nonetheless warlock spells for you. If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die. With DM's approval, you can also add ritual spells to this book.",
    level: 3,
    effects: ["Gain a Book of Shadows.", "Choose 3 cantrips from any spell list; can cast at will.", "Can potentially inscribe ritual spells (with DM approval and appropriate invocation)."],
    tags: ["Spellcasting", "Utility", "Cantrips", "Ritual Magic (potential)"],
    source: "Warlock Class (Pact Boon)"
  },
  "Mystic Arcanum": {
    name: "Mystic Arcanum",
    category: "Class Feature (Warlock)",
    summary: "At 11th level and higher, Warlocks gain access to one spell of 6th, 7th, 8th, and 9th level from the Warlock spell list. Each Arcanum spell can be cast once per long rest without expending a spell slot.",
    level: "11 (6th), 13 (7th), 15 (8th), 17 (9th)",
    effects: ["Cast one chosen high-level spell (6th, 7th, 8th, 9th) once per long rest without a spell slot."],
    recharge: "Long Rest",
    tags: ["Spellcasting", "High-Level Magic"],
    source: "Warlock Class"
  },
  "Eldritch Master": {
    name: "Eldritch Master",
    category: "Class Feature (Warlock)",
    summary: "At 20th level, you can spend 1 minute entreating your patron for aid to regain all your expended Pact Magic spell slots. Once used, you must finish a long rest before using it again.",
    level: 20,
    effects: ["Regain all expended Pact Magic spell slots."],
    castingTime: "1 minute (to beseech patron)",
    recharge: "Long Rest",
    tags: ["Resource Recovery", "Capstone", "Pact Magic"],
    source: "Warlock Class"
  },
  // Specific Invocation examples that are very common:
  "Mask of Many Faces": {
    name: "Mask of Many Faces",
    category: "Eldritch Invocation",
    summary: "You can cast Disguise Self at will, without expending a spell slot.",
    effects: ["Cast Disguise Self at will."],
    tags: ["Utility", "Illusion", "Social Interaction", "At-Will Spell"],
    source: "Warlock Class (Invocation Option)"
  },
  "Armor of Shadows": {
    name: "Armor of Shadows",
    category: "Eldritch Invocation",
    summary: "You can cast Mage Armor on yourself at will, without expending a spell slot or material components.",
    effects: ["Cast Mage Armor on self at will."],
    tags: ["Defense", "AC Bonus", "At-Will Spell"],
    source: "Warlock Class (Invocation Option)"
  },
   "Investment of the Chain Master": {
    name: "Investment of the Chain Master",
    category: "Eldritch Invocation",
    prerequisites: "Pact of the Chain feature",
    summary: "When your familiar takes its turn, it can take the Attack action. Also, its weapon attacks count as magical for overcoming resistance/immunity. If the familiar forces a creature to make a saving throw, it uses your spell save DC. If the familiar has a flying speed, it can now hover.",
    effects: ["Familiar can Attack on its turn.", "Familiar's attacks are magical.", "Familiar's save DCs use your Warlock save DC.", "Flying familiar gains hover."],
    tags: ["Familiar Enhancement", "Pact of the Chain"],
    source: "Tasha's Cauldron of Everything / Warlock Class (Invocation Option)"
  },
  "Improved Pact Weapon": {
    name: "Improved Pact Weapon",
    category: "Eldritch Invocation",
    prerequisites: "Pact of the Blade feature",
    summary: "You can use any weapon you summon with your Pact of the Blade feature as a spellcasting focus for your warlock spells. In addition, the weapon gains a +1 bonus to its attack and damage rolls, unless it is a magic weapon that already has a bonus to those rolls. Finally, the weapon you conjure can be a shortbow, longbow, light crossbow, or heavy crossbow.",
    effects: ["Pact weapon can be a spellcasting focus.", "Pact weapon gains +1 to attack/damage (if not already magical with bonus).", "Can summon ranged pact weapons (bows/crossbows)."],
    tags: ["Pact of the Blade Enhancement", "Weapon Enhancement"],
    source: "Xanathar's Guide to Everything / Warlock Class (Invocation Option)"
  },
  "Thirsting Blade": {
    name: "Thirsting Blade",
    category: "Eldritch Invocation",
    prerequisites: "5th level, Pact of the Blade feature",
    summary: "You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn.",
    effects: ["Gain Extra Attack with pact weapon."],
    tags: ["Pact of the Blade Enhancement", "Extra Attack"],
    source: "Warlock Class (Invocation Option)"
  },
  "Book of Ancient Secrets": {
    name: "Book of Ancient Secrets",
    category: "Eldritch Invocation",
    prerequisites: "Pact of the Tome feature",
    summary: "You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class’s spell list. The spells appear in the book and don’t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by some other means. You can also add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell.",
    effects: ["Learn two 1st-level ritual spells from any class.", "Can cast these as rituals.", "Can inscribe more ritual spells found into the Book of Shadows."],
    tags: ["Pact of the Tome Enhancement", "Ritual Magic", "Spellcasting Versatility"],
    source: "Warlock Class (Invocation Option)"
  },
};
