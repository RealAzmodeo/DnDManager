// data/tooltip_definitions/backgrounds.ts
import { StructuredTooltipData } from '../../types';

export const backgroundsTooltips: Record<string, StructuredTooltipData> = {
  "Urchin": {
    name: "Urchin",
    category: "Background",
    summary: "Represents a character who grew up in the harsh conditions of city streets, relying on wits and agility to survive.",
    effects: ["Grants proficiency in Sleight of Hand and Stealth skills.", "Grants proficiency with the disguise kit and thieves' tools."],
    additionalDetails: { feature: "City Secrets: You know the secret patterns and flow of cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow." },
    source: "Player's Handbook"
  },
  "Acolyte": {
    name: "Acolyte",
    category: "Background",
    summary: "Represents a character who has spent their life in service to a temple, learning its rites and a deep understanding of its faith.",
    effects: ["Grants proficiency in Insight and Religion skills.", "Grants two bonus languages."],
    additionalDetails: { feature: "Shelter of the Faithful: As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle." },
    source: "Player's Handbook"
  },
  "Sage": {
    name: "Sage",
    category: "Background",
    summary: "Represents a character driven by a thirst for knowledge, having spent years in academic or reclusive study.",
    effects: ["Grants proficiency in Arcana and History skills.", "Grants two bonus languages."],
    additionalDetails: { feature: "Researcher: When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found." },
    source: "Player's Handbook"
  },
  "Noble": {
    name: "Noble",
    category: "Background",
    summary: "Indicates a character of high social standing, accustomed to wealth, power, and privilege.",
    effects: ["Grants proficiency in History and Persuasion skills.", "Grants proficiency with one type of gaming set.", "Grants one bonus language."],
    additionalDetails: { feature: "Position of Privilege: Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to." },
    source: "Player's Handbook"
  },
  "Knight": {
    name: "Knight",
    category: "Background Variant (Noble)",
    summary: "Represents a character who has served as a knight, often part of a noble house or a chivalric order, possibly as a retainer.",
    effects: ["Typically grants proficiencies related to martial pursuits or social interaction, similar to Noble or Soldier. Often includes proficiency with a gaming set or musical instrument, and one bonus language."],
    additionalDetails: { feature: "Retainers: You have the service of three retainers loyal to your family. These retainers can be attendants, messengers, or similar. They are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused." },
    source: "Player's Handbook (Noble variant)"
  },
  "Soldier": {
    name: "Soldier",
    category: "Background",
    summary: "Indicates a character with formal military experience, familiar with army life, chain of command, and strategy.",
    effects: ["Grants proficiency in Athletics and Intimidation skills.", "Grants proficiency with one type of gaming set and land vehicles."],
    additionalDetails: { feature: "Military Rank: You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized." },
    source: "Player's Handbook"
  },
  "Hermit": {
    name: "Hermit",
    category: "Background",
    summary: "Represents a character who has lived in seclusion, either for spiritual reasons, personal study, or to escape society.",
    effects: ["Grants proficiency in Medicine and Religion skills.", "Grants proficiency with the herbalism kit.", "Grants one bonus language."],
    additionalDetails: { feature: "Discovery: The quiet seclusion and extensive study of your hermitage allowed you to uncover a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature." },
    source: "Player's Handbook"
  },
};
