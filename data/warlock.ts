
import { ClassDefinition } from '../types';

export const warlockClassData: ClassDefinition = {
  className: "Warlock",
  classTitle: "The Grimoire of Pacts",
  classDescription: "Forge a pact with an otherworldly being, gaining arcane power and unique abilities as a Warlock.",
  themeColor: "purple", 
  sections: [
    {
      type: 'intro',
      sectionId: 'warlock-intro',
      title: 'Warlock Class Overview',
      content: [
        "Warlocks are seekers of knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
        "Drawing on the ancient knowledge of beings such as fey nobles, fiends, celestials, or alien entities, warlocks piece together arcane secrets to bolster their own power."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'warlock-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Striker/Controller - Warlocks are known for their consistent and potent damage output, primarily through Eldritch Blast modified by Invocations. They also have access to a variety of control and utility spells.",
        "Secondary Role: Face/Utility - With Charisma as their primary spellcasting ability, Warlocks can be effective social interactors. Their unique Pact Boons and Eldritch Invocations provide diverse utility options.",
        "Playstyle: Highly customizable and resource-efficient on short rests. Warlocks have few spell slots (Pact Magic) but they recover on a short rest and are always cast at their highest available level. Eldritch Invocations allow for significant personalization of abilities, especially Eldritch Blast."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'warlock-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Exceptional and customizable at-will damage with Eldritch Blast.",
        "Pact Magic spell slots recover on a short rest, making them strong in encounters per day with rests.",
        "Eldritch Invocations offer unique and powerful passive abilities or at-will spells.",
        "Strong thematic elements tied to their Otherworldly Patron.",
        "Good single-target damage and control options."
      ],
      weaknesses: [
        "Very few spell slots per combat encounter compared to other full casters.",
        "Limited number of spells known.",
        "Patron can impose demands or have conflicting goals.",
        "d8 Hit Die makes them less durable than some martial classes if focused on melee (e.g., Pact of the Blade without specific builds).",
        "Reliant on Charisma for most abilities."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'warlock-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd8 per Warlock level.' },
        { name: 'Primary Attributes', description: 'Charisma (spellcasting, Invocation DCs, social skills), Constitution (hit points, concentration), Dexterity (AC).' },
        { name: 'Saving Throws', description: 'Wisdom and Charisma.' },
        { name: 'Proficiencies', description: 'Light armor, simple weapons.' },
        { name: 'Skills', description: 'Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'warlock-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Pact and Patron',
          features: [
            { name: 'Otherworldly Patron Feature', description: 'You strike a bargain with an otherworldly being of your choice. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level. See the Otherworldly Patrons section for details.', isSubclassFeature: true },
            { name: 'Pact Magic', description: 'Your arcane research and the magic bestowed on you by your patron have given you facility with spells. You gain 2 cantrips known from the warlock spell list. You know 2 1st-level spells. You have 1 spell slot, which is 1st level. All your warlock spell slots are the same level and recharge on a short or long rest.', isCritical: true }
          ],
        },
        {
          level: 2,
          title: 'Eldritch Invocations',
          features: [
            { name: 'Eldritch Invocations (Learn 2)', description: 'In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. You gain two eldritch invocations of your choice. Many invocations have prerequisites. You gain additional invocations as you level up.', note: "Popular choices: Agonizing Blast, Repelling Blast, Devil's Sight." }
          ],
        },
        {
          level: 3,
          title: 'Pact Boon Choice',
          features: [
            { name: 'Pact Boon', description: 'Your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice: Pact of the Blade, Pact of the Chain, or Pact of the Tome. This choice offers unique abilities and can be further enhanced by specific Eldritch Invocations.', isSubclassFeature: true } 
          ],
        },
        { level: 4, title: 'Arcane Refinement', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, {name: 'Cantrip', description: 'You learn an additional Warlock cantrip.'}] },
        { level: 5, title: 'Deepened Pact', features: [{ name: 'Eldritch Invocation (Learn 1)', description: 'You learn an additional Eldritch Invocation of your choice.' }] },
        { level: 6, title: 'Patron Advancement', features: [{ name: 'Otherworldly Patron Feature', description: 'You gain a feature from your chosen Otherworldly Patron. See the Otherworldly Patrons section for details.', isSubclassFeature: true }] },
        { level: 7, title: 'Arcane Secrets', features: [{ name: 'Eldritch Invocation (Learn 1)', description: 'You learn an additional Eldritch Invocation of your choice.' }] },
        { level: 8, title: 'Greater Power', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 9, title: 'Invoked Might & Spell Power', features: [{ name: 'Eldritch Invocation (Learn 1)', description: 'You learn an additional Eldritch Invocation of your choice.' } , { name: 'Pact Magic Improvement', description: 'Your warlock spell slots become 5th level.'}] },
        { level: 10, title: 'Patron\'s Favor & Cantrip', features: [{ name: 'Otherworldly Patron Feature', description: 'You gain a feature from your chosen Otherworldly Patron. See the Otherworldly Patrons section for details.', isSubclassFeature: true }, {name: 'Cantrip', description: 'You learn an additional Warlock cantrip.'}] },
        { level: 11, title: 'Mystic Arcanum (6th)', features: [{ name: 'Mystic Arcanum (6th Level)', description: 'Your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum. You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.' }] },
        { level: 12, title: 'Invocation Master', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, { name: 'Eldritch Invocation (Learn 1)', description: 'You learn an additional Eldritch Invocation of your choice.' }] },
        { level: 13, title: 'Mystic Arcanum (7th)', features: [{ name: 'Mystic Arcanum (7th Level)', description: 'Choose one 7th-level spell from the warlock spell list. Cast once per long rest without a slot.' }] },
        { level: 14, title: 'Patron\'s Apex', features: [{ name: 'Otherworldly Patron Feature', description: 'You gain a feature from your chosen Otherworldly Patron. See the Otherworldly Patrons section for details.', isSubclassFeature: true }] },
        { level: 15, title: 'Mystic Arcanum (8th) & Invocation', features: [{ name: 'Mystic Arcanum (8th Level)', description: 'Choose one 8th-level spell from the warlock spell list. Cast once per long rest without a slot.' }, { name: 'Eldritch Invocation (Learn 1)', description: 'You learn an additional Eldritch Invocation of your choice.' }] },
        { level: 16, title: 'Unrivaled Power', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 17, title: 'Mystic Arcanum (9th) & Pact Slot', features: [{ name: 'Mystic Arcanum (9th Level)', description: 'Choose one 9th-level spell from the warlock spell list. Cast once per long rest without a slot.' }, { name: 'Pact Magic Improvement', description: 'You gain a fourth Pact Magic spell slot.'}] },
        { level: 18, title: 'Eldritch Versatility', features: [{ name: 'Eldritch Invocation (Learn 1)', description: 'You learn an additional Eldritch Invocation of your choice.' }] },
        { level: 19, title: 'Epic Boon Granted', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }] },
        { level: 20, title: 'Eldritch Master', features: [{ name: 'Eldritch Master', description: 'You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'warlock-pacts',
      title: 'Pact Magic, Invocations, and Boons',
      intro: "Warlocks wield power through their unique Pact Magic, customize abilities with Eldritch Invocations, and receive a special Pact Boon from their patron.",
      mechanics: [
        { name: 'Pact Magic', description: 'Warlocks have a small number of spell slots that are always cast at the highest level available to them for their warlock level. These slots recover on a short or long rest, allowing for frequent use of powerful spells if rests are available.', isCritical: true },
        { name: 'Eldritch Blast', description: 'A cornerstone cantrip for many Warlocks. It fires one or more beams of crackling energy, each dealing 1d10 force damage. The number of beams increases at higher levels (one beam at 1st level, two beams at 5th level, three at 11th level, and four beams at 17th level). Often enhanced by Eldritch Invocations.', isCritical: true },
        { name: 'Eldritch Invocations', description: 'Fragments of forbidden knowledge that grant the Warlock persistent magical abilities. Some enhance Eldritch Blast (e.g., Agonizing Blast adds Charisma to damage), others grant at-will spells, or provide passive benefits like Devil\'s Sight (see in magical darkness).', isCritical: true },
        { name: 'Pact Boon', description: 'At 3rd level, a Warlock chooses a Pact Boon from their patron: Pact of the Blade (summon or bond with a pact weapon), Pact of the Chain (gain an improved familiar), or Pact of the Tome (gain a Book of Shadows with extra cantrips and ritual spells).', isCritical: true },
        { name: 'Mystic Arcanum', description: 'Starting at 11th level, Warlocks gain access to higher-level spells (6th, 7th, 8th, and 9th) that can each be cast once per long rest, separate from their Pact Magic slots.' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'warlock-patrons',
      title: 'Otherworldly Patrons (Subclasses)',
      intro: 'At 1st level, a Warlock chooses an Otherworldly Patron, the source of their magical power. This choice grants unique features and an expanded spell list.',
      subclasses: [
        {
          id: 'the-archfey',
          name: 'The Archfey',
          description: 'Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. Their motives are often inscrutable, and their whims can be both delightful and terrifying.',
          note: "Expanded Spells: Faerie Fire, Sleep (L1); Calm Emotions, Phantasmal Force (L2); Blink, Plant Growth (L3); Dominate Beast, Greater Invisibility (L4); Dominate Person, Seeming (L5).",
          features: [
            { name: 'Fey Presence', level: 1, description: 'As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn. Once you use this feature, you can’t use it again until you finish a short or long rest.' },
            { name: 'Misty Escape', level: 6, description: 'When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell. Once you use this feature, you can’t use it again until you finish a short or long rest.' },
            { name: 'Beguiling Defenses', level: 10, description: 'You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.' },
            { name: 'Dark Delirium', level: 14, description: 'As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage. Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.' }
          ]
        },
        {
          id: 'the-fiend',
          name: 'The Fiend',
          description: 'You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you.',
          note: "Expanded Spells: Burning Hands, Command (L1); Blindness/Deafness, Scorching Ray (L2); Fireball, Stinking Cloud (L3); Fire Shield, Wall of Fire (L4); Flame Strike, Hallow (L5).",
          features: [
            { name: 'Dark One\'s Blessing', level: 1, description: 'When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).' },
            { name: 'Dark One\'s Own Luck', level: 6, description: 'When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll’s effects occur. Once you use this feature, you can’t use it again until you finish a short or long rest.' },
            { name: 'Fiendish Resilience', level: 10, description: 'You can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.' },
            { name: 'Hurl Through Hell', level: 14, description: 'When you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape. At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience. Once you use this feature, you can’t use it again until you finish a long rest.' }
          ]
        },
        {
          id: 'the-great-old-one',
          name: 'The Great Old One',
          description: 'Your patron is a mysterious entity whose nature is utterly alien. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods, beings almost as ancient as the multiverse itself.',
          note: "Expanded Spells: Dissonant Whispers, Tasha's Hideous Laughter (L1); Detect Thoughts, Phantasmal Force (L2); Clairvoyance, Sending (L3); Dominate Beast, Evard's Black Tentacles (L4); Dominate Person, Telekinesis (L5).",
          features: [
            { name: 'Awakened Mind', level: 1, description: 'You can telepathically speak to any creature you can see within 30 feet of you. You don’t need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.' },
            { name: 'Entropic Ward', level: 6, description: 'When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn. Once you use this feature, you can’t use it again until you finish a short or long rest.' },
            { name: 'Thought Shield', level: 10, description: 'Your thoughts can’t be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do.' },
            { name: 'Create Thrall', level: 14, description: 'As an action, you can touch an incapacitated humanoid. That creature is then charmed by you until a Remove Curse spell is cast on it, the charmed condition is removed from it, or you use this feature again. You can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'warlock-feats',
      title: 'Key Feats for the Warlock',
      intro: "Warlocks benefit from feats that enhance their Charisma, improve concentration, or grant additional magical options. Feats that synergize with Eldritch Blast or Pact Boons are also strong choices.",
      categories: [
        {
          categoryName: 'Core Spellcasting & Combat Feats',
          description: 'These feats directly improve a Warlock\'s primary combat and spellcasting capabilities.',
          feats: [
            { name: 'War Caster', description: 'Advantage on Con saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.', note: 'Essential for maintaining concentration on key spells like Hex or Summon spells.' },
            { name: 'Resilient (Constitution)', description: 'Increase Constitution by 1 and gain proficiency in Constitution saving throws.', note: 'Excellent for bolstering concentration saves and increasing hit points.' },
            { name: 'Fey Touched / Shadow Touched', description: '+1 Cha, learn Misty Step (Fey) or Invisibility (Shadow) and another 1st-level spell from specified schools. Cast each once per long rest.', note: 'Boosts Charisma and grants valuable spells for mobility or utility.' },
            { name: 'Spell Sniper', description: 'Learn one attack roll cantrip. Double spell attack range. Ranged spell attacks ignore half/three-quarters cover.', note: 'Excellent for Eldritch Blast, effectively doubling its range and making it ignore cover.' },
            { name: 'Eldritch Adept', description: 'Learn one Eldritch Invocation. Can be swapped on level up.', note: 'Allows access to another invocation, potentially one with a prerequisite if you meet it as a Warlock.'}
          ]
        },
        {
          categoryName: 'Utility & Defensive Feats',
          description: 'These feats enhance survivability or broaden a Warlock\'s options.',
          feats: [
            { name: 'Lucky', description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws.', note: 'Universally powerful for critical moments.' },
            { name: 'Telekinetic', description: '+1 Cha, learn Mage Hand (or improve it), bonus action telekinetic shove.', note: 'Boosts Charisma and provides a useful bonus action for control.' },
            { name: 'Moderately Armored', description: '+1 Str/Dex, gain proficiency with medium armor and shields.', note: 'Significant AC boost if you have decent Dexterity (14 for max medium armor AC) and a free feat slot. Requires Light Armor proficiency first.'},
            { name: 'Inspiring Leader', description: 'Spend 10 minutes to grant temporary HP (level + Cha mod) to self and up to six friendly creatures.', note: 'Excellent use of high Charisma for party support.'}
          ]
        }
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'warlock-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Warlock is a very popular multiclass option due to Eldritch Blast, Agonizing Blast, and short rest spell slots.",
        "Dipping 1-3 levels into Warlock is common for other Charisma classes. Taking more Warlock levels for higher-level invocations and pact features is also viable."
      ],
      goodCombinations: [
        { className: "Sorcerer ('Sorlock')", synergy: "Combines Warlock's short rest Pact Magic slots (convertible to Sorcery Points) and Eldritch Blast with Sorcerer's Metamagic and broader spell list. Extremely potent.", levels: "Warlock 2-3 / Sorcerer X" },
        { className: "Paladin ('Pactadin')", synergy: "Warlock Pact Magic slots can fuel Divine Smites and recover on short rests. Hexblade patron allows Charisma for attacks. Powerful melee/caster hybrid.", levels: "Warlock 1-5 / Paladin X" },
        { className: "Bard", synergy: "More skills, Expertise, Bardic Inspiration, and full caster spell slot progression. Shares Charisma focus. Can create a very versatile character.", levels: "Warlock 1-3 / Bard X" },
        { className: "Fighter", synergy: "A 1-2 level dip for Action Surge and a Fighting Style can benefit Pact of the Blade Warlocks, or any Warlock wanting more burst.", levels: "Warlock X / Fighter 1-2" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'warlock-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "Light armor (e.g., Studded Leather if affordable, otherwise Leather).",
        "A simple weapon (e.g., dagger, light crossbow).",
        "An arcane focus (crystal, orb, rod, staff) or component pouch.",
        "A grimoire or tome if Pact of the Tome."
      ],
      midGame: [
        "+1/+2 light armor.",
        "Rod of the Pact Keeper (+X to spell attack/save DC, regain a Warlock spell slot).",
        "Items that boost Charisma (Ioun Stone of Leadership, Tome of Leadership and Influence).",
        "For Pact of the Blade: +1/+2 magical weapon (or Improved Pact Weapon invocation).",
        "Cloak of Protection, Ring of Protection."
      ],
      lateGame: [
        "+2/+3 light armor.",
        "Legendary arcane focus or Rod of the Pact Keeper.",
        "Items significantly boosting Charisma or providing powerful spell-like abilities.",
        "For Pact of the Blade: Legendary weapons."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'warlock-closing',
      title: 'The Bargainer of Souls',
      content: [
        "The Warlock is a testament to ambition and the pursuit of power through unconventional means. Their pacts grant them access to potent magic and unique abilities, setting them apart from other arcane casters.",
        "Highly customizable through Eldritch Invocations and Pact Boons, Warlocks can be tailored to fill various roles, from relentless damage dealers to subtle manipulators and versatile spellcasters."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Tiefling', 
      note: 'Thematic choice for a Warlock, often comes with Charisma benefits or useful spells. ASIs and feat now from Origin.',
    },
    origin: {
      name: 'Cultist Origin',
      note: 'Provides Deception and Religion skills, fitting for a Warlock with a mysterious pact. The feat can enhance spellcasting or social abilities.',
      recommendedFeat: 'Eldritch Adept',
      skillProficiencies: ["Deception", "Religion"]
    },
    abilityPriority: ['Charisma (Max)', 'Constitution (High for HP/Concentration)', 'Dexterity (Moderate for AC)', 'Wisdom (Saves)', 'Intelligence (Low)', 'Strength (Dump)'],
    keyClassSkills: ['Deception', 'Intimidation', 'Arcana', 'Persuasion', 'Investigation'],
    generalLevelRecommendations: [
      { level: 1, recommendation: { 
          featSuggestion: 'Eldritch Adept (Recommended via Cultist Origin - gain another Invocation early, e.g., Devil\'s Sight or Mask of Many Faces).',
          spellSuggestions: ['Cantrips: Eldritch Blast, Mage Hand/Minor Illusion. Spells: Hex, Armor of Agathys/Charm Person.'],
          notes: 'Prioritize Charisma. Choose your Otherworldly Patron. Your Origin provides your 1st-level feat.'
      }},
      { level: 2, recommendation: {
          notes: 'Eldritch Invocations: Agonizing Blast is almost mandatory for Eldritch Blast users. Repelling Blast is excellent for control. Devil\'s Sight + Darkness spell can be a powerful combo (discuss with DM/party).'
      }},
      { level: 3, recommendation: {
          notes: 'Pact Boon: Pact of the Tome for cantrips/rituals (Book of Ancient Secrets invocation). Pact of the Chain for an improved familiar (Investment of the Chain Master invocation). Pact of the Blade for melee (Improved Pact Weapon invocation).'
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Charisma',
          spellSuggestions: ['Misty Step, Suggestion, Shatter, Invisibility (if not Archfey).']
      }},
      { level: 5, recommendation: {
          spellSuggestions: ['Hypnotic Pattern, Counterspell, Fireball (Fiend), Hunger of Hadar.'],
          notes: 'Eldritch Blast gets a second beam here.'
      }},
      { level: 8, recommendation: {
          asiChoice: 'Feat: War Caster OR +2 Charisma (to max).',
          spellSuggestions: ['Summon Greater Demon, Banishment, Dimension Door.']
      }},
    ],
    subclassSpecificRecommendations: {
      'The Archfey': [
        { level: 1, recommendation: { notes: 'Fey Presence is a useful AoE charm/frighten. Expanded spells offer good control.' }},
        { level: 6, recommendation: { notes: 'Misty Escape is a great defensive teleport.' }},
      ],
      'The Fiend': [
        { level: 1, recommendation: { notes: 'Dark One\'s Blessing provides valuable temporary HP. Expanded spells offer strong fire damage.' }},
        { level: 6, recommendation: { notes: 'Dark One\'s Own Luck is a good defensive/utility reaction.' }},
      ],
      'The Great Old One': [
        { level: 1, recommendation: { notes: 'Awakened Mind provides telepathic communication. Expanded spells offer psychic and control options.' }},
        { level: 6, recommendation: { notes: 'Entropic Ward imposes disadvantage and can grant you advantage.' }},
      ]
    }
  }
};
