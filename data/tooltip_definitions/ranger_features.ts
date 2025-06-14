
// data/tooltip_definitions/ranger_features.ts
import { StructuredTooltipData } from '../../types';

export const rangerFeaturesTooltips: Record<string, StructuredTooltipData> = {
  "Favored Enemy": {
    name: "Favored Enemy",
    category: "Class Feature (Ranger)",
    summary: "Choose a type of favored enemy (e.g., beasts, humanoids). Gain advantage on Survival checks to track them and Intelligence checks to recall info about them. Learn one language spoken by them. Tasha's Cauldron of Everything offers 'Favored Foe' as an alternative.",
    level: 1,
    effects: ["Advantage on Survival checks to track favored enemies.", "Advantage on Intelligence checks to recall info about them.", "Learn one language spoken by favored enemies."],
    rules: ["Choose enemy type from list or two humanoid races."],
    tags: ["Utility", "Exploration", "Roleplaying"],
    source: "Player's Handbook (Ranger)"
  },
  "Favored Foe": {
    name: "Favored Foe",
    category: "Optional Class Feature (Ranger - TCoE)",
    summary: "As a bonus action, mark a creature as your favored foe (concentration, 1 min). First weapon hit each turn deals extra damage (1d4, scaling to 1d6 at L6, 1d8 at L14). Uses = proficiency bonus per long rest.",
    level: 1,
    castingTime: "1 Bonus Action",
    duration: "Concentration, up to 1 minute",
    damage: [{ dice: "1d4 (scales to 1d6, 1d8)", type: "Same as weapon", notes: "extra damage on first hit per turn" }],
    recharge: "Long Rest (for uses)",
    rules: ["Uses: Proficiency Bonus times per long rest."],
    tags: ["Damage Bonus", "Combat", "Concentration", "Bonus Action"],
    source: "Tasha's Cauldron of Everything (Ranger)"
  },
  "Natural Explorer": {
    name: "Natural Explorer",
    category: "Class Feature (Ranger)",
    summary: "Choose a favored terrain (e.g., forest, mountain). Gain benefits while traveling for an hour or more in that terrain, such as doubled proficiency for related Int/Wis checks, group not slowed by difficult terrain, cannot get lost non-magically. Tasha's Cauldron of Everything offers 'Deft Explorer' as an alternative.",
    level: 1,
    effects: ["Double proficiency bonus for Int/Wis checks related to favored terrain.", "Group not slowed by difficult terrain in favored terrain.", "Group can't become lost (non-magical) in favored terrain.", "Remain alert while doing other travel activities.", "Move stealthily at normal pace (if alone).", "Find double food when foraging.", "Learn more details when tracking."],
    tags: ["Utility", "Exploration", "Survival"],
    source: "Player's Handbook (Ranger)"
  },
  "Deft Explorer": {
    name: "Deft Explorer",
    category: "Optional Class Feature (Ranger - TCoE)",
    summary: "Choose one benefit: Canny (expertise in one skill, two languages), Roving (+5ft speed, climb/swim speed equal to walking speed), or Tireless (temp HP = 1d8+Wis mod times PB/long rest; reduce exhaustion by 1 on short rest PB/long rest). Gain another choice at L6 and L10.",
    level: "1 (choose 1), 6 (choose another), 10 (choose another)",
    effects: [
      "Canny: Expertise in one skill; learn two languages.",
      "Roving: +5 feet to speed; gain climb and swim speed equal to walking speed.",
      "Tireless: Gain temporary HP (1d8 + Wis mod) PB/long rest after finishing short/long rest; reduce one level of exhaustion on short rest PB/long rest."
    ],
    tags: ["Utility", "Skill Enhancement", "Mobility", "Survivability"],
    source: "Tasha's Cauldron of Everything (Ranger)"
  },
  "Fighting Style (Ranger options)": {
    name: "Fighting Style (Ranger)",
    category: "Class Feature (Ranger)",
    summary: "At 2nd level, adopt a fighting style. Ranger options typically include Archery, Defense, Dueling, Two-Weapon Fighting.",
    level: 2,
    effects: ["Archery: +2 to attack rolls with ranged weapons.", "Defense: +1 AC while wearing armor.", "Dueling: +2 damage with one-handed melee weapon when no other weapon in hand.", "Two-Weapon Fighting: Add ability mod to off-hand attack damage."],
    tags: ["Combat", "Customization"],
    source: "Ranger Class"
  },
  "Ranger Conclave": {
    name: "Ranger Conclave",
    category: "Class Feature (Ranger Subclass)",
    summary: "A Ranger's subclass, chosen at 3rd level, representing their specialized approach to their duties (e.g., Hunter, Beast Master).",
    level: 3,
    source: "Ranger Class"
  },
  "Primeval Awareness": {
    name: "Primeval Awareness",
    category: "Class Feature (Ranger)",
    summary: "Expend a ranger spell slot to sense if aberrations, celestials, dragons, elementals, fey, fiends, or undead are within 1 mile (6 miles in favored terrain) for 1 min per spell slot level. Doesn't reveal location or number.",
    level: 3,
    castingTime: "1 Action",
    duration: "1 minute per spell slot level expended",
    effects: ["Sense presence of specified creature types within range."],
    tags: ["Utility", "Detection", "Exploration"],
    source: "Ranger Class"
  },
  "Land's Stride": {
    name: "Land's Stride",
    category: "Class Feature (Ranger)",
    summary: "Moving through nonmagical difficult terrain costs no extra movement. Can pass through nonmagical plants without being slowed or taking damage. Advantage on saves vs magically created/manipulated plants that impede movement.",
    level: 8,
    effects: ["Ignore nonmagical difficult terrain.", "Pass through nonmagical plants unharmed/unslowed.", "Advantage on saves vs magical plant impediments."],
    tags: ["Mobility", "Exploration", "Defense"],
    source: "Ranger Class"
  },
  "Hide in Plain Sight": {
    name: "Hide in Plain Sight",
    category: "Class Feature (Ranger)",
    summary: "Spend 1 minute creating camouflage to hide by pressing against a solid surface. Gain +10 to Stealth checks while remaining there without moving/acting. Tasha's offers 'Nature's Veil' as an alternative.",
    level: 10,
    castingTime: "1 minute (to set up)",
    effects: ["+10 to Dexterity (Stealth) checks when camouflaged and immobile."],
    tags: ["Stealth", "Utility"],
    source: "Player's Handbook (Ranger)"
  },
  "Nature's Veil": {
    name: "Nature's Veil",
    category: "Optional Class Feature (Ranger - TCoE)",
    summary: "As a bonus action, magically become invisible until the start of your next turn. Uses = proficiency bonus per long rest.",
    level: 10,
    castingTime: "1 Bonus Action",
    duration: "Until start of your next turn",
    effects: ["Become invisible."],
    recharge: "Long Rest (for uses)",
    rules: ["Uses: Proficiency Bonus times per long rest."],
    tags: ["Stealth", "Utility", "Bonus Action", "Invisibility"],
    source: "Tasha's Cauldron of Everything (Ranger)"
  },
  "Vanish": {
    name: "Vanish",
    category: "Class Feature (Ranger)",
    summary: "Can use the Hide action as a bonus action. Can’t be tracked by nonmagical means unless you choose to leave a trail.",
    level: 14,
    effects: ["Hide as a bonus action.", "Cannot be tracked non-magically (unless willing)."],
    tags: ["Stealth", "Utility", "Action Economy", "Bonus Action"],
    source: "Ranger Class"
  },
  "Feral Senses": {
    name: "Feral Senses",
    category: "Class Feature (Ranger)",
    summary: "When attacking a creature you can’t see, your inability to see it doesn’t impose disadvantage. Aware of invisible creatures within 30ft if not hidden from you and you aren't blinded/deafened.",
    level: 18,
    range: "30 feet (for invisible creature detection)",
    effects: ["No disadvantage on attacks vs unseen creatures.", "Detect invisible creatures within 30ft (if not hidden & you can perceive)."],
    tags: ["Perception", "Combat", "Anti-Invisibility"],
    source: "Ranger Class"
  },
  "Foe Slayer": {
    name: "Foe Slayer",
    category: "Class Feature (Ranger)",
    summary: "Once per turn, add Wisdom modifier to the attack roll or damage roll of an attack against one of your favored enemies (or any creature if using Favored Foe). Can use before or after roll, but before effects.",
    level: 20,
    effects: ["Add Wisdom modifier to one attack or damage roll per turn against favored enemy/foe."],
    tags: ["Offense", "Damage Bonus", "Accuracy Bonus", "Capstone"],
    source: "Ranger Class"
  },
  "Hunter's Prey": {
    name: "Hunter's Prey",
    category: "Class Feature (Hunter Ranger)",
    summary: "At 3rd level, choose one: Colossus Slayer (1d8 extra damage once per turn if target is below HP max), Giant Killer (reaction attack if Large+ creature within 5ft misses you), or Horde Breaker (attack another creature within 5ft of original target once per turn).",
    level: 3,
    effects: [
      "Colossus Slayer: Once per turn, 1d8 extra damage if target is below its HP max.",
      "Giant Killer: Reaction attack if Large+ creature misses you with melee attack.",
      "Horde Breaker: Once per turn, after attacking a creature, make another attack against a different creature within 5 feet of the original and in range."
    ],
    tags: ["Offense", "Combat Option"],
    source: "Hunter (Ranger Conclave)"
  },
  "Primal Companion": {
    name: "Primal Companion",
    category: "Class Feature (Beast Master Ranger - TCoE)",
    summary: "Magically summon a primal beast (Beast of Land, Sea, or Sky). It acts on your initiative, can be commanded to move (no action), or take an action (Attack, Dash, etc.) using your action. Scales with your proficiency bonus.",
    level: 3,
    effects: ["Summons a scaling beast companion.", "Companion has its own stat block based on chosen form.", "Commanded using Ranger's action or bonus action (with Exceptional Training)."],
    tags: ["Summoning", "Pet", "Combat"],
    source: "Beast Master (Ranger Conclave - TCoE)"
  }
};
