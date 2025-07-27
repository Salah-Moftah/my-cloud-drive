'use client';

import { createContext, useContext, useState } from "react";

const SidePanelContext = createContext();

export const SidePanelProvider = ({ children }) => {
  const [activePanel, setActivePanel] = useState(null);
  
  return (
    <SidePanelContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </SidePanelContext.Provider>
  );
};

export const useSidePanel = () => useContext(SidePanelContext);