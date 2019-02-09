import styled from 'styled-components';

const NavButton = styled.button`
  border: 1px solid orangered;
  border-radius: 5px;
  //justify-self: center;
  //align-self: center;
  padding: 5px 20px;
  margin: 10px 5px;
  &:hover{
    background: greenyellow;
  }
  &:focus{
    outline: none;
    background: greenyellow;
    border: 1px solid greenyellow;
  }
`;

export default NavButton;