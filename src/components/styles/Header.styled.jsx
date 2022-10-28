import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  /* padding: 1rem 2rem; */
  margin: 1rem;
  box-shadow: inset 5px 5px 30px black, 5px 5px 10px black;
`;

export const Logo = styled.img`
  width: 300px;
  padding: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  background-color: #a209a21f;

  align-items: center;
  box-shadow: inset 5px 5px 30px black, 5px 5px 10px black;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 500px;
  padding: 2rem;
  border-radius: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 2rem 0;
  }
`;

export default StyledHeader;

export const Footerr = styled(Nav)`
  height: 4rem;
  justify-content: space-around;
  font-size: 1.5rem;
  color: #575555;
  box-shadow: inset 5px 5px 30px black, 5px 5px 10px black;
  background-color: #a209a21f;
  padding: 3rem;
`;
