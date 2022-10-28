import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  font-size: 2rem;
  color: darkred;
`;

export const Container = styled.div`
  box-shadow: inset 5px 5px 30px black, 5px 5px 10px black;
  margin: 1rem;
  padding: 1rem;

  text-align: center;
`;
