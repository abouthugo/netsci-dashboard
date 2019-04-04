import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: 2fr 20fr;
  grid-template-areas: 
  "side dash" ;
  grid-gap: 10px 10px;
  background: #F5F6FA;
  min-height: 99vh;
  max-height: 100vh;
  min-width: 99vw;
  max-width: 100vw;
`;
export default Wrapper;