
import { ClassDefinition } from '../types';

export const rogueClassData: ClassDefinition = {
  className: "Rogue",
  classTitle: "",
  classDescription: "",
  themeColor: "gray",
  sections: [
    {
      type: 'intro',
      sectionId: 'rogue-intro',
      title: '',
      content: [],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'rogue-role',
      title: '',
      content: []
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'rogue-proscons',
      title: '',
      strengths: [],
      weaknesses: []
    },
    {
      type: 'baseTraits',
      sectionId: 'rogue-core',
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
      sectionId: 'rogue-levels',
      title: '',
      levels: [
        {
          level: 1,
          title: '',
          features: [
            { name: 'Expertise (Choose 2)', description: '' },
            { name: 'Sneak Attack', description: '', isCritical: true, note: "" },
            { name: 'Thieves\' Cant', description: '' }
          ],
        },
        {
          level: 2,
          title: '',
          features: [
            { name: 'Cunning Action', description: '' }
          ],
        },
        {
          level: 3,
          title: '',
          features: [
            { name: 'Roguish Archetype Feature', description: '', isSubclassFeature: true }
          ],
        },
        { level: 4, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        {
          level: 5,
          title: '',
          features: [
            { name: 'Uncanny Dodge', description: '' }
          ],
        },
        { level: 6, title: '', features: [{ name: 'Expertise', description: '' }] },
        {
          level: 7,
          title: '',
          features: [
            { name: 'Evasion', description: '' }
          ],
        },
        { level: 8, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 9, title: '', features: [{ name: 'Roguish Archetype Feature', description: '', isSubclassFeature: true }] },
        { level: 10, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        {
          level: 11,
          title: '',
          features: [
            { name: 'Reliable Talent', description: '', isCritical: true }
          ],
        },
        { level: 12, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 13, title: '', features: [{ name: 'Roguish Archetype Feature', description: '', isSubclassFeature: true }] },
        {
          level: 14,
          title: '',
          features: [
            { name: 'Blindsense', description: '' }
          ],
        },
        {
          level: 15,
          title: '',
          features: [
            { name: 'Slippery Mind', description: '' }
          ],
        },
        { level: 16, title: '', features: [{ name: 'Ability Score Improvement / Feat', description: '' }] },
        { level: 17, title: '', features: [{ name: 'Roguish Archetype Feature', description: '', isSubclassFeature: true }] },
        {
          level: 18,
          title: '',
          features: [
            { name: 'Elusive', description: '' }
          ],
        },
        { level: 19, title: '', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: '' }] },
        {
          level: 20,
          title: '',
          features: [
            { name: 'Stroke of Luck', description: '', isCritical: true }
          ],
        },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'rogue-talents',
      title: '',
      intro: "",
      mechanics: [
        { name: 'Sneak Attack', description: '', isCritical: true },
        { name: 'Expertise', description: '' },
        { name: 'Thieves\' Cant', description: '' },
        { name: 'Cunning Action', description: '' },
        { name: 'Uncanny Dodge', description: '' },
        { name: 'Evasion', description: '' },
        { name: 'Reliable Talent', description: '', isCritical: true }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'rogue-archetypes',
      title: '',
      intro: '',
      subclasses: [
        {
          id: 'thief',
          name: 'Thief',
          description: '',
          note: "",
          features: [
            { name: 'Fast Hands', level: 3, description: '' },
            { name: 'Second-Story Work', level: 3, description: '' },
            { name: 'Supreme Sneak', level: 9, description: '' },
            { name: 'Use Magic Device', level: 13, description: '' },
            { name: 'Thief’s Reflexes', level: 17, description: '' }
          ]
        },
        {
          id: 'assassin',
          name: 'Assassin',
          description: '',
          note: "",
          features: [
            { name: 'Bonus Proficiencies (Assassin)', level: 3, description: '' },
            { name: 'Assassinate', level: 3, description: '', isCritical: true },
            { name: 'Infiltration Expertise', level: 9, description: '' },
            { name: 'Impostor', level: 13, description: '' },
            { name: 'Death Strike', level: 17, description: '' }
          ]
        },
        {
          id: 'arcane-trickster',
          name: 'Arcane Trickster',
          description: '',
          note: "",
          features: [
            { name: 'Spellcasting (Arcane Trickster)', level: 3, description: '' },
            { name: 'Mage Hand Legerdemain', level: 3, description: '' },
            { name: 'Magical Ambush', level: 9, description: '' },
            { name: 'Versatile Trickster', level: 13, description: '' },
            { name: 'Spell Thief', level: 17, description: '' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'rogue-feats',
      title: '',
      intro: "",
      categories: [
        {
          categoryName: 'Core Rogue Enhancement Feats',
          description: '',
          feats: [
            { name: 'Alert', description: '', note: '' },
            { name: 'Mobile', description: '', note: '' },
            { name: 'Skulker', description: '', note: '' },
            { name: 'Piercer', description: '', note: '' }
          ]
        },
        {
          categoryName: 'Utility & Defensive Feats',
          description: '',
          feats: [
            { name: 'Lucky', description: '', note: '' },
            { name: 'Resilient (Wisdom or Constitution)', description: '', note: '' },
            { name: 'Skill Expert', description: '', note: '' },
            { name: 'Defensive Duelist', description: '', note: '' },
            { name: 'Magic Initiate', description: '', note: ''}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'rogue-rp',
      title: '',
      content: []
    },
    {
      type: 'multiclassing',
      sectionId: 'rogue-multi',
      title: '',
      generalNotes: [],
      goodCombinations: [
        { className: "Fighter", synergy: "", levels: "1-3" },
        { className: "Ranger", synergy: "", levels: "2-5" },
        { className: "Wizard (Bladesinging/Divination for AT)", synergy: "", levels: "Rogue (AT) X / Wizard Y" },
        { className: "Bard", synergy: "", levels: "Rogue X / Bard Y" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'rogue-gear',
      title: '',
      earlyGame: [],
      midGame: [],
      lateGame: []
    },
    {
      type: 'closingRemarks',
      sectionId: 'rogue-closing',
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
      name: 'Custom Origin', 
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
      { level: 4, recommendation: {
          asiChoice: '+2 Dexterity',
          notes: ''
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Dexterity (to reach 20 if possible)',
          featSuggestion: ''
      }},
      { level: 10, recommendation: {
          asiChoice: 'Feat relevant to playstyle or +2 Con/Wis.',
          notes: ''
      }},
      { level: 12, recommendation: {
           asiChoice: 'Continue boosting key stats or take utility/defensive feats like Resilient (Wis).'
      }},
      { level: 16, recommendation: { asiChoice: '+2 Con or relevant Feat.' }},
      { level: 19, recommendation: { asiChoice: 'Epic Boon or final stat boost/feat.'}}
    ],
    subclassSpecificRecommendations: {
      'Thief': [
        { level: 3, recommendation: { notes: '' }},
        { level: 4, recommendation: { asiChoice: '+2 Dexterity' }},
        { level: 8, recommendation: { featSuggestion: '' }},
        { level: 9, recommendation: { notes: ''}}
      ],
      'Assassin': [
        { level: 3, recommendation: { notes: '' }},
        { level: 4, recommendation: { asiChoice: 'Feat: Alert (to help ensure you go first for Assassinate) OR +2 Dexterity.' }},
        { level: 8, recommendation: { featSuggestion: '' }},
        { level: 9, recommendation: { notes: ''}}
      ],
      'Arcane Trickster': [
        { level: 3, recommendation: {
            spellSuggestions: [],
            notes: ''
        }},
        { level: 4, recommendation: { asiChoice: '+2 Dexterity.' }},
        { level: 8, recommendation: { asiChoice: '+2 Intelligence OR Fey Touched (for +1 Int & Misty Step) OR War Caster (for spell concentration).' }},
        { level: 9, recommendation: { notes: ''}}
      ]
    }
  }
};
