import styled from 'styled-components';

const DashboardCardsGrid = styled.div`
  margin: 10px 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  min-height: 97%;
  grid-gap: 20px;
`;

export default DashboardCardsGrid;