
import React, { createContext, useContext, useState, useCallback } from 'react';
import { StructuredTooltipData } from '../types';

interface TooltipModalContextType {
  showModal: (data: StructuredTooltipData) => void;
  hideModal: () => void;
  modalData: StructuredTooltipData | null;
  isModalVisible: boolean;
}

const TooltipModalContext = createContext<TooltipModalContextType | undefined>(undefined);

export const TooltipModalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [modalData, setModalData] = useState<StructuredTooltipData | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback((data: StructuredTooltipData) => {
    setModalData(data);
    setIsModalVisible(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsModalVisible(false);
    // Optionally delay clearing data for fade-out animations if added
    // setTimeout(() => setModalData(null), 300); 
    setModalData(null); 
  }, []);

  return (
    <TooltipModalContext.Provider value={{ showModal, hideModal, modalData, isModalVisible }}>
      {children}
    </TooltipModalContext.Provider>
  );
};

export const useTooltipModal = () => {
  const context = useContext(TooltipModalContext);
  if (context === undefined) {
    throw new Error('useTooltipModal must be used within a TooltipModalProvider');
  }
  return context;
};