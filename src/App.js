import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globalstyled";

const theme = {
  colors: {
    header: "#fff",
    body: "#eee",
    footer: "#8A1C4A",
  },
  margins: {},
  responsive: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
