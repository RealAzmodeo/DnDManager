
import { ClassDefinition } from '../types';

export const paladinClassData: ClassDefinition = {
  className: "Paladin",
  classTitle: "The Tome of Sacred Oaths",
  classDescription: "Become a holy warrior bound by a sacred oath, blending martial prowess with divine magic to smite evil and protect the innocent.",
  themeColor: "yellow", // Often associated with divine light
  sections: [
    {
      type: 'intro',
      sectionId: 'paladin-intro',
      title: 'Paladin Class Overview',
      content: [
        "The Paladin is a holy warrior, a beacon of their deity's power or the embodiment of a sacred oath. They are bound by their convictions, channeling divine energy to heal the sick, protect the innocent, and vanquish their foes.",
        "A Paladin's power comes as much from their commitment to justice as it does from a deity. Whether serving a benevolent god, a dark entity, or a philosophical ideal, their oath is the source of their might."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'paladin-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Striker/Defender - Paladins excel at dealing significant burst damage with Divine Smite and can be very durable thanks to heavy armor, Lay on Hands, and defensive auras.",
        "Secondary Role: Support/Face - Their auras provide powerful party-wide buffs, and Charisma as a key ability makes them effective negotiators and leaders.",
        "Playstyle: Upholding their oath is central. Paladins combine martial combat with spellcasting, carefully managing resources like spell slots (for Smites and spells) and Lay on Hands. They are often at the forefront of battle, inspiring allies and striking fear into enemies."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'paladin-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "High burst damage potential via Divine Smite.",
        "Excellent survivability with heavy armor, shield proficiency, and Lay on Hands.",
        "Powerful party-wide buffs through Auras (especially Aura of Protection).",
        "Good single-target control and debuff options.",
        "Strong social capabilities due to Charisma focus.",
        "Access to healing and support spells."
      ],
      weaknesses: [
        "Fewer spell slots than dedicated casters; heavily reliant on them for Divine Smite.",
        "Oath tenets can be restrictive and challenging to roleplay consistently.",
        "Can be Multiple Ability Dependent (MAD), needing Strength (or Dexterity), Constitution, and Charisma.",
        "Many core features (Smites, Lay on Hands, Channel Divinity) recharge on a long rest.",
        "Limited ranged attack options without specific builds or magic items."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'paladin-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd10 per Paladin level.' },
        { name: 'Primary Attributes', description: 'Strength (for attacks and damage with most weapons, heavy armor) or Dexterity (for finesse builds), Charisma (spellcasting, Lay on Hands, Aura effects, social skills), Constitution (hit points).' },
        { name: 'Saving Throws', description: 'Wisdom and Charisma.' },
        { name: 'Proficiencies', description: 'All armor (light, medium, heavy), shields, simple weapons, martial weapons.' },
        { name: 'Spellcasting', description: 'Paladins are half-casters, preparing spells daily from the Paladin spell list. Uses Charisma as their spellcasting ability.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'paladin-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Divine Calling & Healing Touch',
          features: [
            { name: 'Divine Sense', description: 'As an action, you can open your awareness to detect strong celestial, fiendish, or undead presences, or consecrated/desecrated places/objects. Usable Charisma modifier + 1 times per long rest.' },
            { name: 'Lay on Hands', description: 'You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it.' }
          ],
        },
        {
          level: 2,
          title: 'Martial Prowess & Divine Might',
          features: [
            { name: 'Fighting Style', description: 'You adopt a particular style of fighting as your specialty. Choose one from options like Defense, Dueling, Great Weapon Fighting, or Protection.' },
            { name: 'Spellcasting', description: 'You gain the ability to cast paladin spells, preparing a list of spells each day.' },
            { name: 'Divine Smite', description: 'Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.' }
          ],
        },
        {
          level: 3,
          title: 'Oath Sworn & Divine Health',
          features: [
            { name: 'Divine Health', description: 'By 3rd level, the divine magic flowing through you makes you immune to disease.' },
            { 
              name: 'Sacred Oath Feature (Channel Divinity Options & Tenets)', 
              description: 'You swear the oath that binds you as a paladin forever. Your choice grants you features at 3rd level (including Channel Divinity options), and again at 7th, 15th, and 20th level. See the Sacred Oaths section for details.', 
              isSubclassFeature: true 
            },
          ],
        },
        { 
          level: 4, 
          title: 'Divine Enhancement', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, 
            { name: 'Martial Versatility (Optional Rule)', description: 'You can swap your Fighting Style for another paladin Fighting Style when you gain an ASI.'}
          ] 
        },
        { 
          level: 5, 
          title: 'Extra Attack', 
          features: [
            { name: 'Extra Attack', description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' }
          ] 
        },
        {
          level: 6,
          title: 'Aura of Protection',
          features: [
            { name: 'Aura of Protection', description: 'Whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. At 18th level, the range of this aura increases to 30 feet.', isCritical: true }
          ],
        },
        { 
          level: 7, 
          title: 'Sacred Oath Feature (Aura or Other)', 
          features: [
            { 
              name: 'Sacred Oath Feature', 
              description: 'You gain a feature from your chosen Sacred Oath (often another aura). Refer to the Sacred Oaths section for specific details.', 
              isSubclassFeature: true 
            }
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
          title: 'Greater Spells', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 3rd-level spells.' }
          ] 
        },
        {
          level: 10,
          title: 'Aura of Courage',
          features: [
            { name: 'Aura of Courage', description: 'You and friendly creatures within 10 feet of you can’t be frightened while you are conscious. At 18th level, the range of this aura increases to 30 feet.' }
          ],
        },
        {
          level: 11,
          title: 'Improved Divine Smite',
          features: [
            { name: 'Improved Divine Smite', description: 'Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite.' }
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
          title: 'Sacred Spells', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 4th-level spells.' }
          ] 
        },
        {
          level: 14,
          title: 'Cleansing Touch',
          features: [
            { name: 'Cleansing Touch', description: 'You can use your action to end one spell on yourself or on one willing creature that you touch. You can use this feature a number of times equal to your Charisma modifier (minimum of once). You regain expended uses when you finish a long rest.' }
          ],
        },
        { 
          level: 15, 
          title: 'Oath Mastery', 
          features: [
            { 
              name: 'Sacred Oath Feature', 
              description: 'You gain a feature from your chosen Sacred Oath. Refer to the Sacred Oaths section for specific details.', 
              isSubclassFeature: true 
            }
          ] 
        },
        { 
          level: 16, 
          title: 'Legendary Champion', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 17, 
          title: 'Pinnacle of Faith', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 5th-level spells.' }
          ] 
        },
        { 
          level: 18, 
          title: 'Aura Improvements', 
          features: [
            { name: 'Aura Improvements', description: 'The range of your Aura of Protection and Aura of Courage increases to 30 feet.' }
          ] 
        },
        { 
          level: 19, 
          title: 'Epic Boon Granted / Final ASI', 
          features: [
            { name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }
          ] 
        },
        { 
          level: 20, 
          title: 'Oath Incarnate', 
          features: [
            { 
              name: 'Sacred Oath Capstone', 
              description: 'You gain a powerful capstone feature from your chosen Sacred Oath, often a temporary transformation. Refer to the Sacred Oaths section for specific details.', 
              isSubclassFeature: true, 
              isCritical: true 
            }
          ] 
        },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'paladin-divine-abilities',
      title: 'Unique Divine Abilities',
      intro: "Paladins wield divine power through their unwavering conviction and connection to their oath, manifesting in several key abilities.",
      mechanics: [
        { name: 'Lay on Hands', description: 'A pool of healing energy (Paladin Level x 5 HP) that can be used to restore hit points to creatures with a touch, or to cure diseases and neutralize poisons. A versatile and significant healing resource.' },
        { name: 'Divine Smite', description: 'The Paladin\'s signature combat ability. By expending a spell slot when hitting with a melee weapon attack, they can deal additional radiant damage, which is especially effective against fiends and undead. This allows for massive burst damage.' },
        { name: 'Channel Divinity', description: 'At 3rd level, Paladins gain the ability to channel divine energy for specific effects. Each Sacred Oath grants two distinct Channel Divinity options, providing tactical versatility. Usable once per short or long rest (usage may increase with some items or boons).' },
        { name: 'Auras', description: 'Paladins project powerful auras that bolster themselves and nearby allies. Key auras include Aura of Protection (bonus to all saving throws) and Aura of Courage (immunity to fear). Specific Oaths grant additional unique auras.', isCritical: true }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'paladin-oaths',
      title: 'Sacred Oaths (Subclasses)',
      intro: 'At 3rd level, a Paladin swears a Sacred Oath, a vow that defines their moral code and grants them divine power. This choice is the cornerstone of a Paladin\'s identity.',
      subclasses: [
        {
          id: 'oath-of-devotion',
          name: 'Oath of Devotion',
          description: 'The archetypal knight in shining armor, upholding justice, righteousness, and order.',
          note: "Tenets: Honesty, Courage, Compassion, Honor, Duty. Oath Spells: Protection from Evil and Good, Sanctuary (L3); Lesser Restoration, Zone of Truth (L5); Beacon of Hope, Dispel Magic (L9); Freedom of Movement, Guardian of Faith (L13); Commune, Flame Strike (L17).",
          features: [
            { name: 'Channel Divinity: Sacred Weapon', level: 3, description: 'As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.' },
            { name: 'Channel Divinity: Turn the Unholy', level: 3, description: 'As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.' },
            { name: 'Aura of Devotion', level: 7, description: 'You and friendly creatures within 10 feet of you can’t be charmed while you are conscious. At 18th level, the range of this aura increases to 30 feet.' },
            { name: 'Purity of Spirit', level: 15, description: 'You are always under the effects of a Protection from Evil and Good spell.' },
            { name: 'Holy Nimbus', level: 20, description: 'As an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that. If a hostile creature starts its turn in the bright light, it takes 10 radiant damage. In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.' }
          ]
        },
        {
          id: 'oath-of-the-ancients',
          name: 'Oath of the Ancients',
          description: 'Guardians of light and life, preserving the beauty of the natural world and the joy of existence.',
          note: "Tenets: Kindle the Light, Shelter the Light, Preserve Your Own Light, Be the Light. Oath Spells: Ensnaring Strike, Speak with Animals (L3); Misty Step, Moonbeam (L5); Plant Growth, Protection from Energy (L9); Ice Storm, Stoneskin (L13); Commune with Nature, Tree Stride (L17).",
          features: [
            { name: 'Channel Divinity: Nature\'s Wrath', level: 3, description: 'You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.' },
            { name: 'Channel Divinity: Turn the Faithless', level: 3, description: 'You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.' },
            { name: 'Aura of Warding', level: 7, description: 'You and friendly creatures within 10 feet of you have resistance to damage from spells. At 18th level, the range of this aura increases to 30 feet.' },
            { name: 'Undying Sentinel', level: 15, description: 'When you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can’t use it again until you finish a long rest. Additionally, you suffer none of the drawbacks of old age, and you can’t be aged magically.' },
            { name: 'Elder Champion', level: 20, description: 'As an action, you can assume the form of an ancient force of nature, taking on an appearance you choose. For 1 minute, you gain the following benefits: At the start of each of your turns, you regain 10 hit points. Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead. Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.' }
          ]
        },
        {
          id: 'oath-of-vengeance',
          name: 'Oath of Vengeance',
          description: 'Relentless avengers who punish transgressors and deliver justice to the wicked by any means necessary.',
          note: "Tenets: Fight the Greater Evil, No Mercy for the Wicked, By Any Means Necessary, Restitution. Oath Spells: Bane, Hunter's Mark (L3); Hold Person, Misty Step (L5); Haste, Protection from Energy (L9); Banishment, Dimension Door (L13); Hold Monster, Scrying (L17).",
          features: [
            { name: 'Channel Divinity: Abjure Enemy', level: 3, description: 'As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw. On a failed save, the creature is frightened for 1 minute or until it takes damage. While frightened, the creature’s speed is 0, and it can’t benefit from any bonus to its speed.' },
            { name: 'Channel Divinity: Vow of Enmity', level: 3, description: 'As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.' },
            { name: 'Relentless Avenger', level: 7, description: 'When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn’t provoke opportunity attacks.' },
            { name: 'Soul of Vengeance', level: 15, description: 'When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.' },
            { name: 'Avenging Angel', level: 20, description: 'As an action, you can undergo a transformation. For 1 hour, you gain the following benefits: Wings sprout from your back and grant you a flying speed of 60 feet. You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.' }
          ]
        },
        {
          id: 'oath-of-conquest',
          name: 'Oath of Conquest',
          description: 'Warriors of iron will who seek to crush chaos, douse the flames of hope in their enemies, and rule with absolute authority.',
          note: "Tenets: Douse the Flame of Hope, Rule with an Iron Fist, Strength Above All. Oath Spells: Armor of Agathys, Command (L3); Hold Person, Spiritual Weapon (L5); Bestow Curse, Fear (L9); Dominate Beast, Stoneskin (L13); Cloudkill, Dominate Person (L17).",
          features: [
            { name: 'Channel Divinity: Conquering Presence', level: 3, description: 'As an action, you can use your Channel Divinity to exude a terrifying presence. Each creature of your choice that you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Channel Divinity: Guided Strike', level: 3, description: 'You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.' },
            { name: 'Aura of Conquest', level: 7, description: 'You constantly emanate a menacing aura while you’re not incapacitated. The aura extends 10 feet from you in every direction, but not through total cover. If a creature is frightened of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there. At 18th level, the range of this aura increases to 30 feet.' },
            { name: 'Scornful Rebuke', level: 15, description: 'When a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you’re not incapacitated.' },
            { name: 'Invincible Conqueror', level: 20, description: 'As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute: You have resistance to all damage. When you take the Attack action on your turn, you can make one additional attack as part of that action. Your melee weapon attacks score a critical hit on a roll of 19 or 20.' }
          ]
        }
      ],
    },
    {
        type: 'feats',
        sectionId: 'paladin-feats',
        title: 'Key Feats for the Paladin',
        intro: "Paladins are martial characters who also rely on Charisma for their spellcasting and class features. Feats that enhance their combat prowess, spellcasting (especially concentration), or Charisma are highly valuable.",
        categories: [
          {
            categoryName: 'Martial Prowess Feats',
            description: 'These feats significantly boost a Paladin\'s effectiveness in melee combat.',
            feats: [
              {
                name: 'Polearm Master',
                description: 'Grants a bonus action attack with polearms (glaive, halberd, quarterstaff, spear) and an opportunity attack when enemies enter reach.',
                note: 'Excellent for increasing damage output and battlefield control, especially when combined with Sentinel.'
              },
              {
                name: 'Great Weapon Master',
                description: 'Allows a -5 penalty to attack for +10 damage with heavy weapons. Grants a bonus action attack on a critical hit or when reducing a creature to 0 HP with a melee weapon.',
                note: 'A high-risk, high-reward feat for Paladins using two-handed heavy weapons, significantly boosting damage potential.'
              },
              {
                name: 'Sentinel',
                description: 'Opportunity attacks stop movement. Enemies provoke even if they Disengage. Attack as a reaction if an enemy near you attacks someone else.',
                note: 'Superb for controlling enemies and protecting allies, synergizes very well with Polearm Master.'
              }
            ]
          },
          {
            categoryName: 'Spellcasting & General Enhancement Feats',
            description: 'These feats improve spellcasting, survivability, or overall utility.',
            feats: [
              {
                name: 'War Caster',
                description: 'Advantage on Con saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.',
                note: 'Very important for maintaining concentration on smite spells, buff spells like Bless, or control spells.'
              },
              {
                name: 'Resilient (Constitution)',
                description: 'Increase Constitution by 1. Gain proficiency in Constitution saving throws.',
                note: 'Boosts Constitution saving throws (critical for concentration) and hit points. A strong defensive choice.'
              },
              {
                name: 'Lucky',
                description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws, or make an enemy reroll an attack.',
                note: 'A universally strong feat that can turn the tide in critical situations, ensuring a Divine Smite lands or a crucial save is made.'
              },
              {
                name: 'Inspiring Leader',
                description: 'Spend 10 minutes to grant temporary HP (level + Cha mod) to yourself and up to six friendly creatures. Recharges on short/long rest.',
                note: 'Excellent for Paladins with high Charisma, significantly boosting party survivability before tough encounters.'
              },
              {
                name: 'Fey Touched',
                description: 'Increase Cha, Int, or Wis by 1. Learn Misty Step and one 1st-level Divination or Enchantment spell.',
                note: 'Boosts Charisma and grants Misty Step for mobility, plus another useful spell (e.g., Bless, Command, Silvery Barbs). Very versatile.'
              }
            ]
          }
        ]
      },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'paladin-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "Your Oath is paramount. How did you come to swear it? What event solidified your commitment?",
        "How do you interpret the tenets of your Oath? Are you rigid and dogmatic, or more pragmatic and flexible?",
        "What is your relationship with the divine? Do you serve a specific deity, or is your power drawn purely from your conviction?",
        "Paladins often stand out. How do common folk react to your unwavering presence and divine power? Are you a symbol of hope, fear, or judgment?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'paladin-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Paladins benefit greatly from Charisma, making classes that also use Charisma for casting (Sorcerer, Warlock, Bard) popular multiclass choices.",
        "Dipping into Paladin for Divine Smite and heavy armor proficiency is common for other Charisma-based martial characters."
      ],
      goodCombinations: [
        { className: "Sorcerer", synergy: "More spell slots for Smites, access to Quicken Spell for bonus action spells then attacks, and powerful Sorcerer spells. Divine Soul Sorcerer thematically fits.", levels: "Paladin 6-7 / Sorcerer X" },
        { className: "Warlock (Hexblade)", synergy: "Allows using Charisma for attack and damage rolls with one weapon, reducing MAD. Pact Magic slots recover on short rest for more Smites. Eldritch Blast provides ranged option.", levels: "Paladin X / Warlock 1-3" },
        { className: "Bard (College of Swords/Valor/Lore)", synergy: "More skills, Expertise, more spell slots for Smites/utility, and Bardic Inspiration. Swords/Valor adds martial flair.", levels: "Paladin 6-7 / Bard X" },
        { className: "Fighter", synergy: "Action Surge (2 levels) is always good for nova rounds. Battle Master maneuvers can add tactical options.", levels: "Paladin X / Fighter 1-3"}
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'paladin-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "Heavy armor (e.g., Chain Mail, later Plate).",
        "A shield.",
        "A martial weapon suited to your Fighting Style (e.g., longsword for Dueling, greatsword/maul for Great Weapon Fighting, spear/halberd for Polearm Master).",
        "A holy symbol emblazoned on your shield or worn as an amulet."
      ],
      midGame: [
        "+1/+2 armor, shield, and weapon.",
        "Items that boost Strength or Charisma (Gauntlets of Ogre Power, Belt of Giant Strength, Ioun Stone of Leadership or similar for Charisma).",
        "Amulet of Health for Constitution.",
        "Winged Boots or items granting enhanced mobility."
      ],
      lateGame: [
        "+2/+3 armor, shield, and weapon (legendary items like Holy Avenger).",
        "Items that significantly boost primary stats or provide powerful defensive/offensive abilities.",
        "Tomes that permanently increase Strength or Charisma."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'paladin-closing',
      title: 'The Unwavering Champion',
      content: [
        "The Paladin is a powerful and versatile class, capable of filling multiple roles within a party while upholding a strong thematic identity.",
        "Their blend of martial combat, divine spellcasting, and impactful auras makes them formidable on the battlefield and a beacon of hope (or dread) off it.",
        "Playing a Paladin is a commitment to an ideal, offering rich roleplaying opportunities as you strive to live by your sacred oath in a world that constantly tests it."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Human', 
      note: 'Flexible ASIs from Origin are key for Paladin MADness.',
    },
    origin: {
      name: 'Guard Origin', 
      note: 'Provides useful proficiencies and a starting feat. Paladins benefit greatly from combat feats.',
      recommendedFeat: 'Polearm Master',
      skillProficiencies: ["Athletics", "Perception"]
    },
    abilityPriority: ['Strength (Primary for damage/heavy armor) / Dexterity (for Finesse builds)', 'Charisma (Spellcasting, Auras, Lay on Hands, Social)', 'Constitution (HP, Concentration for some spells)', 'Wisdom (Saves)', 'Intelligence (Dump)', 'Dexterity (Dump if Str build with heavy armor)'],
    keyClassSkills: ['Athletics', 'Intimidation', 'Persuasion', 'Insight', 'Religion'],
    generalLevelRecommendations: [
      { level: 1, recommendation: { 
          featSuggestion: 'Polearm Master (Recommended via Guard Origin).',
          notes: 'Focus on Strength (or Dex for finesse) and Charisma. Ensure Con is decent. Heavy armor requires Str 13-15 for full plate.' 
      }},
      { level: 2, recommendation: {
          fightingStyle: 'Defense (+1 AC), Great Weapon Fighting (for two-handed weapons), Dueling (+2 damage with one-handed weapon and shield), or Protection (if shield-focused support).',
          spellSuggestions: ['Bless', 'Shield of Faith', 'Divine Favor', 'Wrathful Smite', 'Cure Wounds.'],
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Strength OR +2 Charisma OR Feat (Sentinel, Great Weapon Master, War Caster).',
          notes: 'Boost primary attack stat or Charisma for spells/auras. Key feats can greatly enhance combat effectiveness.'
      }},
      { level: 8, recommendation: {
          asiChoice: 'Continue boosting Str/Cha or take another key feat.',
          spellSuggestions: ['Aid', 'Find Steed', 'Lesser Restoration', 'Branding Smite.'], 
      }},
      { level: 12, recommendation: {
          asiChoice: 'Aim to max Str/Cha. Consider Resilient (Con) or Tough.',
          spellSuggestions: ['Aura of Vitality', 'Crusader\'s Mantle', 'Revivify', 'Blinding Smite', 'Dispel Magic.'],
      }},
      { level: 16, recommendation: {
          asiChoice: 'Further boost stats or pick up utility/defensive feats.',
          spellSuggestions: ['Death Ward', 'Find Greater Steed', 'Banishment', 'Staggering Smite.'],
      }},
      { level: 19, recommendation: {
          asiChoice: 'Epic Boon (e.g., Boon of Fortitude, Boon of Invincibility) OR +2 Str/Cha/Con.',
          spellSuggestions: ['Circle of Power', 'Holy Weapon', 'Raise Dead.'], 
      }},
    ],
    subclassSpecificRecommendations: {
      'Oath of Devotion': [
        { level: 3, recommendation: { notes: "Channel Divinity: Sacred Weapon is excellent for boosting accuracy."}},
        { level: 4, recommendation: { asiChoice: '+2 Charisma (boosts Sacred Weapon and saves).', spellSuggestions: ['Lean into protection and righteous smiting.'] }},
        { level: 8, recommendation: { asiChoice: '+2 Strength or another +2 Charisma.' }},
      ],
      'Oath of the Ancients': [
        { level: 3, recommendation: { notes: "Channel Divinity: Nature's Wrath can restrain foes. Turn the Faithless is situational."}},
        { level: 4, recommendation: { asiChoice: '+2 Charisma (for Aura of Warding).', spellSuggestions: ['Utilize Misty Step and Moonbeam effectively.'] }},
        { level: 8, recommendation: { asiChoice: 'Sentinel or Polearm Master for battlefield control to protect allies.' }},
      ],
      'Oath of Vengeance': [
        { level: 3, recommendation: { notes: "Channel Divinity: Vow of Enmity is powerful for single-target damage. Abjure Enemy for control."}},
        { level: 4, recommendation: { asiChoice: '+2 Strength or Great Weapon Master.', spellSuggestions: ['Hunter\'s Mark is key. Misty Step for mobility.'] }},
        { level: 8, recommendation: { asiChoice: '+2 Charisma (for Vow of Enmity success and spell DCs).', notes: 'Consider feats that grant advantage or more attacks.' }},
      ],
      'Oath of Conquest': [
        { level: 3, recommendation: { notes: "Channel Divinity: Conquering Presence is a strong AoE fear. Guided Strike for accuracy."}},
        { level: 4, recommendation: { asiChoice: '+2 Charisma (for Conquering Presence DC and Aura of Conquest damage).', spellSuggestions: ['Armor of Agathys and Command are excellent early on.'] }},
        { level: 8, recommendation: { asiChoice: 'Feat: Sentinel or Polearm Master to lock down frightened enemies. +Str is also good.', notes: 'Focus on fear effects and control.' }},
      ]
    }
  }
};
