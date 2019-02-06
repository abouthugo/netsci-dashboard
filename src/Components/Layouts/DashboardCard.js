import styled from 'styled-components';

const DashboardCard = styled.div`
  grid-row: ${props => props.row ? props.row : null};
  grid-column: ${props => props.column ? props.column : null};
  background: #FFFFFF;
  border: 1px solid #E5E9F2;
  border-radius: 5px;
  text-align: center;
  max-height: 98%;
  max-width: 98%;
  justify-items: center;
  padding-right: 20px;
`;

export default DashboardCard;