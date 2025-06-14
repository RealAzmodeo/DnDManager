
import { ClassDefinition } from '../types';

export const psionClassData: ClassDefinition = {
    className: "Psion",
    classTitle: "",
    classDescription: "",
    themeColor: "purple",
    sections: [
      {
        type: 'intro',
        sectionId: 'psion-intro',
        title: '',
        content: [],
      },
      {
        type: 'rolePlaystyle',
        sectionId: 'psion-role',
        title: '',
        content: []
      },
      {
        type: 'strengthsWeaknesses',
        sectionId: 'psion-proscons',
        title: '',
        strengths: [],
        weaknesses: []
      },
      {
        type: 'baseTraits',
        sectionId: 'psion-core',
        title: '',
        items: [
          { name: 'Hit Dice', description: '' },
          { name: 'Primary Attributes', description: '' },
          { name: 'Saving Throws', description: '' },
          { name: 'Proficiencies', description: '' },
          { name: 'Psionic Focus', description: '' },
          { name: 'Psi Points', description: ''}
        ],
      },
      {
        type: 'levelProgression',
        sectionId: 'psion-levels',
        title: '',
        levels: [
          { 
            level: 1, 
            title: '',
            features: [
              { name: 'Psionic Talent', description: '' },
              { 
                name: 'Psionic Discipline Feature', 
                description: '',
                isSubclassFeature: true
              }
            ] 
          },
          { 
            level: 2, 
            title: '',
            features: [
              { name: 'Psi Point Recovery', description: '' },
              { name: 'Telepathic Link', description: ''}
            ] 
          },
          { 
            level: 3, 
            title: '',
            features: [
              { 
                name: 'Psionic Discipline Feature', 
                description: '',
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 4, 
            title: '',
            features: [
              { name: 'Ability Score Improvement / Feat', description: '' }
            ] 
          },
          { 
            level: 5, 
            title: '',
            features: [
              { name: 'Potent Psionics', description: '' }
            ] 
          },
          { 
            level: 6, 
            title: '',
            features: [
              { 
                name: 'Psionic Discipline Feature', 
                description: '',
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 7, 
            title: '',
            features: [
              { name: 'Learn New Discipline Power', description: ''}
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
              { name: 'Access to Higher Tier Powers', description: '' }
            ] 
          },
          { 
            level: 10, 
            title: '',
            features: [
              { 
                name: 'Psionic Discipline Feature', 
                description: '',
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 11, 
            title: '',
            features: [
              { name: 'Mastered Power', description: '' }
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
              { name: 'Mental Bastion', description: '' }
            ] 
          },
          { 
            level: 14, 
            title: '',
            features: [
              { 
                name: 'Psionic Discipline Feature', 
                description: '',
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 15, 
            title: '',
            features: [
              { name: 'Psionic Surge', description: '' }
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
              { name: 'Become Psionic Energy', description: '' }
            ] 
          },
          { 
            level: 18, 
            title: '',
            features: [
              { name: 'Greater Psi Point Recovery', description: ''}
            ] 
          },
          { 
            level: 19, 
            title: '',
            features: [
              { name: 'Epic Boon', description: '' }
            ] 
          },
          { 
            level: 20, 
            title: '',
            features: [
              { name: 'Psionic Apotheosis', description: '' }
            ] 
          },
        ],
      },
      {
        type: 'uniqueMechanics',
        sectionId: 'psion-psi',
        title: '',
        intro: "",
        mechanics: [
          { name: 'Manifest Power', description: ''},
          { name: 'Psionic Talents', description: ''},
          { name: 'Augment Power', description: ''},
          { name: 'Concentration', description: ''},
        ],
      },
      {
        type: 'subclasses',
        sectionId: 'psion-subclasses',
        title: '',
        intro: '',
        subclasses: [
          {
            id: 'telepath-the-mind-reader',
            name: 'Telepath - The Mind Reader',
            description: '',
            note: '',
            features: [
              { name: 'Telepathic Communication', level: 1, description: '' },
              { name: 'Mind Thrust', level: 3, description: '' },
              { name: 'Thought Shield', level: 6, description: '' },
              { name: 'Dominate Mind', level: 10, description: '' },
              { name: 'Mass Influence', level: 14, description: '' }
            ]
          },
          {
            id: 'telekinetic-the-force-mover',
            name: 'Telekinetic - The Force Mover',
            description: '',
            note: '',
            features: [
              { name: 'Telekinetic Push/Pull', level: 1, description: '' },
              { name: 'Forceful Slam', level: 3, description: '' },
              { name: 'Telekinetic Shield', level: 6, description: '' },
              { name: 'Crushing Grasp', level: 10, description: '' },
              { name: 'Telekinetic Flight', level: 14, description: '' }
            ]
          },
          {
            id: 'shaper-the-matter-weaver',
            name: 'Shaper - The Matter Weaver',
            description: '',
            note: '',
            features: [
              { name: 'Astral Construct', level: 1, description: '' },
              { name: 'Ectoplasmic Wall', level: 3, description: '' },
              { name: 'Metamorphic Self', level: 6, description: '' },
              { name: 'Animated Constructs', level: 10, description: '' },
              { name: 'True Creation', level: 14, description: '' }
            ]
          },
           {
            id: 'seer-the-oracle',
            name: 'Seer - The Oracle',
            description: '',
            note: '',
            features: [
              { name: 'Danger Sense (Psionic)', level: 1, description: '' },
              { name: 'Precognitive Dodge', level: 3, description: '' },
              { name: 'Clairvoyance/Clairaudience', level: 6, description: '' },
              { name: 'Foresight (Brief)', level: 10, description: '' },
              { name: 'True Seeing (Psionic)', level: 14, description: '' }
            ]
          }
        ],
      },
      {
        type: 'feats',
        sectionId: 'psion-feats',
        title: '',
        intro: "",
        categories: [
          {
            categoryName: 'Core Psionic Enhancement Feats',
            description: '',
            feats: [
              {
                name: 'Telekinetic',
                description: '',
                note: ''
              },
              {
                name: 'Fey Touched',
                description: '',
                note: ''
              },
               {
                name: 'Shadow Touched',
                description: '',
                note: ''
              }
            ]
          },
          {
            categoryName: 'Concentration & Survivability Feats',
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
                name: 'Lucky',
                description: '',
                note: ''
              },
              {
                name: 'Alert',
                description: '',
                note: ''
              }
            ]
          }
        ]
      },
      {
        type: 'flavorAndRoleplaying',
        sectionId: 'psion-rp',
        title: '',
        content: []
      },
      {
        type: 'multiclassing',
        sectionId: 'psion-multi',
        title: '',
        generalNotes: [],
        goodCombinations: [
          { className: "Wizard", synergy: "", levels: "1-3" },
          { className: "Rogue (Soulknife)", synergy: "", levels: "Varies" },
          { className: "Fighter (Psi Warrior)", synergy: "", levels: "Varies" }
        ]
      },
      {
        type: 'equipmentProgression',
        sectionId: 'psion-gear',
        title: '',
        earlyGame: [],
        midGame: [],
        lateGame: []
      },
      {
        type: 'closingRemarks',
        sectionId: 'psion-closing',
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
            notes: ''
        }},
        { level: 4, recommendation: { asiChoice: '+2 Intelligence', notes: '' }},
        { level: 8, recommendation: { asiChoice: '+2 Intelligence (to reach 20 if possible)', featSuggestion: '', notes: '' }},
        { level: 12, recommendation: { asiChoice: 'Feat: War Caster OR +2 Constitution', notes: '' }},
        { level: 16, recommendation: { asiChoice: 'Feat: Lucky OR Alert', notes: '' }},
        { level: 19, recommendation: { asiChoice: 'Epic Boon: Boon of Mental Might or Boon of Spell Recall (reflavored as Psionic Recall)', notes: '' }},
      ],
      subclassSpecificRecommendations: {
        'Telepath - The Mind Reader': [
          { level: 1, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Intelligence'}},
          { level: 8, recommendation: { featSuggestion: ''}}
        ],
        'Telekinetic - The Force Mover': [
           { level: 1, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Intelligence'}},
          { level: 8, recommendation: { featSuggestion: ''}}
        ],
        'Shaper - The Matter Weaver': [
          { level: 1, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Intelligence'}},
          { level: 8, recommendation: { featSuggestion: ''}}
        ],
        'Seer - The Oracle': [
          { level: 1, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Intelligence'}},
          { level: 8, recommendation: { featSuggestion: ''}}
        ]
      }
    }
  };
