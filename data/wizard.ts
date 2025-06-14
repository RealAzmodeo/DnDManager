
import { ClassDefinition } from '../types';

export const wizardClassData: ClassDefinition = {
  className: "Wizard",
  classTitle: "The Arcanist's Handbook",
  classDescription: "Master the arcane arts by studying ancient lore and manipulating the fabric of reality as a scholarly Wizard.",
  themeColor: "blue",
  sections: [
    {
      type: 'intro',
      sectionId: 'wizard-intro',
      title: 'Wizard Class Overview',
      content: [
        "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mental control.",
        "Their magic allows them to conjure monsters from other planes of existence, glimpse the future, or turn slain foes into shambling zombies. Their mightiest spells can change one substance into another, call meteors down from the sky, or open portals to other worlds.",
        "Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'wizard-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Controller/Utility - Wizards excel at shaping the battlefield with area-of-effect spells, debilitating enemies, and providing versatile solutions to non-combat challenges through their vast spell list.",
        "Secondary Role: Striker - Depending on their chosen Arcane Tradition (e.g., Evocation), Wizards can unleash devastating bursts of damage.",
        "Playstyle: Strategic and knowledge-based. Wizards must carefully prepare their spells each day from their spellbook, anticipating the challenges ahead. Resource management (spell slots) is crucial. They are often the party's arcane encyclopedia and problem-solver."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'wizard-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Unmatched spell list versatility, offering solutions for nearly any situation.",
        "Potent area control and battlefield manipulation.",
        "Exceptional utility through ritual casting and diverse spell options.",
        "High damage potential, especially with specialized Arcane Traditions.",
        "Scales incredibly well into higher levels of play as more powerful spells become available."
      ],
      weaknesses: [
        "Low hit points (d6 Hit Die) and typically no armor proficiency, making them fragile.",
        "Reliant on their spellbook; losing it can be catastrophic.",
        "Effectiveness is heavily tied to available spell slots.",
        "Many powerful spells require concentration, limiting simultaneous effects.",
        "Can be vulnerable if caught without appropriate spells prepared or if silenced/unable to cast."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'wizard-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd6 per Wizard level.' },
        { name: 'Primary Attributes', description: 'Intelligence (spellcasting ability, spell save DC, spell attack bonus), Constitution (hit points, concentration saving throws), Dexterity (Armor Class).' },
        { name: 'Saving Throws', description: 'Intelligence and Wisdom.' },
        { name: 'Proficiencies', description: 'Daggers, darts, slings, quarterstaffs, light crossbows. No armor or shield proficiencies.' },
        { name: 'Spellcasting', description: 'Wizards use a spellbook to record and prepare spells. They use Intelligence as their spellcasting ability.' },
        { name: 'Ritual Casting', description: 'Can cast any wizard spell they know or have in their spellbook as a ritual if it has the ritual tag.'}
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'wizard-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'The Spark of Magic',
          features: [
            { name: 'Spellcasting', description: 'You have a spellbook containing six 1st-level wizard spells of your choice. You prepare spells daily. You know three cantrips from the wizard spell list.' },
            { name: 'Arcane Recovery', description: 'Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of an individual slot\'s level can be 6th or higher.' }
          ],
        },
        {
          level: 2,
          title: 'Arcane Tradition Choice',
          features: [
            { 
              name: 'Arcane Tradition Feature', 
              description: 'You choose an Arcane Tradition (subclass), shaping your practice of magic (e.g., Abjuration, Evocation). This choice grants you features at 2nd, 6th, 10th, and 14th level. See the Arcane Traditions section for details.', 
              isSubclassFeature: true 
            }
          ],
        },
        { 
          level: 3, 
          title: 'Growing Arcana', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 2nd-level spells. You can add two wizard spells of your choice to your spellbook for free for each wizard level gained after 1st.' }
          ] 
        },
        { 
          level: 4, 
          title: 'Mental Refinement', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, 
            { name: 'Cantrip Versatility (Optional Rule)', description: 'You can replace one wizard cantrip you know with another from the wizard cantrip list.'}
          ] 
        },
        { 
          level: 5, 
          title: 'Potent Spells', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 3rd-level spells.' }
          ] 
        },
        { 
          level: 6, 
          title: 'Tradition Focus', 
          features: [
            { 
              name: 'Arcane Tradition Feature', 
              description: 'You gain a feature from your chosen Arcane Tradition. Refer to the Arcane Traditions section for specific details.', 
              isSubclassFeature: true 
            }
          ]
        },
        { 
          level: 7, 
          title: 'Deeper Mysteries', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 4th-level spells.' }
          ] 
        },
        { 
          level: 8, 
          title: 'Arcane Acuity', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 9, 
          title: 'Masterful Incantations', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 5th-level spells.' }
          ] 
        },
        { 
          level: 10, 
          title: 'Tradition Specialization', 
          features: [
            { 
              name: 'Arcane Tradition Feature', 
              description: 'You gain a feature from your chosen Arcane Tradition. Refer to the Arcane Traditions section for specific details.', 
              isSubclassFeature: true 
            }
          ]
        },
        { 
          level: 11, 
          title: 'Greater Arcana', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 6th-level spells.' }
          ] 
        },
        { 
          level: 12, 
          title: 'Intellectual Peak', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 13, 
          title: 'Secrets of the Weave', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 7th-level spells.' }
          ] 
        },
        { 
          level: 14, 
          title: 'Tradition Apex', 
          features: [
            { 
              name: 'Arcane Tradition Feature', 
              description: 'You gain a powerful capstone feature from your chosen Arcane Tradition. Refer to the Arcane Traditions section for specific details.', 
              isSubclassFeature: true 
            }
          ]
        },
        { 
          level: 15, 
          title: 'Arcane Supremacy', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 8th-level spells.' }
          ] 
        },
        { 
          level: 16, 
          title: 'Enduring Intellect', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        { 
          level: 17, 
          title: 'Pinnacle of Magic', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 9th-level spells.' }
          ] 
        },
        { 
          level: 18, 
          title: 'Spell Mastery', 
          features: [
            { name: 'Spell Mastery', description: 'Choose one 1st-level wizard spell and one 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.', isCritical: true }
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
          title: 'Signature Spells', 
          features: [
            { name: 'Signature Spells', description: 'Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don’t count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can’t do so again until you finish a short or long rest.', isCritical: true }
          ] 
        },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'wizard-mechanics',
      title: 'Core Arcane Abilities',
      intro: "Wizards harness magic through intense study and understanding, reflected in their unique class mechanics.",
      mechanics: [
        { name: 'Spellbook', description: 'Your spellbook is the repository of all the wizard spells you know, except your cantrips, which are fixed in your mind. You prepare your daily spells from it. You can add new spells to your spellbook by finding them on scrolls or in other spellbooks, then spending time and gold to copy them.' },
        { name: 'Arcane Recovery', description: 'Allows you to regain some expended spell slots during a short rest once per day, enhancing your magical endurance.' },
        { name: 'Spell Mastery (L18)', description: 'At 18th level, you achieve such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared.', isCritical: true },
        { name: 'Signature Spells (L20)', description: 'At 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You can cast each once per short or long rest without using a spell slot.', isCritical: true }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'wizard-traditions',
      title: 'Arcane Traditions (Subclasses)',
      intro: 'At 2nd level, a Wizard chooses an Arcane Tradition, representing their specialization in a particular school or philosophy of magic. This choice grants features at 2nd, 6th, 10th, and 14th level.',
      subclasses: [
        {
          id: 'school-of-abjuration',
          name: 'School of Abjuration',
          description: 'Focuses on magic that protects, blocks, or banishes. Abjurers are masters of defensive spells and wards.',
          features: [
            { name: 'Abjuration Savant', level: 2, description: 'The gold and time you must spend to copy an abjuration spell into your spellbook is halved.' },
            { name: 'Arcane Ward', level: 2, description: 'When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell’s magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage. While the ward has 0 hit points, it can’t absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.' },
            { name: 'Projected Ward', level: 6, description: 'When a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.' },
            { name: 'Improved Abjuration', level: 10, description: 'When you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in Counterspell and Dispel Magic), you add your proficiency bonus to that ability check.' },
            { name: 'Spell Resistance', level: 14, description: 'You have advantage on saving throws against spells. Furthermore, you have resistance to the damage of spells.' }
          ],
          note: "Masters of protection, ideal for safeguarding allies and nullifying enemy magic."
        },
        {
          id: 'school-of-conjuration',
          name: 'School of Conjuration',
          description: 'Specializes in spells that transport creatures and objects from one place to another, or create matter out of nothing.',
          features: [
            { name: 'Conjuration Savant', level: 2, description: 'The gold and time you must spend to copy a conjuration spell into your spellbook is halved.' },
            { name: 'Minor Conjuration', level: 2, description: 'You can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet. The object disappears after 1 hour, when you use this feature again, or if it takes or deals any damage.' },
            { name: 'Benign Transposition', level: 6, description: 'As an action, you can teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.' },
            { name: 'Focused Conjuration', level: 10, description: 'While you are concentrating on a conjuration spell, your concentration can’t be broken as a result of taking damage.' },
            { name: 'Durable Summons', level: 14, description: 'Any creature that you summon or create with a conjuration spell has 30 temporary hit points.' }
          ],
          note: "Excels at summoning allies and battlefield control through created objects or terrain."
        },
        {
          id: 'school-of-divination',
          name: 'School of Divination',
          description: 'Peers into the past, present, and future, uncovering secrets and guiding destiny.',
          features: [
            { name: 'Divination Savant', level: 2, description: 'The gold and time you must spend to copy a divination spell into your spellbook is halved.' },
            { name: 'Portent', level: 2, description: 'When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.' },
            { name: 'Expert Divination', level: 6, description: 'When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can’t be higher than 5th level.' },
            { name: 'The Third Eye', level: 10, description: 'You can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest: Darkvision 60ft, Ethereal Sight 60ft, Greater Comprehension (read any language), or See Invisibility.' },
            { name: 'Greater Portent', level: 14, description: 'You roll three d20s for your Portent feature, rather than two.' }
          ],
          note: "Offers powerful predictive abilities, capable of turning failure into success."
        },
        {
          id: 'school-of-enchantment',
          name: 'School of Enchantment',
          description: 'Manipulates the minds of others, beguiling, charming, or frightening them.',
          features: [
            { name: 'Enchantment Savant', level: 2, description: 'The gold and time you must spend to copy an enchantment spell into your spellbook is halved.' },
            { name: 'Hypnotic Gaze', level: 2, description: 'As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature’s speed drops to 0, and the creature is incapacitated and visibly dazed. On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.' },
            { name: 'Instinctive Charm', level: 6, description: 'When a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack’s range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can’t use this feature on the attacker again until you finish a long rest.' },
            { name: 'Split Enchantment', level: 10, description: 'When you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.' },
            { name: 'Alter Memories', level: 14, description: 'When you cast an enchantment spell to charm one or more creatures, you can alter one creature’s understanding so that it remains unaware of being charmed. Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can’t exceed the duration of your enchantment spell.' }
          ],
          note: "Powerful social manipulators and controllers, capable of turning enemies into unwilling allies."
        },
        {
          id: 'school-of-evocation',
          name: 'School of Evocation',
          description: 'Focuses on raw magical energy, creating powerful elemental effects like fire, lightning, and cold.',
          features: [
            { name: 'Evocation Savant', level: 2, description: 'The gold and time you must spend to copy an evocation spell into your spellbook is halved.' },
            { name: 'Sculpt Spells', level: 2, description: 'When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell’s level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.' },
            { name: 'Potent Cantrip', level: 6, description: 'When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip’s damage (if any) but suffers no additional effect from the cantrip.' },
            { name: 'Empowered Evocation', level: 10, description: 'You can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.' },
            { name: 'Overchannel', level: 14, description: 'When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.' }
          ],
          note: "The premier choice for wizards who want to unleash devastating area-of-effect damage while protecting allies."
        },
        {
          id: 'school-of-illusion',
          name: 'School of Illusion',
          description: 'Masters of deception, creating images, sounds, and phantasms to trick and confuse.',
          features: [
            { name: 'Illusion Savant', level: 2, description: 'The gold and time you must spend to copy an illusion spell into your spellbook is halved.' },
            { name: 'Improved Minor Illusion', level: 2, description: 'You learn the Minor Illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn’t count against your number of cantrips known. When you cast Minor Illusion, you can create both a sound and an image with a single casting of the spell.' },
            { name: 'Malleable Illusions', level: 6, description: 'When you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell’s normal parameters for the illusion), provided that you can see the illusion.' },
            { name: 'Illusory Self', level: 10, description: 'You can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates. Once you use this feature, you can’t use it again until you finish a short or long rest.' },
            { name: 'Illusory Reality', level: 14, description: 'When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. The object can’t deal damage or otherwise directly harm anyone.' }
          ],
          note: "Offers creative solutions through deception and trickery, making illusions tangible at higher levels."
        },
        {
          id: 'school-of-necromancy',
          name: 'School of Necromancy',
          description: 'Studies the cosmic forces of life, death, and undeath. Not all necromancers are evil, but many walk a dark path.',
          features: [
            { name: 'Necromancy Savant', level: 2, description: 'The gold and time you must spend to copy a necromancy spell into your spellbook is halved.' },
            { name: 'Grim Harvest', level: 2, description: 'Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell’s level, or three times its level if the spell belongs to the School of Necromancy. You don’t gain this benefit for killing constructs or undead.' },
            { name: 'Undead Thralls', level: 6, description: 'When you cast Animate Dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate. Whenever you create an undead using a necromancy spell, it has additional benefits: The creature’s hit point maximum is increased by an amount equal to your wizard level. The creature adds your proficiency bonus to its weapon damage rolls.' },
            { name: 'Inured to Undeath', level: 10, description: 'You have resistance to necrotic damage, and your hit point maximum can’t be reduced.' },
            { name: 'Command Undead', level: 14, description: 'As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can’t use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again. Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.' }
          ],
          note: "Allows for the creation and command of undead minions, and manipulation of life energies."
        },
        {
          id: 'school-of-transmutation',
          name: 'School of Transmutation',
          description: 'Changes the properties of creatures, objects, or the environment.',
          features: [
            { name: 'Transmutation Savant', level: 2, description: 'The gold and time you must spend to copy a transmutation spell into your spellbook is halved.' },
            { name: 'Minor Alchemy', level: 2, description: 'You can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance.' },
            { name: 'Transmuter’s Stone', level: 6, description: 'You can spend 8 hours creating a transmuter’s stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature’s possession. When you create the stone, choose the benefit from the following options: Darkvision 60ft, +10ft speed, proficiency in Con saves, or resistance to acid, cold, fire, lightning, or thunder damage (your choice). Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.' },
            { name: 'Shapechanger', level: 10, description: 'You add the Polymorph spell to your spellbook, if it is not there already. You can cast Polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower. Once you cast Polymorph in this way, you can’t do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot.' },
            { name: 'Master Transmuter', level: 14, description: 'You can use your action to consume the reserve of transmutation magic stored within your transmuter’s stone in a single burst. When you do so, choose one of the following effects. Your transmuter’s stone is destroyed and you must create a new one to use it again. Major Transformation: Transform one nonmagical object no larger than a 5-foot cube into another nonmagical object of similar size and mass and of equal or lesser value. Panacea: Remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter’s stone. Restore Life: Cast the Raise Dead spell on a creature you touch with the transmuter’s stone, without expending a spell slot or needing to have the spell in your spellbook. Restore Youth: A creature you touch with the stone has its apparent age reduced by 3d10 years, to a minimum of 13 years. This effect doesn’t extend the creature’s lifespan.' }
          ],
          note: "Offers versatile options for altering reality, from changing substances to transforming creatures."
        }
      ],
    },
    {
        type: 'feats',
        sectionId: 'wizard-feats',
        title: 'Key Feats for the Wizard',
        intro: "Wizards depend on their Intelligence for spellcasting and often require feats that protect their concentration or enhance their spell repertoire. Survivability is also a key concern.",
        categories: [
          {
            categoryName: 'Core Spellcasting & Concentration Feats',
            description: 'These feats are almost essential for Wizards to maintain concentration on powerful spells and improve their primary casting stat.',
            feats: [
              {
                name: 'War Caster',
                description: 'Advantage on Con saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.',
                note: 'A top-tier feat for Wizards to maintain concentration on crucial control or damage spells.'
              },
              {
                name: 'Resilient (Constitution)',
                description: 'Increase Constitution by 1. Gain proficiency in Constitution saving throws.',
                note: 'Massively boosts concentration checks and adds to hit points. Often taken alongside or instead of War Caster.'
              },
              {
                name: 'Fey Touched',
                description: 'Increase Int, Wis, or Cha by 1. Learn Misty Step and one 1st-level Divination or Enchantment spell (e.g., Silvery Barbs, Gift of Alacrity), usable once per long rest without a spell slot.',
                note: 'Provides a +1 to Intelligence, the invaluable Misty Step for mobility, and another useful spell.'
              },
              {
                name: 'Telekinetic',
                description: 'Increase Int, Wis, or Cha by 1. Learn Mage Hand (or improve it). As a bonus action, telekinetically shove a creature 5 feet.',
                note: 'Boosts Intelligence and gives a consistent, useful bonus action for battlefield control or utility.'
              }
            ]
          },
          {
            categoryName: 'Utility & Enhancement Feats',
            description: 'These feats offer broader utility, enhance specific playstyles, or improve survivability.',
            feats: [
              {
                name: 'Alert',
                description: '+5 to initiative, can’t be surprised, negates advantage for hidden attackers.',
                note: 'Going first allows a Wizard to control the battlefield or eliminate threats before they act. Highly valuable.'
              },
              {
                name: 'Lucky',
                description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws, or make an enemy reroll an attack.',
                note: 'Extremely versatile for crucial rolls, saving throws, or ensuring a key spell lands.'
              },
              {
                name: 'Metamagic Adept',
                description: 'Learn two Metamagic options from the sorcerer class and gain 2 sorcery points to use them. Sorcery points recharge on a long rest.',
                note: 'Options like Subtle Spell (for uncounterable spells) or Quicken Spell (for casting a spell as a bonus action) can be game-changing for a Wizard.'
              },
              {
                name: 'Spell Sniper',
                description: 'Learn one cantrip that requires an attack roll. When you cast a spell that requires an attack roll, its range is doubled. Your ranged spell attacks ignore half and three-quarters cover.',
                note: 'Excellent for blaster Wizards, increasing effective range and making it harder for enemies to hide.'
              }
            ]
          }
        ]
      },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'wizard-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What drives your Wizard's thirst for knowledge? Are they a dedicated scholar, a curious explorer of forbidden lore, or someone seeking power for a specific goal?",
        "How does your Wizard view their magic? As a tool, an art form, a dangerous force, or a fundamental truth of the universe?",
        "Consider their relationship with their spellbook. Is it a cherished companion, a jealously guarded secret, or a messy collection of notes?",
        "Wizards often have eccentric personalities. Are they absent-minded, arrogant, reclusive, intensely focused, or perhaps surprisingly personable?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'wizard-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Wizards benefit most from single-class progression due to their reliance on high-level spell slots and features.",
        "Short dips can provide specific benefits, but often delay access to more powerful wizard spells."
      ],
      goodCombinations: [
        { className: "Artificer", synergy: "Shares Intelligence as a primary stat. A 1-2 level dip grants armor/shield proficiency (for some builds), more cantrips, infusions, and CON save proficiency if starting as Artificer.", levels: "1-2" },
        { className: "Fighter", synergy: "A 1-2 level dip for Action Surge is universally strong. Provides armor proficiency if desired (e.g., for a Bladesinger build).", levels: "1-2" },
        { className: "Cleric (Knowledge/Arcana)", synergy: "A 1-level dip can grant useful proficiencies (Knowledge) or cantrips/armor (Arcana/Order/Life for heavy armor) and complements an Int-based skill focus.", levels: "1" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'wizard-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "A spellbook and materials to copy spells.",
        "An arcane focus (staff, wand, orb) or a component pouch.",
        "Robes or traveler's clothes.",
        "A dagger or quarterstaff for emergencies."
      ],
      midGame: [
        "Items that increase Intelligence (Headband of Intellect).",
        "Amulet of Health or items improving Constitution saving throws.",
        "Bracers of Defense or Cloak of Protection if unarmored.",
        "Pearl of Power, spell scrolls, or items that grant additional spell slots/uses."
      ],
      lateGame: [
        "Legendary items boosting Intelligence or spell power (Robe of the Archmagi, Staff of Magi/Power).",
        "Items granting flight, teleportation, or enhanced defenses.",
        "Tomes that permanently increase Intelligence."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'wizard-closing',
      title: 'The Apex of Arcane Might',
      content: [
        "The Wizard stands as a testament to the power of intellect and dedication. Through tireless study, they unlock the fundamental forces of the cosmos, wielding magic that can shape reality itself.",
        "With an unparalleled arsenal of spells and the ability to specialize in distinct Arcane Traditions, the Wizard offers boundless potential for creativity, problem-solving, and awe-inspiring displays of power.",
        "Whether you seek to control the battlefield, protect your allies, unravel ancient mysteries, or unleash devastating elemental fury, the path of the Wizard is one of limitless arcane discovery."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Human', 
      note: 'Highly adaptable. ASIs and feat come from your chosen Origin.',
    },
    origin: {
      name: 'Sage Origin',
      note: 'Provides Arcana and History skills, ideal for a Wizard. The feat can enhance spellcasting or survivability.',
      recommendedFeat: 'War Caster',
      skillProficiencies: ["Arcana", "History"]
    },
    abilityPriority: ['Intelligence (Max)', 'Constitution (High)', 'Dexterity (Moderate for AC)', 'Wisdom (Good for saves)', 'Charisma (Low)', 'Strength (Dump)'],
    keyClassSkills: ['Arcana', 'Investigation', 'History', 'Insight', 'Perception'],
    generalLevelRecommendations: [
      { level: 1, recommendation: { 
          featSuggestion: 'War Caster (Recommended via Sage Origin for concentration).',
          spellSuggestions: [
            'Cantrips: Mage Hand, Light, Fire Bolt / Ray of Frost, Prestidigitation / Minor Illusion.',
            '1st Lvl Spells: Mage Armor, Shield, Find Familiar (Ritual), Magic Missile, Absorb Elements, Sleep / Thunderwave / Tasha\'s Hideous Laughter.'
          ],
          notes: 'Prioritize Intelligence. A good starting feat can significantly boost early survivability or utility.' 
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Intelligence',
          spellSuggestions: ['Misty Step, Web, Mirror Image'],
          notes: 'Boosting Intelligence is paramount for spell save DC, attack bonus, and prepared spells.'
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Intelligence (to max, if War Caster taken at L1) OR Feat: Resilient (Constitution)',
          spellSuggestions: ['Counterspell, Fireball, Hypnotic Pattern, Polymorph, Dimension Door'],
          notes: 'Protecting concentration is vital. Maxing Intelligence is the next priority.'
      }},
      { level: 12, recommendation: {
          asiChoice: 'Feat: Lucky OR Alert OR +2 Constitution',
          spellSuggestions: ['Wall of Force, Bigby\'s Hand, Animate Objects, Telekinesis'],
          notes: 'Further enhance survivability or utility with feats. Solidify key ability scores.'
      }},
      { level: 16, recommendation: {
          asiChoice: '+2 Constitution OR Feat: Tough',
          spellSuggestions: ['Contingency, Mass Suggestion, Globe of Invulnerability, Disintegrate'],
          notes: 'More hit points or maxing out Constitution.'
      }},
      { level: 19, recommendation: {
          asiChoice: 'Epic Boon (e.g., Boon of High Magic, Boon of Spell Recall) OR +2 Intelligence/Constitution',
          spellSuggestions: ['Wish, Meteor Swarm, True Polymorph, Foresight'],
          notes: 'Cap off your primary abilities or gain a powerful boon enhancing your spellcasting.'
      }},
    ],
    subclassSpecificRecommendations: {
      'School of Abjuration': [
        { level: 2, recommendation: { notes: "Arcane Ward is a key defensive feature. Prioritize abjuration spells like Shield and Absorb Elements."}},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence' }},
        { level: 8, recommendation: { asiChoice: '+2 Intelligence (to max) OR Feat: War Caster / Resilient (Constitution)', notes: 'Maxing Intelligence or ensuring concentration for key Abjuration spells like Banishment or Globe of Invulnerability is crucial.' }}
      ],
      'School of Evocation': [
        { level: 2, recommendation: { notes: "Sculpt Spells is fantastic for protecting allies from your AoE damage. Focus on damage spells."}},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence' }},
        { level: 8, recommendation: { featSuggestion: 'Elemental Adept (choose your primary damage type like fire) OR Spell Sniper.' }}
      ],
       'School of Divination': [
        { level: 2, recommendation: { notes: "Portent is incredibly powerful for controlling dice rolls. Use it strategically."}},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence' }},
        { level: 8, recommendation: { featSuggestion: 'Lucky (for more dice manipulation) OR Alert.' }}
      ],
      'School of Conjuration': [
        { level: 2, recommendation: { notes: "Minor Conjuration offers great utility. Focus on summoning and creation spells."}},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence' }},
        { level: 10, recommendation: { notes: 'Focused Conjuration makes your concentration on conjuration spells unbreakable by damage, which is amazing for summons.' }}
      ],
      // Add more Arcane Tradition recommendations as needed
    }
  }
};
