import { useState } from 'react'

import { TabButton, TabContent, Tabs } from './components/tabs';




export function App() {
  const [selectedTab, setSelectedTab] = useState(3);


  return (
    <>
      <Tabs value={selectedTab} onChange={(value) => setSelectedTab(value)}>
        <div>
          <TabButton value={1}>Tab 1</TabButton>
          <TabButton value={2}>Tab 2</TabButton>
          <TabButton value={3}>Tab 3</TabButton>
        </div>

        <div>
          <TabContent value={1}>
            Content tab 1
          </TabContent>
          <TabContent value={2}>
            Content tab 2
          </TabContent>
          <TabContent value={3}>
            Content tab 3
          </TabContent>
        </div>
      </Tabs>
    </>
  )
}
