
import { ClassDefinition } from '../types';

export const paladinClassData: ClassDefinition = {
  className: "Paladin",
  classTitle: "",
  classDescription: "",
  themeColor: "yellow", // Often associated with divine light
  sections: [
    {
      type: 'intro',
      sectionId: 'paladin-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'paladin-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'paladin-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'paladin-core',
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
      sectionId: 'paladin-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Divine Sense', description: '' },
            { name: 'Lay on Hands', description: '' }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Fighting Style', description: '' },
            { name: 'Spellcasting', description: '' },
            { name: 'Divine Smite', description: '' }
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { name: 'Divine Health', description: '' },
            { 
              name: 'Sacred Oath Feature (Channel Divinity Options & Tenets)', 
              description: '',
              isSubclassFeature: true 
            },
          ],
        },
        { 
          level: 4, 
          title: '',
          features: [
            { name: 'Ability Score Improvement / Feat', description: '' },
            { name: 'Martial Versatility (Optional Rule)', description: ''}
          ] 
        },
        { 
          level: 5, 
          title: '',
          features: [
            { name: 'Extra Attack', description: '' }
          ] 
        },
        {
          level: 6,
          title: '',
          features: [
            { name: 'Aura of Protection', description: '', isCritical: true }
          ],
        },
        { 
          level: 7, 
          title: '',
          features: [
            { 
              name: 'Sacred Oath Feature', 
              description: '',
              isSubclassFeature: true 
            }
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
            { name: 'Aura of Courage', description: '' }
          ],
        },
        {
          level: 11,
          title: '',
          features: [
            { name: 'Improved Divine Smite', description: '' }
          ],
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
            { name: 'Cleansing Touch', description: '' }
          ],
        },
        { 
          level: 15, 
          title: '',
          features: [
            { 
              name: 'Sacred Oath Feature', 
              description: '',
              isSubclassFeature: true 
            }
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
            { name: 'Aura Improvements', description: '' }
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
            { 
              name: 'Sacred Oath Capstone', 
              description: '',
              isSubclassFeature: true, 
              isCritical: true 
            }
          ] 
        },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'paladin-divine-abilities',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Lay on Hands', description: '' },
        { name: 'Divine Smite', description: '' },
        { name: 'Channel Divinity', description: '' },
        { name: 'Auras', description: '', isCritical: true }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'paladin-oaths',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'oath-of-devotion',
          name: 'Oath of Devotion',
          description: '',
          note: "Tenets: Honesty, Courage, Compassion, Honor, Duty. Oath Spells: (L3); (L5); (L9); (L13); (L17).",
          features: [
            { name: 'Channel Divinity: Sacred Weapon', level: 3, description: '' },
            { name: 'Channel Divinity: Turn the Unholy', level: 3, description: '' },
            { name: 'Aura of Devotion', level: 7, description: '' },
            { name: 'Purity of Spirit', level: 15, description: '' },
            { name: 'Holy Nimbus', level: 20, description: '' }
          ]
        },
        {
          id: 'oath-of-the-ancients',
          name: 'Oath of the Ancients',
          description: '',
          note: "Tenets: Kindle the Light, Shelter the Light, Preserve Your Own Light, Be the Light. Oath Spells: (L3); (L5); (L9); (L13); (L17).",
          features: [
            { name: 'Channel Divinity: Nature\'s Wrath', level: 3, description: '' },
            { name: 'Channel Divinity: Turn the Faithless', level: 3, description: '' },
            { name: 'Aura of Warding', level: 7, description: '' },
            { name: 'Undying Sentinel', level: 15, description: '' },
            { name: 'Elder Champion', level: 20, description: '' }
          ]
        },
        {
          id: 'oath-of-vengeance',
          name: 'Oath of Vengeance',
          description: '',
          note: "Tenets: Fight the Greater Evil, No Mercy for the Wicked, By Any Means Necessary, Restitution. Oath Spells: (L3); (L5); (L9); (L13); (L17).",
          features: [
            { name: 'Channel Divinity: Abjure Enemy', level: 3, description: '' },
            { name: 'Channel Divinity: Vow of Enmity', level: 3, description: '' },
            { name: 'Relentless Avenger', level: 7, description: '' },
            { name: 'Soul of Vengeance', level: 15, description: '' },
            { name: 'Avenging Angel', level: 20, description: '' }
          ]
        },
        {
          id: 'oath-of-conquest',
          name: 'Oath of Conquest',
          description: '',
          note: "Tenets: Douse the Flame of Hope, Rule with an Iron Fist, Strength Above All. Oath Spells: (L3); (L5); (L9); (L13); (L17).",
          features: [
            { name: 'Channel Divinity: Conquering Presence', level: 3, description: '' },
            { name: 'Channel Divinity: Guided Strike', level: 3, description: '' },
            { name: 'Aura of Conquest', level: 7, description: '' },
            { name: 'Scornful Rebuke', level: 15, description: '' },
            { name: 'Invincible Conqueror', level: 20, description: '' }
          ]
        }
      ],
    },
    {
        type: 'feats',
        sectionId: 'paladin-feats',
        title: '',
        intro: "",
        categories: [
          {
            categoryName: 'Martial Prowess Feats',
            description: '',
            feats: [
              {
                name: 'Polearm Master',
                description: '',
                note: ''
              },
              {
                name: 'Great Weapon Master',
                description: '',
                note: ''
              },
              {
                name: 'Sentinel',
                description: '',
                note: ''
              }
            ]
          },
          {
            categoryName: 'Spellcasting & General Enhancement Feats',
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
                name: 'Inspiring Leader',
                description: '',
                note: ''
              },
              {
                name: 'Fey Touched',
                description: '',
                note: ''
              }
            ]
          }
        ]
      },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'paladin-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'paladin-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Sorcerer", synergy: "", levels: "Paladin 6-7 / Sorcerer X" },
        { className: "Warlock (Hexblade)", synergy: "", levels: "Paladin X / Warlock 1-3" },
        { className: "Bard (College of Swords/Valor/Lore)", synergy: "", levels: "Paladin 6-7 / Bard X" },
        { className: "Fighter", synergy: "", levels: "Paladin X / Fighter 1-3"}
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'paladin-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'paladin-closing',
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
      name: 'Guard Origin', 
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
          fightingStyle: '',
          spellSuggestions: [],
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Strength OR +2 Charisma OR Feat (Sentinel, Great Weapon Master, War Caster).',
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: 'Continue boosting Str/Cha or take another key feat.',
          spellSuggestions: [],
      }},
      { level: 12, recommendation: {
          asiChoice: 'Aim to max Str/Cha. Consider Resilient (Con) or Tough.',
          spellSuggestions: [],
      }},
      { level: 16, recommendation: {
          asiChoice: 'Further boost stats or pick up utility/defensive feats.',
          spellSuggestions: [],
      }},
      { level: 19, recommendation: {
          asiChoice: 'Epic Boon (e.g., Boon of Fortitude, Boon of Invincibility) OR +2 Str/Cha/Con.',
          spellSuggestions: [],
      }},
    ],
    subclassSpecificRecommendations: {
      'Oath of Devotion': [
        { level: 3, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Charisma (boosts Sacred Weapon and saves).', spellSuggestions: [] }},
        { level: 8, recommendation: { asiChoice: '+2 Strength or another +2 Charisma.' }},
      ],
      'Oath of the Ancients': [
        { level: 3, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Charisma (for Aura of Warding).', spellSuggestions: [] }},
        { level: 8, recommendation: { asiChoice: 'Sentinel or Polearm Master for battlefield control to protect allies.' }},
      ],
      'Oath of Vengeance': [
        { level: 3, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Strength or Great Weapon Master.', spellSuggestions: [] }},
        { level: 8, recommendation: { asiChoice: '+2 Charisma (for Vow of Enmity success and spell DCs).', notes: '' }},
      ],
      'Oath of Conquest': [
        { level: 3, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Charisma (for Conquering Presence DC and Aura of Conquest damage).', spellSuggestions: [] }},
        { level: 8, recommendation: { asiChoice: 'Feat: Sentinel or Polearm Master to lock down frightened enemies. +Str is also good.', notes: '' }},
      ]
    }
  }
};
