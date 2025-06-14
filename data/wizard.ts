
import { ClassDefinition } from '../types';

export const wizardClassData: ClassDefinition = {
  className: "Wizard",
  classTitle: "",
  classDescription: "",
  themeColor: "blue",
  sections: [
    {
      type: 'intro',
      sectionId: 'wizard-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'wizard-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'wizard-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'wizard-core',
      title: '',
      items: [
        { name: 'Hit Dice', description: '' },
        { name: 'Primary Attributes', description: '' },
        { name: 'Saving Throws', description: '' },
        { name: 'Proficiencies', description: '' },
        { name: 'Spellcasting', description: '' },
        { name: 'Ritual Casting', description: ''}
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'wizard-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Spellcasting', description: '' },
            { name: 'Arcane Recovery', description: '' }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { 
              name: 'Arcane Tradition Feature', 
              description: '',
              isSubclassFeature: true 
            }
          ],
        },
        { 
          level: 3, 
          title: '',
          features: [
            { name: 'Spellcasting', description: '' }
          ] 
        },
        { 
          level: 4, 
          title: '',
          features: [
            { name: 'Ability Score Improvement / Feat', description: '' },
            { name: 'Cantrip Versatility (Optional Rule)', description: ''}
          ] 
        },
        { 
          level: 5, 
          title: '',
          features: [
            { name: 'Spellcasting', description: '' }
          ] 
        },
        { 
          level: 6, 
          title: '',
          features: [
            { 
              name: 'Arcane Tradition Feature', 
              description: '',
              isSubclassFeature: true 
            }
          ]
        },
        { 
          level: 7, 
          title: '',
          features: [
            { name: 'Spellcasting', description: '' }
          ] 
        },
        { 
          level: 8, 
          title: '',
          features: [
            { name: 'Ability Score Improvement / Feat', description: '' }
          ] 
        },
        { 
          level: 9, 
          title: '',
          features: [
            { name: 'Spellcasting', description: '' }
          ] 
        },
        { 
          level: 10, 
          title: '',
          features: [
            { 
              name: 'Arcane Tradition Feature', 
              description: '',
              isSubclassFeature: true 
            }
          ]
        },
        { 
          level: 11, 
          title: '',
          features: [
            { name: 'Spellcasting', description: '' }
          ] 
        },
        { 
          level: 12, 
          title: '',
          features: [
            { name: 'Ability Score Improvement / Feat', description: '' }
          ] 
        },
        { 
          level: 13, 
          title: '',
          features: [
            { name: 'Spellcasting', description: '' }
          ] 
        },
        { 
          level: 14, 
          title: '',
          features: [
            { 
              name: 'Arcane Tradition Feature', 
              description: '',
              isSubclassFeature: true 
            }
          ]
        },
        { 
          level: 15, 
          title: '',
          features: [
            { name: 'Spellcasting', description: '' }
          ] 
        },
        { 
          level: 16, 
          title: '',
          features: [
            { name: 'Ability Score Improvement / Feat', description: '' }
          ] 
        },
        { 
          level: 17, 
          title: '',
          features: [
            { name: 'Spellcasting', description: '' }
          ] 
        },
        { 
          level: 18, 
          title: '',
          features: [
            { name: 'Spell Mastery', description: '', isCritical: true }
          ] 
        },
        { 
          level: 19, 
          title: '',
          features: [
            { name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }
          ] 
        },
        { 
          level: 20, 
          title: '',
          features: [
            { name: 'Signature Spells', description: '', isCritical: true }
          ] 
        },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'wizard-mechanics',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Spellbook', description: '' },
        { name: 'Arcane Recovery', description: '' },
        { name: 'Spell Mastery (L18)', description: '', isCritical: true },
        { name: 'Signature Spells (L20)', description: '', isCritical: true }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'wizard-traditions',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'school-of-abjuration',
          name: 'School of Abjuration',
          description: '',
          features: [
            { name: 'Abjuration Savant', level: 2, description: '' },
            { name: 'Arcane Ward', level: 2, description: '' },
            { name: 'Projected Ward', level: 6, description: '' },
            { name: 'Improved Abjuration', level: 10, description: '' },
            { name: 'Spell Resistance', level: 14, description: '' }
          ],
          note: ""
        },
        {
          id: 'school-of-conjuration',
          name: 'School of Conjuration',
          description: '',
          features: [
            { name: 'Conjuration Savant', level: 2, description: '' },
            { name: 'Minor Conjuration', level: 2, description: '' },
            { name: 'Benign Transposition', level: 6, description: '' },
            { name: 'Focused Conjuration', level: 10, description: '' },
            { name: 'Durable Summons', level: 14, description: '' }
          ],
          note: ""
        },
        {
          id: 'school-of-divination',
          name: 'School of Divination',
          description: '',
          features: [
            { name: 'Divination Savant', level: 2, description: '' },
            { name: 'Portent', level: 2, description: '' },
            { name: 'Expert Divination', level: 6, description: '' },
            { name: 'The Third Eye', level: 10, description: '' },
            { name: 'Greater Portent', level: 14, description: '' }
          ],
          note: ""
        },
        {
          id: 'school-of-enchantment',
          name: 'School of Enchantment',
          description: '',
          features: [
            { name: 'Enchantment Savant', level: 2, description: '' },
            { name: 'Hypnotic Gaze', level: 2, description: '' },
            { name: 'Instinctive Charm', level: 6, description: '' },
            { name: 'Split Enchantment', level: 10, description: '' },
            { name: 'Alter Memories', level: 14, description: '' }
          ],
          note: ""
        },
        {
          id: 'school-of-evocation',
          name: 'School of Evocation',
          description: '',
          features: [
            { name: 'Evocation Savant', level: 2, description: '' },
            { name: 'Sculpt Spells', level: 2, description: '' },
            { name: 'Potent Cantrip', level: 6, description: '' },
            { name: 'Empowered Evocation', level: 10, description: '' },
            { name: 'Overchannel', level: 14, description: '' }
          ],
          note: ""
        },
        {
          id: 'school-of-illusion',
          name: 'School of Illusion',
          description: '',
          features: [
            { name: 'Illusion Savant', level: 2, description: '' },
            { name: 'Improved Minor Illusion', level: 2, description: '' },
            { name: 'Malleable Illusions', level: 6, description: '' },
            { name: 'Illusory Self', level: 10, description: '' },
            { name: 'Illusory Reality', level: 14, description: '' }
          ],
          note: ""
        },
        {
          id: 'school-of-necromancy',
          name: 'School of Necromancy',
          description: '',
          features: [
            { name: 'Necromancy Savant', level: 2, description: '' },
            { name: 'Grim Harvest', level: 2, description: '' },
            { name: 'Undead Thralls', level: 6, description: '' },
            { name: 'Inured to Undeath', level: 10, description: '' },
            { name: 'Command Undead', level: 14, description: '' }
          ],
          note: ""
        },
        {
          id: 'school-of-transmutation',
          name: 'School of Transmutation',
          description: '',
          features: [
            { name: 'Transmutation Savant', level: 2, description: '' },
            { name: 'Minor Alchemy', level: 2, description: '' },
            { name: 'Transmuter’s Stone', level: 6, description: '' },
            { name: 'Shapechanger', level: 10, description: '' },
            { name: 'Master Transmuter', level: 14, description: '' }
          ],
          note: ""
        }
      ],
    },
    {
        type: 'feats',
        sectionId: 'wizard-feats',
        title: '',
        intro: "",
        categories: [
          {
            categoryName: 'Core Spellcasting & Concentration Feats',
            description: '',
            feats: [
              {
                name: 'War Caster',
                description: '',
                note: ''
              },
              {
                name: 'Resilient (Constitution)',
                description: '',
                note: ''
              },
              {
                name: 'Fey Touched',
                description: '',
                note: ''
              },
              {
                name: 'Telekinetic',
                description: '',
                note: ''
              }
            ]
          },
          {
            categoryName: 'Utility & Enhancement Feats',
            description: '',
            feats: [
              {
                name: 'Alert',
                description: '',
                note: ''
              },
              {
                name: 'Lucky',
                description: '',
                note: ''
              },
              {
                name: 'Metamagic Adept',
                description: '',
                note: ''
              },
              {
                name: 'Spell Sniper',
                description: '',
                note: ''
              }
            ]
          }
        ]
      },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'wizard-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'wizard-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Artificer", synergy: "", levels: "1-2" },
        { className: "Fighter", synergy: "", levels: "1-2" },
        { className: "Cleric (Knowledge/Arcana)", synergy: "", levels: "1" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'wizard-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'wizard-closing',
      title: '',
      content: [],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Human', 
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
      { level: 4, recommendation: {
          asiChoice: '+2 Intelligence',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Intelligence (to max, if War Caster taken at L1) OR Feat: Resilient (Constitution)',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 12, recommendation: {
          asiChoice: 'Feat: Lucky OR Alert OR +2 Constitution',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 16, recommendation: {
          asiChoice: '+2 Constitution OR Feat: Tough',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 19, recommendation: {
          asiChoice: 'Epic Boon (e.g., Boon of High Magic, Boon of Spell Recall) OR +2 Intelligence/Constitution',
          spellSuggestions: [],
          notes: ''
      }},
    ],
    subclassSpecificRecommendations: {
      'School of Abjuration': [
        { level: 2, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence' }},
        { level: 8, recommendation: { asiChoice: '+2 Intelligence (to max) OR Feat: War Caster / Resilient (Constitution)', notes: '' }}
      ],
      'School of Evocation': [
        { level: 2, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence' }},
        { level: 8, recommendation: { featSuggestion: '' }}
      ],
       'School of Divination': [
        { level: 2, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence' }},
        { level: 8, recommendation: { featSuggestion: '' }}
      ],
      'School of Conjuration': [
        { level: 2, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence' }},
        { level: 10, recommendation: { notes: '' }}
      ],
      // Add more Arcane Tradition recommendations as needed
    }
  }
};
