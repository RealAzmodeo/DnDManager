
import { ClassDefinition } from '../types';

export const barbarianClassData: ClassDefinition = {
  className: "Barbarian",
  classTitle: "The Fury of the Wilds",
  classDescription: "Embrace primal fury and unmatched strength as a fearsome Barbarian, a warrior of untamed power.",
  themeColor: "orange",
  sections: [
    {
      type: 'intro',
      sectionId: 'barbarian-intro',
      title: 'Barbarian Class Overview',
      content: [
        "Barbarians are fierce warriors who draw upon an inner wellspring of rage to fuel their martial prowess. They are often found in wild, untamed lands, living in harmony with nature or leading tribes against encroaching civilizations.",
        "Their combat style is characterized by reckless abandon, devastating blows, and an uncanny ability to withstand punishment that would fell lesser warriors."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'barbarian-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Striker/Tank - Barbarians excel at dealing high melee damage, especially while Raging. Their large hit point pool, Rage-induced resistances, and Unarmored Defense make them incredibly durable.",
        "Secondary Role: Skirmisher/Control (some paths) - Fast Movement allows them to quickly engage or disengage, and some Primal Paths offer control or support options.",
        "Playstyle: Aggressive and straightforward in combat. Barbarians thrive in melee, using Rage to enhance their attacks and survivability. Resource management involves timing Rages effectively. They often have strong ties to nature or tribal themes."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'barbarian-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Excellent survivability with d12 Hit Die, Rage resistances (bludgeoning, piercing, slashing), and Unarmored Defense.",
        "High melee damage output, especially with Rage bonus damage and Reckless Attack.",
        "Advantage on Strength checks and saving throws while Raging.",
        "Good mobility with Fast Movement.",
        "Features like Danger Sense, Feral Instinct, and Relentless Rage further enhance resilience."
      ],
      weaknesses: [
        "Limited ranged combat options.",
        "Rage is a finite resource and ends early if not attacking or taking damage.",
        "Often lower AC compared to heavily armored fighters if not prioritizing Dexterity/Constitution for Unarmored Defense.",
        "Can be vulnerable to mental saving throws and effects that incapacitate or prevent raging.",
        "Fewer skill proficiencies compared to classes like Rogues or Bards."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'barbarian-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd12 per Barbarian level.' },
        { name: 'Primary Attributes', description: 'Strength (attacks, damage, Rage bonus), Constitution (hit points, Unarmored Defense), Dexterity (Unarmored Defense, some skills).' },
        { name: 'Saving Throws', description: 'Strength and Constitution.' },
        { name: 'Proficiencies', description: 'Light and medium armor, shields, simple weapons, martial weapons.' },
        { name: 'Skills', description: 'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'barbarian-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Primal Power',
          features: [
            { name: 'Rage (2/day)', description: 'As a bonus action, enter a rage. While raging, you gain: advantage on Strength checks and Strength saving throws; +2 bonus to damage rolls with melee weapon attacks using Strength (increases with level); resistance to bludgeoning, piercing, and slashing damage. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. You gain 2 uses per long rest.', isCritical: true },
            { name: 'Unarmored Defense (Barbarian)', description: 'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.' }
          ],
        },
        {
          level: 2,
          title: 'Reckless Abandon',
          features: [
            { name: 'Reckless Attack', description: 'When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.' },
            { name: 'Danger Sense', description: 'You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.' }
          ],
        },
        {
          level: 3,
          title: 'Primal Path Chosen',
          features: [
            { name: 'Primal Path Feature', description: 'You choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th level. See the Primal Paths section for details.', isSubclassFeature: true },
            { name: 'Rage (3/day)', description: 'You can now rage 3 times per long rest.' }
          ],
        },
        { level: 4, title: 'Growing Strength', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        {
          level: 5,
          title: 'Swiftness and Power',
          features: [
            { name: 'Extra Attack', description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
            { name: 'Fast Movement', description: 'Your speed increases by 10 feet while you aren’t wearing heavy armor.' }
          ],
        },
        { level: 6, title: 'Path Feature & More Rage', features: [{ name: 'Primal Path Feature', description: 'You gain a feature from your chosen Primal Path. See the Primal Paths section for details.', isSubclassFeature: true }, { name: 'Rage (4/day)', description: 'You can now rage 4 times per long rest.'}] },
        { level: 7, title: 'Feral Instinct', features: [{ name: 'Feral Instinct', description: 'You have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn if you enter your rage before doing anything else on that turn.' }] },
        { level: 8, title: 'Continued Growth', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        {
          level: 9,
          title: 'Brutal Strikes',
          features: [
            { name: 'Brutal Critical (1 die)', description: 'You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.' },
            { name: 'Rage Damage Bonus', description: 'Your rage damage bonus increases to +3.'}
          ],
        },
        { level: 10, title: 'Path Advancement', features: [{ name: 'Primal Path Feature', description: 'You gain a feature from your chosen Primal Path. See the Primal Paths section for details.', isSubclassFeature: true }] },
        { level: 11, title: 'Unstoppable Rage', features: [{ name: 'Relentless Rage', description: 'If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.' }] },
        { level: 12, title: 'Savage Might & More Rage', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, { name: 'Rage (5/day)', description: 'You can now rage 5 times per long rest.'}] },
        { level: 13, title: 'More Brutal Strikes', features: [{ name: 'Brutal Critical (2 dice)', description: 'You can now roll two additional weapon damage dice on a critical hit.' }] },
        { level: 14, title: 'Path Apex', features: [{ name: 'Primal Path Feature', description: 'You gain a feature from your chosen Primal Path. See the Primal Paths section for details.', isSubclassFeature: true }] },
        { level: 15, title: 'Endless Fury', features: [{ name: 'Persistent Rage', description: 'Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.' }] },
        { level: 16, title: 'Indomitable Might & Rage Damage', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }, { name: 'Rage Damage Bonus', description: 'Your rage damage bonus increases to +4.'}] },
        { level: 17, title: 'Apex Brutality & More Rage', features: [{ name: 'Brutal Critical (3 dice)', description: 'You can now roll three additional weapon damage dice on a critical hit.' }, { name: 'Rage (6/day)', description: 'You can now rage 6 times per long rest.'}] },
        { level: 18, title: 'Unstoppable Force', features: [{ name: 'Indomitable Might', description: 'If your total for a Strength check is less than your Strength score, you can use that score in place of the total.' }] },
        { level: 19, title: 'Legendary Strength', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }] },
        { level: 20, title: 'Primal Champion', features: [{ name: 'Primal Champion', description: 'Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.', isCritical: true }, { name: 'Rage (Unlimited)', description: 'You can rage an unlimited number of times.'}] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'barbarian-rage',
      title: 'Rage and Primal Abilities',
      intro: "The Barbarian's core abilities stem from their primal connection and battle fury.",
      mechanics: [
        { name: 'Rage', description: 'A signature Barbarian ability. As a bonus action, enter a rage to gain advantage on Strength checks/saves, bonus damage to Strength-based melee attacks, and resistance to bludgeoning, piercing, and slashing damage. Limited uses per long rest, increasing with level.', isCritical: true },
        { name: 'Unarmored Defense (Barbarian)', description: 'While not wearing armor, AC equals 10 + Dexterity modifier + Constitution modifier. Allows for high AC without armor, relying on physical prowess.' },
        { name: 'Reckless Attack', description: 'Gain advantage on Strength-based melee attack rolls for the turn, but attacks against you also have advantage until your next turn. A high-risk, high-reward tactic.' },
        { name: 'Danger Sense', description: 'Advantage on Dexterity saving throws against effects you can see, enhancing survivability against traps and spells.' },
        { name: 'Brutal Critical', description: 'Roll additional weapon damage dice on a critical hit, increasing the devastating impact of criticals.' },
        { name: 'Relentless Rage', description: 'Chance to drop to 1 HP instead of 0 when raging, making Barbarians incredibly hard to put down.' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'barbarian-paths',
      title: 'Primal Paths (Subclasses)',
      intro: 'At 3rd level, a Barbarian chooses a Primal Path, which defines the source and expression of their rage.',
      subclasses: [
        {
          id: 'path-of-the-berserker',
          name: 'Path of the Berserker',
          description: 'Embraces pure, unadulterated fury, capable of entering a Frenzy for even greater destructive power, at a personal cost.',
          note: "The iconic frenzied warrior, dealing immense damage but suffering exhaustion. High risk, high reward.",
          features: [
            { name: 'Frenzy', level: 3, description: 'Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.' },
            { name: 'Mindless Rage', level: 6, description: 'You can’t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.' },
            { name: 'Intimidating Presence', level: 10, description: 'As an action, you can frighten someone with your menacing presence. Choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you. If the creature succeeds on its saving throw, you can’t use this feature on that creature again for 24 hours.' },
            { name: 'Retaliation', level: 14, description: 'When you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.' }
          ]
        },
        {
          id: 'path-of-the-totem-warrior',
          name: 'Path of the Totem Warrior',
          description: 'Draws power from animal spirits, gaining abilities that reflect the chosen totem\'s strengths (e.g., Bear for resilience, Wolf for pack tactics, Eagle for mobility).',
          note: "Versatile and adaptable, offering strong defensive or supportive options based on totem choices. Common choices include Bear for tanking or Wolf for team support.",
          features: [
            { name: 'Spirit Seeker', level: 3, description: 'You gain the ability to cast the Beast Sense and Speak with Animals spells, but only as rituals.' },
            { name: 'Totem Spirit (L3)', level: 3, description: 'Choose a totem spirit: Bear, Eagle, Elk, Tiger, or Wolf. While raging, you gain a benefit based on the chosen spirit. Bear: Resistance to all damage except psychic. Eagle: Other creatures have disadvantage on opportunity attack rolls against you, and you can use Dash as a bonus action. Elk: Your walking speed increases by 15 feet. Tiger: You can add 10 feet to your long jump distance and 3 feet to your high jump distance. Wolf: Your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you.' },
            { name: 'Aspect of the Beast (L6)', level: 6, description: 'Choose a totem spirit (can be different from L3 choice). Bear: Carrying capacity doubles, advantage on Strength checks to push/pull/lift/break. Eagle: See up to 1 mile without difficulty, able to discern details as if 100ft away. Dim light doesn\'t impose disadvantage on Wisdom (Perception) checks. Elk: While traveling for an hour or more, your group\'s travel pace is doubled. Tiger: Gain proficiency in two skills from Acrobatics, Athletics, Stealth, and Survival. Wolf: Track other creatures while traveling at a fast pace, and move stealthily while traveling at a normal pace.' },
            { name: 'Spirit Walker (L10)', level: 10, description: 'You can cast the Commune with Nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.' },
            { name: 'Totemic Attunement (L14)', level: 14, description: 'Choose a totem spirit (can be different). Bear: While raging, any creature within 5 feet of you that’s hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. Eagle: While raging, you have a flying speed equal to your current walking speed. This flight is only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft. Elk: While raging and moving at least 20 feet in a straight line towards a Large or smaller creature right before making a melee weapon attack against it, you can use a bonus action to make that creature make a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier). On a failed save, you knock the target prone. Tiger: While raging, if you move at least 20 feet in a straight line toward a Large or smaller creature right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it. Wolf: While raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with a melee weapon attack.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'barbarian-feats',
      title: 'Key Feats for the Barbarian',
      intro: "Barbarians benefit most from feats that enhance their Strength or Constitution, improve their melee combat effectiveness, or bolster their survivability.",
      categories: [
        {
          categoryName: 'Core Combat Feats',
          description: 'These feats directly improve a Barbarian\'s damage output and resilience in combat.',
          feats: [
            { name: 'Great Weapon Master', description: 'For two-handed weapon users. Take a -5 penalty to attack for +10 damage. Also, gain a bonus action attack on a crit or when reducing a foe to 0 HP.', note: 'Synergizes incredibly well with Reckless Attack to offset the penalty.' },
            { name: 'Polearm Master', description: 'Grants a bonus action attack with polearms and an opportunity attack when enemies enter reach.', note: 'Increases number of attacks, good for triggering Rage damage more often.' },
            { name: 'Sentinel', description: 'Stops enemies in their tracks with opportunity attacks, great for protecting allies and controlling space.', note: 'Especially effective for tank-focused Barbarians.' },
            { name: 'Slasher / Crusher / Piercer', description: 'These feats offer a +1 to Strength or Dexterity, and provide minor combat benefits based on damage type. Choose based on preferred weapon.', note: 'Good for rounding out an odd Strength score and adding a small tactical benefit.'}
          ]
        },
        {
          categoryName: 'Survivability & Utility Feats',
          description: 'These feats increase a Barbarian\'s toughness or provide useful options.',
          feats: [
            { name: 'Tough', description: 'Hit point maximum increases by an amount equal to twice your level.', note: 'Makes the already durable Barbarian even harder to kill.' },
            { name: 'Resilient (Wisdom)', description: 'Increase Wisdom by 1 and gain proficiency in Wisdom saving throws.', note: 'Helps shore up a common Barbarian weakness against mental effects.' },
            { name: 'Athlete', description: '+1 Str/Dex, stand from prone with 5ft movement, better climbing/jumping.', note: 'Enhances mobility and can round out a Strength or Dexterity score.' },
            { name: 'Mobile', description: '+10ft speed, Dash ignores difficult terrain, avoid OAs from creatures you attack.', note: 'Excellent for skirmishing and ensuring you can reach targets to maintain Rage.'}
          ]
        }
      ]
    },
    {
      type: 'flavorAndRoleplaying',
      sectionId: 'barbarian-rp',
      title: 'Flavor & Roleplaying Hooks',
      content: [
        "What triggers your Barbarian's rage? Is it a battle cry, a memory of injustice, a protective instinct, or a connection to a primal spirit?",
        "How does your Barbarian interact with 'civilized' society? Are they curious, disdainful, awkward, or indifferent?",
        "What is their connection to the natural world or their tribe/clan (if any)?",
        "Are they trying to control their rage, or do they embrace it fully?"
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'barbarian-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Barbarian benefits greatly from high Strength and Constitution. Rage is a powerful core feature that doesn't stack with spellcasting concentration.",
        "Short dips into Fighter are common for Action Surge and a Fighting Style. Rogue can add skills and Cunning Action."
      ],
      goodCombinations: [
        { className: "Fighter", synergy: "1-3 levels provide a Fighting Style, Second Wind, and Action Surge. Battle Master maneuvers can add tactical depth to rage-fueled attacks.", levels: "1-3" },
        { className: "Rogue", synergy: "1-3 levels for Expertise, Sneak Attack (if using finesse weapons like a rapier with Strength via Reckless Attack), and Cunning Action for bonus action Dash/Disengage (useful if not using Frenzy).", levels: "1-3" },
        { className: "Druid (Circle of the Moon)", synergy: "A few levels can allow raging while in Wild Shape for incredibly durable beast forms. Be mindful of action economy and rage limitations.", levels: "Barbarian X / Druid 2-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'barbarian-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "A greataxe, greatsword, or maul for two-handed builds. Alternatively, a versatile weapon like a battleaxe or longsword with a shield.",
        "Javelins or handaxes for ranged options.",
        "Medium armor (like Scale Mail or Half Plate) if not relying on Unarmored Defense, or focus on high Dex/Con for Unarmored Defense."
      ],
      midGame: [
        "+1/+2 magical melee weapon (e.g., Greataxe +1).",
        "If using armor, +1 medium armor. If Unarmored Defense, items boosting Constitution or Dexterity (Amulet of Health, Gloves of Dexterity).",
        "Belt of Giant Strength (various types) is a game-changer.",
        "Items granting mobility or resistances (e.g., Boots of Speed, Cloak of Protection)."
      ],
      lateGame: [
        "+2/+3 magical melee weapon, potentially with powerful properties (e.g., Vorpal Sword, Sword of Kas).",
        "If using armor, +2 medium armor. Items that set Constitution to a high score (e.g., Amulet of Health that sets Con to 19).",
        "Legendary items that enhance strength, durability, or rage."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'barbarian-closing',
      title: 'The Unstoppable Storm',
      content: [
        "The Barbarian is a force of nature on the battlefield, a warrior whose primal fury makes them both a devastating attacker and a resilient defender.",
        "Their straightforward yet impactful mechanics make them satisfying to play, while Primal Paths offer unique flavors and abilities.",
        "For players who enjoy visceral combat, embodying untamed strength, and shrugging off blows that would fell others, the Barbarian is an excellent choice."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Mountain Dwarf / Half-Orc',
      note: 'Mountain Dwarf (+2 Str, +2 Con from older editions) is excellent for stats. Half-Orc (Savage Attacks, Relentless Endurance) is thematically and mechanically strong. ASIs and feat now come from Origin.',
    },
    origin: { 
      name: 'Guard Origin', 
      note: 'Provides useful proficiencies like Athletics and Perception, and a starting feat. Excellent for a front-line warrior.',
      recommendedFeat: 'Great Weapon Master',
      skillProficiencies: ["Athletics", "Perception"]
    },
    abilityPriority: ['Strength (Max)', 'Constitution (Max, or very high)', 'Dexterity (At least 14 for medium armor or good Unarmored Defense)', 'Wisdom (Saves)', 'Charisma (Low)', 'Intelligence (Dump)'],
    keyClassSkills: ['Athletics', 'Perception', 'Intimidation', 'Survival'],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: 'Great Weapon Master (Recommended via Guard Origin - for two-handed weapon users, take -5 to hit for +10 damage; bonus action attack on crit/kill).',
          notes: 'Rage is your core feature. Use it in tough fights. Decide if you want to use armor or rely on Unarmored Defense. Your Origin provides your 1st-level feat.'
      }},
      { level: 3, recommendation: {
          notes: 'Choose your Primal Path. Berserker for more attacks (with exhaustion), Totem Warrior (Bear) for incredible tankiness.'
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Strength',
          notes: 'Boosting Strength increases attack, damage, and Rage benefits. GWM is a huge damage spike with Reckless Attack.'
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
        { level: 3, recommendation: { notes: 'Frenzy gives a bonus action attack while raging, but causes exhaustion. Use it strategically.' }},
        { level: 4, recommendation: { asiChoice: '+2 Strength or Great Weapon Master (if not already taken).' }},
      ],
      'Path of the Totem Warrior': [
        { level: 3, recommendation: { notes: 'Bear Totem (resistance to all damage except psychic while raging) is incredibly strong for tanking. Wolf (advantage for allies) is great for party support.' }},
        { level: 4, recommendation: { asiChoice: '+2 Strength or relevant combat feat (GWM if not taken, Polearm Master, Sentinel).' }},
        { level: 6, recommendation: { notes: 'Aspect of the Beast: Eagle for sight, Wolf for tracking, or Bear for strength can be useful.'}}
      ]
    }
  }
};
