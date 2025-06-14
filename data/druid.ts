
import { ClassDefinition } from '../types';

export const druidClassData: ClassDefinition = {
  className: "Druid",
  classTitle: "The Whispers of the Wild",
  classDescription: "Harness the primal power of nature, shapeshift into wild beasts, and command the elements as a versatile Druid.",
  themeColor: "green",
  sections: [
    {
      type: 'intro',
      sectionId: 'druid-intro',
      title: 'Druid Class Overview',
      content: [
        "Druids are keepers of the natural world, drawing their power from the untamed wilderness. They are protectors of forests, guardians of sacred groves, and masters of primal magic that flows through all living things.",
        "Their abilities include shapeshifting into powerful beasts (Wild Shape), casting spells that command plants, animals, and the elements, and a deep understanding of nature's secrets. They are often seen as wise, reclusive figures, but can be fierce protectors when their domain is threatened."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'druid-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Versatile (Spellcaster, Support, Tank/Striker via Wild Shape) - Druids are exceptionally adaptable. They can be potent spellcasters (especially Circle of the Land), durable tanks and damage dealers (Circle of the Moon), or valuable support characters with healing and utility spells.",
        "Secondary Role: Controller/Explorer - Many druid spells focus on controlling the battlefield with terrain effects or restraining enemies. Their connection to nature makes them excellent explorers and survivalists.",
        "Playstyle: Strategic and adaptive. Druids prepare spells daily, allowing them to tailor their abilities to anticipated challenges. Wild Shape offers unique tactical options for combat, scouting, or utility. Their chosen Druid Circle heavily influences their primary strengths and how they approach situations."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'druid-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Exceptional versatility through Wild Shape and a broad spell list.",
        "Strong healing and support capabilities.",
        "Potent battlefield control and area-of-effect spells.",
        "Excellent survivability, especially Circle of the Moon Druids in Wild Shape (effectively extra HP pools).",
        "Unique utility and exploration options related to nature and animals.",
        "Prepared spellcasting allows adaptation to daily needs."
      ],
      weaknesses: [
        "Wild Shape uses can be limited, especially at lower levels.",
        "Some Druids might feel less specialized in direct damage compared to other casters if not focusing on specific spells.",
        "Armor restrictions (typically no metal armor) can limit AC options outside of Wild Shape for some builds.",
        "Concentration is required for many powerful spells, limiting simultaneous effects.",
        "Complexity of managing Wild Shape forms and spell preparation can be daunting for new players."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'druid-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd8 per Druid level.' },
        { name: 'Primary Attributes', description: 'Wisdom (spellcasting ability, Wild Shape DC for some effects), Constitution (hit points, concentration), Dexterity (AC in humanoid form).' },
        { name: 'Saving Throws', description: 'Intelligence and Wisdom.' },
        { name: 'Proficiencies', description: 'Light and medium armor (nonmetal), shields (nonmetal), clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears. Herbalism kit.' },
        { name: 'Spellcasting', description: 'Prepared casters drawing from the Druid spell list. Uses Wisdom as their spellcasting ability. Can cast Druid spells with the ritual tag as rituals.' },
        { name: 'Druidic', description: 'You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'druid-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Primal Connection',
          features: [
            { name: 'Druidic', description: 'You know Druidic, the secret language of druids. You can speak it and use it to leave hidden messages. You can also use it to identify other druids.' },
            { name: 'Spellcasting', description: 'You gain the ability to cast druid spells, preparing a list of spells each day from the druid spell list. You know 2 cantrips.' }
          ],
        },
        {
          level: 2,
          title: 'Wild Shape & Circle Choice',
          features: [
            { name: 'Wild Shape', description: 'As an action, you can magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest. Your druid level determines the beasts you can transform into. Max CR 1/4, no flying or swimming speed. Improves at higher levels.', isCritical: true, note: "At L2: Max CR 1/4, no fly/swim. L4: Max CR 1/2, no fly. L8: Max CR 1, flying allowed." },
            { name: 'Druid Circle Feature', description: 'You choose to identify with a circle of druids, such as the Circle of the Land or the Circle of the Moon. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level. See the Druid Circles section for details.', isSubclassFeature: true },
          ],
        },
        { level: 3, title: 'Growing Power', features: [{ name: 'Spellcasting', description: 'Gain access to 2nd-level spells.' }] },
        { level: 4, title: 'Primal Enhancement', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, { name: 'Wild Shape Improvement', description: 'You can now transform into beasts with a CR of 1/2 or lower that don\'t have a flying speed.'}, { name: 'Cantrip Versatility (Optional Rule)', description: 'You can replace one druid cantrip you know with another from the druid cantrip list.'}] },
        { level: 5, title: 'Natural Might', features: [{ name: 'Spellcasting', description: 'Gain access to 3rd-level spells.' }] },
        { level: 6, title: 'Circle Advancement', features: [{ name: 'Druid Circle Feature', description: 'You gain a feature from your chosen Druid Circle. See the Druid Circles section for details.', isSubclassFeature: true }] },
        { level: 7, title: 'Deeper Magic', features: [{ name: 'Spellcasting', description: 'Gain access to 4th-level spells.' }] },
        { level: 8, title: 'Wild Shape Mastery', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, { name: 'Wild Shape Improvement', description: 'You can now transform into beasts with a CR of 1 or lower, and you can transform into beasts with a flying speed.'}] },
        { level: 9, title: 'Primal Spells', features: [{ name: 'Spellcasting', description: 'Gain access to 5th-level spells.' }] },
        { level: 10, title: 'Circle Specialization', features: [{ name: 'Druid Circle Feature', description: 'You gain a feature from your chosen Druid Circle. See the Druid Circles section for details.', isSubclassFeature: true }] },
        { level: 11, title: 'Nature\'s Call', features: [{ name: 'Spellcasting', description: 'Gain access to 6th-level spells.' }] },
        { level: 12, title: 'Heightened Connection', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 13, title: 'Wild Secrets', features: [{ name: 'Spellcasting', description: 'Gain access to 7th-level spells.' }] },
        { level: 14, title: 'Circle Apex', features: [{ name: 'Druid Circle Feature', description: 'You gain a feature from your chosen Druid Circle. See the Druid Circles section for details.', isSubclassFeature: true }] },
        { level: 15, title: 'Enduring Magic', features: [{ name: 'Spellcasting', description: 'Gain access to 8th-level spells.' }] },
        { level: 16, title: 'Primal Resilience', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 17, title: 'Apex of Nature', features: [{ name: 'Spellcasting', description: 'Gain access to 9th-level spells.' }] },
        { level: 18, title: 'Timeless Body & Beast Spells', features: [{ name: 'Timeless Body', description: 'For every 10 years that pass, your body ages only 1 year.' }, { name: 'Beast Spells', description: 'You can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren’t able to provide material components.', isCritical: true }] },
        { level: 19, title: 'Epic Boon Granted', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }] },
        { level: 20, title: 'Archdruid', features: [{ name: 'Archdruid', description: 'You can use your Wild Shape an unlimited number of times.', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'druid-primal',
      title: 'Core Primal Abilities',
      intro: "Druids command the power of nature through their unique connection to the wild.",
      mechanics: [
        { name: 'Spellcasting (Druid)', description: 'Druids are full spellcasters who prepare their spells daily from the entire druid spell list. Their magic is drawn from nature itself, allowing them to heal, control the elements, summon creatures, and more. Wisdom is their spellcasting ability.' },
        { name: 'Wild Shape', description: 'The iconic druid ability to magically transform into various beasts. This provides incredible versatility for combat, scouting, and utility. The power and types of beasts available increase with druid level. Uses are limited per short/long rest until 20th level.', isCritical: true },
        { name: 'Druidic', description: 'Knowledge of a secret language known only to druids, used for communication and leaving hidden messages.' },
        { name: 'Timeless Body', description: 'At 18th level, druids age more slowly, reflecting their deep connection to the enduring forces of nature.' },
        { name: 'Beast Spells', description: 'At 18th level, druids can cast many of their spells while in Wild Shape, significantly enhancing their combat and utility options in beast form.' },
        { name: 'Archdruid', description: 'At 20th level, druids gain unlimited uses of Wild Shape and can cast verbal and somatic components of druid spells while in beast form, representing their ultimate mastery over nature and transformation.' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'druid-circles',
      title: 'Druid Circles (Subclasses)',
      intro: 'At 2nd level, a Druid chooses a Druid Circle, which represents their specific connection to and philosophy regarding the natural world.',
      subclasses: [
        {
          id: 'circle-of-the-land',
          name: 'Circle of the Land',
          description: 'Druids of the Land are keepers of ancient lore and wielders of nature\'s diverse magic, drawing power from specific terrains.',
          note: "Focuses on spellcasting prowess and versatility, gaining additional spells based on chosen land type and enhanced spell slot recovery. More of a traditional spellcaster druid.",
          features: [
            { name: 'Bonus Cantrip', level: 2, description: 'You learn one additional druid cantrip of your choice.' },
            { name: 'Natural Recovery', level: 2, description: 'During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can’t use this feature again until you finish a long rest.' },
            { name: 'Circle Spells', level: 3, description: 'Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose your land type: Arctic, Coast, Desert, Forest, Grassland, Mountain, Swamp, or Underdark. Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. (Examples: Forest grants Barkskin & Spider Climb at L3, Call Lightning & Plant Growth at L5).', subItems: ["Arctic: Hold Person, Spike Growth (L3); Sleet Storm, Slow (L5); Freedom of Movement, Ice Storm (L7); Commune with Nature, Cone of Cold (L9)", "Coast: Mirror Image, Misty Step (L3); Water Breathing, Water Walk (L5); Control Water, Freedom of Movement (L7); Conjure Elemental, Scrying (L9)", "Desert: Blur, Silence (L3); Create Food and Water, Protection from Energy (L5); Blight, Hallucinatory Terrain (L7); Insect Plague, Wall of Stone (L9)", "Forest: Barkskin, Spider Climb (L3); Call Lightning, Plant Growth (L5); Divination, Freedom of Movement (L7); Commune with Nature, Tree Stride (L9)", "Grassland: Invisibility, Pass without Trace (L3); Daylight, Haste (L5); Divination, Freedom ofMovement (L7); Dream, Insect Plague (L9)", "Mountain: Spider Climb, Spike Growth (L3); Lightning Bolt, Meld into Stone (L5); Stone Shape, Stoneskin (L7); Passwall, Wall of Stone (L9)", "Swamp: Darkness, Melf’s Acid Arrow (L3); Water Walk, Stinking Cloud (L5); Freedom of Movement, Locate Creature (L7); Insect Plague, Scrying (L9)", "Underdark: Spider Climb, Web (L3); Gaseous Form, Stinking Cloud (L5); Greater Invisibility, Stone Shape (L7); Cloudkill, Insect Plague (L9)"] },
            { name: 'Land\'s Stride', level: 6, description: 'Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.' },
            { name: 'Nature\'s Ward', level: 10, description: 'You can’t be charmed or frightened by elementals or fey, and you are immune to poison and disease.' },
            { name: 'Nature\'s Sanctuary', level: 14, description: 'When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you.' }
          ]
        },
        {
          id: 'circle-of-the-moon',
          name: 'Circle of the Moon',
          description: 'Druids of the Moon are fierce guardians of the wild, mastering the ability to transform into powerful combat-oriented beasts.',
          note: "The premier shapeshifting druid, able to transform into stronger beasts and use Wild Shape as a bonus action. Excels at tanking and melee combat.",
          features: [
            { name: 'Combat Wild Shape', level: 2, description: 'You gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action. Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.' },
            { name: 'Circle Forms', level: 2, description: 'The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1 (you ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there). Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.' },
            { name: 'Primal Strike', level: 6, description: 'Your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.' },
            { name: 'Elemental Wild Shape', level: 10, description: 'You can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.' },
            { name: 'Thousand Forms', level: 14, description: 'You can cast the Alter Self spell at will.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'druid-feats',
      title: 'Key Feats for the Druid',
      intro: "Druids benefit from feats that enhance their Wisdom, protect concentration for their powerful spells, or augment their Wild Shape abilities.",
      categories: [
        {
          categoryName: 'Core Spellcasting & Concentration Feats',
          description: 'These feats are vital for maintaining control and support spells.',
          feats: [
            { name: 'War Caster', description: 'Advantage on Con saves for concentration. Perform somatic components with hands full (useful for Wild Shape if DM allows). Cast a spell as an opportunity attack.', note: 'Essential for maintaining concentration on spells like Call Lightning or Conjure Animals.' },
            { name: 'Resilient (Constitution)', description: 'Increase Constitution by 1 and gain proficiency in Constitution saving throws.', note: 'Another excellent choice for bolstering concentration saves and increasing hit points.' },
            { name: 'Fey Touched', description: 'Increase Wis, Int, or Cha by 1. Learn Misty Step and one 1st-level Divination or Enchantment spell.', note: 'Boosts Wisdom, grants Misty Step for much-needed mobility (especially for Land Druids), and a useful spell.' }
          ]
        },
        {
          categoryName: 'Wild Shape & Utility Feats',
          description: 'These feats enhance a Druid\'s shapeshifting or general effectiveness.',
          feats: [
            { name: 'Sentinel', description: 'Opportunity attacks stop movement. Enemies provoke even if they Disengage. Attack as a reaction if an enemy near you attacks someone else.', note: 'Very effective for Moon Druids in beast form to control enemies.' },
            { name: 'Mobile', description: 'Increase speed by 10 ft. Dash ignores difficult terrain. Avoid opportunity attacks from creatures you attack.', note: 'Useful for both humanoid and beast forms for better positioning.' },
            { name: 'Observant', description: '+1 Wis/Int, read lips, +5 passive Perception/Investigation.', note: 'Boosts Wisdom and enhances crucial Druid skills.' },
            { name: 'Telekinetic', description: '+1 Wis/Int/Cha, learn Mage Hand (or improve it), bonus action telekinetic shove.', note: 'Good for Wisdom boost and a useful bonus action, even in Wild Shape if DM allows mental actions.'}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'druid-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What part of nature does your Druid feel most connected to? A specific forest, mountain range, animal type, or the cycle of seasons?",
        "How did they gain their druidic powers? Were they taught by a mentor, initiated into a circle, or did they have a profound, solitary experience in the wild?",
        "What is their view on civilization and its impact on the natural world? Are they a staunch defender, a pragmatic mediator, or someone who seeks balance?",
        "How does Wild Shape affect their personality? Do they take on animalistic traits even in humanoid form?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'druid-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Druids are powerful single-class characters, as Wild Shape and spellcasting progression are key. Multiclassing can delay access to higher CR beast forms or more potent spells.",
        "Wisdom is the primary stat, so classes that also use Wisdom can be synergistic."
      ],
      goodCombinations: [
        { className: "Monk", synergy: "A 1-level dip for Unarmored Defense (using Wisdom) if your Dexterity is also high and you want an alternative to nonmetal armor. Some Monk abilities might work in Wild Shape (DM dependant).", levels: "1" },
        { className: "Cleric", synergy: "A 1-2 level dip can grant useful domain features (e.g., Life for better healing, Nature for more nature theme) and more cantrips/prepared spells. Shares Wisdom focus.", levels: "1-2" },
        { className: "Barbarian", synergy: "1-3 levels for Rage/Reckless Attack. Raging while in Wild Shape (especially for Moon Druids) can create an incredibly resilient melee combatant. Note that you can't cast or concentrate on spells while raging.", levels: "1-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'druid-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "A shield (nonmetal, e.g., wooden).",
        "Light or medium armor (nonmetal, e.g., leather, hide, scale mail made of bone/wood).",
        "A simple weapon (quarterstaff, scimitar, club).",
        "A druidic focus (sprig of mistletoe, totem, yew wand). Herbalism kit."
      ],
      midGame: [
        "+1/+2 nonmetal armor/shield.",
        "Items that boost Wisdom (Periapt of Wisdom, Ioun Stone of Insight).",
        "Staff of the Woodlands or similar nature-themed magic items.",
        "Amulet of Health for better Constitution and Wild Shape HP."
      ],
      lateGame: [
        "+2/+3 nonmetal armor/shield.",
        "Legendary items enhancing Wisdom, spellcasting, or Wild Shape (e.g., Staff of the Magi reflavored, Armor of Invulnerability made of natural materials).",
        "Tomes that permanently increase Wisdom."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'druid-closing',
      title: 'The Wild Heart',
      content: [
        "The Druid is a class of profound connection to the natural world, wielding its raw power and embodying its adaptability.",
        "Through spellcasting that shapes the elements and Wild Shape that transforms them into mighty beasts, Druids offer a unique and deeply thematic play experience.",
        "Whether a guardian of the ancient forests, a master of elemental fury, or a versatile healer and protector, the Druid stands as a testament to the enduring strength of nature."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Wood Elf / Human',
      note: 'Wood Elf benefits Wisdom and Dexterity. Human offers flexibility. ASIs and feat come from your Origin.',
    },
    origin: { 
      name: 'Guide Origin', 
      note: 'Provides Nature and Survival skills, aligning with the Druid theme. Offers a starting feat.',
      recommendedFeat: 'War Caster',
      skillProficiencies: ["Nature", "Survival"]
    },
    abilityPriority: ['Wisdom (Max)', 'Constitution (High for HP/Concentration)', 'Dexterity (Moderate for AC/Initiative)', 'Intelligence (Low)', 'Charisma (Low)', 'Strength (Dump, unless specific build)'],
    keyClassSkills: ['Perception', 'Survival', 'Nature', 'Medicine', 'Insight', 'Animal Handling'],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: 'War Caster (Recommended via Guide Origin - advantage on concentration saves, cast spells with hands full, spell as opportunity attack).',
          spellSuggestions: ['Cantrips: Guidance, Shillelagh/Produce Flame. Spells: Healing Word, Entangle, Faerie Fire, Thunderwave.'],
          notes: 'Prioritize Wisdom. Your Origin provides your 1st-level feat. Druidic language is a flavor win.'
      }},
      { level: 2, recommendation: {
          notes: 'Wild Shape is incredibly versatile. Circle of the Moon for combat forms, Circle of the Land for spellcasting focus.'
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Wisdom',
          spellSuggestions: ['Moonbeam, Spike Growth, Pass without Trace.'],
          notes: 'Boosting Wisdom is crucial for spell save DC and attack bonus.'
      }},
      { level: 8, recommendation: {
          asiChoice: 'Feat: Resilient (Constitution) OR +2 Wisdom (to max)',
          spellSuggestions: ['Call Lightning, Conjure Animals, Sleet Storm, Plant Growth.'],
          notes: 'War Caster or Resilient (Con) are vital for maintaining concentration. Maxing Wisdom is also a top priority.'
      }},
      { level: 12, recommendation: {
          asiChoice: '+2 Wisdom/Constitution OR Feat: Fey Touched (+1 Wis, Misty Step).',
          spellSuggestions: ['Polymorph, Wall of Fire, Stoneskin, Conjure Woodland Beings.'],
          notes: 'Boost key stats or pick up a useful utility feat.'
      }},
    ],
    subclassSpecificRecommendations: {
      'Circle of the Land': [
        { level: 2, recommendation: { notes: 'Bonus Cantrip and Natural Recovery significantly enhance spellcasting endurance. Choose your land type carefully for bonus spells.' }},
        { level: 4, recommendation: { asiChoice: '+2 Wisdom', spellSuggestions: ['Remember your Circle Spells are always prepared!'] }},
      ],
      'Circle of the Moon': [
        { level: 2, recommendation: { notes: 'Combat Wild Shape (bonus action, CR 1 beasts) is game-changing. Healing with spell slots while in Wild Shape is powerful.' }},
        { level: 4, recommendation: { asiChoice: '+2 Wisdom (still important for spellcasting and some beast form saves) or Feat: Sentinel (to control enemies while in beast form).' }},
        { level: 6, recommendation: { notes: 'Primal Strike makes your beast attacks magical. CR progression continues.' }}
      ]
    }
  }
};
