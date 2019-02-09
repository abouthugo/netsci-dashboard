import React from 'react';
import './App.scss'; // Google Font
import Wrapper from './Components/Layouts/Wrapper';
import DashboardPanel from './Components/Layouts/DashboardPanel';
import DashboardCardsGrid from './Components/Layouts/DashboardCardsGrid';
import DashboardCard from './Components/Layouts/DashboardCard';
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import RadarChart from "./Components/RadarChart";
import { DataProvider } from "./Context";
import LeftPanel from './Components/LeftPanel';

const App = () => (
    <DataProvider>
        <Wrapper>
            <LeftPanel/>
            <DashboardPanel>
                <DashboardCardsGrid>

                    <DashboardCard column="1/3" row="1/7">
                        <PieChart/>
                    </DashboardCard>

                    <DashboardCard column="3/11" row="1/7">
                        <BarChart />
                    </DashboardCard>

                    <DashboardCard column="1/4" row="7/11">
                        <RadarChart/>
                    </DashboardCard>

                    <DashboardCard column="4/11" row="7/11">
                        <LineChart/>
                    </DashboardCard>

                </DashboardCardsGrid>
            </DashboardPanel>
        </Wrapper>
    </DataProvider>
);


export default App;
