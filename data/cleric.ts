
import { ClassDefinition, FeatureDetail } from '../types';

const clericDomains: FeatureDetail[] = [
  { name: "Knowledge Domain", description: "Divine archivists and seekers of truth." },
  { name: "Life Domain", description: "Supreme healers, embodying vitality and restoration." },
  { name: "Light Domain", description: "Wielders of divine light, dispelling darkness and burning foes." },
  { name: "Nature Domain", description: "Connected to the natural world, commanding its elements and creatures." },
  { name: "Tempest Domain", description: "Channelers of storms, wielding thunder and lightning with divine fury." },
  { name: "Trickery Domain", description: "Masters of deception, illusion, and stealth, often serving duplicitous deities." },
  { name: "War Domain", description: "Divine champions, inspiring allies and crushing enemies on the battlefield." },
];


export const clericClassData: ClassDefinition = {
  className: "Cleric",
  classTitle: "",
  classDescription: "",
  themeColor: "yellow",
  sections: [
    {
      type: 'intro',
      sectionId: 'cleric-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'cleric-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'cleric-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'cleric-core',
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
      sectionId: 'cleric-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Spellcasting', description: '' },
            { 
              name: 'Divine Domain Feature', 
              description: '',
              isSubclassFeature: true 
            },
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Channel Divinity (1/rest)', description: '' },
            { name: 'Channel Divinity: Turn Undead', description: '' },
            { 
              name: 'Divine Domain Feature (Channel Divinity Option)', 
              description: '',
              isSubclassFeature: true 
            },
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
            { name: 'Destroy Undead (CR 1/2)', description: '' },
            { name: 'Spellcasting', description: '' }
          ],
        },
        {
          level: 6,
          title: '',
          features: [
            { name: 'Channel Divinity (2/rest)', description: '' },
            { 
              name: 'Divine Domain Feature', 
              description: '',
              isSubclassFeature: true 
            },
          ],
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
            { name: 'Ability Score Improvement / Feat', description: '' },
            { name: 'Destroy Undead (CR 1)', description: '' },
            { 
              name: 'Divine Domain Feature (Potent Spellcasting / Divine Strike)', 
              description: '',
              isSubclassFeature: true 
            },
          ],
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
            { name: 'Divine Intervention', description: '', isCritical: true }
          ],
        },
        {
          level: 11,
          title: '',
          features: [
            { name: 'Destroy Undead (CR 2)', description: '' },
            { name: 'Spellcasting', description: '' }
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
          ],
        },
        {
          level: 14,
          title: '',
          features: [
            { name: 'Destroy Undead (CR 3)', description: '' },
             { 
               name: 'Divine Domain Feature Improvement (e.g. Divine Strike improvement)', 
               description: '',
               isSubclassFeature: true, 
               note: ""
            },
          ],
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
            { name: 'Destroy Undead (CR 4)', description: '' },
            { name: 'Spellcasting', description: '' },
            { 
              name: 'Divine Domain Feature (Capstone)', 
              description: '',
              isSubclassFeature: true 
            },
          ],
        },
        { 
          level: 18, 
          title: '',
          features: [
            { name: 'Channel Divinity (3/rest)', description: '' }
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
            { name: 'Improved Divine Intervention', description: '' , isCritical: true}
          ],
        },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'cleric-channel',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Channel Divinity', description: '' },
        { name: 'Turn Undead', description: '' },
        { name: 'Divine Intervention', description: '', isCritical: true }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'cleric-domains',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'life-domain',
          name: 'Life Domain',
          description: '',
          features: [
            { name: 'Bonus Proficiency (Heavy Armor)', level: 1, description: '' },
            { name: 'Disciple of Life', level: 1, description: '' },
            { name: 'Channel Divinity: Preserve Life', level: 2, description: '' },
            { name: 'Blessed Healer', level: 6, description: '' },
            { name: 'Divine Strike', level: 8, description: '' },
            { name: 'Supreme Healing', level: 17, description: '' }
          ],
          note: "Domain Spells: (L1); (L3); (L5); (L7); (L9)."
        },
        {
          id: 'light-domain',
          name: 'Light Domain',
          description: '',
          features: [
            { name: 'Bonus Cantrip (Light)', level: 1, description: '' },
            { name: 'Warding Flare', level: 1, description: '' },
            { name: 'Channel Divinity: Radiance of the Dawn', level: 2, description: '' },
            { name: 'Improved Flare', level: 6, description: '' },
            { name: 'Potent Spellcasting', level: 8, description: '' },
            { name: 'Corona of Light', level: 17, description: '' }
          ],
          note: "Domain Spells: (L1); (L3); (L5); (L7); (L9)."
        },
        {
            id: 'knowledge-domain',
            name: 'Knowledge Domain',
            description: '',
            features: [
                { name: 'Blessings of Knowledge', level: 1, description: '' },
                { name: 'Channel Divinity: Knowledge of the Ages', level: 2, description: '' },
                { name: 'Channel Divinity: Read Thoughts', level: 6, description: ''},
                { name: 'Potent Spellcasting', level: 8, description: '' },
                { name: 'Visions of the Past', level: 17, description: '' }
            ],
            note: "Domain Spells: (L1); (L3); (L5); (L7); (L9)."
        },
        {
            id: 'war-domain',
            name: 'War Domain',
            description: '',
            features: [
                { name: 'Bonus Proficiencies', level: 1, description: ''},
                { name: 'War Priest', level: 1, description: ''},
                { name: 'Channel Divinity: Guided Strike', level: 2, description: ''},
                { name: 'Channel Divinity: War God\'s Blessing', level: 6, description: ''},
                { name: 'Divine Strike', level: 8, description: ''},
                { name: 'Avatar of Battle', level: 17, description: ''}
            ],
            note: "Domain Spells: (L1); (L3); (L5); (L7); (L9)."
        }
      ],
    },
     {
        type: 'feats',
        sectionId: 'cleric-feats',
        title: '',
        intro: "",
        categories: [
          {
            categoryName: 'Spellcasting & Concentration Feats',
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
              }
            ]
          },
          {
            categoryName: 'Utility, Survivability & Role-Specific Feats',
            description: '',
            feats: [
              {
                name: 'Lucky',
                description: '',
                note: ''
              },
              {
                name: 'Telekinetic',
                description: '',
                note: ''
              },
              {
                name: 'Tough',
                description: '',
                note: ''
              },
               {
                name: 'Heavy Armor Master',
                description: '',
                note: ''
              }
            ]
          }
        ]
      },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'cleric-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'cleric-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Fighter", synergy: "", levels: "1-2" },
        { className: "Paladin", synergy: "", levels: "2-6" },
        { className: "Wizard (Divination/Abjuration)", synergy: "", levels: "1-2" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'cleric-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'cleric-closing',
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
          spellSuggestions: [],
          notes: ''
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Wisdom',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Wisdom (to max, if War Caster was taken at L1 via Origin) OR Feat: Resilient (Constitution)',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 12, recommendation: {
          asiChoice: '+2 Constitution OR Feat: Lucky',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 16, recommendation: {
          asiChoice: '+2 Constitution/Wisdom OR Feat: Tough',
          spellSuggestions: [],
          notes: ''
      }},
      { level: 19, recommendation: {
          asiChoice: 'Epic Boon (e.g., Boon of High Magic, Boon of Spell Recall) OR +2 Wisdom/Constitution',
          spellSuggestions: [],
          notes: ''
      }},
    ],
    subclassSpecificRecommendations: {
      'Life Domain': [
        { level: 1, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Wisdom' }},
        { level: 8, recommendation: { featSuggestion: '', spellSuggestions: [] }},
      ],
      'Light Domain': [
        { level: 1, recommendation: { notes: ""}},
        { level: 4, recommendation: { asiChoice: '+2 Wisdom' }},
        { level: 8, recommendation: { featSuggestion: '', spellSuggestions: [] }},
      ],
      'Knowledge Domain': [
          { level: 1, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Wisdom' }},
          { level: 8, recommendation: { featSuggestion: '', spellSuggestions:[]}}
      ],
      'War Domain': [
          { level: 1, recommendation: { notes: ""}},
          { level: 4, recommendation: { asiChoice: '+2 Wisdom or +2 Strength (if primary melee)' }},
          { level: 8, recommendation: { featSuggestion: '', spellSuggestions:[]}}
      ]
    }
  }
};
