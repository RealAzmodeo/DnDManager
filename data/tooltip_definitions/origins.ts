
// data/tooltip_definitions/origins.ts
import { StructuredTooltipData } from '../../types';

export const originsTooltips: Record<string, StructuredTooltipData> = {
  "Acolyte Origin": {
    name: "Acolyte Origin",
    category: "Origin",
    summary: "You have spent your life in service to a temple, learning its rites and a deep understanding of its faith, or perhaps you were raised in a secluded community with strong spiritual traditions.",
    effects: [
      "Ability Score Increases: +2 to one ability score and +1 to another, OR +1 to three different ability scores.",
      "Skill Proficiencies: Insight, Religion.",
      "Tool Proficiency or Language: Choose one tool proficiency or one language.",
      "Feat: Grants one 1st-level feat.",
      "Starting Equipment: 50 gp worth of equipment."
    ],
    source: "Player's Handbook (2024)"
  },
  "Artisan Origin": {
    name: "Artisan Origin",
    category: "Origin",
    summary: "You are a skilled crafter, trained in a particular trade or art form. Your hands are adept at creating, and you have an eye for detail and quality.",
    effects: [
      "Ability Score Increases: +2 to one ability score and +1 to another, OR +1 to three different ability scores.",
      "Skill Proficiencies: Investigation, Persuasion.",
      "Tool Proficiency or Language: Choose one type of artisan's tools proficiency or one language.",
      "Feat: Grants one 1st-level feat.",
      "Starting Equipment: 50 gp worth of equipment (often including a set of artisan's tools)."
    ],
    source: "Player's Handbook (2024)"
  },
  "Cultist Origin": {
    name: "Cultist Origin",
    category: "Origin",
    summary: "You were once part of a secretive group, perhaps devoted to a dark entity, a strange philosophy, or an esoteric leader. This past has left an indelible mark on you.",
    effects: [
      "Ability Score Increases: +2 to one ability score and +1 to another, OR +1 to three different ability scores.",
      "Skill Proficiencies: Deception, Religion.",
      "Tool Proficiency or Language: Choose one tool proficiency (e.g., Disguise Kit, Forgery Kit) or one language (perhaps an exotic one related to the cult).",
      "Feat: Grants one 1st-level feat.",
      "Starting Equipment: 50 gp worth of equipment (might include thematic items like a strange idol or coded texts)."
    ],
    source: "Player's Handbook (2024)"
  },
  "Guard Origin": {
    name: "Guard Origin",
    category: "Origin",
    summary: "You have served as a sentinel, watchperson, or soldier, responsible for protecting a place, person, or community. Discipline and vigilance are your hallmarks.",
    effects: [
      "Ability Score Increases: +2 to one ability score and +1 to another, OR +1 to three different ability scores.",
      "Skill Proficiencies: Athletics, Perception.",
      "Tool Proficiency or Language: Choose one tool proficiency (e.g., Gaming Set) or one language.",
      "Feat: Grants one 1st-level feat.",
      "Starting Equipment: 50 gp worth of equipment (often including symbols of your former station)."
    ],
    source: "Player's Handbook (2024)"
  },
  "Guide Origin": {
    name: "Guide Origin",
    category: "Origin",
    summary: "You are skilled at navigating the wilderness or complex social landscapes, leading others through peril and unknown territories.",
    effects: [
      "Ability Score Increases: +2 to one ability score and +1 to another, OR +1 to three different ability scores.",
      "Skill Proficiencies: Nature, Survival.",
      "Tool Proficiency or Language: Choose one tool proficiency (e.g., Cartographer's Tools, Navigator's Tools) or one language.",
      "Feat: Grants one 1st-level feat.",
      "Starting Equipment: 50 gp worth of equipment (often including exploration gear)."
    ],
    source: "Player's Handbook (2024)"
  },
  "Sage Origin": {
    name: "Sage Origin",
    category: "Origin",
    summary: "You are a scholar, a researcher, or a wise individual who has dedicated themselves to the pursuit of knowledge and understanding.",
    effects: [
      "Ability Score Increases: +2 to one ability score and +1 to another, OR +1 to three different ability scores.",
      "Skill Proficiencies: Arcana, History.",
      "Tool Proficiency or Language: Choose one tool proficiency (e.g., Calligrapher's Supplies) or one language.",
      "Feat: Grants one 1st-level feat.",
      "Starting Equipment: 50 gp worth of equipment (often including books or writing materials)."
    ],
    source: "Player's Handbook (2024)"
  },
  "Custom Origin": {
    name: "Custom Origin",
    category: "Origin",
    summary: "Allows players to define their own origin by choosing ability score increases, skill proficiencies, a tool/language proficiency, and a 1st-level feat, in consultation with the DM.",
    effects: [
      "Ability Score Increases: Choose either +2 to one ability score and +1 to another, OR +1 to three different ability scores.",
      "Skill Proficiencies: Choose two skill proficiencies.",
      "Tool Proficiency or Language: Choose one tool proficiency or one language.",
      "Feat: Choose one 1st-level feat (typically from a specific list or with DM approval).",
      "Starting Equipment: 50 gp worth of equipment."
    ],
    source: "Player's Handbook (2024)"
  }
};
