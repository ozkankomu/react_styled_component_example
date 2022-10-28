import React from "react";
import data from "../data";
import { CardDiv, Container } from "./styles/Cards.styled";
import Flex from "./styles/Flex.styled";
import { Image } from "./styles/Header.styled";

const Cards = () => {
  return (
    <CardDiv>
      {data.map((item) => {
        const { id, title, body, image } = item;
        return (
          <Container key={id}>
            <Flex>
              <div>
                <Image src={`./images/${item.image}`} alt="image" />
              </div>
              <div>
                <div>
                  <h2>{title}</h2>
                  <p>{body}</p>
                  <p>
                    <small className="text-muted">
                      Created with Bootstrap and Styled-components
                    </small>
                  </p>
                </div>
              </div>
            </Flex>
          </Container>
        );
      })}
    </CardDiv>
  );
};

export default Cards;
