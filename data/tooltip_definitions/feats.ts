
// data/tooltip_definitions/feats.ts
import { StructuredTooltipData } from '../../types';

export const featsTooltips: Record<string, StructuredTooltipData> = {
  // Foundational
  "Feat": {
    name: "Feat",
    category: "Game Mechanic",
    summary: "A special ability that gives a character new capabilities or improves existing ones. Characters can typically choose a feat instead of an Ability Score Improvement at certain levels.",
    rules: ["Can be chosen instead of an Ability Score Improvement (ASI) at levels where ASIs are granted."],
    source: "Player's Handbook (2024)"
  },
  "Ability Score Improvement": {
    name: "Ability Score Improvement (ASI)",
    category: "Class Feature / Game Mechanic",
    summary: "An opportunity at certain character levels to increase ability scores or take a Feat instead. Typically increases one score by +2 or two scores by +1.",
    rules: [
      "Offered at specific class levels (e.g., 4th, 8th, 12th, 16th, 19th for most classes).",
      "Can increase one ability score by 2, or two ability scores by 1 each.",
      "An ability score cannot exceed 20 using ASI (unless specified otherwise).",
      "Alternatively, a character can choose to take a Feat."
    ],
    source: "Player's Handbook (2024)"
  },

  // PHB Core Feats (Likely in 2024 PHB)
  "Actor": {
    name: "Actor",
    category: "Feat",
    summary: "Grants +1 to Charisma, advantage on Deception and Performance checks when trying to pass yourself off as a different person, and the ability to mimic others' speech or sounds.",
    prerequisites: "Charisma 13 or higher",
    effects: [
      "Increase your Charisma score by 1, to a maximum of 20.",
      "You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person.",
      "You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked."
    ],
    additionalDetails: { 
      "charismaIncrease": "1", 
      "advantageOnDeceptionPerformanceAsOther": "true", 
      "mimicryAbility": "true" 
    },
    tags: ["Social Interaction", "Charisma Based", "Utility", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Alert": {
    name: "Alert",
    category: "Feat",
    summary: "Provides +5 to initiative, prevents surprise while conscious, and negates advantage for hidden attackers.",
    prerequisites: "None",
    effects: [
      "You gain a +5 bonus to initiative.",
      "You can’t be surprised while you are conscious.",
      "Other creatures don’t gain advantage on attack rolls against you as a result of being unseen by you."
    ],
    additionalDetails: { 
      "initiativeBonus": "5", 
      "surpriseImmunity": "true", 
      "negateUnseenAttackerAdvantage": "true" 
    },
    tags: ["Initiative", "Surprise Immunity", "Defense", "Combat", "Utility", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Athlete": {
    name: "Athlete",
    category: "Feat",
    summary: "Grants +1 to Strength or Dexterity, makes standing up from prone use less movement, and improves climbing and jumping.",
    prerequisites: "None",
    effects: [
      "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
      "When you are prone, standing up uses only 5 feet of your movement.",
      "Climbing doesn’t halve your speed.",
      "You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."
    ],
    additionalDetails: { 
      "strengthOrDexterityIncrease": "1", 
      "proneStandUpMovement": "5 feet", 
      "climbingNoSpeedPenalty": "true", 
      "runningJumpRequirement": "5 feet" 
    },
    tags: ["Mobility", "Strength Based", "Dexterity Based", "Utility", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Charger": {
    name: "Charger",
    category: "Feat",
    summary: "Allows you to make a melee attack or shove as a bonus action after Dashing, potentially with added effect if you moved 10 feet in a straight line.",
    prerequisites: "None",
    effects: [
      "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature.",
      "If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
    ],
    additionalDetails: {
      "dashBonusActionAttack": "true",
      "dashBonusActionShove": "true",
      "straightLineMovementRequirement": "10 feet",
      "bonusActionDamageBonus": "5",
      "bonusActionShoveDistance": "10 feet"
    },
    tags: ["Combat", "Mobility", "Offense"],
    source: "Player's Handbook (2024)"
  },
  "Crossbow Expert": {
    name: "Crossbow Expert",
    category: "Feat",
    summary: "Negates loading quality for crossbows you're proficient with, removes disadvantage for ranged attacks in melee, and allows a bonus action hand crossbow attack after attacking with a one-handed weapon.",
    prerequisites: "None",
    effects: [
      "You ignore the loading quality of crossbows with which you are proficient.",
      "Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls.",
      "When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a hand crossbow you are holding."
    ],
    additionalDetails: { 
      "ignoreLoadingCrossbows": "true", 
      "noMeleeRangedDisadvantage": "true", 
      "bonusActionHandCrossbowAttack": "true" 
    },
    tags: ["Combat", "Ranged Combat", "Crossbow", "Action Economy", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Defensive Duelist": {
    name: "Defensive Duelist",
    category: "Feat",
    summary: "Allows using a reaction to add proficiency bonus to AC against one melee attack, if wielding a finesse weapon and hit.",
    prerequisites: "Dexterity 13 or higher",
    effects: [
      "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
    ],
    additionalDetails: { 
      "reactionAcBonus": "proficiency bonus", 
      "weaponRequirement": "finesse weapon" 
    },
    tags: ["Combat", "Defense", "Reaction", "Finesse Weapon"],
    source: "Player's Handbook (2024)"
  },
  "Dual Wielder": {
    name: "Dual Wielder",
    category: "Feat",
    summary: "Grants +1 AC while wielding two melee weapons, allows two-weapon fighting even if weapons aren't light, and lets you draw/stow two one-handed weapons when you'd normally draw/stow one.",
    prerequisites: "None",
    effects: [
      "You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
      "You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren’t light.",
      "You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one."
    ],
    additionalDetails: { 
      "acBonusWhileDualWielding": "1", 
      "canUseNonLightWeaponsForTwoWeaponFighting": "true", 
      "drawStowTwoWeapons": "true" 
    },
    tags: ["Combat", "Two-Weapon Fighting", "Defense", "Utility"],
    source: "Player's Handbook (2024)"
  },
  "Dungeon Delver": {
    name: "Dungeon Delver",
    category: "Feat",
    summary: "Grants advantage on Perception/Investigation checks for secret doors, advantage on saves vs. traps, resistance to trap damage, and ability to search for traps at normal pace.",
    prerequisites: "None",
    effects: [
      "You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors.",
      "You have advantage on saving throws made to avoid or resist traps.",
      "You have resistance to the damage dealt by traps.",
      "Traveling at a fast pace doesn’t impose the normal -5 penalty on your passive Wisdom (Perception) score."
    ],
    additionalDetails: { 
      "advantageOnSecretDoorChecks": "true", 
      "advantageOnTrapSaves": "true", 
      "resistanceToTrapDamage": "true", 
      "fastPaceNoPerceptionPenalty": "true" 
    },
    tags: ["Exploration", "Utility", "Defense (Traps)"],
    source: "Player's Handbook (2024)"
  },
  "Durable": {
    name: "Durable",
    category: "Feat",
    summary: "Increases Constitution by 1 and ensures you regain at least twice your Constitution modifier (min 2) in HP when rolling Hit Dice.",
    prerequisites: "None",
    effects: [
      "Increase your Constitution score by 1, to a maximum of 20.",
      "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
    ],
    additionalDetails: { 
      "constitutionIncrease": "1", 
      "minHitDiceRegainFormula": "2 * Constitution modifier (min 2)" 
    },
    tags: ["Survivability", "Healing", "Constitution Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Elemental Adept": {
    name: "Elemental Adept",
    category: "Feat",
    summary: "Choose one damage type (acid, cold, fire, lightning, or thunder). Spells you cast ignore resistance to that damage type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
    prerequisites: "Spellcasting ability",
    effects: [
      "Choose one of the following damage types: acid, cold, fire, lightning, or thunder.",
      "Spells you cast ignore resistance to damage of the chosen type.",
      "In addition, when you roll damage for a spell you cast that deals damage of the chosen type, you can treat any 1 on a damage die as a 2."
    ],
    additionalDetails: { 
      "chosenDamageType": "Acid, Cold, Fire, Lightning, or Thunder", 
      "ignoreResistance": "true", 
      "treatDamageDie1As2": "true" 
    },
    tags: ["Spellcasting", "Damage Dealing", "Elemental Magic"],
    source: "Player's Handbook (2024)"
  },
  "Grappler": {
    name: "Grappler",
    category: "Feat",
    summary: "Grants advantage on attack rolls against creatures you are grappling. Allows using an action to attempt to pin a grappled creature, restraining both.",
    prerequisites: "Strength 13 or higher",
    effects: [
      "You have advantage on attack rolls against a creature you are grappling.",
      "You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends."
    ],
    additionalDetails: { 
      "advantageOnAttacksVsGrappled": "true", 
      "pinActionRestrains": "true" 
    },
    tags: ["Combat", "Grappling", "Control", "Strength Based"],
    source: "Player's Handbook (2024)"
  },
  "Great Weapon Master": {
    name: "Great Weapon Master",
    category: "Feat",
    summary: "Allows a -5 penalty to attack for +10 damage with heavy weapons. Grants a bonus action attack on a critical hit or when reducing a creature to 0 HP with a melee weapon.",
    prerequisites: "None",
    effects: [
      "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
      "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
    ],
    additionalDetails: { 
      "bonusActionAttackOnCritOrKill": "true", 
      "powerAttackPenalty": "-5", 
      "powerAttackDamageBonus": "10",
      "weaponRequirement": "heavy weapon"
    },
    tags: ["Combat", "Offense", "Damage Dealing", "Heavy Weapon", "Action Economy", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Healer": {
    name: "Healer",
    category: "Feat",
    summary: "Allows using a healer's kit to stabilize creatures at 1 HP instead of 0, and to restore 1d6 + 4 + target's Hit Dice HP as an action (once per creature per short/long rest).",
    prerequisites: "None",
    effects: [
      "When you use a healer’s kit to stabilize a dying creature, that creature also regains 1 hit point.",
      "As an action, you can spend one use of a healer’s kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature’s maximum number of Hit Dice. The creature can’t regain hit points from this feat again until it finishes a short or long rest."
    ],
    additionalDetails: { 
      "stabilizeAt1HP": "true", 
      "actionHealAmount": "1d6 + 4 + target's Hit Dice", 
      "actionHealFrequency": "Once per creature per short/long rest" 
    },
    tags: ["Healing", "Support", "Utility"],
    source: "Player's Handbook (2024)"
  },
  "Heavily Armored": {
    name: "Heavily Armored",
    category: "Feat",
    summary: "Increases Strength by 1 and grants proficiency with heavy armor.",
    prerequisites: "Proficiency with medium armor",
    effects: [
      "Increase your Strength score by 1, to a maximum of 20.",
      "You gain proficiency with heavy armor."
    ],
    additionalDetails: { 
      "strengthIncrease": "1", 
      "grantsHeavyArmorProficiency": "true" 
    },
    tags: ["Defense", "Armor Proficiency", "Strength Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Heavy Armor Master": {
    name: "Heavy Armor Master",
    category: "Feat",
    summary: "Increases Strength by 1. While wearing heavy armor, bludgeoning, piercing, and slashing damage from nonmagical attacks is reduced by 3.",
    prerequisites: "Proficiency with heavy armor",
    effects: [
      "Increase your Strength score by 1, to a maximum of 20.",
      "While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical attacks is reduced by 3."
    ],
    additionalDetails: { 
      "strengthIncrease": "1", 
      "nonMagicalDamageReduction": "3",
      "armorRequirement": "heavy armor"
    },
    tags: ["Defense", "Damage Reduction", "Heavy Armor", "Strength Based", "Ability Score Increase", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Inspiring Leader": {
    name: "Inspiring Leader",
    category: "Feat",
    summary: "Spend 10 minutes to grant temporary HP (level + Cha mod) to self and up to six friendly creatures. Recharges on short/long rest.",
    prerequisites: "Charisma 13 or higher",
    effects: [
      "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature gains temporary hit points equal to your level + your Charisma modifier. A creature can’t gain temporary hit points from this feat again until it has finished a short or long rest."
    ],
    additionalDetails: { 
      "tempHpFormula": "Level + Charisma modifier", 
      "targets": "Up to 6 friendly creatures", 
      "duration": "Until next short/long rest", 
      "castingTime": "10 minutes" 
    },
    tags: ["Support", "Temporary HP", "Party Buff", "Charisma Based"],
    source: "Player's Handbook (2024)"
  },
  "Keen Mind": {
    name: "Keen Mind",
    category: "Feat",
    summary: "Increases Intelligence by 1. Always know which way is north, know hours left before sunrise/sunset, and accurately recall anything seen/heard in past month.",
    prerequisites: "None",
    effects: [
      "Increase your Intelligence score by 1, to a maximum of 20.",
      "You always know which way is north.",
      "You always know the number of hours left before the next sunrise or sunset.",
      "You can accurately recall anything you have seen or heard within the past month."
    ],
    additionalDetails: { 
      "intelligenceIncrease": "1", 
      "knowsNorth": "true", 
      "knowsSunriseSunsetHours": "true", 
      "perfectRecallDuration": "1 month" 
    },
    tags: ["Utility", "Exploration", "Intelligence Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Lightly Armored": {
    name: "Lightly Armored",
    category: "Feat",
    summary: "Increases Strength or Dexterity by 1 and grants proficiency with light armor.",
    prerequisites: "None",
    effects: [
      "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
      "You gain proficiency with light armor."
    ],
    additionalDetails: { 
      "strengthOrDexterityIncrease": "1", 
      "grantsLightArmorProficiency": "true" 
    },
    tags: ["Defense", "Armor Proficiency", "Strength Based", "Dexterity Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Linguist": {
    name: "Linguist",
    category: "Feat",
    summary: "Increases Intelligence by 1, learn three languages, and create written ciphers.",
    prerequisites: "None",
    effects: [
      "Increase your Intelligence score by 1, to a maximum of 20.",
      "You learn three languages of your choice.",
      "You can ably create written ciphers. Others can’t decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
    ],
    additionalDetails: { 
      "intelligenceIncrease": "1", 
      "languagesLearned": "3", 
      "canCreateCiphers": "true" 
    },
    tags: ["Utility", "Languages", "Intelligence Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Lucky": {
    name: "Lucky",
    category: "Feat",
    summary: "Gain 3 luck points to reroll attack rolls, ability checks, or saving throws, or make an enemy reroll an attack.",
    prerequisites: "None",
    effects: [
      "You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20.",
      "You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw.",
      "You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker’s roll or yours.",
      "If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.",
      "You regain your expended luck points when you finish a long rest."
    ],
    additionalDetails: { 
      "luckPoints": "3", 
      "luckPointUses": "Reroll own attack/check/save, force enemy reroll attack", 
      "recharge": "Long Rest" 
    },
    tags: ["Utility", "Dice Manipulation", "Defense", "Offense", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Mage Slayer": {
    name: "Mage Slayer",
    category: "Feat",
    summary: "When a creature within 5 feet casts a spell, you can use reaction to make melee weapon attack. Advantage on saves vs spells cast by creatures within 5 feet. Spells cast by creatures you hit have disadvantage on concentration saves.",
    prerequisites: "None",
    effects: [
      "When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.",
      "When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.",
      "You have advantage on saving throws against spells cast by creatures within 5 feet of you."
    ],
    additionalDetails: { 
      "reactionAttackOnNearbySpellcast": "true", 
      "advantageOnSavesVsNearbySpells": "true", 
      "imposeDisadvantageOnConcentration": "true" 
    },
    tags: ["Combat", "Anti-Magic", "Defense", "Offense"],
    source: "Player's Handbook (2024)"
  },
  "Magic Initiate": {
    name: "Magic Initiate",
    category: "Feat",
    summary: "Choose a class: Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard. Learn two cantrips and one 1st-level spell from that class's spell list. Cast the 1st-level spell once per long rest without a slot. Use chosen class's spellcasting ability for these.",
    prerequisites: "None",
    effects: [
      "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class’s spell list.",
      "In addition, choose one 1st-level spell from that same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again using this feat.",
      "Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
    ],
    additionalDetails: { 
      "chosenClassOptions": "Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard", 
      "cantripsLearned": "2", 
      "firstLevelSpellsLearned": "1", 
      "firstLevelSpellFreeCasts": "1",
      "freeCastRecharge": "Long Rest"
    },
    tags: ["Spellcasting", "Utility", "Customization", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Martial Adept": {
    name: "Martial Adept",
    category: "Feat",
    summary: "Learn two maneuvers from the Battle Master fighter archetype and gain one superiority die (d6) to fuel them. Recharges on short/long rest.",
    prerequisites: "None",
    effects: [
      "You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver’s effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
      "You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
    ],
    additionalDetails: { 
      "maneuversLearned": "2", 
      "superiorityDiceGained": "1d6", 
      "recharge": "Short or Long Rest" 
    },
    tags: ["Combat", "Utility", "Maneuvers", "Resource"],
    source: "Player's Handbook (2024)"
  },
  "Medium Armor Master": {
    name: "Medium Armor Master",
    category: "Feat",
    summary: "Wearing medium armor doesn't impose disadvantage on Stealth. Dexterity modifier added to AC can be up to +3 instead of +2.",
    prerequisites: "Proficiency with medium armor",
    effects: [
      "Wearing medium armor doesn’t impose disadvantage on your Dexterity (Stealth) checks.",
      "When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."
    ],
    additionalDetails: { 
      "noStealthDisadvantageMediumArmor": "true", 
      "maxDexBonusToAcMediumArmor": "3" 
    },
    tags: ["Defense", "Armor Proficiency", "Stealth", "Dexterity Based"],
    source: "Player's Handbook (2024)"
  },
  "Mobile": {
    name: "Mobile",
    category: "Feat",
    summary: "Increases speed by 10 feet. When you Dash, difficult terrain doesn't cost extra movement. If you make a melee attack against a creature, you don't provoke opportunity attacks from it for the rest of the turn.",
    prerequisites: "None",
    effects: [
      "Your speed increases by 10 feet.",
      "When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn.",
      "When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not."
    ],
    additionalDetails: { 
      "speedIncrease": "10", 
      "dashIgnoreDifficultTerrain": "true", 
      "noOpportunityAttackAfterMelee": "true" 
    },
    tags: ["Mobility", "Combat", "Utility", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Moderately Armored": {
    name: "Moderately Armored",
    category: "Feat",
    summary: "Increases Strength or Dexterity by 1 and grants proficiency with medium armor and shields.",
    prerequisites: "Proficiency with light armor",
    effects: [
      "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
      "You gain proficiency with medium armor and shields."
    ],
    additionalDetails: { 
      "strengthOrDexterityIncrease": "1", 
      "grantsMediumArmorProficiency": "true", 
      "grantsShieldProficiency": "true" 
    },
    tags: ["Defense", "Armor Proficiency", "Shield Proficiency", "Strength Based", "Dexterity Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Mounted Combatant": {
    name: "Mounted Combatant",
    category: "Feat",
    summary: "Advantage on melee attacks vs unmounted creatures smaller than mount. Force attacks targeting mount to target you instead. Mount gains Evasion-like effect.",
    prerequisites: "None",
    effects: [
      "You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.",
      "You can force an attack targeted at your mount to target you instead.",
      "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
    ],
    additionalDetails: { 
      "advantageOnMeleeVsSmallerUnmounted": "true", 
      "canRedirectAttackToSelf": "true", 
      "mountGainsEvasion": "true" 
    },
    tags: ["Combat", "Mounted Combat", "Defense (Mount)", "Offense"],
    source: "Player's Handbook (2024)"
  },
  "Observant": {
    name: "Observant",
    category: "Feat",
    summary: "Increases Intelligence or Wisdom by 1. Allows reading lips if you see speaker. +5 bonus to passive Wisdom (Perception) and passive Intelligence (Investigation) scores.",
    prerequisites: "None",
    effects: [
      "Increase your Intelligence or Wisdom score by 1, to a maximum of 20.",
      "If you can see a creature’s mouth while it is speaking a language you understand, you can interpret what it’s saying by reading its lips.",
      "You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores."
    ],
    additionalDetails: { 
      "intelligenceOrWisdomIncrease": "1", 
      "canReadLips": "true", 
      "passivePerceptionBonus": "5", 
      "passiveInvestigationBonus": "5" 
    },
    tags: ["Utility", "Perception", "Investigation", "Intelligence Based", "Wisdom Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Polearm Master": {
    name: "Polearm Master",
    category: "Feat",
    summary: "Grants a bonus action attack (1d4 bludgeoning) with polearms (glaive, halberd, quarterstaff, spear). Enemies provoke opportunity attacks when they enter your reach with these weapons.",
    prerequisites: "None",
    effects: [
      "When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee attack with the opposite end of the weapon. This attack uses the same ability modifier as the primary attack. The weapon’s damage die for this attack is a d4, and it deals bludgeoning damage.",
      "While you are wielding a glaive, halberd, pike, quarterstaff, or spear, other creatures provoke an opportunity attack from you when they enter the reach you have with that weapon."
    ],
    damage: [{dice: "1d4", type: "Bludgeoning", notes: "Bonus action attack"}],
    additionalDetails: { 
      "bonusActionAttackDie": "1d4", 
      "bonusActionAttackDamageType": "bludgeoning", 
      "opportunityAttackOnEnterReach": "true",
      "compatibleWeaponsBonusAction": "Glaive, Halberd, Quarterstaff, Spear", 
      "compatibleWeaponsOpportunityAttack": "Glaive, Halberd, Pike, Quarterstaff, Spear"
    },
    tags: ["Combat", "Offense", "Control", "Action Economy", "Reach Weapon", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Resilient": {
    name: "Resilient",
    category: "Feat",
    summary: "Increase a chosen ability score by 1 and gain proficiency in saving throws using that ability.",
    prerequisites: "None",
    effects: [
      "Choose one ability score.",
      "Increase the chosen ability score by 1, to a maximum of 20.",
      "You gain proficiency in saving throws using the chosen ability."
    ],
    additionalDetails: { 
      "chosenAbilityScoreIncrease": "1", 
      "grantsSavingThrowProficiency": "Chosen ability score" 
    },
    tags: ["Defense", "Saving Throws", "Customization", "Ability Score Increase", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Ritual Caster": {
    name: "Ritual Caster",
    category: "Feat",
    summary: "Choose a class: Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard. Gain a ritual book with two 1st-level ritual spells from that class. Can add more rituals found later. Use chosen class's spellcasting ability for these.",
    prerequisites: "Intelligence or Wisdom 13 or higher",
    effects: [
      "Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You acquire a ritual book, which contains two 1st-level spells of your choice from the chosen class’s spell list. The spells must have the ritual tag.",
      "If you come across a spell in written form, such as a magical spell scroll or a wizard’s spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell’s level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level.",
      "Your spellcasting ability for these ritual spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
    ],
    additionalDetails: { 
      "chosenClassOptions": "Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard", 
      "initialRitualsLearned": "2", 
      "ritualBook": "true", 
      "canAddMoreRituals": "true" 
    },
    tags: ["Spellcasting", "Utility", "Ritual Magic"],
    source: "Player's Handbook (2024)"
  },
  "Savage Attacker": {
    name: "Savage Attacker",
    category: "Feat",
    summary: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.",
    prerequisites: "None",
    effects: [
      "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon’s damage dice and use either total."
    ],
    additionalDetails: { 
      "rerollMeleeDamageDice": "Once per turn" 
    },
    tags: ["Combat", "Offense", "Damage Dealing"],
    source: "Player's Handbook (2024)"
  },
  "Sentinel": {
    name: "Sentinel",
    category: "Feat",
    summary: "Opportunity attacks stop movement. Enemies provoke even if they Disengage. Attack as a reaction if an enemy near you attacks someone else.",
    prerequisites: "None",
    effects: [
      "When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn.",
      "Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.",
      "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn’t have this feat), you can use your reaction to make a melee weapon attack against the attacking creature."
    ],
    additionalDetails: { 
      "opportunityAttackStopsMovement": "true", 
      "provokeOpportunityAttackOnDisengage": "true", 
      "reactionAttackOnAllyHit": "true" 
    },
    tags: ["Combat", "Control", "Defense", "Reaction", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Sharpshooter": {
    name: "Sharpshooter",
    category: "Feat",
    summary: "Master the art of long-range combat, ignoring cover and sacrificing accuracy for devastating power.",
    prerequisites: "None",
    effects: [
      "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
      "Your ranged weapon attacks ignore half cover and three-quarters cover.",
      "Before making a ranged weapon attack you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
    ],
    additionalDetails: {
      "longRangeNoDisadvantage": "true",
      "ignoresCover": "Half and Three-Quarters",
      "powerShotAttackPenalty": "-5",
      "powerShotDamageBonus": "10"
    },
    tags: ["Combat", "Ranged Combat", "Offense", "Damage Dealing", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Shield Master": {
    name: "Shield Master",
    category: "Feat",
    summary: "Bonus action shove if you take Attack action. Add shield's AC bonus to Dex saves vs effects targeting only you. Reaction to take no damage on Dex save for half if successful, if wielding shield.",
    prerequisites: "None",
    effects: [
      "If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.",
      "If you aren’t incapacitated, you can add your shield’s AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.",
      "If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
    ],
    additionalDetails: { 
      "bonusActionShoveWithShield": "true", 
      "addShieldAcToDexSavesTargetingSelf": "true", 
      "reactionNoDamageOnSuccessfulDexSaveForHalf": "true" 
    },
    tags: ["Combat", "Defense", "Shield Proficiency", "Control", "Action Economy"],
    source: "Player's Handbook (2024)"
  },
  "Skilled": {
    name: "Skilled",
    category: "Feat",
    summary: "Gain proficiency in any combination of three skills or tools.",
    prerequisites: "None",
    effects: ["You gain proficiency in any combination of three skills or tools of your choice."],
    additionalDetails: { 
      "proficienciesGained": "3", 
      "proficiencyType": "Skills or Tools" 
    },
    tags: ["Utility", "Skill Proficiency", "Tool Proficiency", "Customization", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Skulker": {
    name: "Skulker",
    category: "Feat",
    summary: "Can try to hide when lightly obscured. Missing with ranged attack doesn't reveal position. Dim light doesn't impose disadvantage on Wisdom (Perception) checks relying on sight.",
    prerequisites: "Dexterity 13 or higher",
    effects: [
      "You can try to hide when you are lightly obscured from the creature from which you are hiding.",
      "When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn’t reveal your position.",
      "Dim light doesn’t impose disadvantage on your Wisdom (Perception) checks relying on sight."
    ],
    additionalDetails: { 
      "canHideWhenLightlyObscured": "true", 
      "missedRangedAttackNoReveal": "true", 
      "noDisadvantageOnPerceptionInDimLight": "true" 
    },
    tags: ["Stealth", "Utility", "Ranged Combat", "Perception"],
    source: "Player's Handbook (2024)"
  },
  "Spell Sniper": {
    name: "Spell Sniper",
    category: "Feat",
    summary: "Learn one cantrip that requires an attack roll (from Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard lists). Spell attack range doubled. Ranged spell attacks ignore half/three-quarters cover.",
    prerequisites: "Ability to cast at least one spell",
    effects: [
      "You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
      "When you cast a spell that requires you to make an attack roll, the spell’s range is doubled.",
      "Your ranged spell attacks ignore half cover and three-quarters cover."
    ],
    additionalDetails: { 
      "cantripLearned": "1", 
      "chosenClassOptionsCantrip": "Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard",
      "spellAttackRangeDoubled": "true", 
      "rangedSpellAttacksIgnoreCover": "Half and Three-Quarters" 
    },
    tags: ["Spellcasting", "Offense", "Ranged Combat", "Utility"],
    source: "Player's Handbook (2024)"
  },
  "Tavern Brawler": {
    name: "Tavern Brawler",
    category: "Feat",
    summary: "Increase Str or Con by 1. Proficient with improvised weapons. Unarmed strike uses d4. Bonus action grapple attempt after hitting with unarmed strike or improvised weapon.",
    prerequisites: "None",
    effects: [
      "Increase your Strength or Constitution score by 1, to a maximum of 20.",
      "You are proficient with improvised weapons.",
      "Your unarmed strike uses a d4 for damage.",
      "When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
    ],
    additionalDetails: { 
      "strengthOrConstitutionIncrease": "1", 
      "improvisedWeaponProficiency": "true", 
      "unarmedStrikeDamageDie": "1d4", 
      "bonusActionGrappleOnHit": "true" 
    },
    tags: ["Combat", "Unarmed Combat", "Improvised Weapons", "Grappling", "Strength Based", "Constitution Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },
  "Tough": {
    name: "Tough",
    category: "Feat",
    summary: "Hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.",
    prerequisites: "None",
    effects: [
      "Your hit point maximum increases by an amount equal to twice your level when you gain this feat.",
      "Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
    ],
    additionalDetails: { 
      "hpIncreasePerLevel": "2"
    },
    tags: ["Survivability", "Hit Points", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "War Caster": {
    name: "War Caster",
    category: "Feat",
    summary: "Advantage on Constitution saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.",
    prerequisites: "Ability to cast at least one spell",
    effects: [
      "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.",
      "You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.",
      "When a hostile creature’s movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature."
    ],
    additionalDetails: { 
      "advantageOnConcentrationSaves": "true", 
      "somaticComponentsWithHandsFull": "true", 
      "reactionSpellInsteadOfOpportunityAttack": "true" 
    },
    tags: ["Spellcasting", "Concentration", "Combat", "Reaction", "Origin"],
    source: "Player's Handbook (2024)"
  },
  "Weapon Master": {
    name: "Weapon Master",
    category: "Feat",
    summary: "Increase Strength or Dexterity by 1 and gain proficiency with four simple or martial weapons of your choice.",
    prerequisites: "None",
    effects: [
      "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
      "You gain proficiency with four weapons of your choice. Each weapon must be a simple or a martial weapon."
    ],
    additionalDetails: { 
      "strengthOrDexterityIncrease": "1", 
      "weaponProficienciesGained": "4" 
    },
    tags: ["Combat", "Weapon Proficiency", "Strength Based", "Dexterity Based", "Ability Score Increase"],
    source: "Player's Handbook (2024)"
  },

  // Tasha's Feats (Likely integrated or influential for 2024)
  "Artificer Initiate": {
    name: "Artificer Initiate",
    category: "Feat",
    summary: "Learn one Artificer cantrip and one 1st-level Artificer spell (cast once per long rest). Use Intelligence as spellcasting ability. Gain proficiency with one type of artisan's tools.",
    prerequisites: "None",
    effects: [
      "You learn one cantrip of your choice from the artificer spell list, and you learn one 1st-level spell of your choice from that list. Intelligence is your spellcasting ability for these spells.",
      "You can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
      "You gain proficiency with one type of artisan's tools of your choice."
    ],
    additionalDetails: { 
      "cantripLearned": "1", 
      "firstLevelSpellLearned": "1", 
      "firstLevelSpellFreeCasts": "1",
      "freeCastRecharge": "Long Rest",
      "toolProficiencyGained": "One type of artisan's tools", 
      "spellcastingAbility": "Intelligence" 
    },
    tags: ["Spellcasting", "Utility", "Tool Proficiency", "Intelligence Based"],
    source: "Tasha's Cauldron of Everything"
  },
  "Chef": {
    name: "Chef",
    category: "Feat",
    summary: "Increases Con or Wis by 1. Proficient with cook's utensils. Can cook special food during short rest for bonus healing, or treats during long rest for temp HP.",
    prerequisites: "None",
    effects: [
      "Increase your Constitution or Wisdom score by 1, to a maximum of 20.",
      "You gain proficiency with cook's utensils if you don't already have it.",
      "As part of a short rest, you can cook special food, provided you have ingredients and cook's utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra 1d8 hit points.",
      "With 1 hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus."
    ],
    additionalDetails: { 
      "constitutionOrWisdomIncrease": "1", 
      "cooksUtensilsProficiency": "true", 
      "shortRestFoodHealingBonus": "1d8", 
      "longRestTreatsTempHp": "Proficiency Bonus" 
    },
    tags: ["Utility", "Healing", "Support", "Constitution Based", "Wisdom Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Crusher": {
    name: "Crusher",
    category: "Feat",
    summary: "Increases Str or Con by 1. Once per turn when hitting with bludgeoning damage, can move target 5 ft. Critical hits with bludgeoning damage grant attacks against target advantage until start of your next turn.",
    prerequisites: "None",
    effects: [
      "Increase your Strength or Constitution score by 1, to a maximum of 20.",
      "Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.",
      "When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the start of your next turn."
    ],
    additionalDetails: { 
      "strengthOrConstitutionIncrease": "1", 
      "moveTargetOnBludgeoningHitDistance": "5 feet", 
      "criticalHitBludgeoningAdvantage": "true" 
    },
    tags: ["Combat", "Control", "Offense", "Bludgeoning Damage", "Strength Based", "Constitution Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Eldritch Adept": {
    name: "Eldritch Adept",
    category: "Feat",
    summary: "Learn one Eldritch Invocation from the Warlock class for which you meet prerequisites. If it has a level prerequisite, use Warlock level or character level if no Warlock levels.",
    prerequisites: "Spellcasting or Pact Magic feature",
    effects: [
      "You learn one Eldritch Invocation option of your choice from the warlock class. If the invocation has a prerequisite, you can choose that invocation only if you’re a warlock and meet the prerequisite.",
      "If the invocation requires a warlock level, you use your character level in place of your warlock level.",
      "Whenever you gain a level, you can replace the invocation with another one from the warlock class."
    ],
    additionalDetails: { 
      "eldritchInvocationLearned": "1" 
    },
    tags: ["Spellcasting", "Utility", "Customization", "Warlock"],
    source: "Tasha's Cauldron of Everything"
  },
  "Fey Touched": {
    name: "Fey Touched",
    category: "Feat",
    summary: "Increase Int, Wis, or Cha by 1. Learn Misty Step and one 1st-level Divination or Enchantment spell. Cast each once per long rest without slot, or with slots.",
    prerequisites: "None",
    effects: [
      "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
      "You learn the Misty Step spell and one 1st-level spell of your choice. The 1st-level spell must be from the divination or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can’t cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level."
    ],
    additionalDetails: { 
      "intelligenceOrWisdomOrCharismaIncrease": "1", 
      "spellsLearned": "Misty Step, One 1st-level Divination or Enchantment spell", 
      "freeCastsPerLongRest": "1"
    },
    tags: ["Spellcasting", "Utility", "Mobility", "Intelligence Based", "Wisdom Based", "Charisma Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Fighting Initiate": {
    name: "Fighting Initiate",
    category: "Feat",
    summary: "Learn one Fighting Style option from the fighter class.",
    prerequisites: "Proficiency with a martial weapon",
    effects: [
      "You learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different.",
      "Whenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have."
    ],
    additionalDetails: { 
      "fightingStyleLearned": "1" 
    },
    tags: ["Combat", "Customization", "Fighting Style", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Gunner": {
    name: "Gunner",
    category: "Feat",
    summary: "Increases Dexterity by 1. Grants proficiency with firearms. Ignore loading property of firearms. No disadvantage on ranged attack rolls when within 5 feet of a hostile creature.",
    prerequisites: "None",
    effects: [
      "Increase your Dexterity score by 1, to a maximum of 20.",
      "You gain proficiency with firearms (see “Firearms” in the Dungeon Master’s Guide).",
      "You ignore the loading property of firearms.",
      "Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls."
    ],
    additionalDetails: { 
      "dexterityIncrease": "1", 
      "firearmProficiencyGained": "true", 
      "ignoreLoadingPropertyFirearms": "true", 
      "noMeleeRangedDisadvantage": "true" 
    },
    tags: ["Combat", "Ranged Combat", "Firearms", "Dexterity Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Metamagic Adept": {
    name: "Metamagic Adept",
    category: "Feat",
    summary: "Learn two Metamagic options from the sorcerer class and gain 2 sorcery points to use them. Sorcery points recharge on a long rest.",
    prerequisites: "Spellcasting feature",
    effects: [
      "You learn two Metamagic options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise.",
      "You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest."
    ],
    additionalDetails: { 
      "metamagicOptionsLearned": "2", 
      "sorceryPointsGained": "2", 
      "sorceryPointsRecharge": "Long Rest" 
    },
    tags: ["Spellcasting", "Utility", "Customization", "Sorcerer"],
    source: "Tasha's Cauldron of Everything"
  },
  "Piercer": {
    name: "Piercer",
    category: "Feat",
    summary: "Increases Str or Dex by 1. Once per turn when hitting with piercing damage, can reroll one damage die. Critical hits with piercing damage add an additional damage die.",
    prerequisites: "None",
    effects: [
      "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
      "Once per turn when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack’s damage dice, and you must use the new roll.",
      "When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage it takes."
    ],
    additionalDetails: { 
      "strengthOrDexterityIncrease": "1", 
      "rerollPiercingDamageDie": "Once per turn", 
      "criticalHitPiercingExtraDie": "true" 
    },
    tags: ["Combat", "Offense", "Piercing Damage", "Strength Based", "Dexterity Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Poisoner": {
    name: "Poisoner",
    category: "Feat",
    summary: "Proficiency with poisoner's kit. Apply poison as a bonus action. Ignore resistance to poison damage.",
    prerequisites: "None",
    effects: [
      "You gain proficiency with the poisoner’s kit if you don’t already have it.",
      "You can apply a poison to a weapon or piece of ammunition as a bonus action, instead of an action.",
      "When you make a damage roll that deals poison damage, it ignores resistance to poison damage."
    ],
    additionalDetails: { 
      "poisonersKitProficiency": "true", 
      "applyPoisonBonusAction": "true", 
      "ignorePoisonResistance": "true" 
    },
    tags: ["Combat", "Utility", "Poison Damage", "Tool Proficiency"],
    source: "Tasha's Cauldron of Everything"
  },
  "Shadow Touched": {
    name: "Shadow Touched",
    category: "Feat",
    summary: "Increase Int, Wis, or Cha by 1. Learn Invisibility and one 1st-level Illusion or Necromancy spell. Cast each once per long rest without slot, or with slots.",
    prerequisites: "None",
    effects: [
      "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
      "You learn the Invisibility spell and one 1st-level spell of your choice. The 1st-level spell must be from the illusion or necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can’t cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level."
    ],
    additionalDetails: { 
      "intelligenceOrWisdomOrCharismaIncrease": "1", 
      "spellsLearned": "Invisibility, One 1st-level Illusion or Necromancy spell", 
      "freeCastsPerLongRest": "1"
    },
    tags: ["Spellcasting", "Utility", "Stealth", "Intelligence Based", "Wisdom Based", "Charisma Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Skill Expert": {
    name: "Skill Expert",
    category: "Feat",
    summary: "Increase one ability score by 1. Gain proficiency in one skill. Gain expertise in one skill you're proficient in.",
    prerequisites: "None",
    effects: [
      "Increase one ability score of your choice by 1, to a maximum of 20.",
      "You gain proficiency in one skill of your choice.",
      "Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it."
    ],
    additionalDetails: { 
      "abilityScoreIncrease": "1", 
      "skillProficiencyGained": "1", 
      "skillExpertiseGained": "1" 
    },
    tags: ["Utility", "Skill Proficiency", "Expertise", "Customization", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Slasher": {
    name: "Slasher",
    category: "Feat",
    summary: "Increases Str or Dex by 1. Once per turn when hitting with slashing damage, reduce target's speed by 10 ft. Critical hits with slashing damage give target disadvantage on attacks until start of your next turn.",
    prerequisites: "None",
    effects: [
      "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
      "Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce its speed by 10 feet until the start of your next turn.",
      "When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls."
    ],
    additionalDetails: { 
      "strengthOrDexterityIncrease": "1", 
      "reduceSpeedOnSlashingHitAmount": "10 feet", 
      "criticalHitSlashingDisadvantage": "true" 
    },
    tags: ["Combat", "Control", "Debuff", "Slashing Damage", "Strength Based", "Dexterity Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Telekinetic": {
    name: "Telekinetic",
    category: "Feat",
    summary: "Increase Int, Wis, or Cha by 1. Learn Mage Hand (or improve its range if already known). As a bonus action, telekinetically shove a creature 5 feet (Str save).",
    prerequisites: "None",
    effects: [
      "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
      "You learn the Mage Hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.",
      "As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. You can move the target horizontally or vertically. A creature can willingly fail this save."
    ],
    additionalDetails: { 
      "intelligenceOrWisdomOrCharismaIncrease": "1", 
      "mageHandLearnedOrImproved": "true", 
      "bonusActionTelekineticShove": "true", 
      "shoveDistance": "5 feet", 
      "shoveSaveType": "Strength" 
    },
    tags: ["Utility", "Spellcasting", "Control", "Bonus Action", "Intelligence Based", "Wisdom Based", "Charisma Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  },
  "Telepathic": {
    name: "Telepathic",
    category: "Feat",
    summary: "Increase Int, Wis, or Cha by 1. Communicate telepathically with creatures within 60 ft (if they understand a language). Cast Detect Thoughts once per long rest without slot, or with slots.",
    prerequisites: "None",
    effects: [
      "Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
      "You can speak telepathically to any creature you can see within 60 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn’t give the creature the ability to respond to you telepathically.",
      "You can cast the Detect Thoughts spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. You can also cast the spell using any spell slots you have of 2nd level or higher. The spell’s spellcasting ability is the ability increased by this feat."
    ],
    additionalDetails: { 
      "intelligenceOrWisdomOrCharismaIncrease": "1", 
      "telepathicCommunicationRange": "60 feet", 
      "detectThoughtsLearned": "true", 
      "detectThoughtsFreeCasts": "1",
      "freeCastRecharge": "Long Rest"
    },
    tags: ["Utility", "Spellcasting", "Telepathy", "Intelligence Based", "Wisdom Based", "Charisma Based", "Ability Score Increase", "Origin"],
    source: "Tasha's Cauldron of Everything"
  }
};
