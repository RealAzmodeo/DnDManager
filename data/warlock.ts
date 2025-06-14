
import { ClassDefinition } from '../types';

export const warlockClassData: ClassDefinition = {
  className: "Warlock",
  classTitle: "",
  classDescription: "",
  themeColor: "purple", 
  sections: [
    {
      type: 'intro',
      sectionId: 'warlock-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'warlock-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'warlock-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'warlock-core',
      title: '',
      items: [
        { name: 'Hit Dice', description: '' },
        { name: 'Primary Attributes', description: '' },
        { name: 'Saving Throws', description: '' },
        { name: 'Proficiencies', description: '' },
        { name: 'Skills', description: '' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'warlock-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Otherworldly Patron Feature', description: '', isSubclassFeature: true },
            { name: 'Pact Magic', description: '', isCritical: true }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Eldritch Invocations (Learn 2)', description: '', note: "" }
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { name: 'Pact Boon', description: '', isSubclassFeature: true }
          ],
        },
        { level: 4, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, {name: 'Cantrip', description: ''}] },
        { level: 5, title: '', features: [{ name: 'Eldritch Invocation (Learn 1)', description: '' }] },
        { level: 6, title: '', features: [{ name: 'Otherworldly Patron Feature', description: '', isSubclassFeature: true }] },
        { level: 7, title: '', features: [{ name: 'Eldritch Invocation (Learn 1)', description: '' }] },
        { level: 8, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 9, title: '', features: [{ name: 'Eldritch Invocation (Learn 1)', description: '' } , { name: 'Pact Magic Improvement', description: ''}] },
        { level: 10, title: '', features: [{ name: 'Otherworldly Patron Feature', description: '', isSubclassFeature: true }, {name: 'Cantrip', description: ''}] },
        { level: 11, title: '', features: [{ name: 'Mystic Arcanum (6th Level)', description: '' }] },
        { level: 12, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, { name: 'Eldritch Invocation (Learn 1)', description: '' }] },
        { level: 13, title: '', features: [{ name: 'Mystic Arcanum (7th Level)', description: '' }] },
        { level: 14, title: '', features: [{ name: 'Otherworldly Patron Feature', description: '', isSubclassFeature: true }] },
        { level: 15, title: '', features: [{ name: 'Mystic Arcanum (8th Level)', description: '' }, { name: 'Eldritch Invocation (Learn 1)', description: '' }] },
        { level: 16, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 17, title: '', features: [{ name: 'Mystic Arcanum (9th Level)', description: '' }, { name: 'Pact Magic Improvement', description: ''}] },
        { level: 18, title: '', features: [{ name: 'Eldritch Invocation (Learn 1)', description: '' }] },
        { level: 19, title: '', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }] },
        { level: 20, title: '', features: [{ name: 'Eldritch Master', description: '', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'warlock-pacts',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Pact Magic', description: '', isCritical: true },
        { name: 'Eldritch Blast', description: '', isCritical: true },
        { name: 'Eldritch Invocations', description: '', isCritical: true },
        { name: 'Pact Boon', description: '', isCritical: true },
        { name: 'Mystic Arcanum', description: '' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'warlock-patrons',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'the-archfey',
          name: 'The Archfey',
          description: '',
          note: "Expanded Spells: (L1); (L2); (L3); (L4); (L5).",
          features: [
            { name: 'Fey Presence', level: 1, description: '' },
            { name: 'Misty Escape', level: 6, description: '' },
            { name: 'Beguiling Defenses', level: 10, description: '' },
            { name: 'Dark Delirium', level: 14, description: '' }
          ]
        },
        {
          id: 'the-fiend',
          name: 'The Fiend',
          description: '',
          note: "Expanded Spells: (L1); (L2); (L3); (L4); (L5).",
          features: [
            { name: 'Dark One\'s Blessing', level: 1, description: '' },
            { name: 'Dark One\'s Own Luck', level: 6, description: '' },
            { name: 'Fiendish Resilience', level: 10, description: '' },
            { name: 'Hurl Through Hell', level: 14, description: '' }
          ]
        },
        {
          id: 'the-great-old-one',
          name: 'The Great Old One',
          description: '',
          note: "Expanded Spells: (L1); (L2); (L3); (L4); (L5).",
          features: [
            { name: 'Awakened Mind', level: 1, description: '' },
            { name: 'Entropic Ward', level: 6, description: '' },
            { name: 'Thought Shield', level: 10, description: '' },
            { name: 'Create Thrall', level: 14, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'warlock-feats',
      title: '',
      intro: "",
      categories: [
        {
          categoryName: 'Core Spellcasting & Combat Feats',
          description: '',
          feats: [
            { name: 'War Caster', description: '', note: '' },
            { name: 'Resilient (Constitution)', description: '', note: '' },
            { name: 'Fey Touched / Shadow Touched', description: '', note: '' },
            { name: 'Spell Sniper', description: '', note: '' },
            { name: 'Eldritch Adept', description: '', note: ''}
          ]
        },
        {
          categoryName: 'Utility & Defensive Feats',
          description: '',
          feats: [
            { name: 'Lucky', description: '', note: '' },
            { name: 'Telekinetic', description: '', note: '' },
            { name: 'Moderately Armored', description: '', note: ''},
            { name: 'Inspiring Leader', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'warlock-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Sorcerer ('Sorlock')", synergy: "", levels: "Warlock 2-3 / Sorcerer X" },
        { className: "Paladin ('Pactadin')", synergy: "", levels: "Warlock 1-5 / Paladin X" },
        { className: "Bard", synergy: "", levels: "Warlock 1-3 / Bard X" },
        { className: "Fighter", synergy: "", levels: "Warlock X / Fighter 1-2" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'warlock-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'warlock-closing',
      title: '',
      content: [],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Tiefling', 
      note: '',
    },
    origin: {
      name: 'Cultist Origin',
      note: '',
      recommendedFeat: '',
      skillProficiencies: []
    },
    abilityPriority: [],
    keyClassSkills: [],
    generalLevelRecommendations: [
      { level: 1, recommendation: { 
          featSuggestion: '',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 2, recommendation: {
          notes: ''
      }},
      { level: 3, recommendation: {
          notes: ''
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Charisma',
          spellSuggestions: []
      }},
      { level: 5, recommendation: {
          spellSuggestions: [],
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: 'Feat: War Caster OR +2 Charisma (to max).',
          spellSuggestions: []
      }},
    ],
    subclassSpecificRecommendations: {
      'The Archfey': [
        { level: 1, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ],
      'The Fiend': [
        { level: 1, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ],
      'The Great Old One': [
        { level: 1, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ]
    }
  }
};
