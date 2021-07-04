import * as React from "react";
import styled from "styled-components";

interface ITabsProps {
  tabs: string[];
  defaultActiveTab?: number;
}

interface ITab {
  isActive: boolean;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  const [currentTab, setActiveTab] = React.useState(props.defaultActiveTab || 0);

  return (
    <div>
      <TabsControls className="flex mt-4">
        {props.tabs.map((tab, idx) => {
          return (
            <Tab key={tab} isActive={currentTab === idx} onClick={() => setActiveTab(idx)}>
              {tab}
            </Tab>
          );
        })}
      </TabsControls>
      <TabsContent>
        {React.Children.map(props.children, (child, i) => {
          if (i === currentTab) {
            return child;
          }
        })}
      </TabsContent>
    </div>
  );
};

const TabsControls = styled.div`
  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Tab = styled.div`
  color: ${(props: ITab) => (props.isActive ? "var(--green-color)" : "")};
  border-bottom: ${(props: ITab) => (props.isActive ? "1px solid var(--green-color)" : "none")};
  padding: 0.5rem 1rem;
  transition: 0.5s;
  cursor: pointer;
`;

const TabsContent = styled.div``;

export default Tabs;
