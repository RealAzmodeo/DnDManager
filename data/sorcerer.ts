
import { ClassDefinition } from '../types';

export const sorcererClassData: ClassDefinition = {
  className: "Sorcerer",
  classTitle: "",
  classDescription: "",
  themeColor: "purple", 
  sections: [
    {
      type: 'intro',
      sectionId: 'sorcerer-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'sorcerer-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'sorcerer-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'sorcerer-core',
      title: '',
      items: [
        { name: 'Hit Dice', description: '' },
        { name: 'Primary Attributes', description: '' },
        { name: 'Saving Throws', description: '' },
        { name: 'Proficiencies', description: '' },
        { name: 'Spellcasting', description: '' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'sorcerer-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Spellcasting', description: '' },
            { name: 'Sorcerous Origin Feature', description: '', isSubclassFeature: true }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Font of Magic', description: '', isCritical: true },
            { name: 'Flexible Casting', description: ''}
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { name: 'Metamagic', description: '', subItems: []}
          ],
        },
        { level: 4, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, { name: 'Cantrip Versatility (Optional Rule)', description: ''}] },
        { level: 5, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 6, title: '', features: [{ name: 'Sorcerous Origin Feature', description: '', isSubclassFeature: true }] },
        { level: 7, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 8, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 9, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 10, title: '', features: [{ name: 'Metamagic', description: '' }] },
        { level: 11, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 12, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 13, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 14, title: '', features: [{ name: 'Sorcerous Origin Feature', description: '', isSubclassFeature: true }] },
        { level: 15, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 16, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 17, title: '', features: [{ name: 'Metamagic', description: '' }, { name: 'Spellcasting', description: '' }] },
        { level: 18, title: '', features: [{ name: 'Sorcerous Origin Feature', description: '', isSubclassFeature: true }] },
        { level: 19, title: '', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }] },
        { level: 20, title: '', features: [{ name: 'Sorcerous Restoration', description: '', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'sorcerer-magic',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Font of Magic', description: '', isCritical: true },
        { name: 'Sorcery Points', description: '' },
        { name: 'Metamagic', description: '' },
        { name: 'Flexible Casting', description: '' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'sorcerer-origins',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'draconic-bloodline',
          name: 'Draconic Bloodline',
          description: '',
          note: "",
          features: [
            { name: 'Dragon Ancestor', level: 1, description: '' },
            { name: 'Draconic Resilience', level: 1, description: '' },
            { name: 'Elemental Affinity', level: 6, description: '' },
            { name: 'Dragon Wings', level: 14, description: '' },
            { name: 'Draconic Presence', level: 18, description: '' }
          ]
        },
        {
          id: 'wild-magic',
          name: 'Wild Magic',
          description: '',
          note: "",
          features: [
            { name: 'Wild Magic Surge', level: 1, description: '' },
            { name: 'Tides of Chaos', level: 1, description: '' },
            { name: 'Bend Luck', level: 6, description: '' },
            { name: 'Controlled Chaos', level: 14, description: '' },
            { name: 'Spell Bombardment', level: 18, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'sorcerer-feats',
      title: '',
      intro: "",
      categories: [
        {
          categoryName: 'Core Spellcasting & Metamagic Feats',
          description: '',
          feats: [
            { name: 'War Caster', description: '', note: '' },
            { name: 'Metamagic Adept', description: '', note: '' },
            { name: 'Fey Touched', description: '', note: '' },
            { name: 'Telekinetic', description: '', note: ''}
          ]
        },
        {
          categoryName: 'Defensive & Utility Feats',
          description: '',
          feats: [
            { name: 'Resilient (Constitution)', description: '', note: '' },
            { name: 'Lucky', description: '', note: '' },
            { name: 'Elemental Adept', description: '', note: '' },
            { name: 'Spell Sniper', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'sorcerer-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'sorcerer-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Paladin", synergy: "", levels: "Sorcerer X / Paladin 2 or 6-7 ('Sorcadin')" },
        { className: "Warlock", synergy: "", levels: "Sorcerer X / Warlock 1-3" },
        { className: "Bard", synergy: "", levels: "Sorcerer X / Bard 1-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'sorcerer-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'sorcerer-closing',
      title: '',
      content: [],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Half-Elf / Human / Custom Lineage',
      note: '',
    },
    origin: { 
      name: 'Sage Origin', 
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
      { level: 3, recommendation: {
          notes: '',
          spellSuggestions: [],
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Charisma',
      }},
      { level: 5, recommendation: {
          spellSuggestions: [],
      }},
      { level: 8, recommendation: {
          asiChoice: 'Feat: Metamagic Adept OR +2 Charisma (to max)',
          spellSuggestions: [],
      }},
    ],
    subclassSpecificRecommendations: {
      'Draconic Bloodline': [
        { level: 1, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ],
      'Wild Magic': [
        { level: 1, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ]
    }
  }
};
