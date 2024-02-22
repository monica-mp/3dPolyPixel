/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react';
import { Model } from '../types';

// Creation of the context
const Context = createContext<ContextProps | undefined>(undefined);

// Custom hook to consume the context
export const useElements: () => ContextProps = (): ContextProps => {
  const context = useContext(Context);
  if (context == null) {
    throw new Error('useElements must be used within a ContextProvider');
  }
  return context;
};

// Properties of the context provider
interface Props {
  children: ReactNode;
}

// Definition of the properties of the context
interface ContextProps {
  models: Model[]; 
  handleClick: (model: Model) => void;
  selectedModel: Model | null;
  handleClose: () => void;
  getRandomNumber: () => number;
  getRandomYesOrNo: () => string;
}



const fetchModels = async () => {
  try {
    const response = await fetch('https://api.sketchfab.com/v3/models?sort_by=createdAt&archives_flavours=false&count=24', {
      headers: {
        'Authorization': 'Token 2b0661d037194c9ba118589821290f3c'
      }
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.results);
      return data.results;
    } else {
      throw new Error('Failed to fetch models');
    }
  } catch (error) {
    console.error('Error fetching models:', error);
    return [];
  }
};


export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);  
  
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

  const getRandomYesOrNo = () => {
    return Math.random() < 0.5 ? 'Yes' : 'No';
  }
  useEffect(() => {
    fetchModels().then((fetchedModels) => {
      setModels(fetchedModels);
    });
  }, []); 

  

    const handleClick = (model: Model | null): void => {
        setSelectedModel(model); 
    };
  
    const handleClose = () => {
      handleClick(null);
  };

  const contextValue: ContextProps = {
    models,
    handleClick,
    selectedModel,
    handleClose,
    getRandomNumber,
    getRandomYesOrNo
  };

  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  );
};

export default Context;
