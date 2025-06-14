# Data Templates and Schemas

This directory contains JSON templates for various game data entities and their corresponding JSON Schemas for validation. These templates and schemas are designed to ensure consistency and robustness in defining game mechanics.

## Core Mechanic Schemas

These are foundational schemas for defining dynamic game elements.

### 1. DiceRollComponent

**File:** `DiceRollComponent.template.json`
**Schema:** `DiceRollComponent.schema.json`

**Purpose:** Represents a single component of a dice roll or a static modifier. Complex dice expressions (e.g., "2d8 Slashing + 1d6 Fire + 5") are built as an array of these components.

**Fields:**

*   `diceCount` (integer, required): Number of dice to roll. Use 0 for static modifiers.
    *   *Example:* `1` for 1d8, `0` for a +5 bonus.
*   `dieType` (integer, required): Type of die (e.g., 4, 6, 8, 10, 12, 20). Use 0 or 1 if `diceCount` is 0 (for a static modifier).
    *   *Example:* `8` for a d8, `0` for a +5 bonus.
*   `category` (string, required): What the dice roll is for.
    *   *Examples:* "Damage", "Healing", "Bonus", "Penalty", "HP", "AttributeCheck".
*   `subType` (string, required): The specific type within the category.
    *   *Examples:* For "Damage" -> "Slashing", "Fire", "Cold"; For "Bonus" -> "AttackRolls", "SkillCheck_Athletics"; For "Healing" -> "HitPoints".
*   `staticValue` (integer, required): The value if this is a static modifier. If `diceCount > 0`, this might be 0.
    *   *Example:* `5` for a +5 bonus, `0` if it's purely a dice roll like 1d8.
*   `valueSource` (string | null, optional): If the value is derived from a character stat.
    *   *Examples:* "Strength_Modifier", "Proficiency_Bonus", null.
*   `notes` (array of strings, optional): Optional notes or comments about this dice roll component.

**JSON Example (`DiceRollComponent.template.json`):**

```json
{
  "diceCount": 1,
  "dieType": 6,
  "category": "Damage",
  "subType": "Fire",
  "staticValue": 0,
  "valueSource": null,
  "notes": [
    "This template represents a single component of a dice roll or a static modifier.",
    "A complete dice expression (e.g., '2d8 Slashing + 1d6 Fire + 5') would be an array of these components."
  ]
}
```

---
### 2. EffectDefinition

**File:** `EffectDefinition.template.json`
**Schema:** `EffectDefinition.schema.json`

**Purpose:** Defines a single, granular mechanical effect, such as a buff, debuff, or other modification to a character's statistics or capabilities. These are the building blocks for abilities, spells, item properties, and conditions.

**Fields:**

*   `id` (string, required): Unique identifier for this effect definition (e.g., "effect-bonus-ac-shield"). Pattern: `^[a-z0-9-]+$`.
*   `name` (string, required): Display name for the effect (e.g., "Shield AC Bonus").
*   `description` (string, required): Detailed description of what this effect does.
*   `targetCategory` (string, required): The broad category of what the effect targets.
    *   *Enum values include:* "AbilityScore", "Skill", "SavingThrow", "AttackRoll", "DamageRoll", "ArmorClass", "Speed", "Senses", "MaxHP", "CurrentHP", "ProficiencyBonus", "MovementMode", "SpecificAction", "HitDiceMax", "HitDiceCurrent", "SpellSlots", "Resistance", "Immunity", "Vulnerability", "Condition".
*   `targetSubcategory` (string | null, optional): The specific sub-target.
    *   *Examples:* For "AbilityScore" -> "Strength"; "Skill" -> "Athletics"; "Senses" -> "DarkvisionRange"; "Resistance" -> "Fire". Use "All" or null if not specific or if it applies to all under the category.
*   `modificationType` (string, required): How the target is modified.
    *   *Enum values include:* "Bonus", "Penalty", "SetAbsolute", "SetMultiplier", "Advantage", "Disadvantage", "GrantImmunity", "GrantResistance", "GrantVulnerability", "GrantProficiency", "RemoveProficiency", "GrantAbility", "ModifyProperty", "AddElement", "RemoveElement".
*   `value` (number | string | boolean | null, optional): The primary value of the modification. Numeric for Bonus/Penalty/SetAbsolute. String for types like "Fire" in "GrantResistance". Boolean for Advantage/Disadvantage (typically `true`).
*   `valueDice` (array of DiceRollComponent objects | null, optional): If the modification's value is dice-based (e.g., a "1d4 bonus"). Each object in the array must conform to the `DiceRollComponent` structure. If this is used, `value` might be 0 or null.
    *   *See:* `DiceRollComponent` documentation for its structure.
*   `valueScalar` (object | null, optional): For effects that scale with another value (e.g., character level, ability score modifier).
    *   `sourceStat` (string): e.g., "CharacterLevel", "Strength_Score", "ProficiencyBonus".
    *   `multiplier` (number, default: 1.0): Factor to multiply the source stat by.
    *   `divisor` (number, default: 1.0): Factor to divide the source stat by.
    *   `baseValue` (number, default: 0): A flat value added to the calculation.
    *   `minResult` (number, optional): Minimum result of the scaling calculation.
    *   `maxResult` (number, optional): Maximum result of the scaling calculation.
    *   `rounding` (string, default: "floor"): How to round the result if not an integer. Enum: "floor", "ceil", "round".
*   `durationType` (string, required): How long the effect lasts.
    *   *Enum values include:* "Instantaneous", "Rounds", "Minutes", "Hours", "Days", "Permanent", "SpecialCondition" (e.g., "UntilLongRest", "WhileConcentrating"), "UntilSave", "Encounter", "ShortRest", "LongRest".
*   `durationValue` (number | null, optional): Numeric value for the duration (e.g., number of rounds, minutes). Required if `durationType` implies a numeric count.
*   `saveToResistAttribute` (string | null, optional): Ability score for a saving throw to resist or end the effect.
    *   *Enum values include:* null, "Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma".
*   `saveDCCalculation` (string | null, optional): How the Save DC is calculated if a save is allowed.
    *   *Examples:* "Fixed_15", "CasterSpellDC_Intelligence", "SourceItemDC_8_Prof_Modifier".
*   `isBuff` (boolean, required): Is this effect generally considered a buff (positive) or debuff (negative)?
*   `applicationConditions` (array of strings, optional): Conditions that must be met for the effect to apply.
    *   *Examples:* ["TargetIsBelowHalfHP", "TargetHasCondition_prone"]. (The exact string format for complex conditions would need further definition for parsing).
*   `stackingRules` (string, optional): How this effect stacks with others.
    *   *Enum values include:* "StacksWithDifferentSources", "HighestApplies", "LowestApplies", "DoesNotStack", "Additive", "Cumulative".
*   `notes` (array of strings | null, optional): Optional notes or comments.

**JSON Example (`EffectDefinition.template.json`):**

```json
{
  "id": "generic-effect-id",
  "name": "Generic Effect Name",
  "description": "Detailed description of what this effect does, its source, and any visual cues.",
  "targetCategory": "AttackRoll",
  "targetSubcategory": "All",
  "modificationType": "Bonus",
  "value": 2,
  "valueDice": null,
  "valueScalar": null,
  "durationType": "Rounds",
  "durationValue": 10,
  "saveToResistAttribute": null,
  "saveDCCalculation": null,
  "isBuff": true,
  "applicationConditions": [],
  "stackingRules": "HighestApplies",
  "notes": ["..."]
}
```

---
### 3. ConditionDefinition

**File:** `ConditionDefinition.template.json`
**Schema:** `ConditionDefinition.schema.json`

**Purpose:** Defines a status condition that a character can be under (e.g., Blinded, Prone, Poisoned). The mechanical impact of a condition is primarily determined by the effects it applies.

**Fields:**

*   `id` (string, required): Unique identifier for this condition definition (e.g., "condition-blinded"). Pattern: `^[a-z0-9-]+$`.
*   `name` (string, required): Display name for the condition (e.g., "Blinded").
*   `description` (string, required): A general description of the condition, including sensory or roleplaying implications.
*   `appliedEffects` (array, required): An array defining the mechanical effects this condition imposes. Each item in the array can be:
    *   A **string ID** referencing a predefined `EffectDefinition`.
    *   An **embedded `EffectDefinition` object** itself (conforming to `EffectDefinition.schema.json`).
    *   *See:* `EffectDefinition` documentation for its structure.
*   `immunityGranting` (object | null, optional): Describes what other conditions or types of effects this condition might make the character immune to.
    *   `conditionIds` (array of strings, optional): Array of condition IDs (e.g., "condition-frightened") that this condition grants immunity to.
    *   `effectCategories` (array of strings, optional): Array of `targetCategory` values from `EffectDefinition` (e.g., "PerceptionChecks_SightBased") or specific effect IDs that this condition grants immunity to.
*   `removalTriggers` (array of strings, optional): Specific events or actions that can remove this condition, beyond the natural duration of its applied effects.
    *   *Examples:* "ReceivesMagicalHealing_Any", "SpecificSpell_LesserRestoration", "TakesDamage_Fire". (The exact string format for these triggers would need further definition for parsing).
*   `source` (string | null, optional): Where this condition is typically defined.
    *   *Example:* "Core Rules".
*   `notes` (array of strings | null, optional): Optional notes or comments.

**JSON Example (`ConditionDefinition.template.json`):**

```json
{
  "id": "generic-condition-id",
  "name": "Generic Condition Name",
  "description": "A general description of what it means to be affected by this condition...",
  "appliedEffects": [
    {
      "comment": "This would be an embedded EffectDefinition object or an ID referencing an EffectDefinition.",
      "effectId_placeholder": "effect-disadvantage-on-attacks"
    },
    {
      "effectId_placeholder": "effect-halve-movement-speed"
    }
  ],
  "immunityGranting": {
    "conditionIds": ["condition-frightened"],
    "effectCategories": ["PerceptionChecks_SightBased"]
  },
  "removalTriggers": [
    "ReceivesMagicalHealing_Any"
  ],
  "source": "Core Rules",
  "notes": ["..."]
}
```
