import React from 'react';
import NavButton from '../NavButton';
import SidePanel from '../Layouts/SidePanel';
import { DataContext } from '../../Context';

const LeftPanel = () => (
    <SidePanel>
        <DataContext.Consumer>
            { context =>
                <>
                    <NavButton onClick={ context.buildCharts }>ALL</NavButton>
                    <NavButton onClick={ context.randomPie }>Pie</NavButton>
                    <NavButton onClick={ context.randomLine }>Line</NavButton>
                    <NavButton onClick={ context.randomBar }>Bar</NavButton>
                    <NavButton onClick={ context.randomRadar }>Radar</NavButton>
                </>
            }
        </DataContext.Consumer>
    </SidePanel>
);

export default LeftPanel;
