import Button from "./styles/Button.styled";
import Flex from "./styles/Flex";
import HeaderStyled, { Div, Image, Logo, Nav } from "./styles/Headerstyled";

<Button>Apply Courses</Button>;
const Header = () => {
  return (
    <HeaderStyled>
      <Nav>
        <Logo src="./images/logo.png" />
        <div>
          <Button color="darkred">Apply Courses</Button>
          <Button bg="darkred">Apply Courses</Button>
        </div>
      </Nav>
      <Flex>
        <Div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <Button bg="#A62440">Start Your New Carier</Button>
        </Div>
        <Image src="./images/hero.jpg"></Image>
      </Flex>
    </HeaderStyled>
  );
};

export default Header;
