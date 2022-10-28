import styled from "styled-components";

const Flex = styled.div`
  margin: 0.5 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${({ id }) => (id % 2 ? "row" : "row-reverse")};
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;
