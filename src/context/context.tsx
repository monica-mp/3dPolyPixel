import { createContext, ReactNode, useContext } from "react";

// Creation of the context
const Context = createContext<ContextProps | undefined>(undefined)

// Custom hook to consume the context
export const useElements: () => ContextProps = (): ContextProps => { // eslint-disable-line react-refresh/only-export-components
  const context = useContext(Context)
  if (context == null) {
    throw new Error('useElements must be used within a ContextProvider')
  }
  return context
}

// Properties of the context provider
interface Props{
    children: ReactNode
}

// Definition of the properties of the context
interface ContextProps {
  
}




export const ContextProvider: React.FC<Props> = ({children}) =>{
   

    

    const contextValue: ContextProps = {
        
    }
    
    
    return (
      
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    )

}

export default Context