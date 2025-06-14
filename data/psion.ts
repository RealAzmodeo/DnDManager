
import { ClassDefinition } from '../types';

export const psionClassData: ClassDefinition = {
    className: "Psion",
    classTitle: "The Psion's Mindscape",
    classDescription: "Unleash the power of the mind with this versatile psychic class.",
    themeColor: "purple",
    sections: [
      {
        type: 'intro',
        sectionId: 'psion-intro',
        title: 'Psion Class Overview',
        content: [
          "The Psion is a master of mental abilities, wielding psionic power to influence minds, manipulate objects, and alter reality itself. Unlike arcane or divine magic, psionics stem from the focused will and innate mental potential of the individual.",
          "Psions are often seen as enigmatic and introspective, their powers setting them apart. They can be formidable controllers, subtle manipulators, or even powerful damage dealers, depending on their chosen discipline."
        ],
      },
      {
        type: 'rolePlaystyle',
        sectionId: 'psion-role',
        title: 'Role & Playstyle',
        content: [
          "Primary Role: Controller/Utility - Excels at manipulating enemies and the environment, often providing unique solutions to problems through psionic powers.",
          "Secondary Role: Striker/Support - Depending on the discipline, can deal significant psychic damage or provide mental defenses and enhancements to allies.",
          "Playstyle: Resourceful and tactical. Relies on managing Psi Points and choosing the right psionic disciplines and powers for the situation. Often involves a more subtle or strategic approach to combat and social encounters."
        ]
      },
      {
        type: 'strengthsWeaknesses',
        sectionId: 'psion-proscons',
        title: 'Strengths & Weaknesses',
        strengths: [
          "Versatile power set through Psionic Disciplines, allowing for adaptation.",
          "Unique damage type (psychic) that bypasses many common resistances.",
          "Strong control abilities, capable of incapacitating or manipulating foes.",
          "Can excel in social encounters with mind-reading and influence abilities.",
          "Often less reliant on material components for their powers compared to traditional spellcasters."
        ],
        weaknesses: [
          "Can be fragile, typically with lower hit dice and armor proficiencies.",
          "Resource-dependent (Psi Points) for most abilities.",
          "Some creatures are immune or highly resistant to psychic damage or mental effects.",
          "May face suspicion or fear from those unfamiliar with psionic powers.",
          "Concentration is often required for many powerful psionic effects."
        ]
      },
      {
        type: 'baseTraits',
        sectionId: 'psion-core',
        title: 'Core Class Traits',
        items: [
          { name: 'Hit Dice', description: 'd6 per Psion level.' },
          { name: 'Primary Attributes', description: 'Intelligence (Psionic ability, Psi Point maximum, save DCs), Dexterity or Constitution (for defense and HP).' },
          { name: 'Saving Throws', description: 'Intelligence and Wisdom.' },
          { name: 'Proficiencies', description: 'Simple weapons, light armor (sometimes none, depending on tradition).' },
          { name: 'Psionic Focus', description: 'Often requires a psionic focus (like a crystal or a personal symbol) or can use powers without one.' },
          { name: 'Psi Points', description: 'The core resource used to fuel psionic powers and disciplines.'}
        ],
      },
      {
        type: 'levelProgression',
        sectionId: 'psion-levels',
        title: 'Class Features by Level',
        levels: [
          { 
            level: 1, 
            title: 'Awakening Mind', 
            features: [
              { name: 'Psionic Talent', description: 'You gain access to your pool of Psi Points and learn a few basic psionic talents (cantrip-equivalents).' }, 
              { 
                name: 'Psionic Discipline Feature', 
                description: 'You choose your initial Psionic Discipline (subclass) and gain its initial features. See the Psionic Disciplines section for details.', 
                isSubclassFeature: true
              }
            ] 
          },
          { 
            level: 2, 
            title: 'Mind Over Matter', 
            features: [
              { name: 'Psi Point Recovery', description: 'Regain some Psi Points on a short rest.' }, 
              { name: 'Telepathic Link', description: 'Establish a simple telepathic link with willing creatures.'}
            ] 
          },
          { 
            level: 3, 
            title: 'Discipline Focus', 
            features: [
              { 
                name: 'Psionic Discipline Feature', 
                description: 'You gain a new feature from your chosen Psionic Discipline. Refer to the Psionic Disciplines section for specific details.', 
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 4, 
            title: 'Mental Fortitude', 
            features: [
              { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
            ] 
          },
          { 
            level: 5, 
            title: 'Empowered Psionics', 
            features: [
              { name: 'Potent Psionics', description: 'Add your Intelligence modifier to damage dealt by psionic talents or certain discipline powers.' }
            ] 
          },
          { 
            level: 6, 
            title: 'Discipline Advancement', 
            features: [
              { 
                name: 'Psionic Discipline Feature', 
                description: 'You gain a new feature from your chosen Psionic Discipline. Refer to the Psionic Disciplines section for specific details.', 
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 7, 
            title: 'Expanded Consciousness', 
            features: [
              { name: 'Learn New Discipline Power', description: 'Learn an additional power from your known disciplines.'}
            ] 
          },
          { 
            level: 8, 
            title: 'Mental Acuity', 
            features: [
              { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
            ] 
          },
          { 
            level: 9, 
            title: 'Greater Psionics', 
            features: [
              { name: 'Access to Higher Tier Powers', description: 'You can now manifest more powerful psionic effects.' }
            ] 
          },
          { 
            level: 10, 
            title: 'Discipline Specialization', 
            features: [
              { 
                name: 'Psionic Discipline Feature', 
                description: 'You gain a new feature from your chosen Psionic Discipline. Refer to the Psionic Disciplines section for specific details.', 
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 11, 
            title: 'Psionic Mastery', 
            features: [
              { name: 'Mastered Power', description: 'Choose one psionic power you know; you can manifest it once without expending Psi Points per long rest.' }
            ] 
          },
          { 
            level: 12, 
            title: 'Unwavering Mind', 
            features: [
              { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
            ] 
          },
          { 
            level: 13, 
            title: 'Mind Palace', 
            features: [
              { name: 'Mental Bastion', description: 'Gain advantage on saving throws against being charmed or frightened.' }
            ] 
          },
          { 
            level: 14, 
            title: 'Discipline Apex', 
            features: [
              { 
                name: 'Psionic Discipline Feature', 
                description: 'You gain a powerful capstone feature from your chosen Psionic Discipline. Refer to the Psionic Disciplines section for specific details.', 
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 15, 
            title: 'Psionic Surge', 
            features: [
              { name: 'Psionic Surge', description: 'Once per long rest, you can empower a psionic effect to its maximum potential or gain a significant bonus to its effect.' }
            ] 
          },
          { 
            level: 16, 
            title: 'Transcendent Thought', 
            features: [
              { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
            ] 
          },
          { 
            level: 17, 
            title: 'Psionic Avatar', 
            features: [
              { name: 'Become Psionic Energy', description: 'Briefly transform into pure psionic energy, gaining resistances and special movement.' }
            ] 
          },
          { 
            level: 18, 
            title: 'Infinite Mind', 
            features: [
              { name: 'Greater Psi Point Recovery', description: 'Regain more Psi Points on a short rest.'}
            ] 
          },
          { 
            level: 19, 
            title: 'Epic Boon Granted', 
            features: [
              { name: 'Epic Boon', description: 'Gain an Epic Boon. Boon of Telepathy or Mental Might recommended.' }
            ] 
          },
          { 
            level: 20, 
            title: 'Ascendant Psion', 
            features: [
              { name: 'Psionic Apotheosis', description: 'Your mastery of psionics reaches its peak, allowing you to use your most powerful abilities more freely or regain all Psi Points once per day.' }
            ] 
          },
        ],
      },
      {
        type: 'uniqueMechanics',
        sectionId: 'psion-psi',
        title: 'Psionic Powers & Psi Points',
        intro: "Psions fuel their abilities with Psi Points, a measure of their mental energy. Different powers and disciplines cost varying amounts of Psi Points. Psi Points are typically recovered on short or long rests.",
        mechanics: [
          { name: 'Manifest Power', description: 'Expend Psi Points to activate a known psionic power. More powerful effects usually cost more Psi Points.'},
          { name: 'Psionic Talents', description: 'Minor psionic effects (similar to cantrips) that can be used at will without expending Psi Points.'},
          { name: 'Augment Power', description: 'Many psionic powers can be augmented by spending additional Psi Points to increase their range, duration, damage, or targets.'},
          { name: 'Concentration', description: 'Like spells, many ongoing psionic effects require concentration. Taking damage can break concentration.'},
        ],
      },
      {
        type: 'subclasses',
        sectionId: 'psion-subclasses',
        title: 'Psionic Disciplines (Subclasses)',
        intro: 'At 1st level, a Psion chooses a Psionic Discipline, which shapes their primary mental abilities and grants unique powers and features as they level up.',
        subclasses: [
          {
            id: 'telepath-the-mind-reader',
            name: 'Telepath - The Mind Reader',
            description: 'Focuses on reading thoughts, influencing minds, and direct mental communication. Excels at social manipulation and psychic assault.',
            features: [
              { name: 'Telepathic Communication', level: 1, description: 'You can communicate telepathically with any creature you can see within 30 feet, provided it understands at least one language.' },
              { name: 'Mind Thrust', level: 3, description: 'Expend Psi Points to assault a creature\'s mind, dealing psychic damage and potentially imposing disadvantage on its next attack roll or ability check.' },
              { name: 'Thought Shield', level: 6, description: 'You gain resistance to psychic damage and advantage on saving throws against being charmed or frightened.' },
              { name: 'Dominate Mind', level: 10, description: 'Expend a significant amount of Psi Points to attempt to dominate a humanoid creature\'s mind, controlling its actions.' },
              { name: 'Mass Influence', level: 14, description: 'You can affect multiple minds simultaneously with certain telepathic abilities.' }
            ]
          },
          {
            id: 'telekinetic-the-force-mover',
            name: 'Telekinetic - The Force Mover',
            description: 'Specializes in moving objects and creatures with the power of thought. Can manipulate the battlefield and deal bludgeoning damage.',
            features: [
              { name: 'Telekinetic Push/Pull', level: 1, description: 'As an action, you can exert telekinetic force on an object or creature, moving it a short distance.' },
              { name: 'Forceful Slam', level: 3, description: 'Expend Psi Points to telekinetically slam a creature or object into another, dealing bludgeoning damage.' },
              { name: 'Telekinetic Shield', level: 6, description: 'Use your reaction to create a temporary shield of telekinetic force, increasing your AC against an attack.' },
              { name: 'Crushing Grasp', level: 10, description: 'Expend Psi Points to telekinetically crush a creature, restraining it and dealing ongoing damage.' },
              { name: 'Telekinetic Flight', level: 14, description: 'You can lift yourself with telekinesis, granting you a flying speed.' }
            ]
          },
          {
            id: 'shaper-the-matter-weaver',
            name: 'Shaper - The Matter Weaver',
            description: 'Focuses on creating and manipulating ectoplasmic constructs and altering physical forms. Versatile in creating tools, weapons, or barriers.',
            features: [
              { name: 'Astral Construct', level: 1, description: 'Expend Psi Points to create a simple ectoplasmic construct (e.g., a weapon, a shield, a tool).' },
              { name: 'Ectoplasmic Wall', level: 3, description: 'Expend Psi Points to create a wall of shimmering ectoplasm that provides cover or blocks passage.' },
              { name: 'Metamorphic Self', level: 6, description: 'Expend Psi Points to alter your physical form, gaining temporary benefits like natural weapons, enhanced senses, or adaptive resistances.' },
              { name: 'Animated Constructs', level: 10, description: 'You can animate your astral constructs, allowing them to act independently for a short time.' },
              { name: 'True Creation', level: 14, description: 'You can shape ectoplasm into more complex and durable forms, potentially making permanent minor objects.' }
            ]
          },
           {
            id: 'seer-the-oracle',
            name: 'Seer - The Oracle',
            description: 'Specializes in precognition, remote viewing, and divination. Gathers information and aids allies by foreseeing events or uncovering secrets.',
            features: [
              { name: 'Danger Sense (Psionic)', level: 1, description: 'You have a psionic sense of impending danger, granting you a bonus to initiative or advantage on certain saving throws.' }, 
              { name: 'Precognitive Dodge', level: 3, description: 'Expend Psi Points to impose disadvantage on an attack roll made against you or an ally you can see.' },
              { name: 'Clairvoyance/Clairaudience', level: 6, description: 'Expend Psi Points to see or hear events happening at a distant location.' },
              { name: 'Foresight (Brief)', level: 10, description: 'Once per long rest, you can grant yourself or an ally advantage on all attack rolls, ability checks, and saving throws for a short duration.' }, 
              { name: 'True Seeing (Psionic)', level: 14, description: 'Expend Psi Points to grant yourself true seeing, allowing you to see through illusions and perceive hidden things.' } 
            ]
          }
        ],
      },
      {
        type: 'feats',
        sectionId: 'psion-feats',
        title: 'Key Feats for the Psion',
        intro: "Psions benefit from feats that enhance their mental abilities, improve concentration, or provide general utility. As Intelligence is their primary stat, feats boosting it are often a priority.",
        categories: [
          {
            categoryName: 'Core Psionic Enhancement Feats',
            description: 'These feats directly augment your psionic capabilities or primary ability score.',
            feats: [
              {
                name: 'Telekinetic',
                description: 'Increase Int, Wis, or Cha by 1. Learn Mage Hand (or improve it). As a bonus action, telekinetically shove a creature 5 feet.',
                note: 'Excellent for Psions. Boosts Intelligence and provides a thematic and useful bonus action ability.'
              },
              {
                name: 'Fey Touched',
                description: 'Increase Int, Wis, or Cha by 1. Learn Misty Step and one 1st-level Divination or Enchantment spell, usable once per long rest without a spell slot.',
                note: 'Boosts Intelligence and grants valuable spells like Misty Step for mobility or utility spells like Bless or Hex (reflavored).'
              },
               {
                name: 'Shadow Touched',
                description: 'Increase Int, Wis, or Cha by 1. Learn Invisibility and one 1st-level Illusion or Necromancy spell, usable once per long rest without a spell slot.',
                note: 'Similar to Fey Touched, provides an Intelligence boost and useful spells for stealth or control.'
              }
            ]
          },
          {
            categoryName: 'Concentration & Survivability Feats',
            description: 'Many psionic powers require concentration, and Psions can be fragile. These feats help maintain powers and stay alive.',
            feats: [
              {
                name: 'War Caster',
                description: 'Advantage on Con saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.',
                note: 'Crucial if you frequently use concentration-based powers, especially if you find yourself in close quarters.'
              },
              {
                name: 'Resilient (Constitution)',
                description: 'Increase Constitution by 1. Gain proficiency in Constitution saving throws.',
                note: 'A must-have for improving concentration saves and boosting hit points. Often taken with War Caster for maximum concentration protection.'
              },
              {
                name: 'Lucky',
                description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws, or make an enemy reroll an attack.',
                note: 'Universally powerful for turning failures into successes or mitigating critical hits.'
              },
              {
                name: 'Alert',
                description: '+5 to initiative, can’t be surprised, negates advantage for hidden attackers.',
                note: 'Going early in combat allows a Psion to establish control or deploy key abilities before enemies can act.'
              }
            ]
          }
        ]
      },
      {
        type: 'flavorAndRoleplaying',
        sectionId: 'psion-rp',
        title: 'Flavor & Roleplaying Hooks',
        content: [
          "How did your Psion's powers manifest? Was it a sudden awakening, gradual development, or a result of a specific event?",
          "Are their powers a gift or a curse? How do they cope with the ability to hear thoughts or see glimpses of the future?",
          "Does your Psion keep their abilities secret, or are they open about their nature? How does this affect their interactions?",
          "What is their view on traditional magic? Do they see it as crude, fascinating, or simply different?"
        ]
      },
      {
        type: 'multiclassing',
        sectionId: 'psion-multi',
        title: 'Multiclassing Considerations',
        generalNotes: [
          "Psions often benefit from classes that enhance their survivability or provide complementary utility, as their core psionic progression is key.",
          "Dipping into Psion for psionic talents or a specific low-level discipline feature can be an interesting option for other Intelligence-based characters."
        ],
        goodCombinations: [
          { className: "Wizard", synergy: "Shares Intelligence as a primary stat. A few Wizard levels can grant useful ritual casting and defensive spells like Shield or Absorb Elements.", levels: "1-3" },
          { className: "Rogue (Soulknife)", synergy: "If Soulknife exists and is psionic-themed, this is a natural fit for enhancing stealth and skill-based psionics.", levels: "Varies" },
          { className: "Fighter (Psi Warrior)", synergy: "Another psionic-themed option that can add martial prowess and defensive psionic abilities.", levels: "Varies" }
        ]
      },
      {
        type: 'equipmentProgression',
        sectionId: 'psion-gear',
        title: 'Equipment Progression',
        earlyGame: [
          "A psionic focus (if required by tradition, e.g., a crystal, an orb, or a personal trinket).",
          "Light armor if proficient, otherwise robes or traveler's clothes.",
          "A simple weapon for emergencies (e.g., a dagger or quarterstaff)."
        ],
        midGame: [
          "Items that enhance Intelligence (e.g., Headband of Intellect).",
          "Amulet of Health or items that improve Constitution saving throws.",
          "Bracers of Defense or magical light armor if applicable.",
          "Items that grant additional Psi Points or allow more efficient use of them (if such items exist in the campaign)."
        ],
        lateGame: [
          "Legendary items boosting Intelligence or psionic power.",
          "Robes of the Archmagi (if reflavored for psionics) or similar powerful defensive/offensive gear.",
          "Items that provide flight or teleportation for better positioning.",
          "Staffs or orbs that can store psionic energy or amplify powers."
        ]
      },
      {
        type: 'closingRemarks',
        sectionId: 'psion-closing',
        title: 'The Power of Mind',
        content: [
          "The Psion offers a unique playstyle distinct from traditional magic-users, focusing on innate mental power rather than external sources or learned formulae.",
          "With diverse disciplines, Psions can fill many roles, from subtle manipulators and powerful controllers to insightful seers and even direct damage dealers.",
          "Playing a Psion encourages creative problem-solving and a tactical approach to encounters, leveraging the versatile nature of psionic abilities.",
          "As psionics are often less understood or more feared in many D&D settings, this class provides rich roleplaying opportunities centered around perception, prejudice, and the nature of power."
        ],
      },
    ],
    plannerConfig: {
      species: {
        name: 'Human', 
        note: 'Adaptable. ASIs and feat come from Origin.',
      },
      origin: {
        name: 'Sage Origin', 
        note: 'Provides Intelligence-based skills and a starting feat.',
        recommendedFeat: 'Telekinetic',
        skillProficiencies: ["Arcana", "History"]
      },
      abilityPriority: ['Intelligence (Max)', 'Constitution (High)', 'Dexterity (Moderate for AC)', 'Wisdom (Good for saves)', 'Charisma (Low)', 'Strength (Dump)'],
      keyClassSkills: ['Perception', 'Insight', 'Investigation', 'Arcana (if applicable to psionics in setting)'],
      generalLevelRecommendations: [
        { level: 1, recommendation: { 
            featSuggestion: 'Telekinetic (+1 Int recommended via Sage Origin, improved Mage Hand-like ability, psionic shove).',
            notes: 'Prioritize Intelligence. Choose your Psionic Discipline.' 
        }},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence', notes: 'Boost your primary psionic ability.' }},
        { level: 8, recommendation: { asiChoice: '+2 Intelligence (to reach 20 if possible)', featSuggestion: 'If Int is maxed, consider War Caster (concentration) or Resilient (Con).', notes: 'Maxing Intelligence is crucial.' }},
        { level: 12, recommendation: { asiChoice: 'Feat: War Caster OR +2 Constitution', notes: 'Protecting concentration is vital. More HP is always good.' }},
        { level: 16, recommendation: { asiChoice: 'Feat: Lucky OR Alert', notes: 'Lucky for general utility, Alert for initiative and surprise immunity.' }},
        { level: 19, recommendation: { asiChoice: 'Epic Boon: Boon of Mental Might or Boon of Spell Recall (reflavored as Psionic Recall)', notes: 'Enhance psionic capabilities significantly.' }},
      ],
      subclassSpecificRecommendations: {
        'Telepath - The Mind Reader': [
          { level: 1, recommendation: { notes: "Telepathic Communication is great for utility from level 1."}},
          { level: 4, recommendation: { asiChoice: '+2 Intelligence'}},
          { level: 8, recommendation: { featSuggestion: 'Actor (+1 Cha, advantage on Deception/Performance as someone else) if social focus, or more Int.'}}
        ],
        'Telekinetic - The Force Mover': [
           { level: 1, recommendation: { notes: "Telekinetic Push/Pull provides at-will battlefield control."}},
          { level: 4, recommendation: { asiChoice: '+2 Intelligence'}},
          { level: 8, recommendation: { featSuggestion: 'Crusher (+1 Str/Con, critical hit effect, move target on hit) if melee is ever an option, otherwise more Int/Con.'}}
        ],
        'Shaper - The Matter Weaver': [
          { level: 1, recommendation: { notes: "Astral Construct provides versatile tools or weapons."}},
          { level: 4, recommendation: { asiChoice: '+2 Intelligence'}},
          { level: 8, recommendation: { featSuggestion: 'Metamagic Adept (reflavor as Psionic Shaping techniques) for more flexibility, or more Int.'}}
        ],
        'Seer - The Oracle': [
          { level: 1, recommendation: { notes: "Danger Sense (Psionic) is a good passive benefit."}},
          { level: 4, recommendation: { asiChoice: '+2 Intelligence'}},
          { level: 8, recommendation: { featSuggestion: 'Observant (+1 Int/Wis, read lips, passive Perception/Investigation bonus) or Alert.'}}
        ]
      }
    }
  };
