
import { ClassDefinition } from '../types';

export const bardClassData: ClassDefinition = {
  className: "Bard",
  classTitle: "The Maestro's Compendium",
  classDescription: "Master of song, speech, and the magic they contain, the Bard is a versatile artist and scholar.",
  themeColor: "pink", 
  sections: [
    {
      type: 'intro',
      sectionId: 'bard-intro',
      title: 'Bard Class Overview',
      content: [
        "Bards are versatile spellcasters and masters of inspiration, using their artistic talents and magical abilities to influence the world around them. Whether a charismatic performer, a cunning trickster, or a wise loremaster, a Bard's power comes from their ability to weave magic through words and music.",
        "They are often the heart of an adventuring party, capable of inspiring allies, demoralizing foes, healing wounds, and manipulating situations with their charm and wit."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'bard-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Support/Utility - Bards excel at buffing allies with Bardic Inspiration, debuffing enemies with spells, and providing solutions to a wide array of challenges through skills and magic.",
        "Secondary Role: Controller/Face - With access to control spells and high Charisma, Bards can manage the battlefield and excel in social interactions.",
        "Playstyle: Highly adaptable and creative. Bards are 'known casters' (learning a limited number of spells) but gain access to spells from any class through Magical Secrets. They rely on Charisma for their spellcasting and many class features, making them natural leaders and negotiators."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'bard-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Exceptional skill versatility with Jack of All Trades and Expertise.",
        "Powerful support capabilities through Bardic Inspiration and healing spells.",
        "Magical Secrets feature provides unmatched spell list flexibility.",
        "Strong social interaction abilities due to Charisma focus and skill proficiencies.",
        "Effective battlefield controllers and debuffers.",
        "Good ritual casting potential for out-of-combat utility."
      ],
      weaknesses: [
        "Limited number of spells known compared to prepared casters like Clerics or Wizards.",
        "Can be fragile (d8 Hit Die, typically light armor) if not built for melee (e.g., College of Valor/Swords).",
        "Bardic Inspiration is a finite resource, requiring careful management.",
        "Some Bard Colleges are more combat-focused than others, leading to varied martial effectiveness."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'bard-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd8 per Bard level.' },
        { name: 'Primary Attributes', description: 'Charisma (spellcasting, Bardic Inspiration, social skills), Dexterity (AC, finesse weapons).' },
        { name: 'Saving Throws', description: 'Dexterity and Charisma.' },
        { name: 'Proficiencies', description: 'Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords. Three musical instruments of your choice.' },
        { name: 'Spellcasting', description: 'Known caster drawing from the Bard spell list. Uses Charisma as their spellcasting ability. Can cast Bard spells with the ritual tag as rituals.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'bard-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Overture of Magic',
          features: [
            { name: 'Spellcasting', description: 'You know two cantrips and four 1st-level spells from the bard spell list. You use Charisma for your spellcasting ability.' },
            { name: 'Bardic Inspiration (d6)', description: 'As a bonus action, choose one creature other than yourself within 60 feet who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (minimum of once). You regain any expended uses when you finish a long rest.' }
          ],
        },
        {
          level: 2,
          title: 'Versatility and Respite',
          features: [
            { name: 'Jack of All Trades', description: 'You can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.', isCritical: true },
            { name: 'Song of Rest (d6)', description: 'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.' }
          ],
        },
        {
          level: 3,
          title: 'College and Expertise',
          features: [
            { 
              name: 'Bard College Feature', 
              description: 'You delve into the advanced techniques of a bard college of your choice, such as the College of Lore or College of Valor. Your choice grants you features at 3rd level and again at 6th and 14th level. See the Bard Colleges section for details.', 
              isSubclassFeature: true 
            },
            { name: 'Expertise (1)', description: 'Choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.' }
          ],
        },
        { level: 4, title: 'Developing Talent', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, { name: 'Cantrip Versatility (Optional Rule)', description: 'You can replace one bard cantrip you know with another from the bard cantrip list.'}] },
        {
          level: 5,
          title: 'Inspiring Font',
          features: [
            { name: 'Bardic Inspiration (d8)', description: 'Your Bardic Inspiration die becomes a d8.' },
            { name: 'Font of Inspiration', description: 'You regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.', isCritical: true }
          ],
        },
        {
          level: 6,
          title: 'Countercharm & College Path',
          features: [
            { name: 'Countercharm', description: 'As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you that can hear your performance have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).' },
            { 
              name: 'Bard College Feature', 
              description: 'You gain a feature from your chosen Bard College. Refer to the Bard Colleges section for details.', 
              isSubclassFeature: true 
            }
          ],
        },
        { level: 7, title: 'Greater Melodies', features: [{ name: 'Spellcasting', description: 'Gain access to 4th-level spells.' }] },
        { level: 8, title: 'Enhanced Skill', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 9, title: 'Restorative Harmonies', features: [{ name: 'Song of Rest (d8)', description: 'Your Song of Rest die becomes a d8.' }, { name: 'Spellcasting', description: 'Gain access to 5th-level spells.' }] },
        {
          level: 10,
          title: 'Secrets and Mastery',
          features: [
            { name: 'Bardic Inspiration (d10)', description: 'Your Bardic Inspiration die becomes a d10.' },
            { name: 'Expertise (2)', description: 'Choose two more of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.' },
            { name: 'Magical Secrets (1)', description: 'You learn two spells of your choice from any class\'s spell list. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.', isCritical: true }
          ],
        },
        { level: 11, title: 'Arcane Crescendo', features: [{ name: 'Spellcasting', description: 'Gain access to 6th-level spells.' }] },
        { level: 12, title: 'Peak Performance', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 13, title: 'Soothing Odes', features: [{ name: 'Song of Rest (d10)', description: 'Your Song of Rest die becomes a d10.' }, { name: 'Spellcasting', description: 'Gain access to 7th-level spells.' }] },
        {
          level: 14,
          title: 'College Apex & More Secrets',
          features: [
            { 
              name: 'Bard College Feature', 
              description: 'You gain a feature from your chosen Bard College. Refer to the Bard Colleges section for details.', 
              isSubclassFeature: true 
            },
            { name: 'Magical Secrets (2)', description: 'You learn two more spells of your choice from any class\'s spell list.' }
          ],
        },
        { level: 15, title: 'Legendary Inspiration', features: [{ name: 'Bardic Inspiration (d12)', description: 'Your Bardic Inspiration die becomes a d12.' }] },
        { level: 16, title: 'Masterful Artist', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 17, title: 'Epic Ballads', features: [{ name: 'Song of Rest (d12)', description: 'Your Song of Rest die becomes a d12.' }, { name: 'Spellcasting', description: 'Gain access to 9th-level spells.' }] },
        { level: 18, title: 'Ultimate Secrets', features: [{ name: 'Magical Secrets (3)', description: 'You learn two more spells of your choice from any class\'s spell list.' }] },
        { level: 19, title: 'Virtuoso', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }] },
        { level: 20, title: 'Superior Inspiration', features: [{ name: 'Superior Inspiration', description: 'When you roll initiative and have no uses of Bardic Inspiration left, you regain one use.', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'bard-unique',
      title: 'Signature Bardic Abilities',
      intro: "Bards wield a unique blend of magic and artistic skill, expressed through several core mechanics.",
      mechanics: [
        { name: 'Bardic Inspiration', description: 'A pool of special dice (d6, d8, d10, d12 as level increases) that a Bard can give to allies as a bonus action. Allies can add this die to an ability check, attack roll, or saving throw. The number of uses equals the Bard\'s Charisma modifier, regaining uses on a long rest (or short rest with Font of Inspiration).', isCritical: true },
        { name: 'Jack of All Trades', description: 'Allows the Bard to add half their proficiency bonus to any ability check they make that doesn’t already include their proficiency bonus. This makes Bards surprisingly competent in a wide range of skills.' },
        { name: 'Song of Rest', description: 'During a short rest, the Bard can use music or oration to grant extra healing to allies who spend Hit Dice. The amount of extra healing (d6, d8, d10, d12) increases with Bard level.' },
        { name: 'Expertise', description: 'At 3rd and 10th level, the Bard chooses two skill proficiencies to gain Expertise in, doubling their proficiency bonus for those skills. This makes them exceptionally good at their chosen skills.' },
        { name: 'Magical Secrets', description: 'At 10th, 14th, and 18th level, Bards can learn a limited number of spells from any class\'s spell list, granting unparalleled versatility in spell selection. These spells count as Bard spells.', isCritical: true },
        { name: 'Countercharm', description: 'As an action, provide advantage on saving throws against being frightened or charmed for yourself and allies within 30 feet who can hear your performance.'}
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'bard-colleges',
      title: 'Bard Colleges (Subclasses)',
      intro: 'At 3rd level, a Bard chooses a Bard College, a specialization that defines their approach to magic and performance.',
      subclasses: [
        {
          id: 'college-of-lore',
          name: 'College of Lore',
          description: 'Masters of knowledge, skill, and witty repartée. Lore Bards use their intellect and extensive learning to support allies and undermine foes.',
          note: "Excels at skill use and spellcasting versatility.",
          features: [
            { name: 'Bonus Proficiencies', level: 3, description: 'You gain proficiency in any three skills of your choice.' },
            { name: 'Cutting Words', level: 3, description: 'When a creature (that is not immune to being charmed) that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, roll the die, and subtract the number rolled from the creature’s roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can’t hear you or if it’s immune to being charmed.' },
            { name: 'Additional Magical Secrets', level: 6, description: 'You learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don’t count against the number of bard spells you know.' },
            { name: 'Peerless Skill', level: 14, description: 'When you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.' }
          ]
        },
        {
          id: 'college-of-valor',
          name: 'College of Valor',
          description: 'Brave skalds and warrior-poets who inspire heroism on the battlefield and are not afraid to engage in combat themselves.',
          note: "Combines martial prowess with inspirational magic.",
          features: [
            { name: 'Bonus Proficiencies', level: 3, description: 'You gain proficiency with medium armor, shields, and martial weapons.' },
            { name: 'Combat Inspiration', level: 3, description: 'A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.' },
            { name: 'Extra Attack', level: 6, description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
            { name: 'Battle Magic', level: 14, description: 'When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.' }
          ]
        },
        {
          id: 'college-of-swords',
          name: 'College of Swords',
          description: 'Dashing duelists and entertainers who combine blade work with spectacular flourishes, turning combat into a performance.',
          note: "Focuses on agile combat and enhancing attacks with Bardic Inspiration.",
           features: [
            { name: 'Bonus Proficiencies', level: 3, description: 'You gain proficiency with medium armor and the scimitar.' },
            { name: 'Fighting Style', level: 3, description: 'You learn either the Dueling or Two-Weapon Fighting style.' },
            { name: 'Blade Flourish', level: 3, description: 'Whenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn. Defensive Flourish: Expend one Bardic Inspiration die to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn. Slashing Flourish: Expend one Bardic Inspiration die to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die. Mobile Flourish: Expend one Bardic Inspiration die to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target.' },
            { name: 'Extra Attack', level: 6, description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
            { name: 'Master\'s Flourish', level: 14, description: 'Whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die.' }
          ]
        },
        {
          id: 'college-of-eloquence',
          name: 'College of Eloquence',
          description: 'Masters of oratory and persuasion, these bards wield words with unmatched skill, swaying opinions and unsettling foes.',
          note: "Excels in social encounters and at making saving throws harder for enemies.",
          features: [
            { name: 'Silver Tongue', level: 3, description: 'When you make a Charisma (Persuasion) or Charisma (Deception) check, you can treat a d20 roll of 9 or lower as a 10.' },
            { name: 'Unsettling Words', level: 3, description: 'As a bonus action, you can expend one use of your Bardic Inspiration and choose one creature you can see within 60 feet of you. Roll the Bardic Inspiration die. The creature must subtract the number rolled from the next saving throw it makes before the start of your next turn.' },
            { name: 'Unfailing Inspiration', level: 6, description: 'When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll fails, the creature can keep the Bardic Inspiration die.' },
            { name: 'Universal Speech', level: 6, description: 'As an action, choose one or more creatures within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). The chosen creatures can magically understand you, regardless of the language you speak, for 1 hour. This feature doesn’t grant them the ability to speak languages they don’t know.' },
            { name: 'Infectious Inspiration', level: 14, description: 'When a creature succeeds on an ability check, attack roll, or saving throw by rolling a Bardic Inspiration die you gave them, you can use your reaction to grant a Bardic Inspiration die to a different creature (other than yourself) that can hear you within 60 feet of you. You give this die without expending any of your Bardic Inspiration uses.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'bard-feats',
      title: 'Key Feats for the Bard',
      intro: "Bards benefit from feats that enhance their Charisma, protect their concentration for spells, or provide additional utility and support options.",
      categories: [
        {
          categoryName: 'Core Spellcasting & Support Feats',
          description: 'These feats bolster a Bard\'s primary role as a spellcaster and supporter.',
          feats: [
            { name: 'War Caster', description: 'Advantage on Con saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.', note: 'Excellent for maintaining concentration on key buff/debuff spells.' },
            { name: 'Resilient (Constitution)', description: 'Increase Constitution by 1 and gain proficiency in Constitution saving throws.', note: 'Another strong choice for concentration and overall survivability.' },
            { name: 'Fey Touched', description: 'Increase Cha, Int, or Wis by 1. Learn Misty Step and one 1st-level Divination or Enchantment spell.', note: 'Boosts Charisma, grants Misty Step for mobility, and a useful spell like Bless or Silvery Barbs.' },
            { name: 'Inspiring Leader', description: 'Spend 10 minutes to grant temporary HP (level + Cha mod) to self and up to six friendly creatures.', note: 'Leverages high Charisma to significantly boost party survivability.' }
          ]
        },
        {
          categoryName: 'Utility & Roleplaying Feats',
          description: 'These feats enhance a Bard\'s skills or provide unique roleplaying advantages.',
          feats: [
            { name: 'Actor', description: '+1 Cha, advantage on Deception/Performance as someone else, mimic speech.', note: 'Perfect for social infiltration and performance-focused Bards.' },
            { name: 'Lucky', description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws.', note: 'Universally powerful for critical moments.' },
            { name: 'Telekinetic', description: 'Increase Cha, Int, or Wis by 1. Learn Mage Hand (or improve it). Bonus action telekinetic shove.', note: 'Boosts Charisma and provides a useful bonus action for battlefield control or utility.' },
            { name: 'Metamagic Adept', description: 'Learn two Metamagic options and gain 2 sorcery points.', note: 'Options like Subtle Spell or Quicken Spell can greatly enhance a Bard\'s spellcasting flexibility.' },
            { name: 'Skill Expert', description: '+1 to an ability score, one skill proficiency, one expertise.', note: 'Further enhances a Bard\'s skill mastery.'}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'bard-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What is your Bard's chosen art form? Are they a musician, poet, orator, dancer, actor, or something else entirely?",
        "Where did they learn their skills and magic? A formal college, a wandering mentor, innate talent, or a fey bargain?",
        "What stories do they tell, what songs do they sing? Are they tales of heroism, tragedy, comedy, or biting satire?",
        "How do they use their charisma? To inspire, to deceive, to lead, or to entertain? Are they a beloved figure or a notorious scoundrel?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'bard-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Bards are strong single-class characters, but their Charisma focus makes them synergistic with other Charisma-based casters.",
        "Dipping into Bard can grant valuable skills, Bardic Inspiration, and some spellcasting to other classes."
      ],
      goodCombinations: [
        { className: "Paladin", synergy: "Shares Charisma focus. Paladin levels offer Divine Smite, heavy armor, and fighting styles, while Bard levels offer more spell slots for smiting and utility.", levels: "Bard X / Paladin 2 or 6-7" },
        { className: "Warlock (Hexblade)", synergy: "Hexblade allows using Charisma for weapon attacks, reducing MAD. Pact Magic slots refresh on short rests, providing more fuel for Bard spells. Eldritch Blast adds a strong ranged attack.", levels: "Bard X / Warlock 1-3" },
        { className: "Sorcerer", synergy: "More spell slots and Metamagic options. Divine Soul Sorcerer can thematically fit a support Bard.", levels: "Bard X / Sorcerer 1-3" },
        { className: "Fighter", synergy: "A 1-2 level dip for Action Surge and a Fighting Style can benefit martial Bards (e.g., Valor/Swords).", levels: "Bard X / Fighter 1-2" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'bard-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "A musical instrument (your spellcasting focus).",
        "Light armor (e.g., Leather or Studded Leather).",
        "A finesse weapon (e.g., rapier) and possibly a hand crossbow.",
        "Component pouch if not using an instrument as a focus for all spells."
      ],
      midGame: [
        "+1/+2 weapon and armor.",
        "Items that boost Charisma (Ioun Stone of Leadership, Tome of Leadership and Influence).",
        "Instruments of the Bards (provide extra spells and advantages).",
        "Items enhancing spellcasting (Pearl of Power, Rod of the Pact Keeper if multiclassed Warlock)."
      ],
      lateGame: [
        "+2/+3 weapon and armor.",
        "Legendary instruments or items that significantly boost Charisma or provide powerful abilities.",
        "Items granting flight, powerful defensive options, or more spell versatility."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'bard-closing',
      title: 'The Voice of Adventure',
      content: [
        "The Bard is a uniquely versatile and engaging class, blending art, magic, and skill into a potent force on the adventuring stage.",
        "Their ability to inspire allies, control situations, and adapt to nearly any challenge makes them invaluable members of any party.",
        "Whether charming a dragon, composing an epic of their deeds, or cutting down foes with a flourish, the Bard brings creativity and flair to every aspect of D&D."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Half-Elf / Human / Custom Lineage',
      note: 'Choose a species that complements your Bard concept. ASIs and feat come from your Origin. Half-Elf used to be great for +2 Cha and skills.'
    },
    origin: { 
      name: 'Artisan Origin', 
      note: 'Provides thematic skills like Investigation and Persuasion. Excellent for a performer or skilled artisan.',
      recommendedFeat: 'Fey Touched',
      skillProficiencies: ["Investigation", "Persuasion"]
    },
    abilityPriority: ['Charisma (Max)', 'Dexterity (High for AC/Finesse)', 'Constitution (Moderate for HP/Concentration)', 'Wisdom (Saves)', 'Intelligence (Low)', 'Strength (Dump)'],
    keyClassSkills: ['Persuasion', 'Deception', 'Performance', 'Insight', 'Acrobatics', 'Stealth'],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: 'Fey Touched (Recommended via Artisan Origin - grants +1 Cha, Misty Step, and a 1st-level Divination/Enchantment spell).',
          spellSuggestions: ['Cantrips: Vicious Mockery, Mage Hand/Minor Illusion. Spells: Healing Word, Dissonant Whispers, Faerie Fire, Sleep/Tasha\'s Hideous Laughter.'],
          notes: 'Prioritize Charisma. Your Origin provides your 1st-level feat. Bardic Inspiration is your key support tool.'
      }},
      { level: 3, recommendation: {
          notes: 'Choose your Bard College. Lore for skill/spell focus, Valor/Swords for martial prowess, Eloquence for social/debuff focus.' ,
          spellSuggestions: ['Expertise in Persuasion and Deception/Insight is strong.'],
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Charisma',
          spellSuggestions: ['Heat Metal, Suggestion, Shatter, Invisibility.'],
      }},
      { level: 6, recommendation: {
          spellSuggestions: ['Hypnotic Pattern, Dispel Magic, Counterspell (via Magical Secrets for Lore Bards).']
      }},
      { level: 8, recommendation: {
          asiChoice: 'Feat: Metamagic Adept OR +2 Charisma (to max)', // Corrected from 'asi:' to 'asiChoice:'
          spellSuggestions: ['Polymorph, Dimension Door, Greater Invisibility.'],
      }},
    ],
    subclassSpecificRecommendations: {
      'College of Lore': [
        { level: 3, recommendation: { notes: 'Bonus Proficiencies and Cutting Words are great. Choose skills that fill party gaps.' }},
        { level: 6, recommendation: { notes: 'Additional Magical Secrets! Pick powerful spells like Counterspell, Fireball, or Revivify.' }},
      ],
      'College of Valor': [
        { level: 3, recommendation: { notes: 'Bonus Proficiencies make you more martial. Combat Inspiration adds damage or AC.' }},
        { level: 6, recommendation: { notes: 'Extra Attack significantly boosts your combat effectiveness.' }},
      ],
      'College of Swords': [
        { level: 3, recommendation: { notes: 'Fighting Style (Dueling or Two-Weapon Fighting) and Blade Flourishes make you a stylish combatant.' }},
        { level: 6, recommendation: { notes: 'Extra Attack is key for this martial subclass.' }},
      ],
      'College of Eloquence': [
        { level: 3, recommendation: { notes: 'Silver Tongue makes Persuasion/Deception incredibly reliable. Unsettling Words is a strong debuff.' }},
        { level: 6, recommendation: { notes: 'Unfailing Inspiration and Universal Speech enhance support and social utility.' }},
      ]
    }
  }
};
