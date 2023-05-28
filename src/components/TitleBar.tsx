import React from "react";
import { defaultTheme } from "../theme/appTheme";
import styled from "styled-components";

export interface IProps {
  title: string;
}

const TitleBar = ({ title }: IProps) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  h2 {
    font-family: "Lobster Two", "Montserrat", sans-serif;
    margin: 1rem 0;
    position: relative;
    width: 100%;
    white-space: nowrap;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  h2::after {
    content: "";
    display: block;
    position: relative;
    top: 0px;
    width: 300px;
    height: 1px;
    margin-left: 10px;
    background-color: rgba(230, 230, 255, 0.5);
  }
`;

export default TitleBar;
