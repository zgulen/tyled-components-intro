import Button, { TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled"
import Header from "./components/Header.styled"
import StyledLink from "./components/Link.style"

const App = () => {
  return <div>
    <Container bg="green">
      <Header color={"white"}>Styled Component</Header>
      <Button primary>Click</Button>
      <Button >Click</Button>
      <TomatoButton primary>Click</TomatoButton>
      <TomatoButton>Click</TomatoButton>
      <Header >Styled Component</Header>
      <StyledLink href="https://www.clarusway.com" target={"_blank"}>Clarusway</StyledLink>
      <StyledLink href="https://www.clarusway.com" target={"_blank"} secondary>Clarusway</StyledLink>
    </Container>

  </div>
};

export default App;
