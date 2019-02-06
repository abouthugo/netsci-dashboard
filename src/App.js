import React from 'react';
import './App.scss'; // main utilities, grid and stuff
import Wrapper from './Components/Layouts/Wrapper';
import SidePanel from './Components/Layouts/SidePanel';
import DashboardPanel from './Components/Layouts/DashboardPanel';
import NavButton from './Components/NavButton';
import DashboardCardsGrid from './Components/Layouts/DashboardCardsGrid';
import DashboardCard from './Components/Layouts/DashboardCard';
import BarChart from "./Components/BarChart";
const App = () => (
        <Wrapper>
            <SidePanel>
                   <NavButton href="/">Hey!</NavButton>
                   <NavButton href="/">Hey!</NavButton>
            </SidePanel>
            <DashboardPanel>
                <DashboardCardsGrid>
                    <DashboardCard row="1/4">
                        <BarChart x={3} />
                    </DashboardCard>
                    <DashboardCard row="4/6">
                        <BarChart x={2} />
                    </DashboardCard>
                    <DashboardCard column="2/6" row="1/4">
                        <BarChart x={20} />
                    </DashboardCard>
                    <DashboardCard column="2/6" row="4/6">
                        <BarChart x={12} />
                    </DashboardCard>
                </DashboardCardsGrid>
            </DashboardPanel>
        </Wrapper>
);



export default App;
