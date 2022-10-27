import styled from "styled-components";

const HeaderStyled = styled.header`
  /* display: flex;
justify-content: center;
align-items: center; */
  background-color: ${({ theme }) => theme.colors.header};
  padding: 4rem 0rem;
`;

export const Logo = styled.img`
  width: 300px;
  padding: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export const Image = styled(Logo)`
  width: 300px;
  padding: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 2rem 0;
  }
`;
export const Div = styled.div`
  text-align: center;
`;

export default HeaderStyled;
