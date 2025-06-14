// utils/textUtils.tsx
import React from 'react';
import { Tooltip } from '../components/Tooltip';
import { MASTER_TOOLTIP_DEFINITIONS } from '../tooltipData'; 
import { StructuredTooltipData } from '../types'; // Import if needed for type clarity

// Helper to escape regex special characters
const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
};

export const addTooltipsToText = (text: string | undefined | null): React.ReactNode => {
  if (!text) return text;

  const sortedKeywords = Object.keys(MASTER_TOOLTIP_DEFINITIONS).sort((a, b) => b.length - a.length);
  
  const keywordRegex = new RegExp(`\\b(${sortedKeywords.map(escapeRegExp).join('|')})\\b`, 'gi');
  
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = keywordRegex.exec(text)) !== null) {
    const matchedTextInOriginalCase = match[0]; 

    const canonicalKey = Object.keys(MASTER_TOOLTIP_DEFINITIONS).find(
      k => k.toLowerCase() === matchedTextInOriginalCase.toLowerCase()
    );
    // Definition is now StructuredTooltipData
    const definition: StructuredTooltipData | undefined = canonicalKey ? MASTER_TOOLTIP_DEFINITIONS[canonicalKey] : undefined;

    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (definition) {
      parts.push(
        // Pass the structured data object to the Tooltip component
        <Tooltip key={`${canonicalKey}-${match.index}`} data={definition}>
          {matchedTextInOriginalCase}
        </Tooltip>
      );
    } else {
      parts.push(matchedTextInOriginalCase); 
    }
    lastIndex = keywordRegex.lastIndex; 
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.map((part, index) => <React.Fragment key={index}>{part}</React.Fragment>);
};
