
import { ClassDefinition } from '../types';

export const rangerClassData: ClassDefinition = {
  className: "Ranger",
  classTitle: "",
  classDescription: "",
  themeColor: "green",
  sections: [
    {
      type: 'intro',
      sectionId: 'ranger-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'ranger-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'ranger-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'ranger-core',
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
      sectionId: 'ranger-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Favored Enemy / Favored Foe (TCoE)', description: "", note: "" },
            { name: 'Natural Explorer / Deft Explorer (TCoE)', description: "", note: "" }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Fighting Style', description: '' },
            { name: 'Spellcasting', description: '' }
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { name: 'Ranger Conclave Feature', description: '', isSubclassFeature: true },
            { name: 'Primeval Awareness', description: '' }
          ],
        },
        { level: 4, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 5, title: '', features: [{ name: 'Extra Attack', description: '' }] },
        { level: 6, title: '', features: [
            { name: 'Favored Enemy / Favored Foe Improvement', description: "" },
            { name: 'Natural Explorer / Deft Explorer Improvement', description: "" }
          ]
        },
        { level: 7, title: '', features: [{ name: 'Ranger Conclave Feature', description: '', isSubclassFeature: true }] },
        { level: 8, title: '', features: [{ name: 'Land\'s Stride', description: '' }] },
        { level: 9, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 10, title: '', features: [
            { name: 'Hide in Plain Sight', description: '' },
            { name: 'Alternative (TCoE): Nature\'s Veil', description: "", note: "" }
          ]
        },
        { level: 11, title: '', features: [{ name: 'Ranger Conclave Feature', description: '', isSubclassFeature: true }] },
        { level: 12, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 13, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 14, title: '', features: [
            { name: 'Vanish', description: '' },
            { name: 'Favored Foe Improvement (TCoE)', description: "" }
          ]
        },
        { level: 15, title: '', features: [{ name: 'Ranger Conclave Feature', description: '', isSubclassFeature: true }] },
        { level: 16, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 17, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 18, title: '', features: [{ name: 'Feral Senses', description: '' }] },
        { level: 19, title: '', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }] },
        { level: 20, title: '', features: [{ name: 'Foe Slayer', description: '', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'ranger-skills',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Favored Enemy / Favored Foe', description: "" },
        { name: 'Natural Explorer / Deft Explorer', description: "" },
        { name: 'Fighting Style', description: '' },
        { name: 'Spellcasting (Ranger)', description: '' },
        { name: 'Extra Attack', description: '' },
        { name: 'Land\'s Stride', description: '' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'ranger-conclaves',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'hunter',
          name: 'Hunter',
          description: '',
          note: "",
          features: [
            { name: 'Hunter\'s Prey', level: 3, description: '' },
            { name: 'Defensive Tactics', level: 7, description: '' },
            { name: 'Multiattack', level: 11, description: '' },
            { name: 'Superior Hunter\'s Defense', level: 15, description: '' }
          ]
        },
        {
          id: 'beast-master-primal-companion',
          name: 'Beast Master (Primal Companion)',
          description: '',
          note: "",
          features: [
            { name: 'Primal Companion', level: 3, description: '' },
            { name: 'Exceptional Training', level: 7, description: '' },
            { name: 'Bestial Fury', level: 11, description: '' },
            { name: 'Share Spells', level: 15, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'ranger-feats',
      title: '',
      intro: "",
      categories: [
        {
          categoryName: 'Combat Enhancement Feats',
          description: '',
          feats: [
            { name: 'Sharpshooter', description: '', note: '' },
            { name: 'Crossbow Expert', description: '', note: '' },
            { name: 'Polearm Master', description: '', note: '' },
            { name: 'Great Weapon Master', description: '', note: '' },
            { name: 'Sentinel', description: '', note: ''}
          ]
        },
        {
          categoryName: 'Ability Score & Spellcasting Feats',
          description: '',
          feats: [
            { name: 'Resilient (Constitution)', description: '', note: '' },
            { name: 'War Caster', description: '', note: '' },
            { name: 'Fey Touched', description: '', note: '' },
            { name: 'Telekinetic', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'ranger-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Fighter", synergy: "", levels: "1-3" },
        { className: "Rogue", synergy: "", levels: "1-3" },
        { className: "Cleric (Nature/Life/War)", synergy: "", levels: "1-2" },
        { className: "Druid", synergy: "", levels: "1-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'ranger-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'ranger-closing',
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
          notes: ""
      }},
      { level: 2, recommendation: {
          fightingStyle: '',
          spellSuggestions: []
      }},
      { level: 3, recommendation: {
          notes: ''
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Dexterity',
      }},
      { level: 5, recommendation: {
          spellSuggestions: [],
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Dexterity (to max) OR Resilient (Con) / War Caster (for concentration).',
      }},
    ],
    subclassSpecificRecommendations: {
      'Hunter': [
        { level: 3, recommendation: { notes: "" }},
        { level: 7, recommendation: { notes: "" }},
      ],
      'Beast Master (Primal Companion)': [
        { level: 3, recommendation: { notes: '' }},
        { level: 4, recommendation: { asiChoice: '+2 Dexterity or Wisdom. Your companion scales with your proficiency bonus.' }},
      ]
    }
  }
};
