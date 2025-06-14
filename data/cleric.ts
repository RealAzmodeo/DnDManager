
import { ClassDefinition, FeatureDetail } from '../types';

const clericDomains: FeatureDetail[] = [
  { name: "Knowledge Domain", description: "Divine archivists and seekers of truth." },
  { name: "Life Domain", description: "Supreme healers, embodying vitality and restoration." },
  { name: "Light Domain", description: "Wielders of divine light, dispelling darkness and burning foes." },
  { name: "Nature Domain", description: "Connected to the natural world, commanding its elements and creatures." },
  { name: "Tempest Domain", description: "Channelers of storms, wielding thunder and lightning with divine fury." },
  { name: "Trickery Domain", description: "Masters of deception, illusion, and stealth, often serving duplicitous deities." },
  { name: "War Domain", description: "Divine champions, inspiring allies and crushing enemies on the battlefield." },
];


export const clericClassData: ClassDefinition = {
  className: "Cleric",
  classTitle: "The Book of Holy Rites",
  classDescription: "Wield divine magic and channel the power of your deity as a stalwart Cleric.",
  themeColor: "yellow",
  sections: [
    {
      type: 'intro',
      sectionId: 'cleric-intro',
      title: 'Cleric Class Overview',
      content: [
        "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. A cleric is imbued with divine magic, a conduit for the power of their god.",
        "More than just healers, Clerics can be formidable warriors, wise counselors, or zealous champions, depending on their chosen Divine Domain and the deity they worship."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'cleric-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Support/Healer - Many Cleric domains excel at healing wounds, removing debilitating conditions, and resurrecting fallen comrades.",
        "Secondary Role: Varies by Domain - Can be a formidable Striker (War, Tempest, Light), Controller (Knowledge, Trickery), or Defender (Life, Nature).",
        "Playstyle: Versatile and often party-dependent. Clerics prepare their spells daily from their class spell list, allowing them to adapt to upcoming challenges. Their Divine Domain grants a distinct set of abilities that shapes their capabilities in and out of combat."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'cleric-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Exceptional healing and support capabilities.",
        "Highly versatile due to prepared spellcasting and diverse Divine Domains.",
        "Access to powerful divine spells, including unique Cleric-only options.",
        "Good survivability with medium armor and shield proficiency (some domains grant heavy armor).",
        "Channel Divinity provides unique, impactful abilities that refresh on a short rest."
      ],
      weaknesses: [
        "Spell selection can be overwhelming for new players.",
        "Reliant on Wisdom for spellcasting effectiveness.",
        "Some domains may feel less impactful in direct combat without careful spell choices.",
        "Can be a prime target for enemies due to their healing capabilities.",
        "Divine Intervention is powerful but unreliable until high levels."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'cleric-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd8 per Cleric level.' },
        { name: 'Primary Attributes', description: 'Wisdom (spellcasting ability, save DCs, feature effects), Constitution (hit points, concentration).' },
        { name: 'Saving Throws', description: 'Wisdom and Charisma.' },
        { name: 'Proficiencies', description: 'Light and medium armor, shields, simple weapons. Some domains grant additional proficiencies (e.g., heavy armor, martial weapons).' },
        { name: 'Spellcasting', description: 'Prepared casters drawing from the full Cleric spell list. Uses Wisdom as their spellcasting ability.' },
        { name: 'Ritual Casting', description: 'Can cast Cleric spells with the ritual tag as rituals.'}
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'cleric-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Divine Calling & Domain Choice',
          features: [
            { name: 'Spellcasting', description: 'You gain the ability to cast cleric spells, preparing a list of spells each day. You know 3 cantrips.' },
            { 
              name: 'Divine Domain Feature', 
              description: 'You choose a Divine Domain related to your deity. This choice grants you domain spells and other features at 1st level, and again at 2nd, 6th, 8th, and 17th level. See the Divine Domains section for details.', 
              isSubclassFeature: true 
            },
          ],
        },
        {
          level: 2,
          title: 'Channeling Divinity',
          features: [
            { name: 'Channel Divinity (1/rest)', description: 'You gain the ability to channel divine energy directly from your deity, using it to fuel magical effects. You gain Turn Undead and one other effect determined by your domain. Recharges on a short or long rest.' },
            { name: 'Channel Divinity: Turn Undead', description: 'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet must make a Wisdom saving throw. If it fails, it is turned for 1 minute or until it takes damage.' },
            { 
              name: 'Divine Domain Feature (Channel Divinity Option)', 
              description: 'You gain an additional Channel Divinity option specific to your chosen Divine Domain. See the Divine Domains section for details.', 
              isSubclassFeature: true 
            },
          ],
        },
        { 
          level: 3, 
          title: 'Growing Power', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 2nd-level spells.' }
          ] 
        },
        { 
          level: 4, 
          title: 'Divine Enhancement', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, 
            { name: 'Cantrip Versatility (Optional Rule)', description: 'You can replace one cleric cantrip you know with another from the cleric cantrip list.'}
          ] 
        },
        {
          level: 5,
          title: 'Banishing Darkness',
          features: [
            { name: 'Destroy Undead (CR 1/2)', description: 'When an undead fails its saving throw against your Turn Undead feature, if its Challenge Rating is 1/2 or lower, it is instantly destroyed.' },
            { name: 'Spellcasting', description: 'Gain access to 3rd-level spells.' }
          ],
        },
        {
          level: 6,
          title: 'Greater Channeling & Domain Power',
          features: [
            { name: 'Channel Divinity (2/rest)', description: 'You can now use your Channel Divinity twice between rests.' },
            { 
              name: 'Divine Domain Feature', 
              description: 'You gain a feature from your chosen Divine Domain. Refer to the Divine Domains section for specific details.', 
              isSubclassFeature: true 
            },
          ],
        },
        { 
          level: 7, 
          title: 'Sacred Wards', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 4th-level spells.' }
          ] 
        },
        {
          level: 8,
          title: 'Divine Might & Domain Potency',
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' },
            { name: 'Destroy Undead (CR 1)', description: 'Your Destroy Undead feature now affects undead of CR 1 or lower.' },
            { 
              name: 'Divine Domain Feature (Potent Spellcasting / Divine Strike)', 
              description: 'You gain a feature from your chosen Divine Domain (often Divine Strike or Potent Spellcasting). Refer to the Divine Domains section for specific details.', 
              isSubclassFeature: true 
            },
          ],
        },
        { 
          level: 9, 
          title: 'Miraculous Power', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 5th-level spells.' }
          ] 
        },
        {
          level: 10,
          title: 'Divine Intervention',
          features: [
            { name: 'Divine Intervention', description: 'You can call on your deity to intervene on your behalf. Describe the assistance you seek, and roll a d100. If the number rolled is equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention. If successful, you can\'t use this feature again for 7 days. Otherwise, you can use it again after a long rest.', isCritical: true }
          ],
        },
        {
          level: 11,
          title: 'Smiting Undead',
          features: [
            { name: 'Destroy Undead (CR 2)', description: 'Your Destroy Undead feature now affects undead of CR 2 or lower.' },
            { name: 'Spellcasting', description: 'Gain access to 6th-level spells.' }
          ],
        },
        { 
          level: 12, 
          title: 'Blessed Fortitude', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        {
          level: 13,
          title: 'Higher Magic',
          features: [
            { name: 'Spellcasting', description: 'Gain access to 7th-level spells.' }
          ],
        },
        {
          level: 14,
          title: 'Annihilating Undead & Domain Improvement',
          features: [
            { name: 'Destroy Undead (CR 3)', description: 'Your Destroy Undead feature now affects undead of CR 3 or lower.' },
             { 
               name: 'Divine Domain Feature Improvement (e.g. Divine Strike improvement)', 
               description: 'Some Divine Domains grant an improvement to an existing feature or a new minor feature at this level (e.g. Divine Strike damage increase). Check your chosen Divine Domain section for details.', 
               isSubclassFeature: true, 
               note: "Many domains have their 8th level feature (like Divine Strike) improve at 14th level rather than gaining an entirely new named feature." 
            },
          ],
        },
        { 
          level: 15, 
          title: 'Sanctified Spells', 
          features: [
            { name: 'Spellcasting', description: 'Gain access to 8th-level spells.' }
          ] 
        },
        { 
          level: 16, 
          title: 'Divine Resilience', 
          features: [
            { name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }
          ] 
        },
        {
          level: 17,
          title: 'Supreme Power & Domain Apex',
          features: [
            { name: 'Destroy Undead (CR 4)', description: 'Your Destroy Undead feature now affects undead of CR 4 or lower.' },
            { name: 'Spellcasting', description: 'Gain access to 9th-level spells.' },
            { 
              name: 'Divine Domain Feature (Capstone)', 
              description: 'You gain a powerful capstone feature from your chosen Divine Domain. Refer to the Divine Domains section for specific details.', 
              isSubclassFeature: true 
            },
          ],
        },
        { 
          level: 18, 
          title: 'Unstoppable Channeling', 
          features: [
            { name: 'Channel Divinity (3/rest)', description: 'You can now use your Channel Divinity three times between rests.' }
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
          title: 'Favored of the Gods',
          features: [
            { name: 'Improved Divine Intervention', description: 'Your Divine Intervention feature now succeeds automatically (no roll needed).' , isCritical: true}
          ],
        },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'cleric-channel',
      title: 'Channel Divinity & Divine Intervention',
      intro: "Clerics have unique ways to manifest their deity's power. Channel Divinity offers tactical options, while Divine Intervention is a direct plea for aid.",
      mechanics: [
        { name: 'Channel Divinity', description: 'A signature cleric ability allowing them to invoke divine power. Each cleric gains Turn Undead and another option based on their Divine Domain. Usable a limited number of times per short or long rest.' },
        { name: 'Turn Undead', description: 'Forces nearby undead creatures to flee if they fail a Wisdom saving throw. Stronger clerics can destroy weaker undead outright with this feature.' },
        { name: 'Divine Intervention', description: 'Allows the cleric to petition their deity for direct aid. Success is based on a percentile roll against the cleric\'s level. The effects are potent but at the DM\'s discretion. At 20th level, this becomes automatically successful.', isCritical: true }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'cleric-domains',
      title: 'Divine Domains (Subclasses)',
      intro: 'At 1st level, a Cleric chooses a Divine Domain, representing their connection to a specific aspect of their deity\'s portfolio. This choice grants domain spells and class features at various levels.',
      subclasses: [
        {
          id: 'life-domain',
          name: 'Life Domain',
          description: 'Dedicated to healing and restoration, Life domain clerics are unmatched in their ability to preserve life.',
          features: [
            { name: 'Bonus Proficiency (Heavy Armor)', level: 1, description: 'You gain proficiency with heavy armor.' },
            { name: 'Disciple of Life', level: 1, description: 'Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level.' },
            { name: 'Channel Divinity: Preserve Life', level: 2, description: 'As an action, you expend one use of Channel Divinity to heal living creatures. Choose any creatures within 30 feet of you, and divide up to 5 times your cleric level in hit points among them. This feature can’t restore a creature to more than half of its hit point maximum. You can’t use this feature on an undead or a construct.' },
            { name: 'Blessed Healer', level: 6, description: 'When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell’s level.' },
            { name: 'Divine Strike', level: 8, description: 'Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage. This increases to 2d8 at 14th level.' },
            { name: 'Supreme Healing', level: 17, description: 'When you would normally roll one or more dice to restore hit points with a spell to a creature, you instead use the highest number possible for each die.' }
          ],
          note: "Domain Spells: Bless, Cure Wounds (L1); Lesser Restoration, Spiritual Weapon (L3); Beacon of Hope, Revivify (L5); Death Ward, Guardian of Faith (L7); Mass Cure Wounds, Raise Dead (L9)."
        },
        {
          id: 'light-domain',
          name: 'Light Domain',
          description: 'Clerics of Light bring illumination to the darkest corners, wielding divine fire and dispelling shadows.',
          features: [
            { name: 'Bonus Cantrip (Light)', level: 1, description: 'You gain the Light cantrip if you don’t already know it.' },
            { name: 'Warding Flare', level: 1, description: 'When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can’t be blinded is immune to this feature. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.' },
            { name: 'Channel Divinity: Radiance of the Dawn', level: 2, description: 'As an action, you expend one use of Channel Divinity to unleash a burst of sunlight. Each hostile creature within 30 feet of you must make a Constitution saving throw. On a failed save, a creature takes 2d10 + your cleric level radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn’t blinded. Creatures that have total cover from you are not affected.' },
            { name: 'Improved Flare', level: 6, description: 'You can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.' },
            { name: 'Potent Spellcasting', level: 8, description: 'You add your Wisdom modifier to the damage you deal with any cleric cantrip.' },
            { name: 'Corona of Light', level: 17, description: 'As an action, you can activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light for an additional 30 feet. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.' }
          ],
          note: "Domain Spells: Burning Hands, Faerie Fire (L1); Flaming Sphere, Scorching Ray (L3); Daylight, Fireball (L5); Guardian of Faith, Wall of Fire (L7); Flame Strike, Scrying (L9)."
        },
        {
            id: 'knowledge-domain',
            name: 'Knowledge Domain',
            description: 'Seekers of truth and lore, these clerics value understanding and uncovering secrets.',
            features: [
                { name: 'Blessings of Knowledge', level: 1, description: 'You learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for any ability check you make that uses either of those skills.' },
                { name: 'Channel Divinity: Knowledge of the Ages', level: 2, description: 'As an action, you can use your Channel Divinity to tap into a divine well of knowledge. For 10 minutes, you have proficiency with any one skill or tool. ' },
                { name: 'Channel Divinity: Read Thoughts', level: 6, description: 'As an action, you can use your Channel Divinity to read a creature\'s thoughts. For 1 minute, you can read the surface thoughts of one creature while it is within 60 feet of you. This effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it.'}, // This was level 6
                { name: 'Potent Spellcasting', level: 8, description: 'You add your Wisdom modifier to the damage you deal with any cleric cantrip.' },
                { name: 'Visions of the Past', level: 17, description: 'You can call up visions of the past related to an object you hold or a place you are in. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell. Once you use this feature, you can’t use it again until you finish a short or long rest.' }
            ],
            note: "Domain Spells: Command, Identify (L1); Augury, Suggestion (L3); Nondetection, Speak with Dead (L5); Arcane Eye, Confusion (L7); Legend Lore, Scrying (L9)."
        },
        {
            id: 'war-domain',
            name: 'War Domain',
            description: 'Clerics of War are martial leaders, inspiring courage and smiting their foes with divine might.',
            features: [
                { name: 'Bonus Proficiencies', level: 1, description: 'You gain proficiency with martial weapons and heavy armor.'},
                { name: 'War Priest', level: 1, description: 'When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.'},
                { name: 'Channel Divinity: Guided Strike', level: 2, description: 'When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.'},
                { name: 'Channel Divinity: War God\'s Blessing', level: 6, description: 'When a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.'}, // This was level 6
                { name: 'Divine Strike', level: 8, description: 'Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.'},
                { name: 'Avatar of Battle', level: 17, description: 'You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.'}
            ],
            note: "Domain Spells: Divine Favor, Shield of Faith (L1); Magic Weapon, Spiritual Weapon (L3); Crusader's Mantle, Spirit Guardians (L5); Freedom of Movement, Stoneskin (L7); Flame Strike, Hold Monster (L9)."
        }
      ],
    },
     {
        type: 'feats',
        sectionId: 'cleric-feats',
        title: 'Key Feats for the Cleric',
        intro: "Clerics benefit from feats that enhance their spellcasting, particularly concentration, improve their survivability, or bolster their chosen role (melee combatant, support caster, etc.). Wisdom is their primary spellcasting ability.",
        categories: [
          {
            categoryName: 'Spellcasting & Concentration Feats',
            description: 'These feats are vital for maintaining powerful concentration spells like Spirit Guardians or Bless, and for general spellcasting effectiveness.',
            feats: [
              {
                name: 'War Caster',
                description: 'Advantage on Con saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.',
                note: 'Essential for any Cleric, especially those on the front lines, to maintain concentration on crucial spells.'
              },
              {
                name: 'Resilient (Constitution)',
                description: 'Increase Constitution by 1. Gain proficiency in Constitution saving throws.',
                note: 'Another excellent choice for bolstering concentration saves and increasing hit points. Often taken in conjunction with or as an alternative to War Caster.'
              },
              {
                name: 'Fey Touched',
                description: 'Increase Wis, Int, or Cha by 1. Learn Misty Step and one 1st-level Divination or Enchantment spell.',
                note: 'Boosts Wisdom and grants Misty Step for much-needed mobility, plus another useful spell like Bless or Command.'
              }
            ]
          },
          {
            categoryName: 'Utility, Survivability & Role-Specific Feats',
            description: 'These feats enhance a Cleric\'s general effectiveness, resilience, or specific domain focus.',
            feats: [
              {
                name: 'Lucky',
                description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws, or make an enemy reroll an attack.',
                note: 'Universally powerful for critical moments, whether it\'s landing a key spell or succeeding on a vital saving throw.'
              },
              {
                name: 'Telekinetic',
                description: 'Increase Wis, Int, or Cha by 1. Learn Mage Hand (or improve it). As a bonus action, telekinetically shove a creature 5 feet.',
                note: 'Offers a Wisdom increase and a valuable bonus action to reposition allies or enemies, or to interact with objects. Great for support-focused Clerics.'
              },
              {
                name: 'Tough',
                description: 'Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.',
                note: 'Directly increases survivability, especially helpful for Clerics who find themselves in melee.'
              },
               {
                name: 'Heavy Armor Master',
                description: 'Increase Strength by 1. While wearing heavy armor, bludgeoning, piercing, and slashing damage you take from nonmagical weapons is reduced by 3.',
                note: 'Consider for STR-based, heavy armor domains (like Life, War) for extra durability against common physical attacks. Requires heavy armor proficiency.'
              }
            ]
          }
        ]
      },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'cleric-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What is your Cleric's relationship with their deity? Is it one of devout faith, fearful servitude, a pragmatic pact, or something else?",
        "How does your Cleric express their faith? Through sermons, charitable acts, smiting heretics, or quiet contemplation?",
        "What are the tenets and taboos of your deity? How do these guide your Cleric's actions and decisions?",
        "How did your Cleric come to serve their deity? Were they raised in the faith, had a divine revelation, or sought power/guidance?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'cleric-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Clerics are powerful single-class characters. Multiclassing often delays access to high-level spells and features.",
        "Dips into other classes can provide specific benefits, such as Fighter for Action Surge or Paladin for Smites (if stats align)."
      ],
      goodCombinations: [
        { className: "Fighter", synergy: "A 1-2 level dip provides a Fighting Style and Action Surge. Heavy armor proficiency from some domains makes this even more appealing for martial clerics.", levels: "1-2" },
        { className: "Paladin", synergy: "Shares Charisma as a secondary stat for some builds. Smites can add burst damage, and Paladin auras are strong if you go deeper (6+ levels). Requires Str 13 and Cha 13.", levels: "2-6" },
        { className: "Wizard (Divination/Abjuration)", synergy: "A 1-2 level dip for a Knowledge or Arcana Cleric can grant useful utility cantrips, Shield spell, and interesting low-level subclass features like Portent. Requires Int 13.", levels: "1-2" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'cleric-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "A shield is essential for most clerics.",
        "Appropriate armor (medium or heavy if proficient).",
        "A holy symbol (can be an amulet, emblem on a shield, or reliquary).",
        "A simple weapon (mace, warhammer if proficient via domain)."
      ],
      midGame: [
        "Seek +1 armor and shield.",
        "A +1 weapon if engaging in melee.",
        "Amulet of Health, Periapt of Wisdom, or items that improve Constitution saving throws (e.g., Resilient (Con) feat).",
        "Items that enhance spellcasting, like a Pearl of Power or an Ioun Stone of Insight."
      ],
      lateGame: [
        "+2 or +3 armor, shield, and weapon.",
        "Legendary items like a Talisman of Pure Good/Ultimate Evil, or a Staff of Healing/Power.",
        "Items granting spell resistance or immunity to conditions."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'cleric-closing',
      title: 'Servants of the Divine',
      content: [
        "The Cleric is a cornerstone of many D&D adventuring parties, offering unparalleled support, resilience, and divine power.",
        "Their diverse Divine Domains allow for a wide range of character concepts and playstyles, ensuring that no two clerics are exactly alike.",
        "Whether you wish to be a benevolent healer, a righteous crusader, a keeper of ancient lore, or a harbinger of storms, the Cleric class provides the tools to embody your chosen divine path."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Human', 
      note: 'Benefits from flexible ASI via Origin. Consider a species that boosts Wisdom or Constitution if not using a +Wis Origin feat.',
    },
    origin: {
      name: 'Acolyte Origin', 
      note: 'Provides Insight and Religion skills, aligning well with the Cleric theme. The feat can be War Caster or Resilient (Con).',
      recommendedFeat: 'War Caster',
      skillProficiencies: ["Insight", "Religion"]
    },
    abilityPriority: ['Wisdom (Max)', 'Constitution (High)', 'Strength (Moderate, for heavy armor/melee domains) / Dexterity (Moderate, for medium armor finesse)', 'Charisma (Secondary, for social skills)', 'Intelligence (Low)'],
    keyClassSkills: ['Perception', 'Insight', 'Religion', 'Medicine', 'Persuasion (if Charisma is decent)'],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: 'War Caster (Recommended via Acolyte Origin).',
          spellSuggestions: ['Cantrips: Guidance, Sacred Flame, Light/Thaumaturgy. 1st Level: Healing Word, Bless, Shield of Faith.'],
          notes: 'Focus on Wisdom. Choose a domain that matches your desired playstyle. Heavy armor domains might need Str 15.'
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Wisdom',
          spellSuggestions: ['Aid, Spiritual Weapon (if not a domain spell)'],
          notes: 'Increasing Wisdom boosts spell save DC, attack bonus, and prepared spells.'
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Wisdom (to max, if War Caster was taken at L1 via Origin) OR Feat: Resilient (Constitution)',
          spellSuggestions: ['Spirit Guardians, Revivify (if not domain spell)'],
          notes: 'War Caster or Resilient (Con) are crucial for maintaining concentration. Maxing Wisdom is also a top priority.'
      }},
      { level: 12, recommendation: {
          asiChoice: '+2 Constitution OR Feat: Lucky',
          spellSuggestions: ['Death Ward, Banishment, Guardian of Faith'],
          notes: 'Boost Constitution for more HP and better concentration saves.'
      }},
      { level: 16, recommendation: {
          asiChoice: '+2 Constitution/Wisdom OR Feat: Tough',
          spellSuggestions: ['Heal, Harm, Planar Ally'],
          notes: 'Continue to boost key stats or survivability.'
      }},
      { level: 19, recommendation: {
          asiChoice: 'Epic Boon (e.g., Boon of High Magic, Boon of Spell Recall) OR +2 Wisdom/Constitution',
          spellSuggestions: ['Mass Heal, True Resurrection'],
          notes: 'Cap off your primary abilities or gain a powerful boon.'
      }},
    ],
    subclassSpecificRecommendations: {
      'Life Domain': [
        { level: 1, recommendation: { notes: "Bonus Proficiency (Heavy Armor) and Disciple of Life make you a potent healer from the start."}},
        { level: 4, recommendation: { asiChoice: '+2 Wisdom' }},
        { level: 8, recommendation: { featSuggestion: 'Tough for more HP if War Caster/Resilient already covered.', spellSuggestions: ['Always have healing spells prepared.'] }},
      ],
      'Light Domain': [
        { level: 1, recommendation: { notes: "Warding Flare is a great defensive reaction."}},
        { level: 4, recommendation: { asiChoice: '+2 Wisdom' }},
        { level: 8, recommendation: { featSuggestion: 'Elemental Adept (Fire or Radiant) or Spell Sniper for cantrips.', spellSuggestions: ['Focus on fire and radiant damage spells.'] }},
      ],
      'Knowledge Domain': [
          { level: 1, recommendation: { notes: "Blessings of Knowledge offers fantastic skill utility."}},
          { level: 4, recommendation: { asiChoice: '+2 Wisdom' }},
          { level: 8, recommendation: { featSuggestion: 'Observant or Keen Mind to enhance investigation skills.', spellSuggestions:['Utility and divination spells are key.']}}
      ],
      'War Domain': [
          { level: 1, recommendation: { notes: "Bonus Proficiencies (Martial Weapons, Heavy Armor) and War Priest allow for effective melee combat."}},
          { level: 4, recommendation: { asiChoice: '+2 Wisdom or +2 Strength (if primary melee)' }},
          { level: 8, recommendation: { featSuggestion: 'Great Weapon Master or Sentinel if melee focused.', spellSuggestions:['Buffs like Crusader\'s Mantle and weapon attacks are your friends.']}}
      ]
    }
  }
};
