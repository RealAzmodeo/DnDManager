
import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { StructuredTooltipData, TooltipDamageInstance, TooltipSaveInfo } from '../types'; 
import { addTooltipsToText } from '../utils/textUtils';
import { useTooltipModal } from './TooltipModalContext'; // Added for modal functionality

interface TooltipProps {
  data: StructuredTooltipData; 
  children: React.ReactNode; 
}

export const Tooltip: React.FC<TooltipProps> = ({ data, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, opacity: 0 });
  const targetRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null); 
  const { showModal } = useTooltipModal(); // Get the function from context
  
  const tooltipId = useMemo(() => `tooltip-${data.name.replace(/\s+/g, '-')}-${Math.random().toString(36).substring(2, 9)}`, [data.name]);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const handleTriggerClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault(); // Prevent any default span behavior if it were a link, etc.
    e.stopPropagation(); // Stop event from bubbling up, e.g. if tooltip is inside another clickable element.
    showModal(data);
    setIsVisible(false); // Hide hover tooltip when modal opens
  };

  useLayoutEffect(() => {
    if (isVisible && targetRef.current && tooltipRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipNode = tooltipRef.current;
      // Force a reflow if dimensions are zero, to get accurate measurements
      if (tooltipNode.offsetWidth === 0 || tooltipNode.offsetHeight === 0) {
        tooltipNode.style.display = 'block'; // Temporarily ensure it's rendered
        tooltipNode.style.visibility = 'hidden'; // But not visible
      }
      const tooltipRect = tooltipNode.getBoundingClientRect();
       if (tooltipNode.style.display === 'block' && tooltipNode.style.visibility === 'hidden') {
         tooltipNode.style.display = ''; // Reset
         tooltipNode.style.visibility = ''; // Reset
       }


      if (tooltipRect.width === 0 || tooltipRect.height === 0) {
        setPosition(prev => ({ ...prev, opacity: 0 }));
        return;
      }

      const preferredOffset = 8; 
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      let newLeft = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
      newLeft = Math.max(preferredOffset, Math.min(newLeft, viewportWidth - tooltipRect.width - preferredOffset));

      let newTop;
      const spaceAboveTarget = targetRect.top;
      const spaceBelowTarget = viewportHeight - targetRect.bottom;

      if (spaceAboveTarget >= tooltipRect.height + preferredOffset) {
        newTop = targetRect.top - tooltipRect.height - preferredOffset;
      } else if (spaceBelowTarget >= tooltipRect.height + preferredOffset) {
        newTop = targetRect.bottom + preferredOffset;
      } else if (spaceAboveTarget > spaceBelowTarget) { // Prioritize above if both are tight
         newTop = Math.max(preferredOffset, targetRect.top - tooltipRect.height - preferredOffset);
      } else { // Then below
         newTop = Math.min(viewportHeight - tooltipRect.height - preferredOffset, targetRect.bottom + preferredOffset);
      }
      // Final adjustment to ensure it's within viewport bounds if previous logic failed
      newTop = Math.max(preferredOffset, Math.min(newTop, viewportHeight - tooltipRect.height - preferredOffset));
      
      setPosition({ top: newTop, left: newLeft, opacity: 1 });
    } else if (!isVisible) {
      setPosition(prev => ({ ...prev, opacity: 0 }));
    }
  }, [isVisible, data]); // Re-run if data changes, as tooltip size might change

  // This renderDetail is for the hover/focus tooltip. Modal has its own.
 const renderDetail = (label: string, value?: string | number | string[] | TooltipDamageInstance[] | TooltipSaveInfo | Record<string, string>) => {
    if (value === undefined || value === null || (Array.isArray(value) && value.length === 0 && label !== "Components" && label !== "Tags") || (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) ) {
         if (Array.isArray(value) && (label === "Components" || label === "Tags") && value.length === 0) {
            // Allow empty for specific labels
         } else if (typeof value === 'object' && !Array.isArray(value) && label === "Additional Details" && Object.keys(value).length === 0) {
            // Don't render empty additional details
         }
         else if (value === undefined || value === null || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0 && label !== "Additional Details" )) {
            return null;
         }
    }


    let displayValue: React.ReactNode;
    const renderWithNestedTooltips = (text: string | undefined | null): React.ReactNode => text ? addTooltipsToText(text) : null;


    if (label === "Damage" && Array.isArray(value)) {
      displayValue = (
        <ul className="list-disc list-inside pl-1">
          {(value as TooltipDamageInstance[]).map((d, i) => (
            <li key={i}>{d.dice ? `${d.dice} ` : ''}{renderWithNestedTooltips(d.type)}{d.notes ? renderWithNestedTooltips(` (${d.notes})`) : ''}</li>
          ))}
        </ul>
      );
    } else if (label === "Save Info" && typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const si = value as TooltipSaveInfo;
      displayValue = renderWithNestedTooltips(`${si.attribute}${si.dc ? ` DC ${si.dc}` : ''}${si.effectOnSuccess ? `. Success: ${si.effectOnSuccess}` : ''}${si.effectOnFailure ? `. Failure: ${si.effectOnFailure}` : ''}`);
    } else if (Array.isArray(value)) {
       displayValue = (
        <ul className="list-disc list-inside pl-1">
          {value.map((item, index) => (
            <li key={index}>{renderWithNestedTooltips(String(item))}</li>
          ))}
        </ul>
      );
      if (value.every(item => typeof item === 'string') && value.length > 0 && value.length <= 4 && (label === "Components" || label === "Tags")) { 
        displayValue = renderWithNestedTooltips(value.join(', '));
      } else if (value.length === 0 && (label === "Components" || label === "Tags")){
        displayValue = renderWithNestedTooltips("None");
      }
    } else if (label === "Additional Details" && typeof value === 'object' && value !== null) { 
        displayValue = (
            <ul className="list-none pl-1 space-y-0.5">
                {Object.entries(value).map(([k,v]) => <li key={k}><strong className="font-medium text-slate-400">{renderWithNestedTooltips(k)}:</strong> {renderWithNestedTooltips(v)}</li>)}
            </ul>
        );
    }
    else {
      displayValue = renderWithNestedTooltips(String(value));
    }
    
    return (
      <div className="text-xs">
        <strong className="text-slate-400">{label ? `${label}:` : ''}</strong>
        <span className="text-slate-300 ml-1">{displayValue}</span>
      </div>
    );
  };

  const tooltipContent = (
    <div className="space-y-1.5">
      <h4 className="text-base font-semibold text-sky-300 mb-1 pb-1 border-b border-slate-700">{addTooltipsToText(data.name)}</h4>
      {data.category && <div className="text-xs italic text-slate-500 mb-1">Category: {addTooltipsToText(data.category)}</div>}
      <p className="text-sm text-slate-200 leading-relaxed">{addTooltipsToText(data.summary)}</p>
      
      {/* Reduced details for hover tooltip to keep it concise, modal shows all */}
      <div className="mt-2 pt-2 border-t border-slate-700/50 space-y-1">
        {renderDetail("Level", data.level)}
        {renderDetail("Casting Time", data.castingTime)}
        {renderDetail("Range", data.range)}
        {data.damage && data.damage.length > 0 && renderDetail("Damage", data.damage)}
        {data.saveInfo && renderDetail("Save Info", data.saveInfo)}
        {/* Add more key details if desired for hover, but keep it shorter than modal */}
      </div>
    </div>
  );

  const tooltipElement = isVisible && data ? (
    <div
      ref={tooltipRef}
      role="tooltip" 
      id={tooltipId}
      className="fixed z-[9999] px-3 py-2 text-sm font-medium text-slate-100 bg-slate-800 rounded-lg shadow-xl transition-opacity duration-200 ease-in-out max-w-xs border border-slate-700 pointer-events-none"
      style={{ 
        top: `${position.top}px`, 
        left: `${position.left}px`,
        opacity: position.opacity,
        maxWidth: 'min(320px, calc(100vw - 32px))', 
      }}
    >
      {tooltipContent}
    </div>
  ) : null;

  return (
    <span 
      ref={targetRef}
      onMouseEnter={showTooltip} 
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onClick={handleTriggerClick} // Added click handler
      tabIndex={0} 
      className="inline-block cursor-pointer border-b border-dotted border-sky-500/70 text-sky-400 hover:text-sky-400 focus:outline-sky-400 focus:outline-offset-1 focus:border-sky-400"
      aria-describedby={isVisible ? tooltipId : undefined} // For hover tooltip
      role="button" // Changed role
      aria-haspopup="dialog" // Indicates it opens a dialog
    >
      {children} 
      {tooltipElement && ReactDOM.createPortal(tooltipElement, document.body)}
    </span>
  );
};