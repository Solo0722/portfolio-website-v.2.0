import React from "react";
import styled from "styled-components";
import heroImg from "../assets/images/man.png";
import { defaultTheme } from "../theme/appTheme";
import { Button } from "antd";
import { socialMedia } from "../utils/data";
import { MEDIA_QUERIES } from "../utils/constants";

const Home = () => {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <DescriptionWrapper>
          <small>Hey there, I'm</small>
          <h1>Solomon Owusu-Ansah</h1>
          <p className="desc">
            A frontend software developer with intermediate knowledge in backend
            development. I create beautiful designs only.
          </p>
          <ButtonsWrapper>
            {socialMedia.map((lk) => (
              <Button
                href={lk.link}
                target="_blank"
                type="default"
                icon={lk.icon}
                className="social-media-btn"
                key={lk.name}
              />
            ))}
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
  height: calc(100vh - 80px);
  position: relative;
  padding: 0 6rem;

  ${MEDIA_QUERIES.TABLET} {
    padding: 0 2rem;
  }
  ${MEDIA_QUERIES.MOBILE} {
    padding: 0 1rem;
  }
`;

const ContentWrapper = styled.div`
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1 {
    font-weight: 800;
    font-size: 3.5rem;
    font-stretch: ultra-condensed;
    line-height: 3.5rem;
    margin: 1rem 0;
    font-family: "Lobster Two", "Montserrat", sans-serif;
  }

  & small {
    /* margin: 1.5rem 0; */
    font-weight: 400;
    padding: 0.5rem;
    width: 20%;
    background-color: ${defaultTheme.primaryPalette[500]};
  }

  .desc {
    font-weight: 400;
    font-size: 0.85rem;
    margin: 1rem 0;
    width: 90%;
    line-height: 1.6rem;
    color: rgba(230, 230, 255, 0.5);
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 100%;
      align-items: center;
      text-align: center;
    }

    small {
      width: 30%;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 100%;
      align-items: center;
      text-align: center;
    }
    small {
      width: 50%;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.5rem;

  & .social-media-btn {
    box-shadow: none;
    color: rgba(230, 230, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }
`;

const HeroImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 60%;
    height: 100%;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      display: none;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    display: none;
  }
`;

export default Home;
