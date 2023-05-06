import React from "react";
import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./appTheme";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior:smooth;
  /* overflow-x:hidden; */
}

body {
  width: 100%;
  height: 100%;
  background-color:${defaultTheme.black};
  color:${defaultTheme.accentColor};
  font-family: 'Poppins', sans-serif;
  transition:all 0.20s linear;
  scroll-behavior:smooth;
  overflow-x:hidden;
  position:relative;

}

p{
  font-weight: 200;
    font-size: 14px;
}

small{
  font-weight: 100;
    font-size: 12px;
}



::-webkit-scrollbar {
  width: 5px;
  height:5px;
}

::-webkit-scrollbar-track {
  background-image: linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(255,255,255,0.5));
}

::-webkit-scrollbar-thumb {
  border-radius:20px;
  background-color:#000;
}

::-webkit-scrollbar-thumb:hover {
  background-color:rgba(20,20,20,0.5);
}

`;
