import { TabsContext } from './TabsContext';



interface ITabsProps {
  value: number;
  children: React.ReactNode;
  onChange(value: number): void;
}
export const Tabs = ({ children, value, onChange }: ITabsProps) => {

  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
