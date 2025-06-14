
import React from 'react';
import { StructuredTooltipData, TooltipDamageInstance, TooltipSaveInfo } from '../types';
import { addTooltipsToText } from '../utils/textUtils';
import { useTooltipModal } from './TooltipModalContext';

const renderDetailForModal = (
  label: string, 
  contextFn: (text: string) => React.ReactNode,
  value?: string | number | string[] | TooltipDamageInstance[] | TooltipSaveInfo | Record<string, string> 
) => {
    if (value === undefined || value === null || (Array.isArray(value) && value.length === 0 && label !== "Components" && label !== "Tags") || (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) ) {
        // Allow empty arrays for Components and Tags to render the label if needed, but not for others.
         if (Array.isArray(value) && (label === "Components" || label === "Tags") && value.length === 0) {
            // Render label for empty Components/Tags if desired, or return null
         } else if (typeof value === 'object' && !Array.isArray(value) && label === "Additional Details" && Object.keys(value).length === 0) {
            // Don't render empty additional details
         }
         else if (value === undefined || value === null || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0 && label !== "Additional Details" )) {
            return null;
         }
    }


    let displayValue: React.ReactNode;

    if (label === "Damage" && Array.isArray(value)) {
      displayValue = (
        <ul className="list-disc list-inside pl-1">
          {(value as TooltipDamageInstance[]).map((d, i) => (
            <li key={i}>{d.dice ? `${d.dice} ` : ''}{contextFn(d.type)}{d.notes ? contextFn(` (${d.notes})`) : ''}</li>
          ))}
        </ul>
      );
    } else if (label === "Save Info" && typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const si = value as TooltipSaveInfo;
      displayValue = contextFn(`${si.attribute}${si.dc ? ` DC ${si.dc}` : ''}${si.effectOnSuccess ? `. Success: ${si.effectOnSuccess}` : ''}${si.effectOnFailure ? `. Failure: ${si.effectOnFailure}` : ''}`);
    } else if (Array.isArray(value)) {
       displayValue = (
        <ul className="list-disc list-inside pl-1">
          {value.map((item, index) => (
            <li key={index}>{contextFn(String(item))}</li>
          ))}
        </ul>
      );
      // Heuristic for short inline lists like Components or Tags
      if (value.every(item => typeof item === 'string') && value.length > 0 && value.length <= 4 && (label === "Components" || label === "Tags")) { 
        displayValue = contextFn(value.join(', '));
      } else if (value.length === 0 && (label === "Components" || label === "Tags")){
        displayValue = contextFn("None"); // Or some other placeholder
      }
    } else if (label === "Additional Details" && typeof value === 'object' && value !== null) { 
        displayValue = (
            <ul className="list-none pl-1 space-y-0.5">
                {Object.entries(value).map(([k,v]) => <li key={k}><strong className="font-medium text-slate-300">{contextFn(k)}:</strong> {contextFn(v)}</li>)}
            </ul>
        );
    }
    else {
      displayValue = contextFn(String(value));
    }
    
    return (
      <div className="text-sm my-1 py-1 border-b border-slate-700/50 last:border-b-0">
        <strong className="text-slate-400 min-w-[120px] inline-block align-top">{label ? `${label}:` : ''}</strong>
        <span className="text-slate-200 ml-1.5">{displayValue}</span>
      </div>
    );
};


export const TooltipModal: React.FC = () => {
  const { modalData, isModalVisible, hideModal } = useTooltipModal();

  if (!isModalVisible || !modalData) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      hideModal();
    }
  };

  React.useEffect(() => {
    if (isModalVisible) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalVisible, hideModal]);

  const renderWithTooltips = (text: string | undefined | null): React.ReactNode => {
    if (!text) return null;
    return addTooltipsToText(text);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-[10000] p-4 backdrop-blur-sm"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tooltip-modal-title"
    >
      <div className="bg-slate-800 p-5 md:p-6 rounded-xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-600 ring-1 ring-sky-500/30">
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-700">
          <h3 id="tooltip-modal-title" className="text-xl md:text-2xl font-semibold text-sky-300" style={{ fontFamily: "'Merriweather', serif" }}>
            {renderWithTooltips(modalData.name)}
          </h3>
          <button 
            onClick={hideModal} 
            className="text-slate-400 hover:text-sky-300 text-3xl leading-none p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Close tooltip details"
          >
            &times;
          </button>
        </div>
        {modalData.category && <div className="text-xs italic text-slate-500 mb-3">Category: {renderWithTooltips(modalData.category)}</div>}
        <p className="text-slate-300 leading-relaxed mb-5 text-sm md:text-base">{renderWithTooltips(modalData.summary)}</p>
        
        <div className="mt-3 space-y-1">
          {renderDetailForModal("Level", renderWithTooltips, modalData.level)}
          {renderDetailForModal("School", renderWithTooltips, modalData.school)}
          {renderDetailForModal("Casting Time", renderWithTooltips, modalData.castingTime)}
          {renderDetailForModal("Range", renderWithTooltips, modalData.range)}
          {renderDetailForModal("Area", renderWithTooltips, modalData.area)}
          {renderDetailForModal("Components", renderWithTooltips, modalData.components)}
          {renderDetailForModal("Duration", renderWithTooltips, modalData.duration)}
          {renderDetailForModal("Damage", renderWithTooltips, modalData.damage)}
          {renderDetailForModal("Healing", renderWithTooltips, modalData.healing)}
          {renderDetailForModal("Save Info", renderWithTooltips, modalData.saveInfo)}
          {renderDetailForModal("Effects", renderWithTooltips, modalData.effects)}
          {renderDetailForModal("Conditions Applied", renderWithTooltips, modalData.conditionsApplied)}
          {renderDetailForModal("Recharge", renderWithTooltips, modalData.recharge)}
          {renderDetailForModal("Prerequisites", renderWithTooltips, modalData.prerequisites)}
          {renderDetailForModal("Tags", renderWithTooltips, modalData.tags)}
          {renderDetailForModal("Governing Ability", renderWithTooltips, modalData.governingAbility)}
          {renderDetailForModal("Rules", renderWithTooltips, modalData.rules)}
          {renderDetailForModal("Numerical Value", renderWithTooltips, modalData.numericalValue)}
          {renderDetailForModal("Source", renderWithTooltips, modalData.source)}
          {modalData.additionalDetails && Object.keys(modalData.additionalDetails).length > 0 && (
            <div className="mt-2 pt-2 border-t border-slate-700/50">
                {renderDetailForModal("Additional Details", renderWithTooltips, modalData.additionalDetails)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
