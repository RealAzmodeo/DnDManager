
import { ClassDefinition } from '../types';

export const barbarianClassData: ClassDefinition = {
  className: "Barbarian",
  classTitle: "",
  classDescription: "",
  themeColor: "orange",
  sections: [
    {
      type: 'intro',
      sectionId: 'barbarian-intro',
      title: 'Class Overview',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'barbarian-role',
      title: 'Role & Playstyle',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'barbarian-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'barbarian-core',
      title: 'Core Class Traits',
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
      sectionId: 'barbarian-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Rage (2/day)', description: '', isCritical: true },
            { name: 'Unarmored Defense (Barbarian)', description: '' }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Reckless Attack', description: '' },
            { name: 'Danger Sense', description: '' }
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { name: 'Primal Path Feature', description: '', isSubclassFeature: true },
            { name: 'Rage (3/day)', description: '' }
          ],
        },
        { level: 4, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        {
          level: 5,
          title: '',
          features: [
            { name: 'Extra Attack', description: '' },
            { name: 'Fast Movement', description: '' }
          ],
        },
        { level: 6, title: '', features: [{ name: 'Primal Path Feature', description: '', isSubclassFeature: true }, { name: 'Rage (4/day)', description: ''}] },
        { level: 7, title: '', features: [{ name: 'Feral Instinct', description: '' }] },
        { level: 8, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        {
          level: 9,
          title: '',
          features: [
            { name: 'Brutal Critical (1 die)', description: '' },
            { name: 'Rage Damage Bonus', description: ''}
          ],
        },
        { level: 10, title: '', features: [{ name: 'Primal Path Feature', description: '', isSubclassFeature: true }] },
        { level: 11, title: '', features: [{ name: 'Relentless Rage', description: '' }] },
        { level: 12, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, { name: 'Rage (5/day)', description: ''}] },
        { level: 13, title: '', features: [{ name: 'Brutal Critical (2 dice)', description: '' }] },
        { level: 14, title: '', features: [{ name: 'Primal Path Feature', description: '', isSubclassFeature: true }] },
        { level: 15, title: '', features: [{ name: 'Persistent Rage', description: '' }] },
        { level: 16, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }, { name: 'Rage Damage Bonus', description: ''}] },
        { level: 17, title: '', features: [{ name: 'Brutal Critical (3 dice)', description: '' }, { name: 'Rage (6/day)', description: ''}] },
        { level: 18, title: '', features: [{ name: 'Indomitable Might', description: '' }] },
        { level: 19, title: '', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }] },
        { level: 20, title: '', features: [{ name: 'Primal Champion', description: '', isCritical: true }, { name: 'Rage (Unlimited)', description: ''}] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'barbarian-rage',
      title: 'Rage and Primal Abilities',
      intro: "",
      mechanics: [
        { name: 'Rage', description: '', isCritical: true },
        { name: 'Unarmored Defense (Barbarian)', description: '' },
        { name: 'Reckless Attack', description: '' },
        { name: 'Danger Sense', description: '' },
        { name: 'Brutal Critical', description: '' },
        { name: 'Relentless Rage', description: '' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'barbarian-paths',
      title: 'Primal Paths (Subclasses)',
      intro: '',
      subclasses: [
        {
          id: 'path-of-the-berserker',
          name: 'Path of the Berserker',
          description: '',
          note: "",
          features: [
            { name: 'Frenzy', level: 3, description: '' },
            { name: 'Mindless Rage', level: 6, description: '' },
            { name: 'Intimidating Presence', level: 10, description: '' },
            { name: 'Retaliation', level: 14, description: '' }
          ]
        },
        {
          id: 'path-of-the-totem-warrior',
          name: 'Path of the Totem Warrior',
          description: '',
          note: "",
          features: [
            { name: 'Spirit Seeker', level: 3, description: '' },
            { name: 'Totem Spirit (L3)', level: 3, description: '' },
            { name: 'Aspect of the Beast (L6)', level: 6, description: '' },
            { name: 'Spirit Walker (L10)', level: 10, description: '' },
            { name: 'Totemic Attunement (L14)', level: 14, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'barbarian-feats',
      title: 'Key Feats for the Barbarian',
      intro: "",
      categories: [
        {
          categoryName: 'Core Combat Feats',
          description: '',
          feats: [
            { name: 'Great Weapon Master', description: '', note: '' },
            { name: 'Polearm Master', description: '', note: '' },
            { name: 'Sentinel', description: '', note: '' },
            { name: 'Slasher / Crusher / Piercer', description: '', note: ''}
          ]
        },
        {
          categoryName: 'Survivability & Utility Feats',
          description: '',
          feats: [
            { name: 'Tough', description: '', note: '' },
            { name: 'Resilient (Wisdom)', description: '', note: '' },
            { name: 'Athlete', description: '', note: '' },
            { name: 'Mobile', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'barbarian-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'barbarian-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [],
      goodCombinations: [
        { className: "Fighter", synergy: "", levels: "1-3" },
        { className: "Rogue", synergy: "", levels: "1-3" },
        { className: "Druid (Circle of the Moon)", synergy: "", levels: "Barbarian X / Druid 2-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'barbarian-gear',
      title: 'Equipment Progression',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'barbarian-closing',
      title: 'The Unstoppable Storm',
      content: [],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Mountain Dwarf / Half-Orc',
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
      { level: 3, recommendation: {
          notes: ''
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Strength',
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Strength (to max) OR +2 Constitution OR another key feat like Polearm Master/Sentinel/Tough.',
      }},
      { level: 12, recommendation: {
          asiChoice: 'Continue boosting Str/Con or pick up a feat. Resilient (Wisdom) is good for shoring up mental saves.'
      }},
    ],
    subclassSpecificRecommendations: {
      'Path of the Berserker': [
        { level: 3, recommendation: { notes: '' }},
        { level: 4, recommendation: { asiChoice: '+2 Strength or Great Weapon Master (if not already taken).' }},
      ],
      'Path of the Totem Warrior': [
        { level: 3, recommendation: { notes: '' }},
        { level: 4, recommendation: { asiChoice: '+2 Strength or relevant combat feat (GWM if not taken, Polearm Master, Sentinel).' }},
        { level: 6, recommendation: { notes: ''}}
      ]
    }
  }
};
