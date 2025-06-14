
import { ClassDefinition } from '../types';

export const fighterClassData: ClassDefinition = {
  className: "Fighter",
  classTitle: "",
  classDescription: "",
  themeColor: "red", 
  sections: [
    {
      type: 'intro',
      sectionId: 'fighter-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'fighter-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'fighter-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'fighter-core',
      title: '',
      items: [
        { name: 'Hit Dice', description: '' },
        { name: 'Primary Attributes', description: '' },
        { name: 'Saving Throws', description: '' },
        { name: 'Proficiencies', description: '' },
        { name: 'Starting Equipment', description: ''}
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'fighter-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Fighting Style', description: '' },
            { name: 'Second Wind', description: '' }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Action Surge', description: '', isCritical: true }
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { 
              name: 'Martial Archetype Feature', 
              description: '',
              isSubclassFeature: true 
            }
          ],
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
            { name: 'Extra Attack', description: '' }
          ] 
        },
        { 
          level: 6, 
          title: '',
          features: [
            { name: 'Ability Score Improvement / Feat', description: '' }
          ] 
        },
        { 
          level: 7, 
          title: '',
          features: [
            { 
              name: 'Martial Archetype Feature', 
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
            { name: 'Indomitable (1 use)', description: '' }
          ],
        },
        { 
          level: 10, 
          title: '',
          features: [
            { 
              name: 'Martial Archetype Feature', 
              description: '',
              isSubclassFeature: true 
            }
          ] 
        },
        { 
          level: 11, 
          title: '',
          features: [
            { name: 'Extra Attack', description: '' }
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
            { name: 'Indomitable (2 uses)', description: '' }
          ] 
        },
        { 
          level: 14, 
          title: '',
          features: [
            { name: 'Ability Score Improvement / Feat', description: '' }
          ] 
        },
        { 
          level: 15, 
          title: '',
          features: [
            { 
              name: 'Martial Archetype Feature', 
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
            { name: 'Action Surge (2 uses)', description: '', isCritical: true },
            { name: 'Indomitable (3 uses)', description: '' }
          ] 
        },
        { 
          level: 18, 
          title: '',
          features: [
            { 
              name: 'Martial Archetype Feature', 
              description: '',
              isSubclassFeature: true 
            }
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
            { name: 'Extra Attack', description: '', isCritical: true }
          ]
        } 
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'fighter-mechanics',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Fighting Style', description: '' },
        { name: 'Second Wind', description: '' },
        { name: 'Action Surge', description: '', isCritical: true },
        { name: 'Extra Attack', description: '', isCritical: true },
        { name: 'Indomitable', description: '' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'fighter-archetypes',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'battle-master',
          name: 'Battle Master',
          description: '',
          note: "",
          features: [
            { name: 'Combat Superiority', level: 3, description: '' }, // Maneuver descriptions will be cleared by parent logic if they were part of this string. If subItems are used, they need specific handling.
            { name: 'Student of War', level: 3, description: '' },
            { name: 'Know Your Enemy', level: 7, description: '' },
            { name: 'Improved Combat Superiority', level: 10, description: '' },
            { name: 'Relentless', level: 15, description: '' }
          ]
        },
        {
          id: 'champion',
          name: 'Champion',
          description: '',
          note: "",
          features: [
            { name: 'Improved Critical', level: 3, description: '' },
            { name: 'Remarkable Athlete', level: 7, description: '' },
            { name: 'Additional Fighting Style', level: 10, description: '' },
            { name: 'Superior Critical', level: 15, description: '' },
            { name: 'Survivor', level: 18, description: '' }
          ]
        },
        {
          id: 'eldritch-knight',
          name: 'Eldritch Knight',
          description: '',
          note: "",
          features: [
            { name: 'Spellcasting (Eldritch Knight)', level: 3, description: '' },
            { name: 'Weapon Bond', level: 3, description: '' },
            { name: 'War Magic', level: 7, description: '' },
            { name: 'Eldritch Strike', level: 10, description: '' },
            { name: 'Arcane Charge', level: 15, description: '' },
            { name: 'Improved War Magic', level: 18, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'fighter-feats',
      title: '',
      intro: "",
      categories: [
        {
          categoryName: 'Core Combat Feats',
          description: '',
          feats: [
            { name: 'Great Weapon Master', description: '', note: '' },
            { name: 'Polearm Master', description: '', note: '' },
            { name: 'Sharpshooter', description: '', note: '' },
            { name: 'Crossbow Expert', description: '', note: '' },
            { name: 'Sentinel', description: '', note: ''}
          ]
        },
        {
          categoryName: 'Survivability & Utility Feats',
          description: '',
          feats: [
            { name: 'Tough', description: '', note: '' },
            { name: 'Resilient (Wisdom or Dexterity)', description: '', note: '' },
            { name: 'Lucky', description: '', note: '' },
            { name: 'Alert', description: '', note: '' },
            { name: 'Mobile', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'fighter-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'fighter-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Barbarian", synergy: "", levels: "1-3 Barbarian" },
        { className: "Rogue", synergy: "", levels: "1-3 Rogue" },
        { className: "Paladin", synergy: "", levels: "2-6 Paladin" },
        { className: "Wizard (for Eldritch Knight)", synergy: "", levels: "Fighter (EK) X / Wizard Y" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'fighter-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'fighter-closing',
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
          fightingStyle: '',
          notes: ''
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Strength OR +2 Dexterity',
          notes: ''
      }},
      { level: 6, recommendation: {
          asiChoice: 'Feat: Sentinel OR another +2 to primary stat.',
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 to primary stat (to max) OR +2 Constitution.',
      }},
      { level: 12, recommendation: {
          asiChoice: 'Feat: Tough OR Resilient (Wisdom) OR another combat feat.',
      }},
    ],
    subclassSpecificRecommendations: {
      'Battle Master': [
        { level: 3, recommendation: { 
            notes: ''
        }},
        { level: 4, recommendation: { 
            asiChoice: '+2 Strength/Dexterity or Feat: Martial Adept (for more maneuvers/dice).' 
        }},
      ],
      'Champion': [
        { level: 3, recommendation: { notes: '' }},
        { level: 4, recommendation: { asiChoice: '+2 Strength/Dexterity.' }},
      ],
      'Eldritch Knight': [
        { level: 3, recommendation: { 
            spellSuggestions: [],
            notes: ''
        }},
        { level: 4, recommendation: { asiChoice: '+2 Strength/Dexterity or Feat: War Caster (if focusing on concentration spells and combat casting).' }},
        { level: 8, recommendation: { asiChoice: '+2 Intelligence OR continue Str/Dex.'}}
      ]
    }
  }
};
