import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <div>FE test Eduqat</div>
      </>
    </ThemeProvider>
  );
}

export default App;
