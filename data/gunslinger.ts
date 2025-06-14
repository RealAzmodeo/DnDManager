
import { ClassDefinition } from '../types';

export const gunslingerClassData: ClassDefinition = {
    className: "Gunslinger",
    classTitle: "The Gunslinger's Codex",
    classDescription: "Master the art of the firearm with this D&D 2024 marksman.",
    themeColor: "sky", // Example theme color
    sections: [
      {
        type: 'intro',
        sectionId: 'gunslinger-intro',
        title: 'Gunslinger Class Overview',
        content: [
          "The Gunslinger is a class centered on firearm combat, officially introduced in D&D 2024. Originally from Mage Hand Press, it's now adapted for the 2024 rules.",
          "Described as 'cold under pressure and lethal in quick draw,' the Gunslinger is an expert ranged combatant using pistols and rifles, capable of inflicting devastating damage. This class appeals to players who enjoy Western fantasies or musketeer/cowboy archetypes within D&D settings."
        ],
      },
      {
        type: 'rolePlaystyle',
        sectionId: 'gunslinger-role',
        title: 'Role & Playstyle',
        content: [
          "Primary Role: Ranged Striker - Excels at dealing consistent, high damage from a distance.",
          "Secondary Role: Controller - Certain deeds and features (like Gut Shot) can impose debilitating conditions on enemies.",
          "Playstyle: High-risk, high-reward. Relies on positioning, resource management (Risk Dice), and critical hits to maximize effectiveness. Often a glass cannon if caught out of position but devastating when played tactically."
        ]
      },
      {
        type: 'strengthsWeaknesses',
        sectionId: 'gunslinger-proscons',
        title: 'Strengths & Weaknesses',
        strengths: [
          "Exceptional ranged damage output, especially with features like Sharpshooter and Overkill.",
          "Strong critical hit potential that synergizes with multiple class features.",
          "Unique 'Deeds' mechanic provides versatility and cinematic action options.",
          "Good initiative and mobility options through Quick Draw and Dodge Roll.",
          "Scales well with magic firearms and ammunition."
        ],
        weaknesses: [
          "Can be fragile if focused by enemies, typically relying on light armor.",
          "Resource-dependent (Risk Dice) for many special maneuvers.",
          "Some firearms may have reload properties requiring action management.",
          "May struggle against enemies with high AC if attack bonuses are not prioritized.",
          "Effectiveness can be reduced in tight, anti-range environments."
        ]
      },
      {
        type: 'baseTraits',
        sectionId: 'gunslinger-core',
        title: 'Core Class Traits',
        items: [
          { name: 'Hit Dice', description: 'd8 per Gunslinger level.' },
          { name: 'Primary Attributes', description: 'Dexterity (attack, damage, AC), Charisma (Deed save DCs, social skills).' },
          { name: 'Saving Throws', description: 'Dexterity and Charisma.' },
          { name: 'Proficiencies', description: 'Light armor, simple weapons, and martial firearms (ranged).' },
          { name: 'Starting Equipment', description: 'Typically long leather armor, a pair of firearms (e.g., revolver, rifle), ammunition, and an adventurer\'s pack.' },
          { name: 'Arsenal', description: 'The class is often accompanied by rules for new firearms, firearm-related spells, and feats.'}
        ],
      },
      {
        type: 'levelProgression',
        sectionId: 'gunslinger-levels',
        title: 'Class Features by Level',
        levels: [
           {
            level: 1,
            title: 'Foundation of a Sharpshooter',
            features: [
              { name: 'Fighting Style', description: 'Choose a fighting style adapted for firearms. Examples: Akimbo (dual-wield pistols without penalty), Bullseye (ranged attack bonus), Shotgunner (reroll scatter die). In 2024 rules, this is a Combat Style feat gained at level 1, replaceable on level up.' },
              { name: 'Quick Draw', description: 'Gain Advantage on Initiative rolls. Can draw or stow two weapons when normally only one is allowed. Enables drawing two pistols simultaneously at combat start.' },
              { name: 'Weapon Mastery', description: 'Apply mastery properties to 2 types of firearms or ranged weapons. Increases to 3 at level 4, and 4 at level 10. Firearms have unique mastery properties like "Aim" or "Blast".' },
            ],
          },
          {
            level: 2,
            title: 'Deadly Precision & Daring Deeds',
            features: [
              { name: 'Critical Shot', description: 'Ranged weapon attacks score a critical hit on a roll of 19-20. This improves to 18-20 at level 9, and 17-20 at level 17.', note: 'Critical Hit Milestone!', isCritical: true },
              { name: 'Risk & Deeds', description: 'Gain 4 Risk Dice (d8s). These are used to perform special maneuvers called Deeds. One Deed can be used per turn. All Risk Dice are recovered on a short or long rest. Deed Save DC = 8 + Proficiency Bonus + Dexterity modifier.', isDeed: true },
              { name: 'Poker Face', description: 'Gain advantage on Charisma (Deception) checks and on saving throws against effects that would read your mind or emotions.' },
            ],
          },
          { 
            level: 3, 
            title: 'Gunslinger\'s Creed Choice', 
            features: [
              { 
                name: 'Gunslinger\'s Creed Feature', 
                description: 'You choose your Gunslinger\'s Creed (subclass) and gain its initial features. This choice grants further features at levels 6, 10, and 14. See the Gunslinger Credos section for details.', 
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 4, 
            title: 'Sharpening Skills', 
            features: [
              { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
            ] 
          },
          {
            level: 5,
            title: 'Enhanced Combat Prowess',
            features: [
              { name: 'Extra Attack', description: 'Can attack twice, instead of once, whenever you take the Attack action on your turn.' },
              { name: 'Gut Shot', description: 'On a critical hit with a firearm against a Large or smaller creature, its speed is halved, and it has Disadvantage on attack rolls until it uses an action to remove the bullet. Lasts 1 minute or until bullet removed. Immune: amorphous creatures, elementals, undead.', note: 'Powerful Critical Effect!', isCritical: true },
            ],
          },
          { 
            level: 6, 
            title: 'Creed Advancement', 
            features: [
              { 
                name: 'Gunslinger\'s Creed Feature', 
                description: 'You gain a feature from your chosen Gunslinger\'s Creed. Refer to the Gunslinger Credos section for specific details.', 
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 7, 
            title: 'Evasive Maneuvers', 
            features: [
              { name: 'Evasion', description: 'When subjected to an effect that allows a Dexterity saving throw for half damage, you take no damage on a successful save, and only half damage on a failed save (unless incapacitated).' }
            ] 
          },
          { 
            level: 8, 
            title: 'Further Refinement', 
            features: [
              { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
            ] 
          },
          { 
            level: 9, 
            title: 'Masterful Aim', 
            features: [
              { name: 'Improved Critical Shot', description: 'Ranged weapon attacks now score a critical hit on a roll of 18-20.', note: 'Critical Hit Milestone!', isCritical: true}
            ] 
          },
          { 
            level: 10, 
            title: 'Creed Specialization', 
            features: [
              { 
                name: 'Gunslinger\'s Creed Feature', 
                description: 'You gain a feature from your chosen Gunslinger\'s Creed. Refer to the Gunslinger Credos section for specific details.', 
                isSubclassFeature: true 
              }
            ] 
          },
          {
            level: 11,
            title: 'Overwhelming Firepower',
            features: [
              { name: 'Overkill', description: 'If a firearm normally doesn\'t add your ability modifier to damage, it now does. If it already adds your modifier, it deals an extra +1d8 damage on each hit. Applies once per target hit.' },
            ],
          },
          { 
            level: 12, 
            title: 'Peak Performance Training', 
            features: [
              { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
            ] 
          },
          { 
            level: 13, 
            title: 'Cheating Death', 
            features: [
              { name: 'Cheat Death', description: 'Once per short or long rest, if an attack or effect reduces you to 0 hit points without killing you outright, you drop to 1 hit point instead and regain hit points equal to your Gunslinger level.' }
            ] 
          },
          { 
            level: 14, 
            title: 'Creed Mastery', 
            features: [
              { 
                name: 'Gunslinger\'s Creed Feature', 
                description: 'You gain a feature from your chosen Gunslinger\'s Creed. Refer to the Gunslinger Credos section for specific details.', 
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 15, 
            title: 'Desperate Gambits', 
            features: [
              { name: 'Dire Gambit', description: 'Whenever you roll initiative or score a critical hit, you regain 1 spent Risk Die.', isDeed: true }
            ] 
          },
          { 
            level: 16, 
            title: 'Legendary Marksman', 
            features: [
              { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
            ] 
          },
          { 
            level: 17, 
            title: 'Pinpoint Accuracy', 
            features: [
              { name: 'Master Critical Shot', description: 'Ranged weapon attacks now score a critical hit on a roll of 17-20.', note: 'Critical Hit Milestone!', isCritical: true }
            ] 
          },
          { 
            level: 18, 
            title: 'Deft Maneuvers', 
            features: [
              { name: 'Deft Maneuver', description: 'Gain an additional bonus action each turn, which can only be used to perform a Deed.', isDeed: true }
            ] 
          },
          { 
            level: 19, 
            title: 'Epic Boon Granted', 
            features: [
              { name: 'Epic Boon', description: 'Gain an Epic Boon of your choice. Irresistible Offense (ignore damage resistances) is recommended.' }
            ] 
          },
          {
            level: 20,
            title: 'The Headshot',
            features: [
              { name: 'Headshot', description: 'When you score a critical hit with a ranged attack, you can declare it a Headshot. If the target has less than 100 HP remaining, it dies instantly. If it has 100 HP or more, it takes an extra 10d10 damage of the weapon\'s type. Usable once per short rest, or spend 3 Risk Dice to use again.', note: 'Ultimate Finisher!', isCritical: true },
            ],
          },
        ],
      },
      {
        type: 'uniqueMechanics', // Renamed from 'deeds'
        sectionId: 'gunslinger-deeds',
        title: 'Deeds (Risk Dice Maneuvers)',
        intro: "Deeds are special maneuvers performed by spending Risk Dice. They represent the Gunslinger's daring and cinematic combat style. All Risk Dice (d8s) are recovered on a short or long rest.",
        mechanics: [ // Renamed from 'deeds'
          { name: 'Bite the Bullet', description: 'Bonus Action: Spend 1 Risk Die to gain temporary HP equal to the die roll + your Gunslinger level.', isDeed: true },
          { name: 'Blindfire', description: 'Bonus Action: Spend 1 Risk Die to gain Blindsight 30 feet until the end of your turn.', isDeed: true },
          { name: 'Dodge Roll', description: 'Bonus Action: Spend 1 Risk Die to move 15 feet without provoking opportunity attacks and reload any firearm you are wielding.', isDeed: true },
          { name: 'Grazing Shot', description: 'Reaction (when you miss a ranged attack): Spend 1 Risk Die to deal damage equal to the die roll + your Dexterity modifier to the target (once per turn).', isDeed: true },
          { name: 'Maverick\'s Spirit', description: 'Reaction (when you fail an Int, Wis, or Cha check or save): Spend 1 Risk Die to add its roll to the check/save (once per turn).', isDeed: true },
          { name: 'Skin of Your Teeth', description: 'Reaction (when hit by an attack): Spend 1 Risk Die to add its roll to your AC against that attack, potentially causing it to miss.', isDeed: true },
        ],
      },
      {
        type: 'subclasses',
        sectionId: 'gunslinger-subclasses',
        title: 'Gunslinger Credos (Subclasses)',
        intro: 'At 3rd level, a Gunslinger chooses a Creed, representing their specialized style. Each Creed grants features at 3rd, 6th, 10th, and 14th level.',
        subclasses: [
             {
                id: 'deadeye-the-sharpshooter',
                name: 'Deadeye - The Sharpshooter',
                description: 'A sniper with acute vision, focusing on extreme precision at long range. Traits likely include ignoring cover, increasing effective range, and bonuses for aiming. The "eagle-eyed, precise shooter."',
                features: [ 
                  { name: 'Deadeye\'s Aim', level: 3, description: 'As a bonus action, you can grant yourself advantage on your next attack roll with a firearm this turn.'},
                  { name: 'Piercing Shot', level: 6, description: 'Your firearm attacks ignore half cover and three-quarters cover.'},
                  { name: 'Vital Strike', level: 10, description: 'When you score a critical hit with a firearm, you can roll one additional damage die.'},
                  { name: 'Master Sniper', level: 14, description: 'You can use Deadeye\'s Aim twice per short rest, and critical hit range with firearms becomes 18-20 for that attack if not already better.'}
                ]
              },
              {
                id: 'high-roller-the-gambler',
                name: 'High Roller - The Gambler',
                description: 'A risk-loving gunslinger who manipulates fortune. Mechanics may involve "cheating the DM" by hiding rolls or swapping results. Plays with luck in combat.',
                features: [
                  { name: 'Gambler\'s Luck', level: 3, description: 'You can expend a Risk Die to reroll an attack roll, ability check, or saving throw you make. You must use the new roll.'},
                  { name: 'Ace Up The Sleeve', level: 6, description: 'When an enemy makes an attack roll against you, you can use your reaction and a Risk Die to impose disadvantage on that roll.'},
                  { name: 'All In', level: 10, description: 'When you make an attack roll with a firearm, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack\'s damage.'},
                  { name: 'Jackpot', level: 14, description: 'When you roll a 1 on a Risk Die, you can choose to treat it as if you rolled an 8 instead. You can use this feature a number of times equal to your Charisma modifier (minimum of once).'}
                ]
              },
              {
                id: 'secret-agent-covert-operative-the-spy',
                name: 'Secret Agent (Covert Operative) - The Spy',
                description: 'Trained in espionage and subterfuge, like a fantasy James Bond. Mixes rogue skills with discrete firearm use.',
                features: [
                  { name: 'Concealed Carry', level: 3, description: 'You have advantage on Dexterity (Sleight of Hand) checks made to conceal a firearm. You can draw or stow a concealed firearm as a free action.'},
                  { name: 'Silent Shot', level: 6, description: 'When you make an attack with a firearm, you can expend a Risk Die to make the shot nearly silent.'},
                  { name: 'Undercover Tactics', level: 10, description: 'You gain proficiency in disguise kits and forgery kits. You have advantage on Charisma (Deception) checks made while in disguise.'},
                  { name: 'License to Kill', level: 14, description: 'When you hit a creature with a firearm attack, if you have advantage on the attack roll, you can deal an extra 3d6 damage.'}
                ]
              },
              {
                id: 'spellslinger-the-arcane-gunslinger',
                name: 'Spellslinger - The Arcane Gunslinger',
                description: 'Combines magic with gunpowder, imbuing bullets with spells. Essentially a ranged gish (warrior-mage).',
                features: [
                  { name: 'Spellcasting', level: 3, description: 'You gain the ability to cast spells (Charisma based). Learn cantrips and 1st-level spells. Half-caster spell slot progression.'},
                  { name: 'Arcane Shot', level: 6, description: 'Expend a spell slot to deal extra force damage on a firearm attack (scales with slot level).'},
                  { name: 'Infused Bullets', level: 10, description: 'Imbue ammunition with an elemental damage type of your choice.'},
                  { name: 'Greater Arcane Shot', level: 14, description: 'Your Arcane Shot can affect creatures near the original target.'}
                ]
              },
              {
                id: 'trick-shot-the-acrobatic-marksman',
                name: 'Trick Shot - The Acrobatic Marksman',
                description: 'Performs incredible shots like bouncing bullets or splitting ropes. "Can make bullets ricochet behind cover."',
                features: [
                  { name: 'Ricochet Shot', level: 3, description: 'Expend a Risk Die to negate cover bonus to AC for a firearm attack.'},
                  { name: 'Disarming Shot', level: 6, description: 'Expend a Risk Die on hit to force a Strength save to drop an item.'},
                  { name: 'Warning Shot', level: 10, description: 'Expend a Risk Die to make a firearm attack; on hit, target is frightened of you.'},
                  { name: 'Called Shot Mastery', level: 14, description: 'Learn special called shots (e.g., target limb to reduce speed) using Risk Dice.'}
                ]
              },
              {
                id: 'white-hat-the-justicar',
                name: 'White Hat - The Justicar',
                description: 'The heroic, honorable gunslinger who protects innocents and confronts outlaws. "Using your weapons to protect the weak from those who break the law."',
                features: [
                  { name: 'Guardian\'s Stance', level: 3, description: 'Bonus action stance. Reaction: expend Risk Die to attack an enemy that hits an ally.'},
                  { name: 'Uphold the Law', level: 6, description: 'Advantage on Charisma (Intimidation) against known lawbreakers/evildoers.'},
                  { name: 'Stand Against Evil', level: 10, description: 'You and nearby allies have advantage on saves against being frightened.'},
                  { name: 'Hero\'s Resolve', level: 14, description: 'First attack in Guardian\'s Stance deals extra radiant damage.'}
                ]
              },
        ],
      },
      {
        type: 'feats',
        sectionId: 'gunslinger-feats',
        title: 'Key Feats for the Gunslinger',
        intro: "Selecting the right feats can significantly enhance a Gunslinger's effectiveness. Feats offer powerful new abilities or augment existing ones, allowing for greater customization and specialization. Here are some highly recommended options for Gunslingers:",
        categories: [
          {
            categoryName: 'Core Damage & Accuracy Feats',
            description: 'These feats directly enhance your ability to hit targets and deal more damage with firearms.',
            feats: [
              { 
                name: 'Sharpshooter', 
                description: 'You gain the following benefits: Attacking at long range doesn\'t impose disadvantage on your ranged weapon attack rolls. Your ranged weapon attacks ignore half cover and three-quarters cover. Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack\'s damage.',
                note: 'A cornerstone feat for most ranged damage dealers, dramatically increasing damage potential.' 
              },
              { 
                name: 'Piercer', 
                description: 'You gain the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. Once per turn when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack’s damage dice, and you must use the new roll. When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage it takes.',
                note: 'Excellent for boosting Dexterity and improving damage output and consistency with firearms, which typically deal piercing damage.' 
              }
            ]
          },
          {
            categoryName: 'Survivability & Utility Feats',
            description: 'These feats improve your resilience, initiative, or provide useful options in and out of combat.',
            feats: [
              { 
                name: 'Alert', 
                description: 'You gain the following benefits: You gain a +5 bonus to initiative. You can’t be surprised while you are conscious. Other creatures don’t gain advantage on attack rolls against you as a result of being unseen by you.',
                note: 'Going early in combat is crucial for a Gunslinger to establish position and control. Immunity to surprise and negating advantage from hidden attackers are also significant defensive benefits.'
              },
              { 
                name: 'Resilient (Dexterity or Constitution)', 
                description: 'Choose an ability score. You gain the following benefits: Increase the chosen ability score by 1, to a maximum of 20. You gain proficiency in saving throws using the chosen ability.',
                note: 'Dexterity saves are very common for avoiding damage from area effects. Constitution saves are vital for maintaining concentration (if applicable) and resisting many harmful effects. Choose based on your stat needs and common saving throw vulnerabilities.'
              },
              {
                name: 'Lucky',
                description: 'You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker’s roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled. You regain your expended luck points when you finish a long rest.',
                note: 'Provides a powerful way to turn failures into successes, or to avoid critical hits. Extremely versatile.'
              },
              {
                name: 'Tough',
                description: 'Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.',
                note: 'Gunslingers can be fragile. This feat provides a significant boost to survivability.'
              }
            ]
          }
        ]
      },
      {
        type: 'flavorAndRoleplaying',
        sectionId: 'gunslinger-rp',
        title: 'Flavor & Roleplaying Hooks',
        content: [
          "Consider your Gunslinger's relationship with their firearms. Are they cherished tools, dangerous necessities, or symbols of a past life?",
          "How did they learn their skills? Formal military training, a grizzled mentor, self-taught survivalist?",
          "What's their personal code or 'Creed'? Even before choosing a subclass, this can define their actions. Are they a lawman, a bounty hunter, a revolutionary, a reluctant hero?",
          "Gunslingers often carry an air of mystique or notoriety. How do common folk react to someone openly carrying firearms in a world of swords and sorcery?"
        ]
      },
      {
        type: 'multiclassing',
        sectionId: 'gunslinger-multi',
        title: 'Multiclassing Considerations',
        generalNotes: [
          "Gunslingers primarily benefit from classes that enhance Dexterity-based combat or provide utility that complements their focused skillset.",
          "Dipping 1-3 levels into other classes is more common than deep multiclassing, as Gunslinger features are potent through higher levels."
        ],
        goodCombinations: [
          { className: "Fighter", synergy: "Action Surge (2 levels) is universally strong. Battle Master maneuvers (3 levels) can add more trick shots.", levels: "1-3" },
          { className: "Rogue", synergy: "Sneak Attack (1-3 levels) synergizes well with ranged attacks if conditions are met. Cunning Action provides bonus action mobility/hiding.", levels: "1-3" },
          { className: "Ranger", synergy: "Hunter's Mark (spell, 2 levels) adds damage. Gloom Stalker (3 levels) is excellent for initiative and first-round burst.", levels: "2-3" }
        ]
      },
      {
        type: 'equipmentProgression',
        sectionId: 'gunslinger-gear',
        title: 'Equipment Progression',
        earlyGame: [
          "Focus on acquiring your preferred types of firearms and ample ammunition.",
          "Basic light armor (Leather or Studded Leather).",
          "Consider a backup melee weapon (e.g., shortsword or rapier)."
        ],
        midGame: [
          "Seek +1 firearms or ammunition.",
          "Magical light armor (e.g., +1 Studded Leather).",
          "Items that enhance Dexterity (Gloves of Dexterity, though attunement may be competitive).",
          "Boots of Speed or Winged Boots for enhanced mobility."
        ],
        lateGame: [
          "+2 or +3 firearms/ammunition.",
          "Legendary firearms with unique properties.",
          "Items granting advantage on attacks, or boosting critical hit effects.",
          "Defensive items like Cloak of Displacement or Amulet of Health."
        ]
      },
      {
        type: 'closingRemarks',
        sectionId: 'gunslinger-closing',
        title: 'Innovations and Final Thoughts',
        content: [
          "The Gunslinger officially integrates firearms into D&D with dedicated rules and mechanics, including the new Weapon Mastery system from One D&D.",
          "Risk Dice provide a unique martial resource, enabling spectacular maneuvers and adding tactical depth beyond standard attacks, appealing to players who enjoy classes like Fighters or Rogues but want more dynamic options.",
          "The class draws inspiration from Western and Steampunk genres, modernizing D&D while incorporating community desires for a robust, balanced firearm-wielding class.",
          "Designed with the revised 2024 D&D rules in mind, it utilizes new systems like Weapon Mastery and Epic Boons, showcasing how new classes integrate into the evolving game.",
          "Overall, the Gunslinger offers a thrilling fantasy of a skilled marksman, with mechanics emphasizing risk, reward, and cinematic action, fitting for players who want to embody a cool-headed, sharp-shooting hero or anti-hero."
        ],
      },
    ],
    plannerConfig: { 
      species: {
        name: 'Human', 
        note: 'Adaptable and common, allowing for diverse character concepts. ASIs from Origin.',
      },
      origin: {
        name: 'Guard Origin', 
        note: 'Grants useful proficiencies like Athletics and Perception, and a starting feat.',
        recommendedFeat: 'Sharpshooter',
        skillProficiencies: ["Athletics", "Perception"]
      },
      abilityPriority: ['Dexterity (Max)', 'Constitution (High)', 'Charisma (Moderate)', 'Wisdom (Good for Perception)', 'Intelligence (Low)', 'Strength (Dump)'],
      keyClassSkills: ['Perception', 'Acrobatics', 'Intimidation (if Charisma is decent)', 'Stealth'],
      generalLevelRecommendations: [
        { level: 1, recommendation: {
            fightingStyle: 'Archery (for +2 to attack rolls with ranged weapons) OR Akimbo (if focusing on dual-wielding pistols)',
            featSuggestion: 'Sharpshooter (Recommended via Guard Origin - ignore cover, shoot at long range without disadvantage, take -5 to hit for +10 damage).',
            notes: 'Focus on maximizing Dexterity. Sharpshooter is a game-changer for damage output.'
        }},
        { level: 4, recommendation: {
            asiChoice: '+2 Dexterity',
            notes: 'Increasing your primary stat (Dexterity) is usually the best choice for attack, damage, AC, and initiative.'
        }},
        { level: 8, recommendation: {
            asiChoice: '+2 Dexterity (to reach 20 if possible)',
            featSuggestion: 'If Dexterity is maxed, consider Feat: Piercer (+1 Dex and reroll one damage die) or Alert (+5 initiative, cannot be surprised).',
            notes: 'Capping Dexterity at 20 is a high priority.'
        }},
        { level: 12, recommendation: {
            asiChoice: 'Feat: Resilient (Wisdom)',
            notes: 'Boosts Wisdom saving throws, which are very common and can be debilitating. Also rounds up an odd Wisdom score.'
        }},
        { level: 16, recommendation: {
            asiChoice: 'Feat: Lucky OR Tough',
            notes: 'Lucky provides powerful rerolls. Tough adds significant hit points for survivability.'
        }},
        { level: 19, recommendation: {
            asiChoice: 'Epic Boon: Irresistible Offense',
            notes: 'As recommended by the class. Ignoring damage resistances is incredibly potent at high levels.'
        }},
      ],
      subclassSpecificRecommendations: {
        'Deadeye - The Sharpshooter': [
          { level: 3, recommendation: { notes: "Deadeye's Aim is great for ensuring important shots land."}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity', notes: 'Max out Dexterity first.' }},
          { level: 8, recommendation: { featSuggestion: 'Feat: Elven Accuracy (if applicable species) OR Piercer', notes: 'Enhance accuracy or damage.' }},
        ],
        'High Roller - The Gambler': [
          { level: 3, recommendation: { notes: "Gambler's Luck provides rerolls, enhancing reliability."}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity', notes: 'Dexterity is key.' }},
          { level: 8, recommendation: { featSuggestion: 'Feat: Lucky (synergizes with the gambler theme) OR +2 Charisma (if Deeds use CHA for saves/effects often for this subclass)', notes: 'Enhance luck or social/Deed effectiveness.' }},
        ],
        'Secret Agent (Covert Operative) - The Spy': [
          { level: 3, recommendation: { notes: "Concealed Carry is excellent for infiltration."}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity' }},
          { level: 8, recommendation: { featSuggestion: 'Feat: Skill Expert (+1 Dex, one skill proficiency, one expertise - e.g., Stealth)', notes: 'Become even better at spycraft.' }},
        ],
        'Spellslinger - The Arcane Gunslinger': [
          { level: 3, recommendation: { notes: "Spellcasting adds significant versatility."}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity OR +2 Charisma', notes: 'Balance attacking prowess with spellcasting ability.' }},
          { level: 8, recommendation: { featSuggestion: 'Feat: Fey Touched (+1 Cha, Misty Step, 1st-level divination/enchantment spell) OR War Caster (if concentration spells are common)', notes: 'Enhance magical utility or spell maintenance.' }},
        ],
        'Trick Shot - The Acrobatic Marksman': [
          { level: 3, recommendation: { notes: "Ricochet Shot helps deal with cover."}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity' }},
          { level: 8, recommendation: { featSuggestion: 'Feat: Mobile (extra movement, avoid opportunity attacks after attacking) OR Defensive Duelist (if using a finesse melee weapon occasionally)', notes: 'Improve mobility for better trick shot positioning.' }},
        ],
        'White Hat - The Justicar': [
          { level: 3, recommendation: { notes: "Guardian's Stance is good for protecting allies."}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity' }},
          { level: 8, recommendation: { featSuggestion: 'Feat: Inspiring Leader (if Charisma is good, provide temp HP to party) OR Sentinel (control enemies and protect allies)', notes: 'Boost supportive or protective capabilities.' }},
        ],
      }
    }
  };
