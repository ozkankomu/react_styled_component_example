import styled from "styled-components";

const Button = styled.button`
  background: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid darkred;
  border-radius: 1rem;
  box-shadow: 0 0 10px black;
  padding: 1rem 1.2rem;
  font-size: 1.1 rem;
  margin-right: 0.5rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
`;

export default Button;
