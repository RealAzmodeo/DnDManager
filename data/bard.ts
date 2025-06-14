
import { ClassDefinition } from '../types';

export const bardClassData: ClassDefinition = {
  className: "Bard",
  classTitle: "",
  classDescription: "",
  themeColor: "pink", 
  sections: [
    {
      type: 'intro',
      sectionId: 'bard-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'bard-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'bard-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'bard-core',
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
      sectionId: 'bard-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Spellcasting', description: '' },
            { name: 'Bardic Inspiration (d6)', description: '' }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Jack of All Trades', description: '', isCritical: true },
            { name: 'Song of Rest (d6)', description: '' }
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { 
              name: 'Bard College Feature', 
              description: '',
              isSubclassFeature: true 
            },
            { name: 'Expertise (1)', description: '' }
          ],
        },
        { level: 4, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, { name: 'Cantrip Versatility (Optional Rule)', description: ''}] },
        {
          level: 5,
          title: '',
          features: [
            { name: 'Bardic Inspiration (d8)', description: '' },
            { name: 'Font of Inspiration', description: '', isCritical: true }
          ],
        },
        {
          level: 6,
          title: '',
          features: [
            { name: 'Countercharm', description: '' },
            { 
              name: 'Bard College Feature', 
              description: '',
              isSubclassFeature: true 
            }
          ],
        },
        { level: 7, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 8, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 9, title: '', features: [{ name: 'Song of Rest (d8)', description: '' }, { name: 'Spellcasting', description: '' }] },
        {
          level: 10,
          title: '',
          features: [
            { name: 'Bardic Inspiration (d10)', description: '' },
            { name: 'Expertise (2)', description: '' },
            { name: 'Magical Secrets (1)', description: '', isCritical: true }
          ],
        },
        { level: 11, title: '', features: [{ name: 'Spellcasting', description: '' }] },
        { level: 12, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 13, title: '', features: [{ name: 'Song of Rest (d10)', description: '' }, { name: 'Spellcasting', description: '' }] },
        {
          level: 14,
          title: '',
          features: [
            { 
              name: 'Bard College Feature', 
              description: '',
              isSubclassFeature: true 
            },
            { name: 'Magical Secrets (2)', description: '' }
          ],
        },
        { level: 15, title: '', features: [{ name: 'Bardic Inspiration (d12)', description: '' }] },
        { level: 16, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 17, title: '', features: [{ name: 'Song of Rest (d12)', description: '' }, { name: 'Spellcasting', description: '' }] },
        { level: 18, title: '', features: [{ name: 'Magical Secrets (3)', description: '' }] },
        { level: 19, title: '', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }] },
        { level: 20, title: '', features: [{ name: 'Superior Inspiration', description: '', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'bard-unique',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Bardic Inspiration', description: '', isCritical: true },
        { name: 'Jack of All Trades', description: '' },
        { name: 'Song of Rest', description: '' },
        { name: 'Expertise', description: '' },
        { name: 'Magical Secrets', description: '', isCritical: true },
        { name: 'Countercharm', description: ''}
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'bard-colleges',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'college-of-lore',
          name: 'College of Lore',
          description: '',
          note: "",
          features: [
            { name: 'Bonus Proficiencies', level: 3, description: '' },
            { name: 'Cutting Words', level: 3, description: '' },
            { name: 'Additional Magical Secrets', level: 6, description: '' },
            { name: 'Peerless Skill', level: 14, description: '' }
          ]
        },
        {
          id: 'college-of-valor',
          name: 'College of Valor',
          description: '',
          note: "",
          features: [
            { name: 'Bonus Proficiencies', level: 3, description: '' },
            { name: 'Combat Inspiration', level: 3, description: '' },
            { name: 'Extra Attack', level: 6, description: '' },
            { name: 'Battle Magic', level: 14, description: '' }
          ]
        },
        {
          id: 'college-of-swords',
          name: 'College of Swords',
          description: '',
          note: "",
           features: [
            { name: 'Bonus Proficiencies', level: 3, description: '' },
            { name: 'Fighting Style', level: 3, description: '' },
            { name: 'Blade Flourish', level: 3, description: '' },
            { name: 'Extra Attack', level: 6, description: '' },
            { name: 'Master\'s Flourish', level: 14, description: '' }
          ]
        },
        {
          id: 'college-of-eloquence',
          name: 'College of Eloquence',
          description: '',
          note: "",
          features: [
            { name: 'Silver Tongue', level: 3, description: '' },
            { name: 'Unsettling Words', level: 3, description: '' },
            { name: 'Unfailing Inspiration', level: 6, description: '' },
            { name: 'Universal Speech', level: 6, description: '' },
            { name: 'Infectious Inspiration', level: 14, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'bard-feats',
      title: '',
      intro: "",
      categories: [
        {
          categoryName: 'Core Spellcasting & Support Feats',
          description: '',
          feats: [
            { name: 'War Caster', description: '', note: '' },
            { name: 'Resilient (Constitution)', description: '', note: '' },
            { name: 'Fey Touched', description: '', note: '' },
            { name: 'Inspiring Leader', description: '', note: '' }
          ]
        },
        {
          categoryName: 'Utility & Roleplaying Feats',
          description: '',
          feats: [
            { name: 'Actor', description: '', note: '' },
            { name: 'Lucky', description: '', note: '' },
            { name: 'Telekinetic', description: '', note: '' },
            { name: 'Metamagic Adept', description: '', note: '' },
            { name: 'Skill Expert', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'bard-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'bard-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Paladin", synergy: "", levels: "Bard X / Paladin 2 or 6-7" },
        { className: "Warlock (Hexblade)", synergy: "", levels: "Bard X / Warlock 1-3" },
        { className: "Sorcerer", synergy: "", levels: "Bard X / Sorcerer 1-3" },
        { className: "Fighter", synergy: "", levels: "Bard X / Fighter 1-2" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'bard-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'bard-closing',
      title: '',
      content: [],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Half-Elf / Human / Custom Lineage',
      note: ''
    },
    origin: { 
      name: 'Artisan Origin', 
      note: '',
      recommendedFeat: '',
      skillProficiencies: []
    },
    abilityPriority: [],
    keyClassSkills: [],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: '',
          spellSuggestions: ['Cantrips: Vicious Mockery, Mage Hand/Minor Illusion. Spells: Healing Word, Dissonant Whispers, Faerie Fire, Sleep/Tasha\'s Hideous Laughter.'],
          notes: ''
      }},
      { level: 3, recommendation: {
          notes: '' ,
          spellSuggestions: ['Expertise in Persuasion and Deception/Insight is strong.'],
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Charisma',
          spellSuggestions: ['Heat Metal, Suggestion, Shatter, Invisibility.'],
      }},
      { level: 6, recommendation: {
          spellSuggestions: ['Hypnotic Pattern, Dispel Magic, Counterspell (via Magical Secrets for Lore Bards).']
      }},
      { level: 8, recommendation: {
          asiChoice: 'Feat: Metamagic Adept OR +2 Charisma (to max)', // Corrected from 'asi:' to 'asiChoice:'
          spellSuggestions: ['Polymorph, Dimension Door, Greater Invisibility.'],
      }},
    ],
    subclassSpecificRecommendations: {
      'College of Lore': [
        { level: 3, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ],
      'College of Valor': [
        { level: 3, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ],
      'College of Swords': [
        { level: 3, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ],
      'College of Eloquence': [
        { level: 3, recommendation: { notes: '' }},
        { level: 6, recommendation: { notes: '' }},
      ]
    }
  }
};
