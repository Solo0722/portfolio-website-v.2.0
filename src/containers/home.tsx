import React from "react";
import styled from "styled-components";
import heroImg from "../assets/images/img.jpg";
import { defaultTheme } from "../theme/appTheme";
import { Button } from "antd";

const Home = () => {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <DescriptionWrapper>
          <small>Hey there, I'm</small>
          <h1>
            Solomon <br />
            Owusu-Ansah
          </h1>
          <p className="desc">A frontend software developer</p>
          <ButtonsWrapper>
            <button className="css-button-sliding-to-left--black">
              View my work
            </button>
            <button className="css-button-sliding-to-left--black">
              Download Resume
            </button>
          </ButtonsWrapper>
        </DescriptionWrapper>
        <HeroImageWrapper>
          <img src={heroImg} alt="" />
        </HeroImageWrapper>
      </ContentWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  padding: 6rem;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  /* text-align: center; */
  width: 100%;
  height: 100%;
`;

const DescriptionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    font-weight: 800;
    font-size: 4rem;
    line-height: 4rem;
    margin: 1rem 0;
    font-family: "Zilla Slab", "LibreBaskerville";
    color: ${defaultTheme.primaryColor};
  }

  & small {
    /* margin: 1.5rem 0; */
    color: rgba(230, 230, 255, 0.9);
  }

  .desc {
    font-size: 1.1rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;

  .css-button-sliding-to-left--black {
    min-width: 160px;
    height: 50px;
    margin-right: 1.5rem;
    color: ${defaultTheme.accentColor};
    padding: 5px 10px;
    font-family: "Poppins";
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    z-index: 0;
    background: transparent;
    overflow: hidden;
    border: 2px solid ${defaultTheme.primaryColor};
  }
  .css-button-sliding-to-left--black:hover {
    color: #000;
  }
  .css-button-sliding-to-left--black:hover:after {
    width: 100%;
  }
  .css-button-sliding-to-left--black:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: ${defaultTheme.primaryColor};
  }
`;

const HeroImageWrapper = styled.div`
  width: 50%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export default Home;
