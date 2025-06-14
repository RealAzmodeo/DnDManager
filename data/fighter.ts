
import { ClassDefinition } from '../types';

export const fighterClassData: ClassDefinition = {
  className: "Fighter",
  classTitle: "The Art of Warfare",
  classDescription: "Master of martial combat, wielding unparalleled skill with weapons and armor to overcome any challenge.",
  themeColor: "red", 
  sections: [
    {
      type: 'intro',
      sectionId: 'fighter-intro',
      title: 'Fighter Class Overview',
      content: [
        "Fighters share an unparalleled mastery of weapons and armor. Whatever their preferred weapon, style, or battlefield role, fighters are characterized by their martial prowess and their ability to endure and overcome.",
        "They are versatile combatants, able to specialize in various fighting styles and adapt to numerous situations. From heavily armored knights to agile duelists and keen-eyed archers, the Fighter is a cornerstone of any adventuring party."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'fighter-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Striker/Defender - Fighters can excel at dealing consistent damage or protecting allies, depending on their build and Martial Archetype.",
        "Secondary Role: Controller (Battle Master) / Versatile - Some archetypes add control elements or broad utility.",
        "Playstyle: Typically straightforward and effective in combat. Fighters rely on their weapon skills, armor, and core class features like Action Surge and Second Wind. Their chosen Martial Archetype significantly influences their specific tactics and abilities."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'fighter-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "High number of Ability Score Improvements/Feats, allowing for great customization.",
        "Excellent sustained damage output and burst potential with Action Surge.",
        "Proficiency in all armor and weapons, leading to high AC and weapon versatility.",
        "Strong survivability with Second Wind and good Hit Dice (d10).",
        "Multiple attacks per turn at higher levels (up to 4 with base class features).",
        "Martial Archetypes offer diverse playstyles."
      ],
      weaknesses: [
        "Can be less flashy or complex compared to spellcasters.",
        "May lack out-of-combat utility depending on skill choices and archetype.",
        "Some archetypes are more straightforward and may offer fewer tactical options than others.",
        "Reliant on short rests to refresh Action Surge and Second Wind (and some archetype features)."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'fighter-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd10 per Fighter level.' },
        { name: 'Primary Attributes', description: 'Strength (for most melee/heavy armor builds) or Dexterity (for finesse/ranged builds), Constitution (hit points).' },
        { name: 'Saving Throws', description: 'Strength and Constitution.' },
        { name: 'Proficiencies', description: 'All armor (light, medium, heavy), shields, simple weapons, martial weapons.' },
        { name: 'Starting Equipment', description: 'Typically chain mail or leather armor, a martial weapon and a shield or two martial weapons, a light crossbow or two handaxes, and an explorer’s pack or dungeoneer’s pack.'}
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'fighter-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Martial Foundations',
          features: [
            { name: 'Fighting Style', description: 'You adopt a particular style of fighting as your specialty. Choose one option from the list available to fighters (e.g., Archery, Defense, Dueling, Great Weapon Fighting, Protection, Two-Weapon Fighting).' },
            { name: 'Second Wind', description: 'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.' }
          ],
        },
        {
          level: 2,
          title: 'Surge of Action',
          features: [
            { name: 'Action Surge', description: 'On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.', isCritical: true }
          ],
        },
        {
          level: 3,
          title: 'Martial Archetype Choice',
          features: [
            { 
              name: 'Martial Archetype Feature', 
              description: 'You choose an archetype that you strive to emulate in your combat styles and techniques. This choice grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level. See the Martial Archetypes section for details.', 
              isSubclassFeature: true 
            }
          ],
        },
        { 
          level: 4, 
          title: 'Combat Training', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 5, 
          title: 'Extra Attack (1st)', 
          features: [
            { name: 'Extra Attack', description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' }
          ] 
        },
        { 
          level: 6, 
          title: 'Further Training', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 7, 
          title: 'Archetype Advancement', 
          features: [
            { 
              name: 'Martial Archetype Feature', 
              description: 'You gain a feature from your chosen Martial Archetype. Refer to the Martial Archetypes section for specific details.', 
              isSubclassFeature: true 
            }
          ] 
        },
        { 
          level: 8, 
          title: 'Superior Training', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        {
          level: 9,
          title: 'Unyielding Spirit',
          features: [
            { name: 'Indomitable (1 use)', description: 'You can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature once before a long rest.' }
          ],
        },
        { 
          level: 10, 
          title: 'Archetype Focus', 
          features: [
            { 
              name: 'Martial Archetype Feature', 
              description: 'You gain a feature from your chosen Martial Archetype. Refer to the Martial Archetypes section for specific details.', 
              isSubclassFeature: true 
            }
          ] 
        },
        { 
          level: 11, 
          title: 'Extra Attack (2nd)', 
          features: [
            { name: 'Extra Attack', description: 'You can now attack three times, instead of twice, whenever you take the Attack action on your turn.' }
          ] 
        },
        { 
          level: 12, 
          title: 'Peak Physicality', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 13, 
          title: 'Indomitable Will', 
          features: [
            { name: 'Indomitable (2 uses)', description: 'You can now use Indomitable twice between long rests.' }
          ] 
        },
        { 
          level: 14, 
          title: 'Master of Arms', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 15, 
          title: 'Archetype Mastery', 
          features: [
            { 
              name: 'Martial Archetype Feature', 
              description: 'You gain a feature from your chosen Martial Archetype. Refer to the Martial Archetypes section for specific details.', 
              isSubclassFeature: true 
            }
          ] 
        },
        { 
          level: 16, 
          title: 'Legendary Warrior', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 17, 
          title: 'Relentless Assault & Willpower', 
          features: [
            { name: 'Action Surge (2 uses)', description: 'You can now use Action Surge twice before a rest.', isCritical: true }, 
            { name: 'Indomitable (3 uses)', description: 'You can now use Indomitable three times between long rests.' }
          ] 
        },
        { 
          level: 18, 
          title: 'Martial Archetype Capstone', 
          features: [
            { 
              name: 'Martial Archetype Feature', 
              description: 'You gain your capstone feature from your chosen Martial Archetype. Refer to the Martial Archetypes section for details.', 
              isSubclassFeature: true 
            }
          ] 
        },
        {
          level: 19,
          title: 'Unrivaled Skill',
          features: [
            { name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }
          ]
        },
        {
          level: 20,
          title: 'Extra Attack (3rd)',
          features: [
            { name: 'Extra Attack', description: 'You can now attack four times, instead of three, whenever you take the Attack action on your turn.', isCritical: true }
          ]
        } 
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'fighter-mechanics',
      title: 'Core Martial Abilities',
      intro: "Fighters are defined by their exceptional combat abilities and resilience.",
      mechanics: [
        { name: 'Fighting Style', description: 'At 1st level, fighters choose a specialized combat style, such as Archery, Defense, Dueling, Great Weapon Fighting, Protection, or Two-Weapon Fighting, enhancing their preferred method of combat.' },
        { name: 'Second Wind', description: 'A pool of self-healing available once per short or long rest, allowing a fighter to regain 1d10 + fighter level hit points as a bonus action.' },
        { name: 'Action Surge', description: 'Grants an additional action on the fighter\'s turn. This incredibly versatile ability can be used for extra attacks, spellcasting (for Eldritch Knights), or any other action. Recharges on a short or long rest (two uses at 17th level).', isCritical: true },
        { name: 'Extra Attack', description: 'Fighters gain more attacks as part of their Attack action than any other class: one additional attack at 5th level, a second additional attack at 11th level, and a third additional attack at 20th level (for a total of four attacks).', isCritical: true },
        { name: 'Indomitable', description: 'Allows a fighter to reroll a failed saving throw. Gains multiple uses at higher levels.' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'fighter-archetypes',
      title: 'Martial Archetypes (Subclasses)',
      intro: 'At 3rd level, a Fighter chooses a Martial Archetype, which defines their specialized combat philosophy and techniques.',
      subclasses: [
        {
          id: 'battle-master',
          name: 'Battle Master',
          description: 'Tactical warriors who use special combat maneuvers fueled by superiority dice to control the battlefield, enhance attacks, and protect allies.',
          note: "Known for versatility and strategic depth. Offers many options for controlling enemies and buffing allies.",
          features: [
            { name: 'Combat Superiority', level: 3, description: 'You learn maneuvers that are fueled by special dice called superiority dice. You learn three maneuvers of your choice. You gain four superiority dice, which are d8s (d10 at L10, d12 at L18). A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.' },
            { name: 'Student of War', level: 3, description: 'You gain proficiency with one type of artisan’s tools of your choice.' },
            { name: 'Know Your Enemy', level: 7, description: 'If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own (e.g., higher/lower Strength, AC, current HP, total class levels, fighter class levels).' },
            { name: 'Improved Combat Superiority', level: 10, description: 'Your superiority dice turn into d10s. At 18th level, they turn into d12s.' },
            { name: 'Relentless', level: 15, description: 'When you roll initiative and have no superiority dice remaining, you regain 1 superiority die.' }
          ]
        },
        {
          id: 'champion',
          name: 'Champion',
          description: 'A straightforward and physically dominant warrior who excels at critical hits and embodies athletic perfection.',
          note: "Simple yet effective, focusing on enhanced criticals and raw physical prowess.",
          features: [
            { name: 'Improved Critical', level: 3, description: 'Your weapon attacks score a critical hit on a roll of 19 or 20.' },
            { name: 'Remarkable Athlete', level: 7, description: 'You can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.' },
            { name: 'Additional Fighting Style', level: 10, description: 'You learn a second option from the Fighting Style class feature.' },
            { name: 'Superior Critical', level: 15, description: 'Your weapon attacks score a critical hit on a roll of 18–20.' },
            { name: 'Survivor', level: 18, description: 'At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points.' }
          ]
        },
        {
          id: 'eldritch-knight',
          name: 'Eldritch Knight',
          description: 'A fighter who blends martial skill with arcane magic, primarily from the Wizard\'s schools of Abjuration and Evocation. They can bond with weapons and enhance attacks with spells.',
          note: "A versatile 'gish' build, combining Fighter resilience with Wizard spellcasting for offense and defense.",
          features: [
            { name: 'Spellcasting (Eldritch Knight)', level: 3, description: 'You gain the ability to cast wizard spells, using Intelligence as your spellcasting ability. You know two cantrips of your choice from the wizard spell list. You learn three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list. You follow third-caster spell slot progression.' },
            { name: 'Weapon Bond', level: 3, description: 'You learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond. Once you have bonded a weapon to yourself, you can’t be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand. You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two.' },
            { name: 'War Magic', level: 7, description: 'When you use your action to cast a cantrip, you can make one weapon attack as a bonus action.' },
            { name: 'Eldritch Strike', level: 10, description: 'When you hit a creature with a weapon attack, the creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.' },
            { name: 'Arcane Charge', level: 15, description: 'When you use your Action Surge, you can teleport up to 30 feet to an unoccupied space you can see before or after the additional action. You can teleport before or after the additional action.' },
            { name: 'Improved War Magic', level: 18, description: 'When you use your action to cast a spell, you can make one weapon attack as a bonus action.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'fighter-feats',
      title: 'Key Feats for the Fighter',
      intro: "Fighters get more Ability Score Improvements/Feats than any other class, allowing for significant customization. Feats can enhance their chosen combat style, improve survivability, or add utility.",
      categories: [
        {
          categoryName: 'Core Combat Feats',
          description: 'These feats directly enhance a Fighter\'s martial capabilities.',
          feats: [
            { name: 'Great Weapon Master', description: 'For two-handed weapon users. Take a -5 penalty to attack for +10 damage. Also, gain a bonus action attack on a crit or when reducing a foe to 0 HP.', note: 'High risk, high reward. Very effective for damage output.' },
            { name: 'Polearm Master', description: 'Grants a bonus action attack with polearms and an opportunity attack when enemies enter reach.', note: 'Excellent for increasing attacks per round and controlling space.' },
            { name: 'Sharpshooter', description: 'For ranged attackers. Ignore long range disadvantage and cover. Take -5 to hit for +10 damage.', note: 'Essential for maximizing ranged damage.' },
            { name: 'Crossbow Expert', description: 'Ignore loading quality, no disadvantage on ranged attacks in melee, bonus action hand crossbow attack.', note: 'Pairs well with Sharpshooter for hand crossbow builds.' },
            { name: 'Sentinel', description: 'Stops enemies in their tracks with opportunity attacks, great for protecting allies and controlling space.', note: 'Especially effective for tank/defender builds.'}
          ]
        },
        {
          categoryName: 'Survivability & Utility Feats',
          description: 'These feats increase resilience or provide broader options.',
          feats: [
            { name: 'Tough', description: 'Hit point maximum increases by an amount equal to twice your level.', note: 'Significantly boosts survivability.' },
            { name: 'Resilient (Wisdom or Dexterity)', description: 'Increase the chosen ability by 1 and gain proficiency in its saving throws.', note: 'Wisdom saves are a common weakness for Fighters. Dexterity can be useful if not already proficient.' },
            { name: 'Lucky', description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws.', note: 'Universally powerful for critical moments.' },
            { name: 'Alert', description: '+5 to initiative, can’t be surprised, negates advantage for hidden attackers.', note: 'Going first can be a significant advantage.' },
            { name: 'Mobile', description: '+10ft speed, Dash ignores difficult terrain, avoid OAs from creatures you attack.', note: 'Great for skirmishing and repositioning.'}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'fighter-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What is your Fighter's background? Are they a formal knight, a grizzled mercenary, a disciplined soldier, a wandering warrior, or a self-taught prodigy?",
        "What is their preferred fighting style and weapon? Do they see combat as an art, a duty, a necessary evil, or a thrill?",
        "What are their motivations beyond combat? Are they seeking glory, protecting a cause, avenging a wrong, or simply trying to survive?",
        "How do they view their martial skills? As a tool, a responsibility, or a source of pride?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'fighter-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Fighter is a popular class to dip into for Action Surge and a Fighting Style. Fighter levels also grant many ASIs/Feats.",
        "Multiclassing out of Fighter can provide spellcasting or unique abilities that complement their martial base."
      ],
      goodCombinations: [
        { className: "Barbarian", synergy: "Rage and Reckless Attack complement Fighter's martial prowess. Good for Strength-based builds seeking more damage and resilience.", levels: "1-3 Barbarian" },
        { className: "Rogue", synergy: "Sneak Attack (if using finesse weapons), Cunning Action, and Expertise can add significant utility and damage, especially for Dexterity-based Fighters.", levels: "1-3 Rogue" },
        { className: "Paladin", synergy: "Divine Smite, spellcasting, and Auras. Shares Strength/Charisma focus for certain builds. Good for a holy warrior concept.", levels: "2-6 Paladin" },
        { className: "Wizard (for Eldritch Knight)", synergy: "More Wizard levels significantly boost spellcasting for Eldritch Knights, granting more spell slots and higher-level spells.", levels: "Fighter (EK) X / Wizard Y" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'fighter-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "Appropriate armor (Chain Mail for Strength, Studded Leather for Dexterity).",
        "A shield if using a one-handed weapon.",
        "Martial weapon(s) suited to your Fighting Style (e.g., longsword, greatsword, longbow, rapier)."
      ],
      midGame: [
        "+1/+2 armor, shield, and weapon(s).",
        "Items that boost primary combat stats (Strength or Dexterity, e.g., Gauntlets of Ogre Power, Belt of Giant Strength).",
        "Amulet of Health for Constitution.",
        "Boots of Speed, Winged Boots for mobility."
      ],
      lateGame: [
        "+2/+3 armor, shield, and weapon(s), possibly legendary items.",
        "Items that significantly boost primary stats or provide powerful offensive/defensive abilities.",
        "Manuals/Tomes for permanent stat increases."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'fighter-closing',
      title: 'The Unmatched Combatant',
      content: [
        "The Fighter is the quintessential warrior, a master of arms and armor whose skill in battle is unparalleled. Their adaptability and resilience make them a vital asset to any group.",
        "With a wide array of Martial Archetypes and more opportunities for feats than any other class, Fighters can be customized to fit nearly any combat role or concept.",
        "Whether a disciplined soldier, a cunning tactician, a magically-infused knight, or a simple but deadly champion, the Fighter stands ready to face any challenge with courage and skill."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Human', 
      note: 'Highly adaptable. ASIs and feat come from your chosen Origin.',
    },
    origin: {
      name: 'Guard Origin', 
      note: 'Provides Athletics and Perception, very fitting for a Fighter. The feat can be a core combat feat.',
      recommendedFeat: 'Great Weapon Master',
      skillProficiencies: ["Athletics", "Perception"]
    },
    abilityPriority: ['Strength (Primary for damage/heavy armor) / Dexterity (for Finesse/Ranged builds)', 'Constitution (High for HP)', 'Wisdom (Saves)', 'Charisma (Low)', 'Intelligence (Low, unless Eldritch Knight)'],
    keyClassSkills: ['Athletics', 'Perception', 'Intimidation (if Str focus)', 'Acrobatics (if Dex focus)'],
    generalLevelRecommendations: [
      { level: 1, recommendation: { 
          featSuggestion: 'Great Weapon Master (Recommended via Guard Origin - for two-handed weapon users). Alternative: Polearm Master or Sharpshooter depending on build.',
          fightingStyle: 'Defense (+1 AC), Great Weapon Fighting (for two-handed weapons), Archery (for ranged), Dueling (+2 damage one-handed).',
          notes: 'Prioritize your main attack stat (Str or Dex). Your Origin provides your 1st-level feat.'
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Strength OR +2 Dexterity',
          notes: 'Boosting your primary attack stat is usually the best choice.'
      }},
      { level: 6, recommendation: {
          asiChoice: 'Feat: Sentinel OR another +2 to primary stat.',
          notes: 'Sentinel is great for melee control. Maxing primary stat is strong.'
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 to primary stat (to max) OR +2 Constitution.',
      }},
      { level: 12, recommendation: {
          asiChoice: 'Feat: Tough OR Resilient (Wisdom) OR another combat feat.',
      }},
    ],
    subclassSpecificRecommendations: {
      'Battle Master': [
        { level: 3, recommendation: { 
            notes: 'Choose maneuvers that fit your style: Trip Attack, Pushing Attack, Riposte, Precision Attack are all strong.' 
        }},
        { level: 4, recommendation: { 
            asiChoice: '+2 Strength/Dexterity or Feat: Martial Adept (for more maneuvers/dice).' 
        }},
      ],
      'Champion': [
        { level: 3, recommendation: { notes: 'Improved Critical helps with damage output consistently. Build for criticals if possible (e.g., Half-Orc species if allowed for Savage Attacks).' }},
        { level: 4, recommendation: { asiChoice: '+2 Strength/Dexterity.' }},
      ],
      'Eldritch Knight': [
        { level: 3, recommendation: { 
            spellSuggestions: ['Cantrips: Booming Blade/Green-Flame Blade, Light/Mage Hand. Spells: Shield, Absorb Elements, Find Familiar, Protection from Evil and Good.'],
            notes: 'Prioritize Strength/Dexterity, then Constitution, then Intelligence (for spell DC).' 
        }},
        { level: 4, recommendation: { asiChoice: '+2 Strength/Dexterity or Feat: War Caster (if focusing on concentration spells and combat casting).' }},
        { level: 8, recommendation: { asiChoice: '+2 Intelligence OR continue Str/Dex.'}}
      ]
    }
  }
};
