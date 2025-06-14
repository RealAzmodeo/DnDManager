// data/tooltip_definitions/conditions.ts
import { StructuredTooltipData } from '../../types';

export const conditionsTooltips: Record<string, StructuredTooltipData> = {
  "Frightened": {
    name: "Frightened",
    category: "Condition",
    summary: "A frightened creature experiences intense fear, hindering its actions and movement.",
    effects: [
      "Has disadvantage on ability checks while the source of its fear is within line of sight.",
      "Has disadvantage on attack rolls while the source of its fear is within line of sight.",
      "Can’t willingly move closer to the source of its fear."
    ],
    tags: ["Debuff", "Movement Restriction", "Combat Modifier"],
    source: "Player's Handbook, Appendix A: Conditions"
  },
  "Charmed": {
    name: "Charmed",
    category: "Condition",
    summary: "A charmed creature is favorably disposed toward the charmer but is not under their direct control.",
    effects: [
        "A charmed creature can’t attack the charmer or target the charmer with harmful abilities or magical effects.",
        "The charmer has advantage on any ability check to interact socially with the creature."
    ],
    tags: ["Social Interaction", "Debuff"],
    source: "Player's Handbook, Appendix A: Conditions"
  },
  "Incapacitated": {
    name: "Incapacitated",
    category: "Condition",
    summary: "An incapacitated creature can’t take actions or reactions.",
    effects: [
        "Cannot take actions.",
        "Cannot take reactions."
    ],
    tags: ["Severe Debuff", "Action Denial"],
    source: "Player's Handbook, Appendix A: Conditions"
  },
   "Restrained": {
    name: "Restrained",
    category: "Condition",
    summary: "A restrained creature's speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.",
    effects: [
        "Speed becomes 0.",
        "Cannot benefit from bonuses to speed.",
        "Attack rolls against the creature have advantage.",
        "The creature's attack rolls have disadvantage.",
        "The creature has disadvantage on Dexterity saving throws."
    ],
    tags: ["Movement Restriction", "Combat Modifier", "Debuff"],
    source: "Player's Handbook, Appendix A: Conditions"
  },
  "Turned": {
    name: "Turned",
    category: "ConditionEffect",
    summary: "A turned creature must spend its turns trying to move as far away from the creature that turned it as possible. It also can’t willingly move to a space within 30 feet of that creature. It can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.",
    effects: [
        "Must spend turns moving away from the source.",
        "Cannot willingly move within 30 feet of the source.",
        "Cannot take reactions.",
        "Can only use Dash action or try to escape effects preventing movement.",
        "Can use Dodge action if unable to move."
    ],
    tags: ["Movement Control", "Action Restriction"],
    source: "Player's Handbook (Often associated with Turn Undead)"
  }
};
