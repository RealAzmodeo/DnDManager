
import { ClassDefinition } from '../types';

export const monkClassData: ClassDefinition = {
  className: "Monk",
  classTitle: "The Path of Inner Harmony",
  classDescription: "Channel your inner energy (Ki) to perform incredible feats of martial arts, speed, and spiritual power as a disciplined Monk.",
  themeColor: "indigo",
  sections: [
    {
      type: 'intro',
      sectionId: 'monk-intro',
      title: 'Monk Class Overview',
      content: [
        "Monks are masters of martial arts, harnessing the power of their bodies in pursuit of physical and spiritual perfection. They tap into a mystical energy known as Ki, which allows them to perform extraordinary feats beyond the capabilities of ordinary mortals.",
        "Whether through intense training, deep meditation, or adherence to a strict philosophy, Monks achieve a level of discipline that translates into unparalleled agility, potent strikes, and an uncanny ability to avoid harm."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'monk-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Skirmisher/Striker - Monks excel at moving quickly around the battlefield, delivering a flurry of attacks, and stunning key targets. Their high mobility makes them excellent at reaching and neutralizing priority enemies.",
        "Secondary Role: Controller/Utility - Many Monk abilities, like Stunning Strike or features from Monastic Traditions, offer control options. Their unique Ki-fueled abilities also provide utility in and out of combat.",
        "Playstyle: Highly mobile and tactical. Monks rely on managing their Ki points to fuel their most potent abilities. They often weave in and out of combat, using their speed and defensive features to avoid damage while delivering precise attacks. Unarmored Defense and Martial Arts make them less reliant on equipment."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'monk-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Excellent mobility with Unarmored Movement and Step of the Wind.",
        "Strong single-target control via Stunning Strike.",
        "Good defensive capabilities through Unarmored Defense, Deflect Missiles, Evasion, and Diamond Soul.",
        "Can make multiple attacks per turn using Martial Arts and Flurry of Blows.",
        "Resourceful with Ki points for various offensive, defensive, and utility options.",
        "Less reliant on weapons and armor than many other martial classes."
      ],
      weaknesses: [
        "Lower hit points (d8 Hit Die) compared to other front-line martial classes like Fighters or Barbarians.",
        "Ki points are a finite resource that needs careful management, especially at lower levels.",
        "Can be Multiple Ability Dependent (MAD), often needing good Dexterity, Wisdom, and Constitution.",
        "Damage output might not scale as high as dedicated weapon specialists without optimal Ki usage.",
        "Some Monastic Traditions are more combat-focused than others."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'monk-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd8 per Monk level.' },
        { name: 'Primary Attributes', description: 'Dexterity (attacks, damage, AC), Wisdom (AC, Ki save DC, some features), Constitution (hit points).' },
        { name: 'Saving Throws', description: 'Strength and Dexterity.' },
        { name: 'Proficiencies', description: 'Simple weapons, shortswords. Choose one type of artisan’s tools or one musical instrument.' },
        { name: 'Skills', description: 'Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'monk-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'The Path Begins',
          features: [
            { name: 'Unarmored Defense (Monk)', description: 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your Armor Class equals 10 + your Dexterity modifier + your Wisdom modifier.' },
            { name: 'Martial Arts', description: 'Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons (shortswords and any simple melee weapons that don’t have the two-handed or heavy property). You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield: You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon (this die changes as you gain monk levels). When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action.', note: "Martial Arts Damage Die: 1d4 (L1-4), 1d6 (L5-10), 1d8 (L11-16), 1d10 (L17-20)." }
          ],
        },
        {
          level: 2,
          title: 'Harnessing Ki',
          features: [
            { name: 'Ki', description: 'Your training allows you to harness the mystic energy of ki. You have a number of ki points equal to your monk level. You can spend these points to fuel various ki features. When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points. Some of your ki features require your target to make a saving throw to resist the feature’s effects. The saving throw DC is calculated as follows: Ki save DC = 8 + your proficiency bonus + your Wisdom modifier.', isCritical: true },
            { name: 'Flurry of Blows', description: 'Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.' },
            { name: 'Patient Defense', description: 'You can spend 1 ki point to take the Dodge action as a bonus action on your turn.' },
            { name: 'Step of the Wind', description: 'You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.' },
            { name: 'Unarmored Movement', description: 'Your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels (e.g. +10ft at L2, +15ft at L6, +20ft at L10, +25ft at L14, +30ft at L18).'}
          ],
        },
        {
          level: 3,
          title: 'Monastic Tradition Choice & Missile Deflection',
          features: [
            { name: 'Monastic Tradition Feature', description: 'You commit yourself to a monastic tradition. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level. See the Monastic Traditions section for details.', isSubclassFeature: true },
            { name: 'Deflect Missiles', description: 'You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet.' }
          ],
        },
        { level: 4, title: 'Focused Discipline & Slow Fall', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, { name: 'Slow Fall', description: 'You can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.' }] },
        {
          level: 5,
          title: 'Swift Strikes & Stunning Power',
          features: [
            { name: 'Extra Attack', description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
            { name: 'Stunning Strike', description: 'When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.', isCritical: true }
          ],
        },
        { level: 6, title: 'Tradition Advancement & Ki Power', features: [{ name: 'Monastic Tradition Feature', description: 'You gain a feature from your chosen Monastic Tradition. See the Monastic Traditions section for details.', isSubclassFeature: true }, { name: 'Ki-Empowered Strikes', description: 'Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.' }, { name: 'Unarmored Movement Improvement', description: 'Your Unarmored Movement speed bonus increases to +15 feet.'}] },
        { level: 7, title: 'Evasion & Stillness of Mind', features: [{ name: 'Evasion', description: 'When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.' }, { name: 'Stillness of Mind', description: 'You can use your action to end one effect on yourself that is causing you to be charmed or frightened.' }] },
        { level: 8, title: 'Inner Strength', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 9, title: 'Acrobatic Movement', features: [{ name: 'Unarmored Movement Improvement', description: 'You gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.' }] },
        { level: 10, title: 'Purity of Body & Speed', features: [{ name: 'Purity of Body', description: 'Your mastery of the ki flowing through you makes you immune to disease and poison.' }, { name: 'Unarmored Movement Improvement', description: 'Your Unarmored Movement speed bonus increases to +20 feet.'}] },
        { level: 11, title: 'Tradition Mastery', features: [{ name: 'Monastic Tradition Feature', description: 'You gain a feature from your chosen Monastic Tradition. See the Monastic Traditions section for details.', isSubclassFeature: true }] },
        { level: 12, title: 'Heightened Senses', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 13, title: 'Universal Tongue', features: [{ name: 'Tongue of the Sun and Moon', description: 'You learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.' }] },
        { level: 14, title: 'Diamond Soul & Supreme Speed', features: [{ name: 'Diamond Soul', description: 'Your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.', isCritical: true }, { name: 'Unarmored Movement Improvement', description: 'Your Unarmored Movement speed bonus increases to +25 feet.'}] },
        { level: 15, title: 'Timeless Body', features: [{ name: 'Timeless Body', description: 'Your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.' }] },
        { level: 16, title: 'Transcendent Spirit', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 17, title: 'Tradition Apex', features: [{ name: 'Monastic Tradition Feature', description: 'You gain a feature from your chosen Monastic Tradition. See the Monastic Traditions section for details.', isSubclassFeature: true }] },
        { level: 18, title: 'Empty Body & Ultimate Speed', features: [{ name: 'Empty Body', description: 'You can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage. Additionally, you can spend 8 ki points to cast the Astral Projection spell, without needing material components. When you do so, you can’t take any other creatures with you.' }, { name: 'Unarmored Movement Improvement', description: 'Your Unarmored Movement speed bonus increases to +30 feet.'}] },
        { level: 19, title: 'Epic Boon Granted', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }] },
        { level: 20, title: 'Perfect Self', features: [{ name: 'Perfect Self', description: 'When you roll for initiative and have no ki points remaining, you regain 4 ki points.', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'monk-ki',
      title: 'Ki and Martial Arts',
      intro: "Monks channel a mystical energy called Ki to fuel their extraordinary abilities, combined with their mastery of martial arts.",
      mechanics: [
        { name: 'Ki', description: 'The life force energy that Monks harness. Represented by Ki points, which are spent to activate various features like Flurry of Blows, Patient Defense, Step of the Wind, and Stunning Strike. Monks regain all Ki points after a short or long rest (with meditation).', isCritical: true },
        { name: 'Martial Arts', description: 'A core Monk feature allowing them to use Dexterity for unarmed strikes and monk weapons, make an unarmed strike as a bonus action after attacking, and use a special damage die for these attacks that improves with level.' },
        { name: 'Unarmored Defense (Monk)', description: 'While wearing no armor and no shield, a Monk\'s AC equals 10 + Dexterity modifier + Wisdom modifier, reflecting their agility and awareness.' },
        { name: 'Deflect Missiles', description: 'The ability to use a reaction to reduce damage from a ranged weapon attack, and potentially catch and return the projectile by spending Ki.' },
        { name: 'Stunning Strike', description: 'By spending Ki when hitting with a melee weapon attack, a Monk can force a target to make a Constitution save or be stunned until the end of the Monk\'s next turn. A powerful control ability.' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'monk-traditions',
      title: 'Monastic Traditions (Subclasses)',
      intro: 'At 3rd level, a Monk chooses a Monastic Tradition, which defines their specific approach to martial arts and Ki manipulation.',
      subclasses: [
        {
          id: 'way-of-the-open-hand',
          name: 'Way of the Open Hand',
          description: 'These monks are masters of martial arts combat, using their Ki to control and debilitate their foes with specialized strikes.',
          note: "A classic Monk path focused on battlefield control through effects like pushing, tripping, or denying reactions. Strong in melee and offers good utility.",
          features: [
            { name: 'Open Hand Technique', level: 3, description: 'Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target: It must succeed on a Dexterity saving throw or be knocked prone. It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you. It can’t take reactions until the end of your next turn.' },
            { name: 'Wholeness of Body', level: 6, description: 'As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.' },
            { name: 'Tranquility', level: 11, description: 'At the end of a long rest, you gain the effect of a Sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.' },
            { name: 'Quivering Palm', level: 17, description: 'When you hit a creature with an unarmed strike, you can spend 3 ki points to start unseen vibrations in its body, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage. You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.' }
          ]
        },
        {
          id: 'way-of-shadow',
          name: 'Way of Shadow',
          description: 'These monks follow a tradition of stealth and subterfuge, using their Ki to manipulate shadows and strike unseen.',
          note: "Masters of infiltration and surprise, using shadow magic for teleportation, invisibility, and deception. Excellent for stealth-focused players.",
          features: [
            { name: 'Shadow Arts', level: 3, description: 'You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast Darkness, Darkvision, Pass without Trace, or Silence, without providing material components. Additionally, you gain the Minor Illusion cantrip if you don’t already know it.' },
            { name: 'Shadow Step', level: 6, description: 'When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.' },
            { name: 'Cloak of Shadows', level: 11, description: 'When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.' },
            { name: 'Opportunist', level: 17, description: 'Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'monk-feats',
      title: 'Key Feats for the Monk',
      intro: "Monks benefit from feats that enhance their Dexterity or Wisdom, improve mobility, or grant new tactical options. Given their reliance on multiple ability scores, ASIs are often crucial.",
      categories: [
        {
          categoryName: 'Core Monk Enhancement Feats',
          description: 'These feats directly improve a Monk\'s primary strengths.',
          feats: [
            { name: 'Mobile', description: 'Increase speed by 10 ft. Dash ignores difficult terrain. Avoid opportunity attacks from creatures you attack.', note: 'Synergizes perfectly with Monk speed and skirmishing tactics.' },
            { name: 'Crusher', description: '+1 Str/Con, once per turn on bludgeoning hit move target 5ft, crits give advantage to attacks vs target.', note: 'Monk unarmed strikes are bludgeoning. +1 Con is great, and the control/debuff is useful.' },
            { name: 'Fey Touched', description: '+1 Wis/Int/Cha, learn Misty Step and a 1st-level Divination/Enchantment spell.', note: '+1 Wisdom boosts AC/Ki DC, Misty Step adds amazing mobility.' },
            { name: 'Telekinetic', description: '+1 Wis/Int/Cha, learn Mage Hand (or improve it), bonus action telekinetic shove.', note: '+1 Wisdom and a consistent, useful bonus action for control.' }
          ]
        },
        {
          categoryName: 'Defensive & Utility Feats',
          description: 'These feats increase a Monk\'s survivability or out-of-combat options.',
          feats: [
            { name: 'Lucky', description: 'Gain 3 luck points to reroll attack rolls, ability checks, or saving throws.', note: 'Universally powerful for critical moments.' },
            { name: 'Resilient (Constitution or Wisdom)', description: 'Increase the chosen ability by 1 and gain proficiency in its saving throws.', note: 'Constitution for HP/concentration (if any), Wisdom if not already high for saves/Ki DC. Diamond Soul at L14 grants all save profs though.' },
            { name: 'Alert', description: '+5 to initiative, can’t be surprised, negates advantage for hidden attackers.', note: 'Going first allows Monks to position well or stun key targets.' },
            { name: 'Skill Expert', description: '+1 to an ability score, one skill proficiency, one expertise.', note: 'Can round out an ability score and further boost a key skill like Stealth or Acrobatics.'}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'monk-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What is the philosophy or discipline that guides your Monk? Is it a formal monastic order, a personal code, or a deep connection to a Ki-related concept?",
        "How did they learn their martial arts and Ki manipulation? Through a secluded monastery, a wandering master, intense self-training, or a spiritual awakening?",
        "How do they view the use of weapons and armor? As unnecessary crutches, tools for the unenlightened, or simply different paths?",
        "Are they serene and contemplative, or a whirlwind of focused action? How do they balance inner peace with the need for combat?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'monk-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Monk features (Ki, Martial Arts die, Unarmored Movement) scale well with Monk levels, making single-classing strong.",
        "Dips can provide specific benefits, but often delay core Monk progression. Dexterity and Wisdom are key stats."
      ],
      goodCombinations: [
        { className: "Rogue", synergy: "1-3 levels for Expertise, Cunning Action (though Monks have bonus action Ki options), and Sneak Attack (if using finesse monk weapons). Shares Dexterity focus.", levels: "1-3" },
        { className: "Druid", synergy: "1-3 levels, especially Circle of Spores for Symbiotic Entity, or just for utility spells. Shares Wisdom focus. Wild Shape is generally less appealing as Monks want to use their own stats/features.", levels: "1-3" },
        { className: "Fighter", synergy: "1-2 levels for a Fighting Style (e.g., Unarmed Fighting if allowed, or Defense) and Action Surge. Can enhance burst potential.", levels: "1-2" },
        { className: "Ranger", synergy: "2-3 levels for a Fighting Style, some spellcasting (Hunter's Mark for damage), and potentially a subclass like Gloom Stalker for first-round nova. Shares Dexterity/Wisdom focus.", levels: "2-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'monk-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "No armor (rely on Unarmored Defense).",
        "Monk weapons (shortsword, quarterstaff, daggers, spears).",
        "Consider darts or slings for ranged options if needed."
      ],
      midGame: [
        "Bracers of Defense (if not using armor/shield).",
        "Items that boost Dexterity or Wisdom (Gloves of Dexterity, Periapt of Wisdom, Headband of Intellect if reflavored for Wisdom).",
        "Eldritch Claw Tattoo (makes unarmed strikes magical +1, bonus action ranged spell attack).",
        "Winged Boots or Boots of Speed for enhanced mobility."
      ],
      lateGame: [
        "Items that significantly boost Dexterity or Wisdom (Manuals/Tomes).",
        "Amulet of Health (sets Constitution to 19, very good for HP and Con saves).",
        "Insignia of Claws or similar items to make unarmed strikes +X.",
        "Items granting powerful defensive or utility options (e.g., Cloak of Displacement)."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'monk-closing',
      title: 'The Embodiment of Discipline',
      content: [
        "The Monk is a unique martial artist, blending physical prowess with spiritual energy to achieve superhuman feats. Their discipline allows them to turn their bodies into deadly weapons and their minds into fortresses.",
        "With a focus on mobility, control, and self-sufficiency, Monks offer a dynamic and engaging playstyle that rewards tactical thinking and resource management.",
        "Whether a serene ascetic, a shadowy ninja, or a master of debilitating strikes, the Monk walks a path of continuous self-improvement and inner power."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Wood Elf / Human', 
      note: 'Wood Elf is excellent for Dex/Wis and speed. ASIs and feat now come from your Origin.',
    },
    origin: { 
      name: 'Acolyte Origin', 
      note: 'Provides Insight and Religion skills, and a starting feat. Good for a disciplined or spiritual Monk.',
      recommendedFeat: 'Mobile',
      skillProficiencies: ["Insight", "Religion"]
    },
    abilityPriority: ['Dexterity (Max)', 'Wisdom (High for AC/Ki DC)', 'Constitution (Moderate for HP)', 'Strength (Dump)', 'Intelligence (Low)', 'Charisma (Low)'],
    keyClassSkills: ['Acrobatics', 'Stealth', 'Perception', 'Insight', 'Athletics (for grappling/shoving if desired)'],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: 'Mobile (Recommended via Acolyte Origin - increases speed, Dash ignores difficult terrain, avoid opportunity attacks from creatures you attack).',
          notes: 'Unarmored Defense and Martial Arts are your core. Maximize Dexterity, then Wisdom. Your Origin provides your 1st-level feat.'
      }},
      { level: 2, recommendation: {
          notes: 'Ki is crucial. Flurry of Blows for offense, Patient Defense for defense, Step of the Wind for mobility. Manage Ki carefully.'
      }},
      { level: 3, recommendation: {
          notes: 'Choose Monastic Tradition. Open Hand for control, Shadow for stealth/magic.'
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Dexterity',
          notes: 'Boosting Dexterity increases AC, attack, damage, and initiative.'
      }},
      { level: 5, recommendation: {
          notes: 'Extra Attack is a big power spike. Stunning Strike is incredibly potent for control - use it on key targets.'
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Dexterity (to max) OR +2 Wisdom OR Feat: Crusher (if Mobile taken at L1).',
      }},
    ],
    subclassSpecificRecommendations: {
      'Way of the Open Hand': [
        { level: 3, recommendation: { notes: 'Open Hand Technique adds excellent control options to Flurry of Blows (prone, push, no reactions).' }},
        { level: 6, recommendation: { notes: 'Wholeness of Body is a good self-heal.' }},
      ],
      'Way of Shadow': [
        { level: 3, recommendation: { notes: 'Shadow Arts gives spell-like abilities (Darkness, Pass without Trace, Silence, Darkvision) for Ki. Minor Illusion is a bonus.' }},
        { level: 6, recommendation: { notes: 'Shadow Step is amazing for mobility and setting up attacks with advantage.' }},
      ]
    }
  }
};
