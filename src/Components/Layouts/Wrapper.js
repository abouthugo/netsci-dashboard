import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 
  "side dash dash dash dash"
  "side dash dash dash dash"
  "side dash dash dash dash"
  "side dash dash dash dash";
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background: rgba(40,100,200,0.2);
`;
export default Wrapper;