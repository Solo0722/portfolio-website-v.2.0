import { ConfigProvider, theme } from "antd";
import "./App.css";
import { defaultTheme } from "./theme/appTheme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Main = lazy(() => import("./pages/Main"));

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
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
