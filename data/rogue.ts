
import { ClassDefinition } from '../types';

export const rogueClassData: ClassDefinition = {
  className: "Rogue",
  classTitle: "The Art of Shadows",
  classDescription: "Embrace cunning, stealth, and skill as a versatile Rogue, striking from the shadows and outwitting foes.",
  themeColor: "gray",
  sections: [
    {
      type: 'intro',
      sectionId: 'rogue-intro',
      title: 'Rogue Class Overview',
      content: [
        "Rogues rely on skill, stealth, and their foes’vulnerability to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
        "Whether as a cunning infiltrator, a deadly assassin, a charming trickster, or a magically-gifted operative, Rogues excel at overcoming challenges through wit and skill."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'rogue-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Striker/Skill Expert - Rogues are adept at dealing precise, high damage to single targets with Sneak Attack, and they excel at a wide variety of skills thanks to Expertise.",
        "Secondary Role: Scout/Infiltrator/Utility - With proficiency in Stealth and Thieves' Tools, and features like Cunning Action, Rogues are excellent at reconnaissance and navigating dangerous environments. Arcane Tricksters add magical utility.",
        "Playstyle: Tactical and opportunistic. Rogues look for advantages in combat to enable their Sneak Attack. Out of combat, they are often the party's problem-solvers, handling traps, locks, and social situations with finesse."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'rogue-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "High single-target damage potential with Sneak Attack.",
        "Exceptional skill proficiency and reliability with Expertise and Reliable Talent.",
        "Excellent mobility and action economy with Cunning Action.",
        "Strong defensive capabilities with Uncanny Dodge and Evasion.",
        "Versatile archetypes offering diverse playstyles (melee, ranged, magic)."
      ],
      weaknesses: [
        "Typically lower hit points (d8 Hit Die) compared to dedicated martial classes like Fighters or Paladins.",
        "Sneak Attack requires advantage or an ally near the target, which might not always be available.",
        "Can be less effective in prolonged direct combat against multiple foes without careful positioning.",
        "Some archetypes might be more niche or require specific party compositions to shine."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'rogue-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd8 per Rogue level.' },
        { name: 'Primary Attributes', description: 'Dexterity (attacks, damage, AC, skills), Intelligence (for Arcane Tricksters, Investigation), Wisdom (Perception, Insight), Charisma (social skills).' },
        { name: 'Saving Throws', description: 'Dexterity and Intelligence.' },
        { name: 'Proficiencies', description: 'Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords. Thieves’ tools.' },
        { name: 'Skills', description: 'Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'rogue-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Tools of the Trade',
          features: [
            { name: 'Expertise (Choose 2)', description: 'Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.' },
            { name: 'Sneak Attack', description: 'Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class.', isCritical: true, note: "Damage: 1d6 (L1-2), 2d6 (L3-4), 3d6 (L5-6), 4d6 (L7-8), 5d6 (L9-10), 6d6 (L11-12), 7d6 (L13-14), 8d6 (L15-16), 9d6 (L17-18), 10d6 (L19-20)." },
            { name: 'Thieves\' Cant', description: 'You know thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. It takes four times longer to convey a message than it does to speak the same idea plainly.' }
          ],
        },
        {
          level: 2,
          title: 'Cunning Action',
          features: [
            { name: 'Cunning Action', description: 'Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.' }
          ],
        },
        {
          level: 3,
          title: 'Roguish Archetype Choice',
          features: [
            { name: 'Roguish Archetype Feature', description: 'You choose an archetype that you emulate in the exercise of your rogue abilities. Your choice grants features at 3rd level and then again at 9th, 13th, and 17th level. See the Roguish Archetypes section for details.', isSubclassFeature: true }
          ],
        },
        { level: 4, title: 'Sharpened Skills', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        {
          level: 5,
          title: 'Uncanny Dodge',
          features: [
            { name: 'Uncanny Dodge', description: 'When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.' }
          ],
        },
        { level: 6, title: 'Expertise (Choose 2 more)', features: [{ name: 'Expertise', description: 'Choose two more of your skill proficiencies, or one skill and thieves\' tools. Your proficiency bonus is doubled for these choices.' }] },
        {
          level: 7,
          title: 'Evasion',
          features: [
            { name: 'Evasion', description: 'When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.' }
          ],
        },
        { level: 8, title: 'Further Refinement', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 9, title: 'Archetype Advancement', features: [{ name: 'Roguish Archetype Feature', description: 'You gain a feature from your chosen Roguish Archetype. See the Roguish Archetypes section for details.', isSubclassFeature: true }] },
        { level: 10, title: 'Skillful Edge', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        {
          level: 11,
          title: 'Reliable Talent',
          features: [
            { name: 'Reliable Talent', description: 'Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.', isCritical: true }
          ],
        },
        { level: 12, title: 'Peak Agility', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 13, title: 'Archetype Focus', features: [{ name: 'Roguish Archetype Feature', description: 'You gain a feature from your chosen Roguish Archetype. See the Roguish Archetypes section for details.', isSubclassFeature: true }] },
        {
          level: 14,
          title: 'Blindsense',
          features: [
            { name: 'Blindsense', description: 'If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.' }
          ],
        },
        {
          level: 15,
          title: 'Slippery Mind',
          features: [
            { name: 'Slippery Mind', description: 'You gain proficiency in Wisdom saving throws.' }
          ],
        },
        { level: 16, title: 'Master Thief', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 17, title: 'Archetype Mastery', features: [{ name: 'Roguish Archetype Feature', description: 'You gain a feature from your chosen Roguish Archetype. See the Roguish Archetypes section for details.', isSubclassFeature: true }] },
        {
          level: 18,
          title: 'Elusive',
          features: [
            { name: 'Elusive', description: 'No attack roll has advantage against you while you aren’t incapacitated.' }
          ],
        },
        { level: 19, title: 'Unrivaled Cunning', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }] },
        {
          level: 20,
          title: 'Stroke of Luck',
          features: [
            { name: 'Stroke of Luck', description: 'If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can’t use it again until you finish a short or long rest.', isCritical: true }
          ],
        },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'rogue-talents',
      title: 'Core Rogue Talents',
      intro: "Rogues possess a distinct set of abilities focused on precision, stealth, and skill.",
      mechanics: [
        { name: 'Sneak Attack', description: 'A cornerstone Rogue ability allowing them to deal extra damage once per turn on an attack made with advantage, or if an ally is within 5 feet of the target. The damage scales with Rogue level.', isCritical: true },
        { name: 'Expertise', description: 'Doubles the proficiency bonus for selected skills or thieves\' tools, making Rogues exceptionally proficient in their chosen areas.' },
        { name: 'Thieves\' Cant', description: 'A secret language of coded phrases and symbols used by Rogues to communicate covertly.' },
        { name: 'Cunning Action', description: 'Grants the Rogue a bonus action to Dash, Disengage, or Hide, greatly enhancing mobility and tactical options.' },
        { name: 'Uncanny Dodge', description: 'Allows the Rogue to use their reaction to halve the damage of an attack they can see.' },
        { name: 'Evasion', description: 'Enables the Rogue to take no damage on a successful Dexterity save against area effects that normally deal half damage on success, and only half damage on a failed save.' },
        { name: 'Reliable Talent', description: 'Ensures that any ability check that lets the Rogue add their proficiency bonus will result in a minimum d20 roll of 10, making them consistently skillful.', isCritical: true }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'rogue-archetypes',
      title: 'Roguish Archetypes',
      intro: 'At 3rd level, a Rogue chooses an Archetype that defines their particular brand of roguishness. This determines many of their specialized abilities.',
      subclasses: [
        {
          id: 'thief',
          name: 'Thief',
          description: 'Focuses on stealth, larceny, and the ability to use objects quickly. Thieves are masters of infiltration and opportunism.',
          note: "The classic cat burglar and treasure hunter, excelling at speed and item interaction. Ideal for players who enjoy clever utility and exploiting the environment.",
          features: [
            { name: 'Fast Hands', level: 3, description: 'You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves’ tools to disarm a trap or open a lock, or take the Use an Object action.' },
            { name: 'Second-Story Work', level: 3, description: 'You gain the ability to climb faster than normal; climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.' },
            { name: 'Supreme Sneak', level: 9, description: 'You have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.' },
            { name: 'Use Magic Device', level: 13, description: 'You ignore all class, race, and level requirements on the use of magic items.' },
            { name: 'Thief’s Reflexes', level: 17, description: 'You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can’t use this feature when you are surprised.' }
          ]
        },
        {
          id: 'assassin',
          name: 'Assassin',
          description: 'Specializes in deadly precision and the art of infiltration to eliminate targets swiftly and silently.',
          note: "A master of surprise attacks and lethal takedowns, perfect for players who enjoy high-stakes stealth and devastating first strikes.",
          features: [
            { name: 'Bonus Proficiencies (Assassin)', level: 3, description: 'You gain proficiency with the disguise kit and the poisoner’s kit.' },
            { name: 'Assassinate', level: 3, description: 'You are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn’t taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.', isCritical: true },
            { name: 'Infiltration Expertise', level: 9, description: 'You can spend one minute to flawlessly create a false identity, including documents, established acquaintances, and disguises that pass casual inspection. You can’t establish an identity that belongs to someone else. Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.' },
            { name: 'Impostor', level: 13, description: 'You gain the ability to unerringly mimic another person’s speech, writing, and behavior. You must spend at least three hours studying these three components of the person’s behavior, listening to speech, examining handwriting, and observing mannerisms. Your ruse is indiscernible to the casual observer.' },
            { name: 'Death Strike', level: 17, description: 'When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.' }
          ]
        },
        {
          id: 'arcane-trickster',
          name: 'Arcane Trickster',
          description: 'Combines roguish skills with arcane magic, primarily from the enchantment and illusion schools, to create distractions and outwit foes.',
          note: "A cunning mage-thief, enhancing stealth and trickery with spells. Suited for players who want magical versatility alongside roguish skills.",
          features: [
            { name: 'Spellcasting (Arcane Trickster)', level: 3, description: 'You gain the ability to cast wizard spells. You use Intelligence as your spellcasting ability. You know three cantrips: Mage Hand and two other cantrips of your choice from the wizard spell list. You learn three 1st-level wizard spells, two of which must be from the enchantment or illusion schools. You follow third-caster spell slot progression, and learn new spells as you level, mostly restricted to enchantment/illusion until higher levels.' },
            { name: 'Mage Hand Legerdemain', level: 3, description: 'When you cast Mage Hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it: Stow one object the hand is holding in a container worn or carried by another creature. Retrieve an object in a container worn or carried by another creature. Use thieves’ tools to pick locks and disarm traps at range. You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature’s Wisdom (Perception) check.' },
            { name: 'Magical Ambush', level: 9, description: 'If you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.' },
            { name: 'Versatile Trickster', level: 13, description: 'As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by your Mage Hand cantrip. You then have advantage on attack rolls against that creature until the end of the turn.' },
            { name: 'Spell Thief', level: 17, description: 'When a creature casts a spell targeting you or including you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell’s effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn’t need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can’t cast that spell until the 8 hours have passed.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'rogue-feats',
      title: 'Key Feats for the Rogue',
      intro: "Rogues benefit greatly from feats that enhance their Dexterity, stealth capabilities, mobility, or provide utility. Feats can also open up new combat options or shore up defenses.",
      categories: [
        {
          categoryName: 'Core Rogue Enhancement Feats',
          description: 'These feats directly improve a Rogue\'s primary strengths.',
          feats: [
            { name: 'Alert', description: 'Gain +5 to initiative, can’t be surprised, and negates advantage for hidden attackers. Crucial for Assassins to act first.', note: 'Especially good for Assassins to trigger Assassinate.' },
            { name: 'Mobile', description: 'Increase speed by 10 ft. Dash ignores difficult terrain. Avoid opportunity attacks from creatures you attack.', note: 'Excellent for hit-and-run tactics and Cunning Action synergy.' },
            { name: 'Skulker', description: 'Hide when lightly obscured. Missing with a ranged attack doesn\'t reveal position. Dim light doesn\'t impose disadvantage on Perception checks relying on sight.', note: 'Enhances stealth and ranged effectiveness.' },
            { name: 'Piercer', description: '+1 Dex/Str, reroll one piercing damage die per turn, extra damage die on piercing critical hits.', note: 'Boosts Dexterity and damage with common rogue weapons like rapiers and shortbows.' }
          ]
        },
        {
          categoryName: 'Utility & Defensive Feats',
          description: 'These feats increase a Rogue\'s survivability or out-of-combat options.',
          feats: [
            { name: 'Lucky', description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws, or make an enemy reroll an attack.', note: 'Universally powerful for critical moments.' },
            { name: 'Resilient (Wisdom or Constitution)', description: 'Increase the chosen ability by 1 and gain proficiency in its saving throws.', note: 'Wisdom saves are common and target mental effects. Constitution helps with HP and concentration if Arcane Trickster.' },
            { name: 'Skill Expert', description: '+1 to an ability score, gain one skill proficiency, and gain expertise in one proficient skill.', note: 'Further boosts a Rogue\'s skill mastery.' },
            { name: 'Defensive Duelist', description: 'When wielding a finesse weapon and hit by a melee attack, use reaction to add proficiency bonus to AC.', note: 'Adds a good defensive option for melee rogues.' },
            { name: 'Magic Initiate', description: 'Learn two cantrips and one 1st-level spell from another class list (e.g., Booming Blade, Find Familiar).', note: 'Can provide significant utility or combat boosts, especially for non-Arcane Tricksters.'}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'rogue-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What led your Rogue down this path? A harsh upbringing, a thirst for adventure, a desire for wealth, or a commitment to a cause?",
        "Do they operate by a code of honor, however unconventional? Or are they purely self-serving?",
        "How do they view authority and the law? As obstacles to be overcome, tools to be manipulated, or something to be respected (or defied)?",
        "Are they a lone wolf, or do they value their companions? How open are they about their skills and past?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'rogue-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Rogue levels provide excellent skill utility and consistent bonus action options (Cunning Action). Sneak Attack scaling rewards staying single-classed for damage, but dips can add significant versatility.",
        "Dexterity-based classes are natural fits."
      ],
      goodCombinations: [
        { className: "Fighter", synergy: "1-2 levels for a Fighting Style (Archery, Two-Weapon Fighting) and Action Surge. Battle Master maneuvers (3 levels) can add tactical options.", levels: "1-3" },
        { className: "Ranger", synergy: "Hunter's Mark or Favored Foe adds damage. Gloom Stalker (3 levels) is amazing for first-round burst and invisibility in darkness. Shares Dexterity/Wisdom focus.", levels: "2-5" },
        { className: "Wizard (Bladesinging/Divination for AT)", synergy: "For Arcane Tricksters, more Wizard levels grant more spell slots and higher-level spells. Bladesinging enhances melee, Divination (Portent) is powerful utility.", levels: "Rogue (AT) X / Wizard Y" },
        { className: "Bard", synergy: "Shares Charisma skills, more Expertise, spellcasting, and Bardic Inspiration. College of Swords or Valor can fit martial rogues.", levels: "Rogue X / Bard Y" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'rogue-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "Light armor (Leather, then Studded Leather as soon as possible).",
        "Finesse weapons (Rapier for melee, Shortbow or Light Crossbow for ranged). Daggers for backup/throwing.",
        "Thieves' tools."
      ],
      midGame: [
        "+1/+2 weapons and Studded Leather armor.",
        "Items that boost Dexterity (Gloves of Thievery, Bracers of Archery).",
        "Boots of Elvenkind, Cloak of Elvenkind for enhanced stealth.",
        "Slippers of Spider Climbing, Ring of Jumping for mobility."
      ],
      lateGame: [
        "+2/+3 weapons and armor.",
        "Legendary items enhancing stealth, damage, or utility (e.g., Dagger of Venom, Manual of Quickness of Action).",
        "Items granting flight or invisibility at will."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'rogue-closing',
      title: 'The Unseen Blade, The Clever Mind',
      content: [
        "The Rogue is a master of subtlety, skill, and exploiting openings. They navigate dangers with grace, strike with deadly precision, and often serve as the party's key to overcoming complex challenges.",
        "Whether disarming a deadly trap, delivering a devastating sneak attack, or charming their way past a guard, the Rogue embodies resourcefulness and cunning.",
        "Playing a Rogue offers a dynamic and engaging experience, rewarding tactical thinking, creative problem-solving, and a flair for the dramatic."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Wood Elf / Human', 
      note: 'Choose a species that complements your Rogue concept, ideally boosting Dexterity. ASIs and feat come from your Origin.',
    },
    origin: { 
      name: 'Custom Origin', 
      note: 'Focuses on skills like Stealth and Sleight of Hand. Provides a starting feat.',
      recommendedFeat: 'Mobile',
      skillProficiencies: ["Sleight of Hand", "Stealth"]
    },
    abilityPriority: ['Dexterity (Max)', 'Constitution (High for HP)', 'Wisdom (Moderate for Perception/Insight, saves)', 'Intelligence (If Arcane Trickster, otherwise lower)', 'Charisma (Social skills, can be higher depending on concept)', 'Strength (Dump)'],
    keyClassSkills: ['Stealth', 'Acrobatics', 'Sleight of Hand', 'Perception', 'Investigation', 'Thieves\' Tools', 'Deception (if social focus)'],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: 'Mobile (Recommended via Custom Origin - increases speed, Dash ignores difficult terrain, avoid opportunity attacks from creatures you attack).',
          notes: 'Expertise in Stealth and Thieves\' Tools is a classic and effective choice. Sneak Attack is your bread and butter. Your Origin provides your 1st-level feat.'
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Dexterity',
          notes: 'Maximizing Dexterity is usually the top priority.'
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Dexterity (to reach 20 if possible)',
          featSuggestion: 'If Dex is maxed, consider Alert, Skulker, or Piercer.'
      }},
      { level: 10, recommendation: {
          asiChoice: 'Feat relevant to playstyle or +2 Con/Wis.',
          notes: 'Another ASI/Feat. By now your core combat style should be clear.'
      }},
      { level: 12, recommendation: {
           asiChoice: 'Continue boosting key stats or take utility/defensive feats like Resilient (Wis).'
      }},
      { level: 16, recommendation: { asiChoice: '+2 Con or relevant Feat.' }},
      { level: 19, recommendation: { asiChoice: 'Epic Boon or final stat boost/feat.'}}
    ],
    subclassSpecificRecommendations: {
      'Thief': [
        { level: 3, recommendation: { notes: 'Fast Hands is incredibly versatile for bonus action item use or disarming/lockpicking. Second-Story work enhances mobility.' }},
        { level: 4, recommendation: { asiChoice: '+2 Dexterity' }},
        { level: 8, recommendation: { featSuggestion: 'Alert or another +2 Dexterity.' }}, 
        { level: 9, recommendation: { notes: 'Supreme Sneak enhances your ability to hide effectively.'}}
      ],
      'Assassin': [
        { level: 3, recommendation: { notes: 'Assassinate is extremely powerful if you can ensure surprise or act before enemies. Bonus proficiencies are thematic.' }},
        { level: 4, recommendation: { asiChoice: 'Feat: Alert (to help ensure you go first for Assassinate) OR +2 Dexterity.' }},
        { level: 8, recommendation: { featSuggestion: 'Sharpshooter (for ranged assassinations) or another +Dex.' }},
        { level: 9, recommendation: { notes: 'Infiltration Expertise adds significant out-of-combat utility for spying and impersonation.'}}
      ],
      'Arcane Trickster': [
        { level: 3, recommendation: {
            spellSuggestions: ['Cantrips: Mage Hand (essential), Booming Blade/Green-Flame Blade, Minor Illusion. Spells: Find Familiar, Sleep/Tasha\'s Hideous Laughter, Disguise Self, Silent Image (most from illusion/enchantment).'],
            notes: 'Prioritize Dexterity, then Intelligence. Mage Hand Legerdemain is key.'
        }},
        { level: 4, recommendation: { asiChoice: '+2 Dexterity.' }},
        { level: 8, recommendation: { asiChoice: '+2 Intelligence OR Fey Touched (for +1 Int & Misty Step) OR War Caster (for spell concentration).' }},
        { level: 9, recommendation: { notes: 'Magical Ambush makes your spells very effective when cast from stealth.'}}
      ]
    }
  }
};
