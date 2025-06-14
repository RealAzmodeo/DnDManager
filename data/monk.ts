
import { ClassDefinition } from '../types';

export const monkClassData: ClassDefinition = {
  className: "Monk",
  classTitle: "",
  classDescription: "",
  themeColor: "indigo",
  sections: [
    {
      type: 'intro',
      sectionId: 'monk-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'monk-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'monk-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'monk-core',
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
      sectionId: 'monk-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Unarmored Defense (Monk)', description: '' },
            { name: 'Martial Arts', description: '', note: "" }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Ki', description: '', isCritical: true },
            { name: 'Flurry of Blows', description: '' },
            { name: 'Patient Defense', description: '' },
            { name: 'Step of the Wind', description: '' },
            { name: 'Unarmored Movement', description: ''}
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { name: 'Monastic Tradition Feature', description: '', isSubclassFeature: true },
            { name: 'Deflect Missiles', description: '' }
          ],
        },
        { level: 4, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, { name: 'Slow Fall', description: '' }] },
        {
          level: 5,
          title: '',
          features: [
            { name: 'Extra Attack', description: '' },
            { name: 'Stunning Strike', description: '', isCritical: true }
          ],
        },
        { level: 6, title: '', features: [{ name: 'Monastic Tradition Feature', description: '', isSubclassFeature: true }, { name: 'Ki-Empowered Strikes', description: '' }, { name: 'Unarmored Movement Improvement', description: ''}] },
        { level: 7, title: '', features: [{ name: 'Evasion', description: '' }, { name: 'Stillness of Mind', description: '' }] },
        { level: 8, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 9, title: '', features: [{ name: 'Unarmored Movement Improvement', description: '' }] },
        { level: 10, title: '', features: [{ name: 'Purity of Body', description: '' }, { name: 'Unarmored Movement Improvement', description: ''}] },
        { level: 11, title: '', features: [{ name: 'Monastic Tradition Feature', description: '', isSubclassFeature: true }] },
        { level: 12, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 13, title: '', features: [{ name: 'Tongue of the Sun and Moon', description: '' }] },
        { level: 14, title: '', features: [{ name: 'Diamond Soul', description: '', isCritical: true }, { name: 'Unarmored Movement Improvement', description: ''}] },
        { level: 15, title: '', features: [{ name: 'Timeless Body', description: '' }] },
        { level: 16, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 17, title: '', features: [{ name: 'Monastic Tradition Feature', description: '', isSubclassFeature: true }] },
        { level: 18, title: '', features: [{ name: 'Empty Body', description: '' }, { name: 'Unarmored Movement Improvement', description: ''}] },
        { level: 19, title: '', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }] },
        { level: 20, title: '', features: [{ name: 'Perfect Self', description: '', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'monk-ki',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Ki', description: '', isCritical: true },
        { name: 'Martial Arts', description: '' },
        { name: 'Unarmored Defense (Monk)', description: '' },
        { name: 'Deflect Missiles', description: '' },
        { name: 'Stunning Strike', description: '' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'monk-traditions',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'way-of-the-open-hand',
          name: 'Way of the Open Hand',
          description: '',
          note: "",
          features: [
            { name: 'Open Hand Technique', level: 3, description: '' },
            { name: 'Wholeness of Body', level: 6, description: '' },
            { name: 'Tranquility', level: 11, description: '' },
            { name: 'Quivering Palm', level: 17, description: '' }
          ]
        },
        {
          id: 'way-of-shadow',
          name: 'Way of Shadow',
          description: '',
          note: "",
          features: [
            { name: 'Shadow Arts', level: 3, description: '' },
            { name: 'Shadow Step', level: 6, description: '' },
            { name: 'Cloak of Shadows', level: 11, description: '' },
            { name: 'Opportunist', level: 17, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'monk-feats',
      title: '',
      intro: "",
      categories: [
        {
          categoryName: 'Core Monk Enhancement Feats',
          description: '',
          feats: [
            { name: 'Mobile', description: '', note: '' },
            { name: 'Crusher', description: '', note: '' },
            { name: 'Fey Touched', description: '', note: '' },
            { name: 'Telekinetic', description: '', note: '' }
          ]
        },
        {
          categoryName: 'Defensive & Utility Feats',
          description: '',
          feats: [
            { name: 'Lucky', description: '', note: '' },
            { name: 'Resilient (Constitution or Wisdom)', description: '', note: '' },
            { name: 'Alert', description: '', note: '' },
            { name: 'Skill Expert', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'monk-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'monk-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Rogue", synergy: "", levels: "1-3" },
        { className: "Druid", synergy: "", levels: "1-3" },
        { className: "Fighter", synergy: "", levels: "1-2" },
        { className: "Ranger", synergy: "", levels: "2-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'monk-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'monk-closing',
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
      name: 'Acolyte Origin', 
      note: '',
      recommendedFeat: '',
      skillProficiencies: []
    },
    abilityPriority: [],
    keyClassSkills: [],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: '',
          notes: ''
      }},
      { level: 2, recommendation: {
          notes: ''
      }},
      { level: 3, recommendation: {
          notes: ''
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Dexterity',
          notes: ''
      }},
      { level: 5, recommendation: {
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Dexterity (to max) OR +2 Wisdom OR Feat: Crusher (if Mobile taken at L1).',
      }},
    ],
    subclassSpecificRecommendations: {
      'Way of the Open Hand': [
        { level: 3, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ],
      'Way of Shadow': [
        { level: 3, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ]
    }
  }
};
