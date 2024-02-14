import React, { createContext, useContext, useState } from "react";

//Menu custom hook 
// eslint-disable-next-line react-refresh/only-export-components
export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
      throw new Error("useMenu debe ser usado dentro de un MenuProvider");
    }
    return context;
  };
  
// Type for the menu state
type MenuState = {
  isOpen: boolean;
  toggleMenu: () => void;
};
type MenuProviderProps = {
    children: React.ReactNode;
}
  
// Create context
const MenuContext = createContext<MenuState | undefined>(undefined);

// Context provider
export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuState: MenuState = {
    isOpen,
    toggleMenu,
  };

  return <MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>;
};

