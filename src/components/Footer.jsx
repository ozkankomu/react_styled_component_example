import React from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { Card } from "./styles/Cards.styled";
import { Footerr } from "./styles/Header.styled";
const Footer = () => {
  return (
    <Footerr>
      <div>Copyright {new Date().getFullYear()}</div>
      <div>Created By Ozkan with Styled-Components-React</div>
      <Card>
        <GrLinkedin />
        <GrGithub />
        <GrMail />
      </Card>
    </Footerr>
  );
};

export default Footer;
