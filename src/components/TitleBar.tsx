import React from "react";
import { defaultTheme } from "../theme/appTheme";
import styled from "styled-components";

export interface IProps {
  title: string;
  number: number;
}

const TitleBar = ({ title, number }: IProps) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  & h2 {
    color: ${defaultTheme.primaryColor};
    font-size: 1rem;
    font-family: "Zilla Slab";
    font-weight: normal;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    white-space: nowrap;
  }

  & h2::before {
    position: relative;
    bottom: 0px;
    counter-increment: section 1;
    content: "0" counter(div) ".";
    margin-right: 10px;
  }
  & h2::after {
    content: "";
    display: block;
    position: relative;
    top: 0px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: rgba(230, 230, 255, 0.5);
  }
`;

export default TitleBar;
