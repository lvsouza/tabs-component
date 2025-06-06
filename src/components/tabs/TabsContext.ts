import { createContext } from 'react';


interface ITabsContextProps {
  value: number;
  onChange(value: number): void;
}

export const TabsContext = createContext<ITabsContextProps | undefined>(undefined);
