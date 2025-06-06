import { useContext } from 'react';
import { TabsContext } from './TabsContext';



interface ITabButtonProps {
  value: number;
  children: React.ReactNode;
}
export const TabButton = ({ children, value }: ITabButtonProps) => {
  const tabsContext = useContext(TabsContext);


  return (
    <button onClick={() => tabsContext?.onChange(value)}>
      {children}
    </button>
  );
}
