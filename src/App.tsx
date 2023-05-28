import { ConfigProvider, theme } from "antd";
import "./App.css";
import Main from "./pages/Main";
import { defaultTheme } from "./theme/appTheme";
import { GlobalStyles } from "./theme/GlobalStyles";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: `${defaultTheme.primaryColor}`,
          colorText: `${defaultTheme.accentColor}`,
          colorBgContainer: `${defaultTheme.black}`,
          fontFamily: "Montserrat, sans-serif",
          borderRadius: 4,
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <GlobalStyles />
      <Main />
    </ConfigProvider>
  );
}

export default App;
