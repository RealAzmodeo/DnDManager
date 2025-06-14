
import { ClassDefinition } from '../types';

export const druidClassData: ClassDefinition = {
  className: "Druid",
  classTitle: "",
  classDescription: "",
  themeColor: "green",
  sections: [
    {
      type: 'intro',
      sectionId: 'druid-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'druid-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'druid-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'druid-core',
      title: '',
      items: [
        { name: 'Hit Dice', description: '' },
        { name: 'Primary Attributes', description: '' },
        { name: 'Saving Throws', description: '' },
        { name: 'Proficiencies', description: '' },
        { name: 'Spellcasting', description: '' },
        { name: 'Druidic', description: '' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'druid-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Druidic', description: '' },
            { name: 'Spellcasting', description: '' }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Wild Shape', description: '', isCritical: true, note: "" },
            { name: 'Druid Circle Feature', description: '', isSubclassFeature: true },
          ],
        },
        { level: 3, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 4, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, { name: 'Wild Shape Improvement', description: ''}, { name: 'Cantrip Versatility (Optional Rule)', description: ''}] },
        { level: 5, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 6, title: '', features: [{ name: 'Druid Circle Feature', description: '', isSubclassFeature: true }] },
        { level: 7, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 8, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, { name: 'Wild Shape Improvement', description: ''}] },
        { level: 9, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 10, title: '', features: [{ name: 'Druid Circle Feature', description: '', isSubclassFeature: true }] },
        { level: 11, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 12, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 13, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 14, title: '', features: [{ name: 'Druid Circle Feature', description: '', isSubclassFeature: true }] },
        { level: 15, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 16, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 17, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 18, title: '', features: [{ name: 'Timeless Body', description: '' }, { name: 'Beast Spells', description: '', isCritical: true }] },
        { level: 19, title: '', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }] },
        { level: 20, title: '', features: [{ name: 'Archdruid', description: '', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'druid-primal',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Spellcasting (Druid)', description: '' },
        { name: 'Wild Shape', description: '', isCritical: true },
        { name: 'Druidic', description: '' },
        { name: 'Timeless Body', description: '' },
        { name: 'Beast Spells', description: '' },
        { name: 'Archdruid', description: '' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'druid-circles',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'circle-of-the-land',
          name: 'Circle of the Land',
          description: '',
          note: "",
          features: [
            { name: 'Bonus Cantrip', level: 2, description: '' },
            { name: 'Natural Recovery', level: 2, description: '' },
            { name: 'Circle Spells', level: 3, description: 'Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose your land type. Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. (Structure: Land Type - L3 Spells; L5 Spells; L7 Spells; L9 Spells)', subItems: ["Arctic: (L3); (L5); (L7); (L9)", "Coast: (L3); (L5); (L7); (L9)", "Desert: (L3); (L5); (L7); (L9)", "Forest: (L3); (L5); (L7); (L9)", "Grassland: (L3); (L5); (L7); (L9)", "Mountain: (L3); (L5); (L7); (L9)", "Swamp: (L3); (L5); (L7); (L9)", "Underdark: (L3); (L5); (L7); (L9)"] },
            { name: 'Land\'s Stride', level: 6, description: '' },
            { name: 'Nature\'s Ward', level: 10, description: '' },
            { name: 'Nature\'s Sanctuary', level: 14, description: '' }
          ]
        },
        {
          id: 'circle-of-the-moon',
          name: 'Circle of the Moon',
          description: '',
          note: "",
          features: [
            { name: 'Combat Wild Shape', level: 2, description: '' },
            { name: 'Circle Forms', level: 2, description: '' },
            { name: 'Primal Strike', level: 6, description: '' },
            { name: 'Elemental Wild Shape', level: 10, description: '' },
            { name: 'Thousand Forms', level: 14, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'druid-feats',
      title: '',
      intro: "",
      categories: [
        {
          categoryName: 'Core Spellcasting & Concentration Feats',
          description: '',
          feats: [
            { name: 'War Caster', description: '', note: '' },
            { name: 'Resilient (Constitution)', description: '', note: '' },
            { name: 'Fey Touched', description: '', note: '' }
          ]
        },
        {
          categoryName: 'Wild Shape & Utility Feats',
          description: '',
          feats: [
            { name: 'Sentinel', description: '', note: '' },
            { name: 'Mobile', description: '', note: '' },
            { name: 'Observant', description: '', note: '' },
            { name: 'Telekinetic', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'druid-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'druid-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Monk", synergy: "", levels: "1" },
        { className: "Cleric", synergy: "", levels: "1-2" },
        { className: "Barbarian", synergy: "", levels: "1-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'druid-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'druid-closing',
      title: '',
      content: [],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Wood Elf / Human',
      note: '',
    },
    origin: { 
      name: 'Guide Origin', 
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
      { level: 4, recommendation: {
          asiChoice: '+2 Wisdom',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: 'Feat: Resilient (Constitution) OR +2 Wisdom (to max)',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 12, recommendation: {
          asiChoice: '+2 Wisdom/Constitution OR Feat: Fey Touched (+1 Wis, Misty Step).',
          spellSuggestions: [],
          notes: ''
      }},
    ],
    subclassSpecificRecommendations: {
      'Circle of the Land': [
        { level: 2, recommendation: { notes: '' }},
        { level: 4, recommendation: { asiChoice: '+2 Wisdom', spellSuggestions: [] }},
      ],
      'Circle of the Moon': [
        { level: 2, recommendation: { notes: '' }},
        { level: 4, recommendation: { asiChoice: '+2 Wisdom (still important for spellcasting and some beast form saves) or Feat: Sentinel (to control enemies while in beast form).' }},
        { level: 6, recommendation: { notes: '' }}
      ]
    }
  }
};
