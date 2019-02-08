import React from 'react';
import './App.scss'; // main utilities, grid and stuff
import Wrapper from './Components/Layouts/Wrapper';
import SidePanel from './Components/Layouts/SidePanel';
import DashboardPanel from './Components/Layouts/DashboardPanel';
import NavButton from './Components/NavButton';
import DashboardCardsGrid from './Components/Layouts/DashboardCardsGrid';
import DashboardCard from './Components/Layouts/DashboardCard';
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import RadarChart from "./Components/RadarChart";

const App = () => (
        <Wrapper>
            <SidePanel>
                   <NavButton href="/">Hey!</NavButton>
                   <NavButton href="/">Hey!</NavButton>
            </SidePanel>
            <DashboardPanel>
                <DashboardCardsGrid>
                    <DashboardCard column="1/3" row="1/7">
                        <PieChart/>
                    </DashboardCard>
                    <DashboardCard column="1/3" row="7/11">
                        <RadarChart />
                    </DashboardCard>
                    <DashboardCard column="3/11" row="1/7">
                        <BarChart x={20} />
                    </DashboardCard>
                    <DashboardCard column="3/11" row="7/11">
                        <LineChart />
                    </DashboardCard>
                </DashboardCardsGrid>
            </DashboardPanel>
        </Wrapper>
);



export default App;
