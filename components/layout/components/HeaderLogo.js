import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>Seva</Logo>
  )
}

const Logo = styled.h1`
  color: #3a6794;
  font-weight: 600;
  font-size: 30px;
  background-color: darkgrey;
  border: 5px solid black;
  line-height: 0.65;
  font-family: 'Lobster', cursive;
`

export default HeaderLogo