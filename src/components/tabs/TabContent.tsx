import { useContext } from 'react';
import { TabsContext } from './TabsContext';



interface ITabContentProps {
  value: number;
  children: React.ReactNode;
}
export const TabContent = ({ children, value }: ITabContentProps) => {
  const tabsContext = useContext(TabsContext);


  if (tabsContext?.value !== value) return null;

  return (
    <div>
      {children}
    </div>
  );
}
