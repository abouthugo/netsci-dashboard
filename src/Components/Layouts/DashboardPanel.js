import React from 'react';
import styled from 'styled-components';

/**
 * Division wrapper for panel section
 */
const DashboardPanel = styled.section`
  grid-area: dash;
`;

/**
 * 10x10 grid
 */
const Grid = styled.div`
margin: 10px 20px 0 20px;
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(10, 1fr);
min-height: 97%;
grid-gap: 20px;
`;

export default ({children}) => (
  <DashboardPanel>
    <Grid>{children}</Grid>
  </DashboardPanel>
);