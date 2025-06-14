
import { ClassDefinition } from '../types';

export const rangerClassData: ClassDefinition = {
  className: "Ranger",
  classTitle: "The Warden of the Wilds",
  classDescription: "A skilled hunter and tracker, the Ranger is a master of survival in the wilderness, blending martial prowess with nature magic.",
  themeColor: "green",
  sections: [
    {
      type: 'intro',
      sectionId: 'ranger-intro',
      title: 'Ranger Class Overview',
      content: [
        "Rangers are warriors of the wilderness, drawing on their knowledge of nature and their keen senses to track foes, guide allies through perilous terrain, and strike with deadly precision. They are often accompanied by animal companions or embody the spirit of the hunt itself.",
        "Their magic is drawn from the natural world, allowing them to enhance their combat abilities, protect allies, and interact with beasts and plants."
      ],
    },
    {
      type: 'rolePlaystyle',
      sectionId: 'ranger-role',
      title: 'Role & Playstyle',
      content: [
        "Primary Role: Striker/Explorer - Rangers excel at dealing consistent damage, especially with ranged weapons, and are unmatched in wilderness survival and tracking.",
        "Secondary Role: Support/Control - With spells like Hunter's Mark, Entangle, and Pass without Trace, Rangers can boost party damage, control enemies, and aid in stealth.",
        "Playstyle: Versatile and adaptable. Rangers can focus on ranged or melee combat, often utilizing their Fighting Style and spells to gain an edge. Their chosen Ranger Conclave significantly shapes their combat focus and abilities."
      ]
    },
    {
      type: 'strengthsWeaknesses',
      sectionId: 'ranger-proscons',
      title: 'Strengths & Weaknesses',
      strengths: [
        "Good sustained damage output, especially with features like Hunter's Mark or Favored Foe.",
        "Excellent at exploration, tracking, and survival in natural environments.",
        "Versatile spell list offering utility, damage, and control options.",
        "Fighting Style choice allows for specialization in combat.",
        "Ranger Conclaves provide distinct and impactful playstyles (e.g., Hunter for combat focus, Beast Master for a companion)."
      ],
      weaknesses: [
        "Original Favored Enemy and Natural Explorer features can be situational; Tasha's variants (Favored Foe, Deft Explorer) are often preferred for flexibility.",
        "Spellcasting is half-caster progression, limiting access to higher-level spells.",
        "Can be Multiple Ability Dependent (MAD), often needing Dexterity, Wisdom, and Constitution.",
        "Some features (like Primeval Awareness) are considered lackluster by many players.",
        "Beast Master companion (PHB version) can be fragile; Primal Companion (Tasha's) is a significant improvement."
      ]
    },
    {
      type: 'baseTraits',
      sectionId: 'ranger-core',
      title: 'Core Class Traits',
      items: [
        { name: 'Hit Dice', description: 'd10 per Ranger level.' },
        { name: 'Primary Attributes', description: 'Dexterity (attacks, damage, AC), Wisdom (spellcasting, some features), Constitution (hit points).' },
        { name: 'Saving Throws', description: 'Strength and Dexterity.' },
        { name: 'Proficiencies', description: 'Light and medium armor, shields, simple weapons, martial weapons.' },
        { name: 'Skills', description: 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival.' }
      ],
    },
    {
      type: 'levelProgression',
      sectionId: 'ranger-levels',
      title: 'Class Features by Level',
      levels: [
        {
          level: 1,
          title: 'Hunter\'s Instincts',
          features: [
            { name: 'Favored Enemy / Favored Foe (TCoE)', description: "You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoids (such as gnolls and orcs) as favored enemies. You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all. \n\n**Alternative (TCoE): Favored Foe**: You can call on your mystical connection to the natural world to mark a creature as your favored foe. As a bonus action, you can choose one creature you can see within 90 feet of you and mark it as your favored foe for up to 1 minute or until you lose your concentration (as if you were concentrating on a spell). The first time on each of your turns that you hit the favored foe with a weapon attack, the attack deals an extra 1d4 damage of the weapon's type. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. This feature’s extra damage increases when you reach certain levels in this class: to 1d6 at 6th level and to 1d8 at 14th level.", note: "Tasha's 'Favored Foe' is a popular alternative, offering combat benefits without situational knowledge checks." },
            { name: 'Natural Explorer / Deft Explorer (TCoE)', description: "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits: Difficult terrain doesn’t slow your group’s travel. Your group can’t become lost except by magical means. Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. If you are traveling alone, you can move stealthily at a normal pace. When you forage, you find twice as much food as you normally would. While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. \n\n**Alternative (TCoE): Deft Explorer**: You are an unsurpassed explorer and survivor, both in the wilderness and in dealing with the strange creatures that dwell in the dungeons and ruins of the world. You gain one of the following benefits of your choice: Canny, Roving, or Tireless. (See Deft Explorer tooltip for details.)", note: "Tasha's 'Deft Explorer' offers more versatile benefits (Canny, Roving, Tireless)." }
          ],
        },
        {
          level: 2,
          title: 'Combat Style & Spellcasting',
          features: [
            { name: 'Fighting Style', description: 'You adopt a particular style of fighting as your specialty. Choose one from Archery, Defense, Dueling, or Two-Weapon Fighting.' },
            { name: 'Spellcasting', description: 'You gain the ability to cast ranger spells. You know two 1st-level spells from the ranger spell list. You use Wisdom for your spellcasting ability.' }
          ],
        },
        {
          level: 3,
          title: 'Ranger Conclave & Primeval Awareness',
          features: [
            { name: 'Ranger Conclave Feature', description: 'You choose a conclave that shapes your approach to a ranger’s life. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level. See the Ranger Conclaves section for details.', isSubclassFeature: true },
            { name: 'Primeval Awareness', description: 'You can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether any aberrations, celestials, dragons, elementals, fey, fiends, or undead are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain). This feature doesn’t reveal the creatures’ location or number.' }
          ],
        },
        { level: 4, title: 'Sharpened Focus', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 5, title: 'Extra Attack', features: [{ name: 'Extra Attack', description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' }] },
        { level: 6, title: 'Improved Favors & Exploration', features: [
            { name: 'Favored Enemy / Favored Foe Improvement', description: "If using Favored Enemy: Choose an additional favored enemy, and an associated language. Your Favored Foe damage (if chosen) increases to 1d6." },
            { name: 'Natural Explorer / Deft Explorer Improvement', description: "If using Natural Explorer: Choose an additional favored terrain. If using Deft Explorer (TCoE): You gain another benefit of your choice from the Deft Explorer feature options (Canny, Roving, or Tireless)." }
          ]
        },
        { level: 7, title: 'Conclave Advancement', features: [{ name: 'Ranger Conclave Feature', description: 'You gain a feature from your chosen Ranger Conclave. See the Ranger Conclaves section for details.', isSubclassFeature: true }] },
        { level: 8, title: 'Land\'s Stride', features: [{ name: 'Land\'s Stride', description: 'Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the Entangle spell.' }] },
        { level: 9, title: 'Greater Spells', features: [{ name: 'Spellcasting', description: 'Gain access to 3rd-level spells.' }] },
        { level: 10, title: 'Nature\'s Veil / Hide in Plain Sight', features: [
            { name: 'Hide in Plain Sight', description: 'You can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage. Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.' },
            { name: 'Alternative (TCoE): Nature\'s Veil', description: "As a bonus action, you can magically become invisible, along with any equipment you are wearing or carrying, until the start of your next turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.", note: "Tasha's 'Nature's Veil' is a popular alternative, offering a quick invisibility option." }
          ]
        },
        { level: 11, title: 'Conclave Focus', features: [{ name: 'Ranger Conclave Feature', description: 'You gain a feature from your chosen Ranger Conclave. See the Ranger Conclaves section for details.', isSubclassFeature: true }] },
        { level: 12, title: 'Master Tracker', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 13, title: 'Potent Magic', features: [{ name: 'Spellcasting', description: 'Gain access to 4th-level spells.' }] },
        { level: 14, title: 'Vanish & Favored Foe Improvement', features: [
            { name: 'Vanish', description: 'You can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail.' },
            { name: 'Favored Foe Improvement (TCoE)', description: "If using Favored Foe, its extra damage increases to 1d8." }
          ]
        },
        { level: 15, title: 'Conclave Apex', features: [{ name: 'Ranger Conclave Feature', description: 'You gain a feature from your chosen Ranger Conclave. See the Ranger Conclaves section for details.', isSubclassFeature: true }] },
        { level: 16, title: 'Wilderness Veteran', features: [{ name: 'Ability Score Improvement / Feat', description: 'Increase ability scores or take a feat.' }] },
        { level: 17, title: 'Supreme Spells', features: [{ name: 'Spellcasting', description: 'Gain access to 5th-level spells.' }] },
        { level: 18, title: 'Feral Senses', features: [{ name: 'Feral Senses', description: 'You gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls againstit. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.' }] },
        { level: 19, title: 'Epic Boon Granted', features: [{ name: 'Ability Score Improvement / Feat / Epic Boon', description: 'Increase ability scores, take a feat, or gain an Epic Boon.' }] },
        { level: 20, title: 'Foe Slayer', features: [{ name: 'Foe Slayer', description: 'Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies (or any creature if using Favored Foe). You can choose to use this feature before or after the roll, but before any effects of the roll are applied.', isCritical: true }] },
      ],
    },
    {
      type: 'uniqueMechanics',
      sectionId: 'ranger-skills',
      title: 'Core Ranger Skills',
      intro: "Rangers possess a unique blend of martial skill, wilderness expertise, and nature-infused magic.",
      mechanics: [
        { name: 'Favored Enemy / Favored Foe', description: "Grants advantages when tracking or recalling information about certain creature types (Favored Enemy), or allows marking a creature for extra damage once per turn (Favored Foe). Favored Foe is a more combat-oriented alternative from Tasha's Cauldron of Everything." },
        { name: 'Natural Explorer / Deft Explorer', description: "Provides benefits while in specific terrains (Natural Explorer), or offers versatile skill/utility choices like Canny, Roving, or Tireless (Deft Explorer). Deft Explorer is a more flexible alternative from Tasha's Cauldron of Everything." },
        { name: 'Fighting Style', description: 'Allows specialization in a combat style, such as Archery for ranged accuracy or Dueling for one-handed weapon damage.' },
        { name: 'Spellcasting (Ranger)', description: 'Rangers are half-casters, drawing on primal magic to cast spells that enhance combat, aid exploration, or control the environment. They use Wisdom as their spellcasting ability and know a limited number of spells.' },
        { name: 'Extra Attack', description: 'Allows making an additional attack when taking the Attack action, significantly boosting combat effectiveness.' },
        { name: 'Land\'s Stride', description: 'Improves mobility by allowing easier movement through difficult terrain and nonmagical plants.' }
      ],
    },
    {
      type: 'subclasses',
      sectionId: 'ranger-conclaves',
      title: 'Ranger Conclaves (Subclasses)',
      intro: 'At 3rd level, a Ranger chooses a Conclave, representing their specialized approach to their duties.',
      subclasses: [
        {
          id: 'hunter',
          name: 'Hunter',
          description: 'Masters of specialized combat techniques, Hunters adapt their skills to slay specific types of threats, from hordes of lesser foes to colossal beasts.',
          note: "A versatile and straightforward combat-focused conclave, offering choices to customize your damage output and defensive capabilities against different enemy types.",
          features: [
            { name: 'Hunter\'s Prey', level: 3, description: 'Choose one: Colossus Slayer (1d8 extra damage once per turn if target is below its HP max), Giant Killer (reaction attack if Large+ creature misses you), or Horde Breaker (attack another creature within 5ft of original target).' },
            { name: 'Defensive Tactics', level: 7, description: 'Choose one: Escape the Horde (Opportunity attacks against you are made with disadvantage), Multiattack Defense (+4 AC against subsequent attacks from the same creature after it hits you), or Steel Will (Advantage on saving throws against being frightened).' },
            { name: 'Multiattack', level: 11, description: 'Choose one: Volley (ranged attack against any number of creatures in a 10ft radius) or Whirlwind Attack (melee attack against any number of creatures within 5ft).' },
            { name: 'Superior Hunter\'s Defense', level: 15, description: 'Choose one: Evasion (take no damage on successful Dex save for half, half on fail), Stand Against the Tide (reaction to force an attacker to target another creature if they miss you), or Uncanny Dodge (reaction to halve damage from an attack).' }
          ]
        },
        {
          id: 'beast-master-primal-companion',
          name: 'Beast Master (Primal Companion)',
          description: 'Forms a powerful bond with a beast companion, fighting alongside it as a seamless team. Uses the Primal Companion rules from Tasha\'s Cauldron of Everything.',
          note: "This version uses the Primal Companion, which is more resilient and effective than the original PHB Beast Master. Your companion acts on your turn and scales with your proficiency bonus.",
          features: [
            { name: 'Primal Companion', level: 3, description: 'You magically summon a primal beast, which draws strength from your bond with nature. Choose its form: Beast of the Land, Beast of the Sea, or Beast of the Sky. It acts on your initiative. On your turn, you can command the beast where to move (no action required). You can use your action to command it to take the Attack, Dash, Disengage, Dodge, or Help action. If you have Extra Attack, you can make one attack yourself when you command the beast to use the Attack action. If you don’t issue a command, the beast takes the Dodge action. The beast’s statistics use your proficiency bonus (PB) in several places.' },
            { name: 'Exceptional Training', level: 7, description: 'Your Primal Companion can take the Dash, Disengage, or Help action as a bonus action on its turn. Its attacks now count as magical for overcoming resistance and immunity.' },
            { name: 'Bestial Fury', level: 11, description: 'When you command your Primal Companion to use the Attack action, the beast can make two attacks, or it can take the Multiattack action if it has that action.' },
            { name: 'Share Spells', level: 15, description: 'When you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.' }
          ]
        }
      ],
    },
    {
      type: 'feats',
      sectionId: 'ranger-feats',
      title: 'Key Feats for the Ranger',
      intro: "Rangers benefit from feats that enhance their combat style (ranged or melee), boost Dexterity or Wisdom, or improve concentration for spells.",
      categories: [
        {
          categoryName: 'Combat Enhancement Feats',
          description: 'These feats directly improve a Ranger\'s effectiveness in combat.',
          feats: [
            { name: 'Sharpshooter', description: 'For ranged attackers. Ignore long range disadvantage and cover. Take -5 to hit for +10 damage.', note: 'Essential for ranged damage builds.' },
            { name: 'Crossbow Expert', description: 'Ignore loading quality, no disadvantage on ranged attacks in melee, bonus action hand crossbow attack.', note: 'Excellent for hand crossbow builds, synergizes with Sharpshooter.' },
            { name: 'Polearm Master', description: 'Bonus action attack with polearms, opportunity attack when enemies enter reach.', note: 'Good for melee Rangers using spears or staves with Shillelagh.' },
            { name: 'Great Weapon Master', description: '-5 to hit for +10 damage with heavy weapons. Bonus action attack on crit/kill.', note: 'For Strength-based Rangers using two-handed weapons.' },
            { name: 'Sentinel', description: 'Opportunity attacks stop movement. Enemies provoke even if they Disengage. Reaction attack if enemy near you attacks an ally.', note: 'Strong for melee control builds.'}
          ]
        },
        {
          categoryName: 'Ability Score & Spellcasting Feats',
          description: 'These feats improve core abilities or spellcasting.',
          feats: [
            { name: 'Resilient (Constitution)', description: 'Increase Constitution by 1 and gain proficiency in Constitution saving throws.', note: 'Crucial for maintaining concentration on spells like Hunter\'s Mark.' },
            { name: 'War Caster', description: 'Advantage on Con saves for concentration. Perform somatic components with hands full. Cast a spell as an opportunity attack.', note: 'Also excellent for concentration, especially for melee Rangers.' },
            { name: 'Fey Touched', description: '+1 Wis/Int/Cha, learn Misty Step and a 1st-level Divination/Enchantment spell.', note: 'Boosts Wisdom, grants Misty Step for mobility, and a useful spell (e.g., Bless, Hunter\'s Mark if you want to free up a Ranger known spell).' },
            { name: 'Telekinetic', description: '+1 Wis/Int/Cha, learn Mage Hand (or improve it), bonus action telekinetic shove.', note: 'Good for Wisdom boost and a useful bonus action.'}
          ]
        }
      ]
    },
    {
      type: 'multiclassing',
      sectionId: 'ranger-multi',
      title: 'Multiclassing Considerations',
      generalNotes: [
        "Ranger spellcasting and Extra Attack at level 5 are key milestones. Multiclassing often involves dipping into Fighter or Rogue for combat enhancements, or Cleric/Druid for more spellcasting.",
        "Dexterity and Wisdom are primary stats."
      ],
      goodCombinations: [
        { className: "Fighter", synergy: "1-3 levels for a Fighting Style (can stack if different), Second Wind, Action Surge, and potentially a Martial Archetype like Battle Master for maneuvers.", levels: "1-3" },
        { className: "Rogue", synergy: "1-3 levels for Expertise, Sneak Attack (synergizes with finesse/ranged attacks), and Cunning Action for bonus action utility.", levels: "1-3" },
        { className: "Cleric (Nature/Life/War)", synergy: "1-2 levels for more cantrips, prepared spells, heavy armor (some domains), and domain features. Shares Wisdom focus.", levels: "1-2" },
        { className: "Druid", synergy: "A few levels for more spell slots, cantrips, and potentially Wild Shape utility (though often overlaps with Ranger themes). Shares Wisdom focus.", levels: "1-3" }
      ]
    },
    {
      type: 'equipmentProgression',
      sectionId: 'ranger-gear',
      title: 'Equipment Progression',
      earlyGame: [
        "A longbow or two shortswords/scimitars.",
        "Medium armor (Scale Mail) or Light Armor (Studded Leather) if focusing on high Dexterity.",
        "A shield if using a one-handed melee weapon.",
        "Arrows or bolts for ranged weapons."
      ],
      midGame: [
        "+1/+2 weapon(s) and armor.",
        "Items boosting Dexterity or Wisdom (Bracers of Archery, Amulet of Natural Armor reflavored, Periapt of Wisdom).",
        "Boots of Elvenkind, Cloak of Elvenkind for stealth.",
        "Quiver of Ehlonna for ammunition management."
      ],
      lateGame: [
        "+2/+3 weapons and armor (e.g., Oathbow, Dragon Scale Mail).",
        "Legendary items enhancing combat prowess or nature connection.",
        "Manuals/Tomes for Dexterity or Wisdom."
      ]
    },
    {
      type: 'closingRemarks',
      sectionId: 'ranger-closing',
      title: 'The Unseen Arrow, The Wild Guardian',
      content: [
        "The Ranger is a versatile and capable warrior, equally at home in the depths of the wilderness or the heart of battle.",
        "Their blend of martial skill, survival expertise, and nature magic allows them to adapt to myriad challenges, protecting the natural world and guiding their allies through peril.",
        "Whether tracking elusive prey, ambushing foes from the shadows, or standing firm with a loyal beast companion, the Ranger embodies the spirit of adventure and the untamed frontier."
      ],
    },
  ],
  plannerConfig: {
    species: {
      name: 'Wood Elf / Human',
      note: 'Wood Elf is excellent for Dex/Wis. Human offers flexibility. ASIs and feat now come from your Origin.',
    },
    origin: { 
      name: 'Guide Origin', 
      note: 'Provides Nature and Survival skills, fitting the Ranger theme. The feat can enhance combat or utility.',
      recommendedFeat: 'Sharpshooter',
      skillProficiencies: ["Nature", "Survival"] 
    },
    abilityPriority: ['Dexterity (Max)', 'Wisdom (High for spells/features)', 'Constitution (Moderate for HP/concentration)', 'Strength (Low, unless Str-based build)', 'Intelligence (Low)', 'Charisma (Low)'],
    keyClassSkills: ['Stealth', 'Perception', 'Survival', 'Athletics', 'Nature'],
    generalLevelRecommendations: [
      { level: 1, recommendation: {
          featSuggestion: 'Sharpshooter (Recommended via Guide Origin - ignore long range disadvantage/cover, take -5 to hit for +10 damage).',
          notes: "Choose Favored Foe for consistent damage or Favored Enemy for flavor/utility. Deft Explorer (Canny for a skill/expertise or Roving for speed) is often more versatile than Natural Explorer. Your Origin provides your 1st-level feat."
      }},
      { level: 2, recommendation: {
          fightingStyle: 'Archery (for ranged builds) or Two-Weapon Fighting / Dueling (for melee).',
          spellSuggestions: ['Hunter\'s Mark (essential damage boost), Cure Wounds/Goodberry (healing), Entangle (control).']
      }},
      { level: 3, recommendation: {
          notes: 'Hunter Conclave for direct combat bonuses. Beast Master (Primal Companion) for a strong animal ally.'
      }},
      { level: 4, recommendation: {
          asiChoice: '+2 Dexterity',
      }},
      { level: 5, recommendation: {
          spellSuggestions: ['Pass without Trace (amazing group stealth), Spike Growth (control/damage), Lesser Restoration.'],
          notes: 'Extra Attack is a major damage increase.'
      }},
      { level: 8, recommendation: {
          asiChoice: '+2 Dexterity (to max) OR Resilient (Con) / War Caster (for concentration).',
      }},
    ],
    subclassSpecificRecommendations: {
      'Hunter': [
        { level: 3, recommendation: { notes: "Hunter's Prey: Colossus Slayer is reliable extra damage. Horde Breaker for multiple foes. Giant Killer is situational." }},
        { level: 7, recommendation: { notes: "Defensive Tactics: Escape the Horde for ranged kiting, Multiattack Defense for melee staying power." }},
      ],
      'Beast Master (Primal Companion)': [
        { level: 3, recommendation: { notes: 'Choose Beast of the Land (damage/prone), Sea (versatile), or Sky (flyby). Command it effectively.' }},
        { level: 4, recommendation: { asiChoice: '+2 Dexterity or Wisdom. Your companion scales with your proficiency bonus.' }},
      ]
    }
  }
};
