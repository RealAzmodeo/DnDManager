
import { ClassDefinition } from '../types';

export const sorcererClassData: ClassDefinition = {
  className: "Sorcerer",
  classTitle: "The Font of Innate Magic",
  classDescription: "Tap into your inherent magical abilities, shaping reality through raw power and willpower as a Sorcerer.",
  themeColor: "purple", 
  sections: [
    {
      type: 'intro',
      sectionId: 'sorcerer-intro',
      title: 'Sorcerer Class Overview',
      content: [
        "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can’t study sorcery as one learns a language; rather, it is a power that blossoms from within, a gift or curse depending on perspective.",
        "Unlike wizards who meticulously study tomes, sorcerers wield magic through innate talent and force of will, often with spectacular and sometimes unpredictable results."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'sorcerer-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Striker/Controller - Sorcerers excel at dealing burst damage with spells and can manipulate their magic with Metamagic to control the battlefield or enhance their spell effects.",
        "Secondary Role: Utility/Face - With Charisma as their primary spellcasting ability, Sorcerers can be effective social interactors. Their spell list, while smaller than a Wizard's, offers diverse utility.",
        "Playstyle: Flexible and potent. Sorcerers know fewer spells than Wizards but can alter them with Metamagic, creating unique effects. Resource management involves balancing spell slots and Sorcery Points."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'sorcerer-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Metamagic provides unparalleled flexibility in spellcasting.",
        "High burst damage potential, especially with empowered or twinned spells.",
        "Charisma-based casting makes them effective party faces.",
        "Sorcerous Origins offer diverse and powerful thematic abilities.",
        "Can be very potent with a focused spell selection."
      ],
      weaknesses: [
        "Limited number of spells known restricts versatility compared to prepared casters.",
        "Low hit points (d6 Hit Die) and typically no armor proficiency, making them fragile.",
        "Reliant on Sorcery Points for Metamagic, which is a finite resource.",
        "Fewer skill proficiencies than some other classes.",
        "Can struggle if key spells are resisted or countered without backup options."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'sorcerer-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd6 per Sorcerer level.' },
        { name: 'Primary Attributes', description: 'Charisma (spellcasting ability, Sorcery Point effects), Constitution (hit points, concentration saving throws), Dexterity (Armor Class).' },
        { name: 'Saving Throws', description: 'Constitution and Charisma.' },
        { name: 'Proficiencies', description: 'Daggers, darts, slings, quarterstaffs, light crossbows. No armor or shield proficiencies.' },
        { name: 'Spellcasting', description: 'Sorcerers are known casters, drawing spells from the Sorcerer spell list. They use Charisma as their spellcasting ability.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'sorcerer-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Spark of Magic & Origin',
          features: [
            { name: 'Spellcasting', description: 'You know two cantrips and two 1st-level spells from the sorcerer spell list. You use Charisma for your spellcasting ability.' },
            { name: 'Sorcerous Origin Feature', description: 'Choose a sorcerous origin, which describes the source of your innate magical power. Your choice grants you features at 1st level and again at 6th, 14th, and 18th level. See the Sorcerous Origins section for details.', isSubclassFeature: true }
          ],
        },
        {
          level: 2,
          title: 'Font of Magic',
          features: [
            { name: 'Font of Magic', description: 'You tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects. You gain 2 sorcery points, and you gain more as you reach higher levels. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.', isCritical: true },
            { name: 'Flexible Casting', description: 'You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. Creating Spell Slots: As a bonus action, expend sorcery points to create a spell slot (costs 2 for 1st, 3 for 2nd, 5 for 3rd, 6 for 4th, 7 for 5th). Converting a Spell Slot to Sorcery Points: As a bonus action, expend one spell slot and gain a number of sorcery points equal to the slot’s level.'}
          ],
        },
        {
          level: 3,
          title: 'Metamagic Introduction',
          features: [
            { name: 'Metamagic', description: 'You gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level. You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.', subItems: [
              "Careful Spell: Spend 1 sorcery point to choose creatures up to your Charisma modifier (min 1). Chosen creatures automatically succeed on saving throws against the spell.",
              "Distant Spell: Spend 1 sorcery point to double the range of a spell. If range is Touch, it becomes 30 feet.",
              "Empowered Spell: Spend 1 sorcery point to reroll a number of damage dice up to your Charisma modifier (min 1). You must use the new rolls.",
              "Extended Spell: Spend 1 sorcery point to double a spell's duration (to a max of 24 hours).",
              "Heightened Spell: Spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.",
              "Quickened Spell: Spend 2 sorcery points to change a spell’s casting time from 1 action to 1 bonus action.",
              "Subtle Spell: Spend 1 sorcery point to cast a spell without any somatic or verbal components.",
              "Twinned Spell: Spend sorcery points equal to the spell’s level (1 for cantrips) to target a second creature with a spell that normally targets only one creature and doesn't have a range of self."
            ]}
          ],
        },
        { level: 4, title: 'Growing Power', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, { name: 'Cantrip Versatility (Optional Rule)', description: 'You can replace one sorcerer cantrip you know with another from the sorcerer cantrip list.'}] },
        { level: 5, title: 'Arcane Might', features: [{ name: 'Spellcasting', description: 'Gain access to 3rd-level spells.' }] },
        { level: 6, title: 'Origin Advancement', features: [{ name: 'Sorcerous Origin Feature', description: 'You gain a feature from your chosen Sorcerous Origin. See the Sorcerous Origins section for details.', isSubclassFeature: true }] },
        { level: 7, title: 'Deeper Magic', features: [{ name: 'Spellcasting', description: 'Gain access to 4th-level spells.' }] },
        { level: 8, title: 'Arcane Refinement', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 9, title: 'Masterful Spells', features: [{ name: 'Spellcasting', description: 'Gain access to 5th-level spells.' }] },
        { level: 10, title: 'Metamagic Adept', features: [{ name: 'Metamagic', description: 'You gain one additional Metamagic option of your choice.' }] },
        { level: 11, title: 'Greater Arcana', features: [{ name: 'Spellcasting', description: 'Gain access to 6th-level spells.' }] },
        { level: 12, title: 'Sorcerous Peak', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 13, title: 'Secrets of the Weave', features: [{ name: 'Spellcasting', description: 'Gain access to 7th-level spells.' }] },
        { level: 14, title: 'Origin Focus', features: [{ name: 'Sorcerous Origin Feature', description: 'You gain a feature from your chosen Sorcerous Origin. See the Sorcerous Origins section for details.', isSubclassFeature: true }] },
        { level: 15, title: 'Arcane Supremacy', features: [{ name: 'Spellcasting', description: 'Gain access to 8th-level spells.' }] },
        { level: 16, title: 'Unwavering Will', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 17, title: 'Metamagic Master', features: [{ name: 'Metamagic', description: 'You gain one additional Metamagic option of your choice.' }, { name: 'Spellcasting', description: 'Gain access to 9th-level spells.' }] },
        { level: 18, title: 'Origin Mastery', features: [{ name: 'Sorcerous Origin Feature', description: 'You gain a feature from your chosen Sorcerous Origin. See the Sorcerous Origins section for details.', isSubclassFeature: true }] },
        { level: 19, title: 'Epic Boon Granted', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }] },
        { level: 20, title: 'Sorcerous Restoration', features: [{ name: 'Sorcerous Restoration', description: 'You regain 4 expended sorcery points whenever you finish a short rest.', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'sorcerer-magic',
      title: 'Font of Magic & Metamagic',
      intro: "Sorcerers possess an innate wellspring of magical energy they can shape and manipulate in unique ways.",
      mechanics: [
        { name: 'Font of Magic', description: 'The source of a Sorcerer\'s power, represented by Sorcery Points. These points can be used to create spell slots (Flexible Casting) or to fuel Metamagic options. Sorcery Points are regained on a long rest.', isCritical: true },
        { name: 'Sorcery Points', description: 'A pool of points (equal to Sorcerer level starting at L2) used to power Font of Magic abilities, primarily Metamagic and Flexible Casting (creating spell slots or converting slots to points). Regained on a long rest (or 4 points on a short rest at L20).' },
        { name: 'Metamagic', description: 'The ability to alter spells as they are cast by spending Sorcery Points. Options include making a spell subtle, quickened, twinned, empowered, extended, distant, heightened, or careful. This is the hallmark of Sorcerer flexibility.' },
        { name: 'Flexible Casting', description: 'A feature of Font of Magic allowing Sorcerers to convert Sorcery Points into spell slots, or sacrifice spell slots for Sorcery Points, offering dynamic resource management.' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'sorcerer-origins',
      title: 'Sorcerous Origins (Subclasses)',
      intro: 'At 1st level, a Sorcerer chooses a Sorcerous Origin, which is the source of their innate magical power and grants unique features.',
      subclasses: [
        {
          id: 'draconic-bloodline',
          name: 'Draconic Bloodline',
          description: 'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors.',
          note: "A durable Sorcerer with ties to a specific dragon type, gaining bonus HP, AC, elemental damage boosts, and eventually wings.",
          features: [
            { name: 'Dragon Ancestor', level: 1, description: 'Choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later (e.g., Black/Copper: Acid; Blue/Bronze: Lightning; Brass/Gold/Red: Fire; Green: Poison; Silver/White: Cold).' },
            { name: 'Draconic Resilience', level: 1, description: 'Your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren’t wearing armor, your AC equals 13 + your Dexterity modifier.' },
            { name: 'Elemental Affinity', level: 6, description: 'When you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.' },
            { name: 'Dragon Wings', level: 14, description: 'You gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.' },
            { name: 'Draconic Presence', level: 18, description: 'As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were concentrating on a spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.' }
          ]
        },
        {
          id: 'wild-magic',
          name: 'Wild Magic',
          description: 'Your innate magic comes from the wild forces of chaos. Your spellcasting can unleash unpredictable surges.',
          note: "An unpredictable and exciting Sorcerer, risking Wild Magic Surges for potent benefits from Tides of Chaos. Embrace the randomness!",
          features: [
            { name: 'Wild Magic Surge', level: 1, description: 'Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect.' },
            { name: 'Tides of Chaos', level: 1, description: 'You can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. You must finish a long rest before you can use this feature again. Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.' },
            { name: 'Bend Luck', level: 6, description: 'When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature’s roll. You can do so after the creature rolls but before any effects of the roll occur.' },
            { name: 'Controlled Chaos', level: 14, description: 'Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.' },
            { name: 'Spell Bombardment', level: 18, description: 'When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again, and add that roll to the damage. You can use the feature only once per turn.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'sorcerer-feats',
      title: 'Key Feats for the Sorcerer',
      intro: "Sorcerers benefit from feats that enhance their Charisma, protect their concentration, or expand their Metamagic options or spell repertoire.",
      categories: [
        {
          categoryName: 'Core Spellcasting & Metamagic Feats',
          description: 'These feats directly augment a Sorcerer\'s primary abilities.',
          feats: [
            { name: 'War Caster', description: 'Advantage on Con saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.', note: 'Crucial for maintaining concentration on powerful spells.' },
            { name: 'Metamagic Adept', description: 'Learn two Metamagic options and gain 2 sorcery points.', note: 'Expands your Metamagic versatility significantly, very strong for Sorcerers.' },
            { name: 'Fey Touched', description: 'Increase Cha, Int, or Wis by 1. Learn Misty Step and one 1st-level Divination or Enchantment spell.', note: 'Boosts Charisma, grants Misty Step for mobility, and a useful spell like Silvery Barbs or Gift of Alacrity.' },
            { name: 'Telekinetic', description: 'Increase Cha, Int, or Wis by 1. Learn Mage Hand (or improve it). Bonus action telekinetic shove.', note: 'Boosts Charisma and provides a useful bonus action, which Sorcerers often have free if not using Quickened Spell.'}
          ]
        },
        {
          categoryName: 'Defensive & Utility Feats',
          description: 'These feats enhance survivability or broaden spell options.',
          feats: [
            { name: 'Resilient (Constitution)', description: 'Increase Constitution by 1 and gain proficiency in Constitution saving throws.', note: 'Excellent for bolstering concentration saves and increasing hit points.' },
            { name: 'Lucky', description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws.', note: 'Universally powerful for critical moments.' },
            { name: 'Elemental Adept', description: 'Choose one damage type (acid, cold, fire, lightning, or thunder). Spells you cast ignore resistance to that damage type, and you treat any 1 on a damage die as a 2.', note: 'Very good if specializing in a particular damage type (e.g., Draconic Sorcerer - Fire).' },
            { name: 'Spell Sniper', description: 'Learn one attack roll cantrip. Double spell attack range. Ranged spell attacks ignore half/three-quarters cover.', note: 'Good for blaster Sorcerers relying on spell attacks.'}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'sorcerer-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What is the source of your Sorcerer's magic? A draconic ancestor, exposure to wild magic, a celestial blessing, a fiendish pact in their lineage, or something else entirely?",
        "How do they feel about their innate powers? Are they a cherished gift, a dangerous curse, a tool to be mastered, or a natural part of who they are?",
        "Do they try to control their magic meticulously, or do they revel in its raw, untamed nature (especially Wild Magic Sorcerers)?",
        "How do others react to their powers? With awe, fear, jealousy, or curiosity?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'sorcerer-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Sorcerers are powerful single-class characters, as spellcasting progression and Sorcery Points are key. Multiclassing often delays access to higher-level spells and more Sorcery Points.",
        "Charisma is the primary stat, making other Charisma-based classes common multiclass choices if desired."
      ],
      goodCombinations: [
        { className: "Paladin", synergy: "A 2-level dip provides Divine Smite (fueled by Sorcerer spell slots) and a Fighting Style. A 6-7 level dip grants powerful Auras. High Charisma benefits both.", levels: "Sorcerer X / Paladin 2 or 6-7 ('Sorcadin')" },
        { className: "Warlock", synergy: "A 1-3 level dip (especially Hexblade for Charisma attacks or Genie for utility/damage) grants Pact Magic slots (refresh on short rest, can be converted to Sorcery Points), Eldritch Blast + Agonizing Blast for consistent damage, and invocations. ('Sorlock')", levels: "Sorcerer X / Warlock 1-3" },
        { className: "Bard", synergy: "A few levels grant more skills, Expertise, Bardic Inspiration, and some different spell options. Shares Charisma focus. Less common than Paladin/Warlock dips.", levels: "Sorcerer X / Bard 1-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'sorcerer-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "A component pouch or an arcane focus (crystal, orb, rod, staff).",
        "Daggers or a quarterstaff for emergencies.",
        "Robes or traveler's clothes (no armor proficiency)."
      ],
      midGame: [
        "Items that boost Charisma (Ioun Stone of Leadership, Tome of Leadership and Influence).",
        "Amulet of Health (sets Con to 19) or items improving Constitution saving throws.",
        "Bracers of Defense or Cloak of Protection for AC.",
        "Bloodwell Vial (+X to spell attack/save DC, regain sorcery points).",
        "Pearl of Power, spell scrolls."
      ],
      lateGame: [
        "Legendary items boosting Charisma or spell power (Robe of the Archmagi, Staff of Magi/Power).",
        "Items granting flight, powerful defensive options, or more spell versatility.",
        "Items that grant additional Sorcery Points or enhance Metamagic."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'sorcerer-closing',
      title: 'The Conduit of Raw Magic',
      content: [
        "The Sorcerer is a living conduit of arcane power, shaping reality through sheer force of will and innate talent. Their magic is a part of them, more instinctual than learned.",
        "With the unique ability to twist spells through Metamagic, Sorcerers can adapt their magic to nearly any situation, unleashing devastating blasts, subtle manipulations, or crucial support.",
        "Playing a Sorcerer is an exploration of power, its origins, and its wielder's ability to control or be controlled by it, offering a dynamic and impactful spellcasting experience."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Half-Elf / Human / Custom Lineage',
      note: 'Half-Elf provides +2 Cha. Human/Custom Lineage for a starting feat. ASIs and feat now come from your Origin.',
    },
    origin: { 
      name: 'Sage Origin', 
      note: 'Provides Arcana and History skills. The feat can enhance spellcasting or survivability.',
      recommendedFeat: 'War Caster',
      skillProficiencies: ["Arcana", "History"]
    },
    abilityPriority: ['Charisma (Max)', 'Constitution (High for HP/Concentration)', 'Dexterity (Moderate for AC)', 'Wisdom (Saves)', 'Intelligence (Low)', 'Strength (Dump)'],
    keyClassSkills: ['Persuasion', 'Deception', 'Intimidation', 'Insight', 'Arcana (if background allows)'],
    generalLevelRecommendations: [
      { level: 1, recommendation: { 
          featSuggestion: 'War Caster (Recommended via Sage Origin - advantage on concentration saves, cast spells with hands full, spell as opportunity attack).',
          spellSuggestions: ['Cantrips: Fire Bolt, Mage Hand, Prestidigitation, Minor Illusion/Light. Spells: Shield, Magic Missile/Chromatic Orb, Sleep/Charm Person.'],
          notes: 'Prioritize Charisma. Your Origin provides your 1st-level feat. Choose your Sorcerous Origin wisely as it defines many early features.'
      }},
      { level: 3, recommendation: {
          notes: 'Metamagic is key. Twinned Spell and Quickened Spell are often top choices. Careful Spell or Subtle Spell can also be very useful depending on concept.',
          spellSuggestions: ['Web, Misty Step, Suggestion, Mirror Image.'],
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Charisma',
      }},
      { level: 5, recommendation: {
          spellSuggestions: ['Fireball, Hypnotic Pattern, Counterspell, Haste.'],
      }},
      { level: 8, recommendation: {
          asiChoice: 'Feat: Metamagic Adept OR +2 Charisma (to max)',
          spellSuggestions: ['Polymorph, Dimension Door, Banishment.'],
      }},
    ],
    subclassSpecificRecommendations: {
      'Draconic Bloodline': [
        { level: 1, recommendation: { notes: 'Choose Dragon Ancestor for damage type synergy. Draconic Resilience gives bonus HP and better AC when unarmored.' }},
        { level: 6, recommendation: { notes: 'Elemental Affinity adds Charisma mod to damage of chosen type, and can grant resistance.' }},
      ],
      'Wild Magic': [
        { level: 1, recommendation: { notes: 'Tides of Chaos for advantage is strong. Be prepared for Wild Magic Surges!' }},
        { level: 6, recommendation: { notes: 'Bend Luck is a powerful reaction to influence rolls for allies or enemies.' }},
      ]
    }
  }
};
