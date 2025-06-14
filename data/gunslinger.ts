
import { ClassDefinition } from '../types';

export const gunslingerClassData: ClassDefinition = {
    className: "Gunslinger",
    classTitle: "",
    classDescription: "",
    themeColor: "sky", // Example theme color
    sections: [
      {
        type: 'intro',
        sectionId: 'gunslinger-intro',
        title: '',
        content: [],
      },
      {
        type: 'rolePlaystyle',
        sectionId: 'gunslinger-role',
        title: '',
        content: []
      },
      {
        type: 'strengthsWeaknesses',
        sectionId: 'gunslinger-proscons',
        title: '',
        strengths: [],
        weaknesses: []
      },
      {
        type: 'baseTraits',
        sectionId: 'gunslinger-core',
        title: '',
        items: [
          { name: 'Hit Dice', description: '' },
          { name: 'Primary Attributes', description: '' },
          { name: 'Saving Throws', description: '' },
          { name: 'Proficiencies', description: '' },
          { name: 'Starting Equipment', description: '' },
          { name: 'Arsenal', description: ''}
        ],
      },
      {
        type: 'levelProgression',
        sectionId: 'gunslinger-levels',
        title: '',
        levels: [
           {
            level: 1,
            title: '',
            features: [
              { name: 'Fighting Style', description: '' },
              { name: 'Quick Draw', description: '' },
              { name: 'Weapon Mastery', description: '' },
            ],
          },
          {
            level: 2,
            title: '',
            features: [
              { name: 'Critical Shot', description: '', note: '', isCritical: true },
              { name: 'Risk & Deeds', description: '', isDeed: true },
              { name: 'Poker Face', description: '' },
            ],
          },
          { 
            level: 3, 
            title: '',
            features: [
              { 
                name: 'Gunslinger\'s Creed Feature', 
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
              { name: 'Extra Attack', description: '' },
              { name: 'Gut Shot', description: '', note: '', isCritical: true },
            ],
          },
          { 
            level: 6, 
            title: '',
            features: [
              { 
                name: 'Gunslinger\'s Creed Feature', 
                description: '',
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 7, 
            title: '',
            features: [
              { name: 'Evasion', description: '' }
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
              { name: 'Improved Critical Shot', description: '', note: '', isCritical: true}
            ] 
          },
          { 
            level: 10, 
            title: '',
            features: [
              { 
                name: 'Gunslinger\'s Creed Feature', 
                description: '',
                isSubclassFeature: true 
              }
            ] 
          },
          {
            level: 11,
            title: '',
            features: [
              { name: 'Overkill', description: '' },
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
              { name: 'Cheat Death', description: '' }
            ] 
          },
          { 
            level: 14, 
            title: '',
            features: [
              { 
                name: 'Gunslinger\'s Creed Feature', 
                description: '',
                isSubclassFeature: true 
              }
            ] 
          },
          { 
            level: 15, 
            title: '',
            features: [
              { name: 'Dire Gambit', description: '', isDeed: true }
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
              { name: 'Master Critical Shot', description: '', note: '', isCritical: true }
            ] 
          },
          { 
            level: 18, 
            title: '',
            features: [
              { name: 'Deft Maneuver', description: '', isDeed: true }
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
              { name: 'Headshot', description: '', note: '', isCritical: true },
            ],
          },
        ],
      },
      {
        type: 'uniqueMechanics',
        sectionId: 'gunslinger-deeds',
        title: '',
        intro: "",
        mechanics: [
          { name: 'Bite the Bullet', description: '', isDeed: true },
          { name: 'Blindfire', description: '', isDeed: true },
          { name: 'Dodge Roll', description: '', isDeed: true },
          { name: 'Grazing Shot', description: '', isDeed: true },
          { name: 'Maverick\'s Spirit', description: '', isDeed: true },
          { name: 'Skin of Your Teeth', description: '', isDeed: true },
        ],
      },
      {
        type: 'subclasses',
        sectionId: 'gunslinger-subclasses',
        title: '',
        intro: '',
        subclasses: [
             {
                id: 'deadeye-the-sharpshooter',
                name: 'Deadeye - The Sharpshooter',
                description: '',
                note: '',
                features: [ 
                  { name: 'Deadeye\'s Aim', level: 3, description: ''},
                  { name: 'Piercing Shot', level: 6, description: ''},
                  { name: 'Vital Strike', level: 10, description: ''},
                  { name: 'Master Sniper', level: 14, description: ''}
                ]
              },
              {
                id: 'high-roller-the-gambler',
                name: 'High Roller - The Gambler',
                description: '',
                note: '',
                features: [
                  { name: 'Gambler\'s Luck', level: 3, description: ''},
                  { name: 'Ace Up The Sleeve', level: 6, description: ''},
                  { name: 'All In', level: 10, description: ''},
                  { name: 'Jackpot', level: 14, description: ''}
                ]
              },
              {
                id: 'secret-agent-covert-operative-the-spy',
                name: 'Secret Agent (Covert Operative) - The Spy',
                description: '',
                note: '',
                features: [
                  { name: 'Concealed Carry', level: 3, description: ''},
                  { name: 'Silent Shot', level: 6, description: ''},
                  { name: 'Undercover Tactics', level: 10, description: ''},
                  { name: 'License to Kill', level: 14, description: ''}
                ]
              },
              {
                id: 'spellslinger-the-arcane-gunslinger',
                name: 'Spellslinger - The Arcane Gunslinger',
                description: '',
                note: '',
                features: [
                  { name: 'Spellcasting', level: 3, description: ''},
                  { name: 'Arcane Shot', level: 6, description: ''},
                  { name: 'Infused Bullets', level: 10, description: ''},
                  { name: 'Greater Arcane Shot', level: 14, description: ''}
                ]
              },
              {
                id: 'trick-shot-the-acrobatic-marksman',
                name: 'Trick Shot - The Acrobatic Marksman',
                description: '',
                note: '',
                features: [
                  { name: 'Ricochet Shot', level: 3, description: ''},
                  { name: 'Disarming Shot', level: 6, description: ''},
                  { name: 'Warning Shot', level: 10, description: ''},
                  { name: 'Called Shot Mastery', level: 14, description: ''}
                ]
              },
              {
                id: 'white-hat-the-justicar',
                name: 'White Hat - The Justicar',
                description: '',
                note: '',
                features: [
                  { name: 'Guardian\'s Stance', level: 3, description: ''},
                  { name: 'Uphold the Law', level: 6, description: ''},
                  { name: 'Stand Against Evil', level: 10, description: ''},
                  { name: 'Hero\'s Resolve', level: 14, description: ''}
                ]
              },
        ],
      },
      {
        type: 'feats',
        sectionId: 'gunslinger-feats',
        title: '',
        intro: "",
        categories: [
          {
            categoryName: 'Core Damage & Accuracy Feats',
            description: '',
            feats: [
              { 
                name: 'Sharpshooter', 
                description: '',
                note: ''
              },
              { 
                name: 'Piercer', 
                description: '',
                note: ''
              }
            ]
          },
          {
            categoryName: 'Survivability & Utility Feats',
            description: '',
            feats: [
              { 
                name: 'Alert', 
                description: '',
                note: ''
              },
              { 
                name: 'Resilient (Dexterity or Constitution)', 
                description: '',
                note: ''
              },
              {
                name: 'Lucky',
                description: '',
                note: ''
              },
              {
                name: 'Tough',
                description: '',
                note: ''
              }
            ]
          }
        ]
      },
      {
        type: 'flavorAndRoleplaying',
        sectionId: 'gunslinger-rp',
        title: '',
        content: []
      },
      {
        type: 'multiclassing',
        sectionId: 'gunslinger-multi',
        title: '',
        generalNotes: [],
        goodCombinations: [
          { className: "Fighter", synergy: "", levels: "1-3" },
          { className: "Rogue", synergy: "", levels: "1-3" },
          { className: "Ranger", synergy: "", levels: "2-3" }
        ]
      },
      {
        type: 'equipmentProgression',
        sectionId: 'gunslinger-gear',
        title: '',
        earlyGame: [],
        midGame: [],
        lateGame: []
      },
      {
        type: 'closingRemarks',
        sectionId: 'gunslinger-closing',
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
            fightingStyle: '',
            featSuggestion: '',
            notes: ''
        }},
        { level: 4, recommendation: {
            asiChoice: '+2 Dexterity',
            notes: ''
        }},
        { level: 8, recommendation: {
            asiChoice: '+2 Dexterity (to reach 20 if possible)',
            featSuggestion: '',
            notes: ''
        }},
        { level: 12, recommendation: {
            asiChoice: 'Feat: Resilient (Wisdom)',
            notes: ''
        }},
        { level: 16, recommendation: {
            asiChoice: 'Feat: Lucky OR Tough',
            notes: ''
        }},
        { level: 19, recommendation: {
            asiChoice: 'Epic Boon: Irresistible Offense',
            notes: ''
        }},
      ],
      subclassSpecificRecommendations: {
        'Deadeye - The Sharpshooter': [
          { level: 3, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity', notes: '' }},
          { level: 8, recommendation: { featSuggestion: '', notes: '' }},
        ],
        'High Roller - The Gambler': [
          { level: 3, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity', notes: '' }},
          { level: 8, recommendation: { featSuggestion: '', notes: '' }},
        ],
        'Secret Agent (Covert Operative) - The Spy': [
          { level: 3, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity' }},
          { level: 8, recommendation: { featSuggestion: '', notes: '' }},
        ],
        'Spellslinger - The Arcane Gunslinger': [
          { level: 3, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity OR +2 Charisma', notes: '' }},
          { level: 8, recommendation: { featSuggestion: '', notes: '' }},
        ],
        'Trick Shot - The Acrobatic Marksman': [
          { level: 3, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity' }},
          { level: 8, recommendation: { featSuggestion: '', notes: '' }},
        ],
        'White Hat - The Justicar': [
          { level: 3, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Dexterity' }},
          { level: 8, recommendation: { featSuggestion: '', notes: '' }},
        ],
      }
    }
  };
