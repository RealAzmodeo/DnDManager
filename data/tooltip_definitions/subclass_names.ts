
// data/tooltip_definitions/subclass_names.ts
import { StructuredTooltipData } from '../../types';

export const subclassNamesTooltips: Record<string, StructuredTooltipData> = {
  // Gunslinger Subclasses
  "Gunslinger": {
    name: "Gunslinger",
    category: "Class",
    summary: "A martial class archetype focused on firearm combat, known for quick draws, risky maneuvers (Deeds), and high damage output at range. They choose a Gunslinger's Creed as their subclass.",
    tags: ["Martial", "Ranged Combat", "Firearms"],
    source: "Custom Class (based on various sources, adapted for D&D 2024)"
  },
  "Deadeye - The Sharpshooter": {
    name: "Deadeye - The Sharpshooter",
    category: "Gunslinger Creed (Subclass)",
    summary: "A Gunslinger Creed focusing on extreme precision at long range, ignoring cover, and enhancing aimed shots. Embodies the 'eagle-eyed, precise shooter' archetype.",
    tags: ["Ranged Combat", "Precision", "Sniper"],
    source: "Gunslinger Class"
  },
  "High Roller - The Gambler": {
    name: "High Roller - The Gambler",
    category: "Gunslinger Creed (Subclass)",
    summary: "A Gunslinger Creed that manipulates fortune through Risk Dice, rerolling dice and embracing luck in combat. Plays with chance and risk-taking.",
    tags: ["Luck", "Risk Management", "Dice Manipulation"],
    source: "Gunslinger Class"
  },
  // Psion Subclasses
  "Psion": {
    name: "Psion",
    category: "Class",
    summary: "A class that wields power originating from the mind itself, known as psionics. Psions use mental disciplines to affect reality, communicate telepathically, and manifest a variety of psychic effects. They choose a Psionic Discipline as their subclass.",
    tags: ["Mental Power", "Psychic", "Utility", "Control"],
    source: "Custom Class (based on various D&D editions)"
  },
  "Telepath - The Mind Reader": {
    name: "Telepath - The Mind Reader",
    category: "Psionic Discipline (Subclass)",
    summary: "A Psionic Discipline focused on reading thoughts, influencing minds, and direct mental communication. Excels at social manipulation and psychic assault.",
    tags: ["Telepathy", "Mental Control", "Social Interaction"],
    source: "Psion Class"
  },
  "Telekinetic - The Force Mover": {
    name: "Telekinetic - The Force Mover",
    category: "Psionic Discipline (Subclass)",
    summary: "A Psionic Discipline specializing in moving objects and creatures with the power of thought. Can manipulate the battlefield and deal bludgeoning damage.",
    tags: ["Telekinesis", "Force Manipulation", "Battlefield Control"],
    source: "Psion Class"
  },
  "Shaper - The Matter Weaver": {
    name: "Shaper - The Matter Weaver",
    category: "Psionic Discipline (Subclass)",
    summary: "A Psionic Discipline focused on creating and manipulating ectoplasmic constructs (Astral Constructs) and altering physical forms. Versatile in creating tools, weapons, or barriers.",
    tags: ["Creation", "Transformation", "Ectoplasm"],
    source: "Psion Class"
  },
  "Seer - The Oracle": {
    name: "Seer - The Oracle",
    category: "Psionic Discipline (Subclass)",
    summary: "A Psionic Discipline specializing in precognition, remote viewing, and divination. Gathers information and aids allies by foreseeing events or uncovering secrets.",
    tags: ["Precognition", "Divination", "Information Gathering"],
    source: "Psion Class"
  },
  // Cleric Subclasses
  "Cleric": {
    name: "Cleric",
    category: "Class",
    summary: "Divine spellcasters who act as intermediaries between the mortal world and the gods, wielding sacred magic to heal, protect, and smite. They choose a Divine Domain as their subclass.",
    tags: ["Divine Caster", "Healer", "Support", "Versatile"],
    source: "Player's Handbook"
  },
  "Life Domain": {
    name: "Life Domain",
    category: "Divine Domain (Cleric Subclass)",
    summary: "A Divine Domain for Clerics focused on healing and restoration, enhancing healing spells and granting heavy armor proficiency. Embodies vitality and preservation of life.",
    additionalDetails: { "Key Features": "Bonus Proficiency (Heavy Armor); Disciple of Life; Channel Divinity: Preserve Life; Blessed Healer; Divine Strike; Supreme Healing" },
    tags: ["Healing Specialist", "Support", "Durable"],
    source: "Player's Handbook"
  },
  "Light Domain": {
    name: "Light Domain",
    category: "Divine Domain (Cleric Subclass)",
    summary: "A Divine Domain for Clerics who wield divine light and fire, excelling at dealing radiant/fire damage and dispelling darkness. They are beacons against shadow.",
    additionalDetails: { "Key Features": "Bonus Cantrip (Light); Warding Flare; Channel Divinity: Radiance of the Dawn; Improved Flare; Potent Spellcasting; Corona of Light" },
    tags: ["Radiant Damage", "Fire Damage", "Offensive Caster", "Debuff (Blinding)"],
    source: "Player's Handbook"
  },
  "War Domain": {
    name: "War Domain",
    category: "Divine Domain (Cleric Subclass)",
    summary: "A Divine Domain for Clerics who are martial leaders, gaining proficiencies with martial weapons and heavy armor, and features that enhance combat prowess. They are champions of their deity in battle.",
    additionalDetails: { "Key Features": "Bonus Proficiencies (Martial Weapons, Heavy Armor); War Priest; Channel Divinity: Guided Strike; Channel Divinity: War God's Blessing; Divine Strike; Avatar of Battle" },
    tags: ["Martial Caster", "Melee Combat", "Buff", "Heavy Armor"],
    source: "Player's Handbook"
  },
  "Knowledge Domain": {
    name: "Knowledge Domain",
    category: "Divine Domain (Cleric Subclass)",
    summary: "A Divine Domain for Clerics who seek truth and understanding, gaining expertise in skills and access to divination magic. They are divine archivists and seekers of lore.",
    additionalDetails: { "Key Features": "Blessings of Knowledge (Skill Expertise); Channel Divinity: Knowledge of the Ages; Channel Divinity: Read Thoughts; Potent Spellcasting; Visions of the Past" },
    tags: ["Skill Expert", "Divination", "Utility", "Information Gathering"],
    source: "Player's Handbook"
  },
  // Wizard Subclasses
  "Wizard": {
    name: "Wizard",
    category: "Class",
    summary: "Scholarly magic-users who master arcane spells through rigorous study and manipulation of cosmic energies. Wizards are defined by their spellbook and their chosen Arcane Tradition.",
    tags: ["Arcane Caster", "Controller", "Utility", "Versatile Spell List"],
    source: "Player's Handbook"
  },
  "School of Abjuration": {
    name: "School of Abjuration",
    category: "Arcane Tradition (Wizard Subclass)",
    summary: "An Arcane Tradition focused on protective magic, wards (Arcane Ward), and dispelling harmful effects. Abjurers are masters of defense and magical nullification.",
    additionalDetails: { "Key Features": "Abjuration Savant; Arcane Ward; Projected Ward; Improved Abjuration; Spell Resistance" },
    tags: ["Defense", "Protection", "Wards", "Anti-Magic"],
    source: "Player's Handbook"
  },
  "School of Evocation": {
    name: "School of Evocation",
    category: "Arcane Tradition (Wizard Subclass)",
    summary: "An Arcane Tradition focused on manipulating raw magical energy to create powerful destructive effects, such as fireballs and lightning bolts. Evokers can sculpt their spells to protect allies.",
    additionalDetails: { "Key Features": "Evocation Savant; Sculpt Spells; Potent Cantrip; Empowered Evocation; Overchannel" },
    tags: ["Damage Dealing", "AoE Specialist", "Elemental Magic"],
    source: "Player's Handbook"
  },
  // Paladin Subclasses
  "Paladin": {
    name: "Paladin",
    category: "Class",
    summary: "Holy warriors bound by a sacred oath, combining martial prowess with divine magic to smite evil, protect the innocent, and uphold their convictions. They choose a Sacred Oath as their subclass.",
    tags: ["Divine Warrior", "Martial Caster", "Auras", "Smites"],
    source: "Player's Handbook"
  },
  "Oath of Devotion": {
    name: "Oath of Devotion",
    category: "Sacred Oath (Paladin Subclass)",
    summary: "The archetypal knight in shining armor, upholding justice, righteousness, and order. Their tenets emphasize honesty, courage, compassion, honor, and duty.",
    additionalDetails: { "Key Features": "Channel Divinity: Sacred Weapon; Channel Divinity: Turn the Unholy; Aura of Devotion; Purity of Spirit; Holy Nimbus" },
    tags: ["Good Aligned", "Protection", "Righteousness", "Anti-Fiend/Undead"],
    source: "Player's Handbook"
  },
  "Oath of the Ancients": {
    name: "Oath of the Ancients",
    category: "Sacred Oath (Paladin Subclass)",
    summary: "Guardians of light and life, preserving the beauty of the natural world and the joy of existence. Their tenets focus on kindling and sheltering light, and being a beacon of hope.",
    additionalDetails: { "Key Features": "Channel Divinity: Nature's Wrath; Channel Divinity: Turn the Faithless; Aura of Warding; Undying Sentinel; Elder Champion" },
    tags: ["Nature", "Fey", "Light", "Protection (Magic)", "Resilience"],
    source: "Player's Handbook"
  },
  "Oath of Vengeance": {
    name: "Oath of Vengeance",
    category: "Sacred Oath (Paladin Subclass)",
    summary: "Relentless avengers who punish transgressors and deliver justice to the wicked by any means necessary. Their tenets include fighting greater evils and showing no mercy to the wicked.",
    additionalDetails: { "Key Features": "Channel Divinity: Abjure Enemy; Channel Divinity: Vow of Enmity; Relentless Avenger; Soul of Vengeance; Avenging Angel" },
    tags: ["Offensive", "Single-Target Focus", "Hunter", "Retribution"],
    source: "Player's Handbook"
  },
  "Oath of Conquest": {
    name: "Oath of Conquest",
    category: "Sacred Oath (Paladin Subclass)",
    summary: "Warriors of iron will who seek to crush chaos, douse the flames of hope in their enemies, and rule with absolute authority. Their tenets emphasize strength and control.",
    additionalDetails: { "Key Features": "Channel Divinity: Conquering Presence; Channel Divinity: Guided Strike; Aura of Conquest; Scornful Rebuke; Invincible Conqueror" },
    tags: ["Control", "Fear Effects", "Authoritarian", "Debuff"],
    source: "Xanathar's Guide to Everything"
  },
  // Fighter Subclasses
  "Fighter": {
    name: "Fighter",
    category: "Class",
    summary: "Masters of martial combat, Fighters are versatile warriors proficient with all weapons and armor. They gain numerous attacks and ability score improvements, and choose a Martial Archetype as their subclass.",
    tags: ["Martial", "Weapon Specialist", "Durable", "Versatile Combatant"],
    source: "Player's Handbook (2024)"
  },
  "Battle Master": {
    name: "Battle Master",
    category: "Martial Archetype (Fighter Subclass)",
    summary: "A tactical warrior who uses special combat maneuvers fueled by superiority dice to control the battlefield, enhance attacks, and protect allies. Known for their versatility and strategic depth.",
    additionalDetails: { "KeyFeatures": "Combat Superiority (Maneuvers, Superiority Dice), Student of War, Know Your Enemy, Improved Combat Superiority, Relentless" },
    tags: ["Tactical", "Control", "Maneuvers", "Versatile"],
    source: "Player's Handbook (2024)"
  },
  "Champion": {
    name: "Champion",
    category: "Martial Archetype (Fighter Subclass)",
    summary: "A straightforward and powerful warrior who excels at critical hits and raw physical prowess. Champions are resilient and embody athletic perfection.",
    additionalDetails: { "KeyFeatures": "Improved Critical, Remarkable Athlete, Additional Fighting Style, Superior Critical, Survivor" },
    tags: ["Simple", "Critical Hits", "Durable", "Athletic"],
    source: "Player's Handbook (2024)"
  },
  "Eldritch Knight": {
    name: "Eldritch Knight",
    category: "Martial Archetype (Fighter Subclass)",
    summary: "A fighter who blends martial skill with arcane magic, primarily from the Wizard's schools of Abjuration and Evocation. They can bond with weapons and enhance attacks with spells.",
    additionalDetails: { "KeyFeatures": "Spellcasting (Wizard list, Int-based), Weapon Bond, War Magic, Eldritch Strike, Arcane Charge, Improved War Magic" },
    tags: ["Gish", "Arcane Magic", "Weapon Magic", "Versatile"],
    source: "Player's Handbook (2024)"
  },
  // Bard Subclasses
  "Bard": {
    name: "Bard",
    category: "Class",
    summary: "Versatile spellcasters and masters of inspiration, Bards use their artistic talents and magical abilities to influence the world. They choose a Bard College as their subclass.",
    tags: ["Charisma Caster", "Support", "Utility", "Skills", "Inspiration"],
    source: "Player's Handbook (2024)"
  },
  "College of Lore": {
    name: "College of Lore",
    category: "Bard College (Subclass)",
    summary: "Bards of the College of Lore are knowledgeable individuals who use their intellect and skills to support allies and debuff enemies with Cutting Words. They gain Additional Magical Secrets early.",
    additionalDetails: { "Key Features": "Bonus Proficiencies, Cutting Words, Additional Magical Secrets, Peerless Skill" },
    tags: ["Skill Expert", "Support", "Debuff", "Spell Versatility"],
    source: "Player's Handbook (2024)"
  },
  "College of Valor": {
    name: "College of Valor",
    category: "Bard College (Subclass)",
    summary: "Bards of the College of Valor are martial skalds who inspire heroism in combat and are capable warriors themselves, gaining armor, weapon, and shield proficiencies, and eventually an Extra Attack.",
    additionalDetails: { "Key Features": "Bonus Proficiencies (Medium Armor, Shields, Martial Weapons), Combat Inspiration, Extra Attack, Battle Magic" },
    tags: ["Martial Caster", "Combat Support", "Melee/Ranged", "Durable"],
    source: "Player's Handbook (2024)"
  },
  "College of Swords": {
    name: "College of Swords",
    category: "Bard College (Subclass)",
    summary: "Dashing duelists who blend swordplay with performance, using Blade Flourishes to enhance their attacks and gain tactical advantages. They gain medium armor proficiency and a Fighting Style.",
    additionalDetails: { "Key Features": "Bonus Proficiencies (Medium Armor, Scimitar), Fighting Style (Dueling or Two-Weapon Fighting), Blade Flourish, Extra Attack, Master's Flourish" },
    tags: ["Martial Caster", "Duelist", "Mobile", "Offensive"],
    source: "Xanathar's Guide to Everything / Tasha's Cauldron of Everything (Likely in 2024 PHB)"
  },
  "College of Eloquence": {
    name: "College of Eloquence",
    category: "Bard College (Subclass)",
    summary: "Masters of oratory, these Bards use their persuasive power to sway opinions and make their spells harder to resist. They excel in social situations and at debuffing enemy saves.",
    additionalDetails: { "Key Features": "Silver Tongue, Unsettling Words, Unfailing Inspiration, Universal Speech, Infectious Inspiration" },
    tags: ["Social Expert", "Debuff", "Persuasion", "Spell Save DC Manipulation"],
    source: "Tasha's Cauldron of Everything (Likely in 2024 PHB)"
  },
  // Rogue Subclasses
  "Rogue": {
    name: "Rogue",
    category: "Class",
    summary: "Masters of stealth, skill, and subterfuge, Rogues use cunning and precision to overcome obstacles and eliminate foes. They choose a Roguish Archetype as their subclass.",
    tags: ["Stealth", "Skills", "Precision Damage", "Utility"],
    source: "Player's Handbook (2024)"
  },
  "Thief": {
    name: "Thief",
    category: "Roguish Archetype (Subclass)",
    summary: "A classic rogue focused on larceny, infiltration, and nimble item interaction. Excels at speed, climbing, and using objects as a bonus action.",
    additionalDetails: { "Key Features": "Fast Hands, Second-Story Work, Supreme Sneak, Use Magic Device, Thief's Reflexes" },
    tags: ["Stealth", "Mobility", "Item Interaction", "Utility"],
    source: "Player's Handbook (2024)"
  },
  "Assassin": {
    name: "Assassin",
    category: "Roguish Archetype (Subclass)",
    summary: "A deadly specialist in infiltration and elimination, focusing on surprise attacks and potent first strikes. Masters of disguise and silent takedowns.",
    additionalDetails: { "Key Features": "Bonus Proficiencies (Disguise Kit, Poisoner's Kit), Assassinate, Infiltration Expertise, Impostor, Death Strike" },
    tags: ["Stealth", "Burst Damage", "Infiltration", "Surprise Attack"],
    source: "Player's Handbook (2024)"
  },
  "Arcane Trickster": {
    name: "Arcane Trickster",
    category: "Roguish Archetype (Subclass)",
    summary: "A rogue who blends roguish skills with arcane magic, primarily from the illusion and enchantment schools. Uses spells to enhance stealth, trickery, and utility.",
    additionalDetails: { "Key Features": "Spellcasting (Wizard list, Int-based), Mage Hand Legerdemain, Magical Ambush, Versatile Trickster, Spell Thief" },
    tags: ["Spellcasting", "Illusion", "Enchantment", "Utility", "Stealth Magic"],
    source: "Player's Handbook (2024)"
  },
  // Barbarian Subclasses
  "Barbarian": {
    name: "Barbarian",
    category: "Class",
    summary: "Fierce warriors of primal fury, Barbarians channel their rage into devastating attacks and incredible resilience. They choose a Primal Path as their subclass.",
    tags: ["Martial", "Melee Combat", "Rage", "Durable"],
    source: "Player's Handbook (2024)"
  },
  "Path of the Berserker": {
    name: "Path of the Berserker",
    category: "Primal Path (Barbarian Subclass)",
    summary: "Barbarians who embrace pure, unadulterated fury, capable of entering a Frenzy for even greater destructive power, at the cost of exhaustion.",
    additionalDetails: { "Key Features": "Frenzy, Mindless Rage, Intimidating Presence, Retaliation" },
    tags: ["Offensive", "High Damage", "Exhaustion Mechanic"],
    source: "Player's Handbook (2024)"
  },
  "Path of the Totem Warrior": {
    name: "Path of the Totem Warrior",
    category: "Primal Path (Barbarian Subclass)",
    summary: "Barbarians who draw power from animal spirits, gaining abilities that reflect the chosen totem's strengths (e.g., Bear for resilience, Wolf for pack tactics, Eagle for mobility).",
    additionalDetails: { "Key Features": "Spirit Seeker, Totem Spirit (Bear, Eagle, Elk, Tiger, Wolf), Aspect of the Beast, Spirit Walker, Totemic Attunement" },
    tags: ["Versatile", "Animal Spirits", "Defensive", "Supportive", "Mobile"],
    source: "Player's Handbook (2024)"
  },
  // Druid Subclasses
  "Druid": {
    name: "Druid",
    category: "Class",
    summary: "Guardians of the natural world, Druids wield primal magic, can shapeshift into beasts (Wild Shape), and command the elements. They choose a Druid Circle as their subclass.",
    tags: ["Primal Caster", "Shapeshifting", "Nature Magic", "Versatile"],
    source: "Player's Handbook (2024)"
  },
  "Circle of the Land": {
    name: "Circle of the Land",
    category: "Druid Circle (Subclass)",
    summary: "Druids who draw power from specific terrains, gaining additional spells and enhancing their spellcasting abilities. They are keepers of ancient nature lore.",
    additionalDetails: { "Key Features": "Bonus Cantrip, Natural Recovery, Circle Spells (varies by land choice), Land's Stride, Nature's Ward, Nature's Sanctuary" },
    tags: ["Spellcasting Focus", "Versatile Spells", "Area Specialist"],
    source: "Player's Handbook (2024)"
  },
  "Circle of the Moon": {
    name: "Circle of the Moon",
    category: "Druid Circle (Subclass)",
    summary: "Druids who are masters of shapeshifting, able to transform into more powerful combat beasts and even elementals. They are fierce protectors of the wild.",
    additionalDetails: { "Key Features": "Combat Wild Shape, Circle Forms, Primal Strike, Elemental Wild Shape, Thousand Forms" },
    tags: ["Shapeshifting Specialist", "Combat Forms", "Tank", "Melee Combat"],
    source: "Player's Handbook (2024)"
  },
  // Monk Subclasses
  "Monk": {
    name: "Monk",
    category: "Class",
    summary: "Masters of martial arts who harness Ki, a mystical energy, to achieve incredible feats of agility, speed, and power. They choose a Monastic Tradition as their subclass.",
    tags: ["Martial Arts", "Ki", "Unarmored", "Mobile"],
    source: "Player's Handbook (2024)"
  },
  "Way of the Open Hand": {
    name: "Way of the Open Hand",
    category: "Monastic Tradition (Monk Subclass)",
    summary: "Monks who master the art of manipulating an opponent's ki, using specialized strikes to control and debilitate foes in combat.",
    additionalDetails: { "Key Features": "Open Hand Technique, Wholeness of Body, Tranquility, Quivering Palm" },
    tags: ["Control", "Debuff", "Melee Combat", "Ki Manipulation"],
    source: "Player's Handbook (2024)"
  },
  "Way of Shadow": {
    name: "Way of Shadow",
    category: "Monastic Tradition (Monk Subclass)",
    summary: "Monks who embrace stealth and subterfuge, using ki to manipulate shadows, teleport, and strike unseen.",
    additionalDetails: { "Key Features": "Shadow Arts, Shadow Step, Cloak of Shadows, Opportunist" },
    tags: ["Stealth", "Infiltration", "Shadow Magic", "Mobility"],
    source: "Player's Handbook (2024)"
  },
  // Sorcerer Subclasses
  "Sorcerer": {
    name: "Sorcerer",
    category: "Class",
    summary: "Innate spellcasters who draw power from a magical birthright or otherworldly influence. Sorcerers use Charisma for their spells and can manipulate them with Metamagic. They choose a Sorcerous Origin as their subclass.",
    tags: ["Arcane Caster", "Charisma Caster", "Metamagic", "Innate Magic"],
    source: "Player's Handbook (2024)"
  },
  "Draconic Bloodline": {
    name: "Draconic Bloodline",
    category: "Sorcerous Origin (Subclass)",
    summary: "Sorcerers whose power stems from a draconic ancestor, granting them resilience, elemental affinity, and eventually wings.",
    additionalDetails: { "Key Features": "Dragon Ancestor, Draconic Resilience, Elemental Affinity, Dragon Wings, Draconic Presence" },
    tags: ["Draconic", "Elemental Magic", "Durable", "Flight"],
    source: "Player's Handbook (2024)"
  },
  "Wild Magic": {
    name: "Wild Magic",
    category: "Sorcerous Origin (Subclass)",
    summary: "Sorcerers whose magic is tied to the forces of chaos, leading to unpredictable Wild Magic Surges but also the ability to manipulate luck.",
    additionalDetails: { "Key Features": "Wild Magic Surge, Tides of Chaos, Bend Luck, Controlled Chaos, Spell Bombardment" },
    tags: ["Chaos Magic", "Random Effects", "Luck Manipulation"],
    source: "Player's Handbook (2024)"
  },
  // Ranger Subclasses
  "Ranger": {
    name: "Ranger",
    category: "Class",
    summary: "Warriors of the wilderness, skilled in tracking, survival, and martial combat, often blending these skills with nature-based magic. They choose a Ranger Conclave as their subclass.",
    tags: ["Martial", "Nature Magic", "Explorer", "Tracker"],
    source: "Player's Handbook (2024)"
  },
  "Hunter": {
    name: "Hunter",
    category: "Ranger Conclave (Subclass)",
    summary: "Rangers who specialize in fighting specific types of threats, choosing techniques to counter hordes, single powerful foes, or giant creatures. They are adaptable monster slayers.",
    additionalDetails: { "Key Features": "Hunter's Prey (Colossus Slayer, Giant Killer, Horde Breaker), Defensive Tactics, Multiattack, Superior Hunter's Defense" },
    tags: ["Combat Specialist", "Monster Slayer", "Versatile Offense", "Defense Options"],
    source: "Player's Handbook (2024)"
  },
  "Beast Master": {
    name: "Beast Master",
    category: "Ranger Conclave (Subclass)",
    summary: "Rangers who form a close bond with an animal companion, fighting alongside it as a team. The Primal Companion rules from Tasha's Cauldron of Everything are often used for a more viable companion.",
    additionalDetails: { "Key Features": "Primal Companion (Beast of Land/Sea/Sky), Exceptional Training, Bestial Fury, Share Spells" },
    tags: ["Animal Companion", "Teamwork", "Pet Class"],
    source: "Player's Handbook (2024) / Tasha's Cauldron of Everything"
  },
  // Warlock Subclasses
  "Warlock": {
    name: "Warlock",
    category: "Class",
    summary: "Spellcasters who gain power through pacts with otherworldly entities. Warlocks use Pact Magic, Eldritch Invocations, and choose an Otherworldly Patron as their subclass.",
    tags: ["Arcane Caster", "Charisma Caster", "Pact Magic", "Eldritch Invocations"],
    source: "Player's Handbook (2024)"
  },
  "Otherworldly Patron": {
    name: "Otherworldly Patron",
    category: "Warlock Subclass Type",
    summary: "The general term for a Warlock's subclass, representing the powerful entity with whom they have forged a pact.",
    tags: ["Subclass Category"],
    source: "Warlock Class"
  },
  "The Archfey": {
    name: "The Archfey",
    category: "Otherworldly Patron (Warlock Subclass)",
    summary: "A Warlock whose patron is a powerful fey lord or lady, granting abilities related to charm, illusion, and fey trickery.",
    additionalDetails: { "Key Features": "Fey Presence, Misty Escape, Beguiling Defenses, Dark Delirium" },
    tags: ["Fey", "Charm", "Illusion", "Teleportation"],
    source: "Player's Handbook (2024)"
  },
  "The Fiend": {
    name: "The Fiend",
    category: "Otherworldly Patron (Warlock Subclass)",
    summary: "A Warlock who has made a pact with a fiend from the lower planes, gaining powers related to fire, darkness, and resilience fueled by destruction.",
    additionalDetails: { "Key Features": "Dark One's Blessing, Dark One's Own Luck, Fiendish Resilience, Hurl Through Hell" },
    tags: ["Fiendish", "Fire", "Darkness", "Temporary HP", "Damage Resistance"],
    source: "Player's Handbook (2024)"
  },
  "The Great Old One": {
    name: "The Great Old One",
    category: "Otherworldly Patron (Warlock Subclass)",
    summary: "A Warlock whose patron is an alien entity from the Far Realm or an ancient, incomprehensible being, granting psychic and mind-altering abilities.",
    additionalDetails: { "Key Features": "Awakened Mind, Entropic Ward, Thought Shield, Create Thrall" },
    tags: ["Psychic", "Telepathy", "Mental Control", "Alien"],
    source: "Player's Handbook (2024)"
  }
};
